import mongoose from "mongoose";

const contactLimitSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  attempts: {
    type: Number,
    default: 0,
  },
  maxAttempts: {
    type: Number,
    default: 3,
  },
  firstAttemptAt: {
    type: Date,
    default: Date.now,
  },
  lastAttemptAt: {
    type: Date,
    default: Date.now,
  },
  windowStart: {
    type: Date,
    required: true,
    default: Date.now,
  },
}, {
  timestamps: true,
});

contactLimitSchema.index({ windowStart: 1 });
contactLimitSchema.index({ email: 1 });

const ContactLimit = mongoose.model("ContactLimit", contactLimitSchema);
export default ContactLimit;