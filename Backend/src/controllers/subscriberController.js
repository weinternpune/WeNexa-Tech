import Subscriber from "../models/subscriber.js";
import { sendWelcomeEmail } from "../services/emailService.js";

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;

    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      if (existingSubscriber.status === "active") {
        return res.status(400).json({
          success: false,
          message: "This email is already subscribed to our newsletter",
        });
      } else {
        existingSubscriber.status = "active";
        existingSubscriber.ipAddress = ipAddress;
        await existingSubscriber.save();

        const emailSent = await sendWelcomeEmail(email);
        
        if (!emailSent) {
          console.warn(`Welcome email failed for reactivated user: ${email}`);
        }

        return res.status(200).json({
          success: true,
          message: "Welcome Back! Your subscription has been reactivated.",
        });
      }
    }

    // New subscriber
    const subscriber = new Subscriber({
      email,
      ipAddress,
      source: "website_footer",
    });

    await subscriber.save();

    const emailSent = await sendWelcomeEmail(email);
    
    if (!emailSent) {
      console.warn(`Welcome email failed for new subscriber: ${email}`);
    }

    res.status(201).json({
      success: true,
      message: "Successfully subscribed to our newsletter! Check your email for updates.",
    });
  } catch (error) {
    console.error("Subscribe error:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered!",
      });
    }

    res.status(500).json({
      success: false,
      message: "Unable to subscribe. Please try again later.",
    });
  }
};

const unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const subscriber = await Subscriber.findOneAndUpdate(
      { email },
      { status: "unsubscribed" },
      { new: true }
    );

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Email not found in our records.",
      });
    }

    res.status(200).json({
      success: true,
      message: "You have been unsubscribed successfully.",
    });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    res.status(500).json({
      success: false,
      message: "Error during unsubscription. Please try again.",
    });
  }
};

const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({ status: "active" })
      .select("-__v")
      .sort({ subscribedAt: -1 });

    res.status(200).json({
      success: true,
      count: subscribers.length,
      subscribers,
    });
  } catch (error) {
    console.error("Get subscribers error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching subscribers",
    });
  }
};

const getSubscriberCount = async (req, res) => {
  try {
    const count = await Subscriber.countDocuments({ status: "active" });

    res.status(200).json({
      success: true,
      count,
    });
  } catch (error) {
    console.error("Count error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching subscriber count",
    });
  }
};

export { subscribe, unsubscribe, getAllSubscribers, getSubscriberCount };
