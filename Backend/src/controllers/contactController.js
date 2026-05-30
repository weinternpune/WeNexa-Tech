import Contact from "../models/contact.js";
import { createMailTransporter, getEmailCredentials } from "../config/emailConfig.js";
import { sendAdminEmail, sendUserAutoReply, sendOTPEmail, sendResendOTPEmail } from "../services/emailService.js";

const otpStore = new Map();

setInterval(() => {
  const now = Date.now();
  for (const [email, data] of otpStore.entries()) {
    if (now > data.expiresAt) {
      otpStore.delete(email);
      console.log(`Cleaned expired OTP for ${email}`);
    }
  }
}, 10 * 60 * 1000);

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const normalizeEmail = (email) => String(email).trim().toLowerCase();

const isEmailAuthError = (error) =>
  error?.code === "EAUTH" || error?.responseCode === 535;

// Send OTP Email
export const sendOTP = async (req, res) => {
  try {
    const { name, phone, company, service, budget, message } = req.body;
    const email = normalizeEmail(req.body.email);
    
    // Check for existing submission (7 days cooldown)
    const existingContact = await Contact.findOne({
      email,
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
    });
    
    if (existingContact) {
      const nextAllowedDate = new Date(existingContact.createdAt.getTime() + 7 * 24 * 60 * 60 * 1000);
      const remainingDays = Math.ceil((nextAllowedDate - Date.now()) / (24 * 60 * 60 * 1000));
      
      return res.status(429).json({
        success: false,
        message: `You have already submitted a form on ${existingContact.createdAt.toLocaleDateString()}. Please wait ${remainingDays} more day(s) before submitting again.`
      });
    }
    
    // Check for pending OTP
    const existingOTP = otpStore.get(email);
    if (existingOTP && Date.now() < existingOTP.expiresAt) {
      const remainingMinutes = Math.ceil((existingOTP.expiresAt - Date.now()) / 60000);
      return res.status(429).json({
        success: false,
        message: `You already have a pending verification. Please wait ${remainingMinutes} minutes or use the existing code sent to your email.`
      });
    }

    const cleanPhone = phone ? String(phone).replace(/\s/g, "") : "";
    const otp = generateOTP();
    
    otpStore.set(email, {
      otp: otp,
      expiresAt: Date.now() + 10 * 60 * 1000,
      attempts: 0,
      maxAttempts: 3,
      formData: { name, email, phone: cleanPhone, company, service, budget, message },
      createdAt: Date.now()
    });
    
    // Send OTP email using the new professional template
    const emailSent = await sendOTPEmail(email, otp, name);
    
    if (!emailSent) {
      throw new Error("Failed to send email");
    }
    
    console.log(`OTP sent to ${email} - Code: ${otp}`);
    
    res.status(200).json({
      success: true,
      message: "Verification code sent to your email. Valid for 10 minutes.",
      email: email
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
    
    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required"
      });
    }
    
    const storedData = otpStore.get(email);
    
    if (!storedData) {
      return res.status(400).json({
        success: false,
        message: "No verification request found. Please submit the form again."
      });
    }
    
    if (Date.now() > storedData.expiresAt) {
      otpStore.delete(email);
      return res.status(400).json({
        success: false,
        message: "Verification code has expired. Please submit the form again."
      });
    }
    
    if (storedData.attempts >= storedData.maxAttempts) {
      otpStore.delete(email);
      return res.status(400).json({
        success: false,
        message: "You have exceeded maximum attempts (3). Please submit the form again."
      });
    }
    
    if (storedData.otp !== otp) {
      storedData.attempts++;
      const remainingAttempts = storedData.maxAttempts - storedData.attempts;
      otpStore.set(email, storedData);
      
      console.log(`Invalid OTP for ${email}. Attempts: ${storedData.attempts}/3`);
      
      return res.status(400).json({
        success: false,
        message: `Invalid verification code. ${remainingAttempts} attempt(s) remaining.`
      });
    }
    
    // OTP Verified - Save to Database
    const { name, phone, company, service, budget, message } = storedData.formData;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];
    
    // Final duplicate check
    const existingContact = await Contact.findOne({
      email: email.toLowerCase(),
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
    });
    
    if (existingContact) {
      otpStore.delete(email);
      return res.status(429).json({
        success: false,
        message: "You have already submitted a form recently. Please wait 7 days."
      });
    }
    
    const contact = new Contact({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone ? phone.trim() : "",
      company: company ? company.trim() : "",
      service: service,
      budget: budget || "",
      message: message.trim(),
      ipAddress: ipAddress,
      userAgent: userAgent,
      isVerified: true,
      verifiedAt: new Date(),
      verificationAttempts: storedData.attempts + 1,
      status: "pending"
    });
    
    await contact.save();
    
    console.log(`Contact saved: ${email} - ${name}`);
    
    // Send notification emails
    try {
      await Promise.all([
        sendAdminEmail({ name, email, phone, company, service, budget, message }),
        sendUserAutoReply({ name, email })
      ]);
      console.log(`Emails sent to admin and ${email}`);
    } catch (emailError) {
      console.error("Email sending error:", emailError);
    }
    
    otpStore.delete(email);
    
    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours."
    });
    
  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({
      success: false,
      message: "Unable to save your message. Please try again."
    });
  }
};

// Resend OTP
export const resendOTP = async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }
    
    const storedData = otpStore.get(email);
    
    if (!storedData) {
      return res.status(400).json({
        success: false,
        message: "No pending verification found. Please submit the form again."
      });
    }
    
    if (Date.now() > storedData.expiresAt) {
      otpStore.delete(email);
      return res.status(400).json({
        success: false,
        message: "Previous code expired. Please submit the form again."
      });
    }
    
    if (storedData.attempts >= storedData.maxAttempts) {
      otpStore.delete(email);
      return res.status(400).json({
        success: false,
        message: "Maximum attempts reached. Please submit the form again."
      });
    }
    
    const newOTP = generateOTP();
    
    storedData.otp = newOTP;
    storedData.expiresAt = Date.now() + 10 * 60 * 1000;
    otpStore.set(email, storedData);
    
    // Send new OTP email using professional template
    const remainingAttempts = storedData.maxAttempts - storedData.attempts;
    await sendResendOTPEmail(email, newOTP, remainingAttempts);
    
    console.log(`Resent OTP to ${email}. Attempts: ${storedData.attempts}/3`);
    
    res.status(200).json({
      success: true,
      message: `New verification code sent. ${remainingAttempts} attempts remaining.`
    });
    
  } catch (error) {
    console.error("Resend OTP error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to resend code"
    });
  }
};

// Get All Contacts (Admin)
export const getAllContacts = async (req, res) => {
  try {
    const apiKey = req.headers['x-api-key'];
    
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access"
      });
    }
    
    const { status, page = 1, limit = 50 } = req.query;
    
    let query = {};
    if (status) query.status = status;
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const [contacts, total] = await Promise.all([
      Contact.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit)),
      Contact.countDocuments(query)
    ]);
    
    res.status(200).json({
      success: true,
      data: {
        contacts,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        }
      }
    });
    
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching contacts"
    });
  }
};

// Update Contact Status (Admin)
export const updateContactStatus = async (req, res) => {
  try {
    const apiKey = req.headers['x-api-key'];
    
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access"
      });
    }
    
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['pending', 'read', 'replied', 'spam'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status"
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
        message: "Contact not found"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      contact
    });
    
  } catch (error) {
    console.error("Update status error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating status"
    });
  }
};

// Delete Contact (Admin)
export const deleteContact = async (req, res) => {
  try {
    const apiKey = req.headers['x-api-key'];
    
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access"
      });
    }
    
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Contact deleted successfully"
    });
    
  } catch (error) {
    console.error("Delete contact error:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting contact"
    });
  }
};
