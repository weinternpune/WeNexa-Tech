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
    enum: ["pending", "read", "replied"],
    default: "pending"
  },
  ipAddress: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
