import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email Is Required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    status: {
      type: String,
      enum: ["active", "unsubscribed"],
      default: "active",
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
    ipAddress: {
      type: String,
      default: null,
    },
    source: {
      type: String,
      default: "website_footer",
    },
  },
  {
    timestamps: true,
  }
);

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
export default Subscriber;