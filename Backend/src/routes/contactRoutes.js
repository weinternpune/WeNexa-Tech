import express from "express";
import {
  sendOTP,
  verifyOTPAndSave,
  resendOTP,
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
import { validateContact } from "../middleware/validation.js";

const router = express.Router();

router.use(globalLimiter);

router.post("/contact/send-otp", ipLimiter, otpSendLimiter, validateContact, sendOTP);
router.post("/contact/verify-otp", ipLimiter, verifyOTPAndSave);
router.post("/contact/resend-otp", ipLimiter, resendLimiter, resendOTP);

router.get("/admin/contacts", getAllContacts);
router.put("/admin/contacts/:id/status", updateContactStatus);
router.delete("/admin/contacts/:id", deleteContact);

export default router;
