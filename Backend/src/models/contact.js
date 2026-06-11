import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
  },
  phone: {
    type: String,
    trim: true,
    default: ""
  },
  company: {
    type: String,
    trim: true,
    default: ""
  },
  service: {
    type: String,
    required: [true, "Service is required"],
    trim: true
  },
  budget: {
    type: String,
    trim: true,
    default: ""
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true
  },
  status: {
    type: String,
    enum: ["pending", "read", "replied", "spam"],
    default: "pending"
  },
  ipAddress: {
    type: String,
    default: null
  },
  userAgent: {
    type: String,
    default: null
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verifiedAt: {
    type: Date
  },
  verificationAttempts: {
    type: Number,
    default: 0
  },
  lastUpdatedAt: {
    type: Date
  }
}, {
  timestamps: true
});

contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ createdAt: -1 });
contactSchema.index({ status: 1 });

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
