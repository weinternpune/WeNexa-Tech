import mongoose from "mongoose";

const contactOtpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    otp: {
      type: String,
      default: null,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    attempts: {
      type: Number,
      default: 0,
    },
    maxAttempts: {
      type: Number,
      default: 3,
    },
    blockedUntil: {
      type: Date,
      default: null,
    },
    formData: {
      name: String,
      email: String,
      phone: String,
      company: String,
      service: String,
      budget: String,
      message: String,
    },
  },
  { timestamps: true }
);

contactOtpSchema.index({ expiresAt: 1 });
contactOtpSchema.index({ blockedUntil: 1 });

const ContactOtp = mongoose.model("ContactOtp", contactOtpSchema);
export default ContactOtp;
