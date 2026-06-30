import express from "express";
import {
  sendOTP,
  verifyOTPAndSave,
  resendOTP,
  changeOtpEmail,
  getAllContacts,
  updateContactStatus,
  deleteContact
} from "../controllers/contactController.js";
import {
  ipLimiter,
  otpSendLimiter,
  resendLimiter,
  globalLimiter
} from "../middleware/rateLimit.js";
import {
  validateContact,
  validateVerifyOtp,
  validateResendOtp,
  validateChangeOtpEmail,
} from "../middleware/validation.js";

const router = express.Router();

router.use(globalLimiter);

router.post("/contact/send-otp", ipLimiter, otpSendLimiter, validateContact, sendOTP);
router.post("/contact/verify-otp", validateVerifyOtp, verifyOTPAndSave);
router.post("/contact/resend-otp", resendLimiter, validateResendOtp, resendOTP);
router.post("/contact/change-email", ipLimiter, validateChangeOtpEmail, changeOtpEmail);

router.get("/admin/contacts", getAllContacts);
router.put("/admin/contacts/:id/status", updateContactStatus);
router.delete("/admin/contacts/:id", deleteContact);

export default router;
