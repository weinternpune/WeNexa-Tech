import Contact from "../models/contact.js";
import ContactOtp from "../models/contactOtp.js";
import { sendAdminEmail, sendUserAutoReply, sendOTPEmail, sendResendOTPEmail } from "../services/emailService.js";
import {
  OTP_VALIDITY_MS,
  MAX_OTP_ATTEMPTS,
  OTP_BLOCK_MS,
  RESUBMIT_COOLDOWN_MS,
  formatWaitTime,
} from "../utils/contactConstants.js";

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const normalizeEmail = (email) => String(email).trim().toLowerCase();

const isEmailAuthError = (error) =>
  error?.code === "EAUTH" || error?.responseCode === 535;

const buildFullPhone = (phone, countryCode = "+91") => {
  if (!phone) return "";
  const digits = String(phone).replace(/\s/g, "");
  const code = String(countryCode || "+91").trim();
  return `${code}${digits}`;
};

async function getRecentVerifiedContact(email) {
  return Contact.findOne({
    email,
    isVerified: true,
    verifiedAt: { $gte: new Date(Date.now() - RESUBMIT_COOLDOWN_MS) },
  }).sort({ verifiedAt: -1 });
}

async function getActiveOtpRecord(email) {
  const record = await ContactOtp.findOne({ email });
  if (!record) return null;

  const now = Date.now();
  const blockExpired = !record.blockedUntil || now >= record.blockedUntil.getTime();
  const otpExpired = now >= record.expiresAt.getTime();

  if (blockExpired && otpExpired) {
    await ContactOtp.deleteOne({ email });
    return null;
  }

  return record;
}

function buildEmailCooldownResponse(recentContact, res) {
  const retryAfter = new Date(recentContact.verifiedAt.getTime() + RESUBMIT_COOLDOWN_MS);
  const remainingMs = retryAfter.getTime() - Date.now();

  return res.status(429).json({
    success: false,
    code: "EMAIL_COOLDOWN",
    message: `You have already verified this email. You cannot send again until ${formatWaitTime(remainingMs)}. Please try again after that.`,
    retryAfter: retryAfter.toISOString(),
    remainingMs,
  });
}

function buildOtpBlockResponse(record, res) {
  const remainingMs = record.blockedUntil.getTime() - Date.now();

  return res.status(429).json({
    success: false,
    code: "OTP_ATTEMPTS_EXCEEDED",
    message: `All ${MAX_OTP_ATTEMPTS} attempts are used. You can try again after 24 hours.`,
    retryAfter: record.blockedUntil.toISOString(),
    remainingMs,
  });
}

// Send OTP Email
export const sendOTP = async (req, res) => {
  try {
    const { name, phone, company, service, budget, message, countryCode, previousEmail } = req.body;
    const email = normalizeEmail(req.body.email);

    const recentVerified = await getRecentVerifiedContact(email);
    if (recentVerified) {
      return buildEmailCooldownResponse(recentVerified, res);
    }

    const existingOtp = await getActiveOtpRecord(email);
    if (existingOtp?.blockedUntil && Date.now() < existingOtp.blockedUntil.getTime()) {
      return buildOtpBlockResponse(existingOtp, res);
    }

    const oldEmail = previousEmail ? normalizeEmail(previousEmail) : null;
    if (oldEmail && oldEmail !== email) {
      await ContactOtp.deleteOne({ email: oldEmail });
    }

    const cleanPhone = buildFullPhone(phone, countryCode);
    const otp = generateOTP();

    await ContactOtp.findOneAndUpdate(
      { email },
      {
        email,
        otp,
        expiresAt: new Date(Date.now() + OTP_VALIDITY_MS),
        attempts: 0,
        maxAttempts: MAX_OTP_ATTEMPTS,
        blockedUntil: null,
        formData: {
          name: name.trim(),
          email,
          phone: cleanPhone,
          company: company ? company.trim() : "",
          service,
          budget: budget || "",
          message: message.trim(),
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    const emailResult = await sendOTPEmail(email, otp, name.trim());

    if (!emailResult?.success) {
      await ContactOtp.deleteOne({ email });
      return res.status(500).json({
        success: false,
        code: "EMAIL_SEND_FAILED",
        message: "Could not send verification email. Please check the email address and try again. Also check your spam folder.",
      });
    }

    console.log(`OTP sent to ${email}`);

    res.status(200).json({
      success: true,
      message: `Verification code sent to ${email}. Valid for 10 minutes. Please check your inbox and spam folder.`,
      email,
      expiresInMinutes: 10,
    });
  } catch (error) {
    console.error("Send OTP error:", error);
    res.status(500).json({
      success: false,
      message: isEmailAuthError(error)
        ? "Email service is not configured. Please try again later or contact us directly."
        : "Failed to send verification code. Please try again.",
    });
  }
};

// Verify OTP and Save Contact
export const verifyOTPAndSave = async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const otp = String(req.body.otp || "").trim();

    const recentVerified = await getRecentVerifiedContact(email);
    if (recentVerified) {
      return buildEmailCooldownResponse(recentVerified, res);
    }

    const storedData = await getActiveOtpRecord(email);

    if (!storedData) {
      return res.status(400).json({
        success: false,
        code: "OTP_NOT_FOUND",
        message: "No verification request found. Please submit the form again.",
      });
    }

    if (storedData.blockedUntil && Date.now() < storedData.blockedUntil.getTime()) {
      return buildOtpBlockResponse(storedData, res);
    }

    if (Date.now() > storedData.expiresAt.getTime()) {
      await ContactOtp.deleteOne({ email });
      return res.status(400).json({
        success: false,
        code: "OTP_EXPIRED",
        message: "Verification code has expired. Please submit the form again.",
      });
    }

    if (storedData.attempts >= storedData.maxAttempts) {
      storedData.blockedUntil = new Date(Date.now() + OTP_BLOCK_MS);
      storedData.otp = null;
      await storedData.save();
      return buildOtpBlockResponse(storedData, res);
    }

    if (storedData.otp !== otp) {
      storedData.attempts += 1;

      if (storedData.attempts >= storedData.maxAttempts) {
        storedData.blockedUntil = new Date(Date.now() + OTP_BLOCK_MS);
        storedData.otp = null;
        await storedData.save();
        return buildOtpBlockResponse(storedData, res);
      }

      await storedData.save();
      const remainingAttempts = storedData.maxAttempts - storedData.attempts;

      console.log(`Wrong OTP for ${email}. Attempts: ${storedData.attempts}/${MAX_OTP_ATTEMPTS}`);

      return res.status(400).json({
        success: false,
        code: "WRONG_OTP",
        message: "Wrong OTP. Please try again.",
        remainingAttempts,
      });
    }

    const { name, phone, company, service, budget, message } = storedData.formData;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];

    const contact = new Contact({
      name: name.trim(),
      email,
      phone: phone ? phone.trim() : "",
      company: company ? company.trim() : "",
      service,
      budget: budget || "",
      message: message.trim(),
      ipAddress,
      userAgent,
      isVerified: true,
      verifiedAt: new Date(),
      verificationAttempts: storedData.attempts + 1,
      status: "pending",
    });

    await contact.save();
    await ContactOtp.deleteOne({ email });

    console.log(`Contact saved: ${email} - ${name}`);

    try {
      await Promise.all([
        sendAdminEmail({ name, email, phone, company, service, budget, message }),
        sendUserAutoReply({ name, email }),
      ]);
      console.log(`Emails sent to admin and ${email}`);
    } catch (emailError) {
      console.error("Email sending error:", emailError);
    }

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({
      success: false,
      message: "Unable to save your message. Please try again.",
    });
  }
};

// Resend OTP
export const resendOTP = async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);

    const recentVerified = await getRecentVerifiedContact(email);
    if (recentVerified) {
      return buildEmailCooldownResponse(recentVerified, res);
    }

    const storedData = await getActiveOtpRecord(email);

    if (!storedData) {
      return res.status(400).json({
        success: false,
        code: "OTP_NOT_FOUND",
        message: "No pending verification found. Please submit the form again.",
      });
    }

    if (storedData.blockedUntil && Date.now() < storedData.blockedUntil.getTime()) {
      return buildOtpBlockResponse(storedData, res);
    }

    if (Date.now() > storedData.expiresAt.getTime()) {
      await ContactOtp.deleteOne({ email });
      return res.status(400).json({
        success: false,
        code: "OTP_EXPIRED",
        message: "Previous code expired. Please submit the form again.",
      });
    }

    if (storedData.attempts >= storedData.maxAttempts) {
      storedData.blockedUntil = new Date(Date.now() + OTP_BLOCK_MS);
      storedData.otp = null;
      await storedData.save();
      return buildOtpBlockResponse(storedData, res);
    }

    const newOTP = generateOTP();
    storedData.otp = newOTP;
    storedData.expiresAt = new Date(Date.now() + OTP_VALIDITY_MS);
    await storedData.save();

    const remainingAttempts = storedData.maxAttempts - storedData.attempts;
    const emailResult = await sendResendOTPEmail(email, newOTP, remainingAttempts);

    if (!emailResult?.success) {
      return res.status(500).json({
        success: false,
        code: "EMAIL_SEND_FAILED",
        message: "Could not resend verification email. Please try again and check your spam folder.",
      });
    }

    console.log(`Resent OTP to ${email}. Attempts used: ${storedData.attempts}/${MAX_OTP_ATTEMPTS}`);

    res.status(200).json({
      success: true,
      message: `New verification code sent to ${email}. Valid for 10 minutes. Please check inbox and spam folder. ${remainingAttempts} attempt(s) remaining.`,
      remainingAttempts,
      expiresInMinutes: 10,
    });
  } catch (error) {
    console.error("Resend OTP error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to resend code. Please try again.",
    });
  }
};

// Change email during OTP verification
export const changeOtpEmail = async (req, res) => {
  try {
    const previousEmail = normalizeEmail(req.body.previousEmail);
    const newEmail = normalizeEmail(req.body.email);

    if (!previousEmail || !newEmail) {
      return res.status(400).json({
        success: false,
        message: "Both current and new email are required.",
      });
    }

    if (previousEmail === newEmail) {
      return res.status(400).json({
        success: false,
        message: "New email must be different from the current email.",
      });
    }

    const storedData = await ContactOtp.findOne({ email: previousEmail });

    if (!storedData) {
      return res.status(400).json({
        success: false,
        code: "OTP_NOT_FOUND",
        message: "No active verification found. Please submit the form again.",
      });
    }

    if (storedData.blockedUntil && Date.now() < storedData.blockedUntil.getTime()) {
      return buildOtpBlockResponse(storedData, res);
    }

    if (Date.now() > storedData.expiresAt.getTime()) {
      await ContactOtp.deleteOne({ email: previousEmail });
      return res.status(400).json({
        success: false,
        code: "OTP_EXPIRED",
        message: "Verification session expired. Please submit the form again.",
      });
    }

    const recentVerified = await getRecentVerifiedContact(newEmail);
    if (recentVerified) {
      return buildEmailCooldownResponse(recentVerified, res);
    }

    const blockedNewEmail = await getActiveOtpRecord(newEmail);
    if (blockedNewEmail?.blockedUntil && Date.now() < blockedNewEmail.blockedUntil.getTime()) {
      return buildOtpBlockResponse(blockedNewEmail, res);
    }

    const otp = generateOTP();
    const updatedFormData = { ...storedData.formData, email: newEmail };

    await ContactOtp.deleteOne({ email: previousEmail });
    await ContactOtp.create({
      email: newEmail,
      otp,
      expiresAt: new Date(Date.now() + OTP_VALIDITY_MS),
      attempts: storedData.attempts,
      maxAttempts: MAX_OTP_ATTEMPTS,
      blockedUntil: null,
      formData: updatedFormData,
    });

    const emailResult = await sendOTPEmail(newEmail, otp, updatedFormData.name);

    if (!emailResult?.success) {
      await ContactOtp.deleteOne({ email: newEmail });
      await ContactOtp.create({
        email: previousEmail,
        otp: storedData.otp,
        expiresAt: storedData.expiresAt,
        attempts: storedData.attempts,
        maxAttempts: storedData.maxAttempts,
        blockedUntil: storedData.blockedUntil,
        formData: storedData.formData,
      });

      return res.status(500).json({
        success: false,
        code: "EMAIL_SEND_FAILED",
        message: "Could not send verification email to the new address. Please check the email and try again.",
      });
    }

    console.log(`OTP email changed from ${previousEmail} to ${newEmail}`);

    res.status(200).json({
      success: true,
      message: `Verification code sent to ${newEmail}. Please check your inbox and spam folder.`,
      email: newEmail,
      expiresInMinutes: 10,
    });
  } catch (error) {
    console.error("Change OTP email error:", error);
    res.status(500).json({
      success: false,
      message: "Could not update email. Please try again.",
    });
  }
};

// Get All Contacts (Admin)
export const getAllContacts = async (req, res) => {
  try {
    const apiKey = req.headers["x-api-key"];

    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    const { status, page = 1, limit = 50 } = req.query;

    const query = {};
    if (status) query.status = status;

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

    const [contacts, total] = await Promise.all([
      Contact.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit, 10)),
      Contact.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      data: {
        contacts,
        pagination: {
          page: parseInt(page, 10),
          limit: parseInt(limit, 10),
          total,
          pages: Math.ceil(total / parseInt(limit, 10)),
        },
      },
    });
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching contacts",
    });
  }
};

// Update Contact Status (Admin)
export const updateContactStatus = async (req, res) => {
  try {
    const apiKey = req.headers["x-api-key"];

    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    const { id } = req.params;
    const { status } = req.body;

    if (!["pending", "read", "replied", "spam"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status, lastUpdatedAt: new Date() },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      contact,
    });
  } catch (error) {
    console.error("Update status error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating status",
    });
  }
};

// Delete Contact (Admin)
export const deleteContact = async (req, res) => {
  try {
    const apiKey = req.headers["x-api-key"];

    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error("Delete contact error:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting contact",
    });
  }
};
