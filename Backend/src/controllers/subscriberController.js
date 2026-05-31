import Subscriber from "../models/subscriber.js";
import { sendWelcomeEmail } from "../services/emailService.js";

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;

    // Input validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email address is required"
      });
    }

    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      if (existingSubscriber.status === "active") {
        return res.status(400).json({
          success: false,
          message: "This email is already subscribed to our newsletter"
        });
      } else {
        // Reactivate subscriber
        existingSubscriber.status = "active";
        existingSubscriber.ipAddress = ipAddress;
        existingSubscriber.subscribedAt = new Date();
        await existingSubscriber.save();

        // Send welcome email for reactivation
        const emailSent = await sendWelcomeEmail(email);
        
        if (!emailSent) {
          console.warn(`Welcome email failed for reactivated user: ${email}`);
          return res.status(200).json({
            success: true,
            message: "Welcome back! Your subscription has been reactivated. (Email notification failed, but you're subscribed)"
          });
        }

        return res.status(200).json({
          success: true,
          message: "Welcome back! Your subscription has been reactivated. Check your email for updates."
        });
      }
    }

    // New subscriber
    const subscriber = new Subscriber({
      email,
      ipAddress,
      source: "website_footer",
      status: "active"
    });

    await subscriber.save();

    // Send welcome email
    const emailSent = await sendWelcomeEmail(email);
    
    if (!emailSent) {
      console.warn(`Welcome email failed for new subscriber: ${email}`);
      return res.status(201).json({
        success: true,
        message: "Successfully subscribed to our newsletter! (Email notification failed, but you're subscribed)"
      });
    }

    res.status(201).json({
      success: true,
      message: "Successfully subscribed to our newsletter! Check your email for updates."
    });
  } catch (error) {
    console.error("Subscribe error:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered in our system"
      });
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors)[0].message
      });
    }

    res.status(500).json({
      success: false,
      message: "Unable to subscribe at this moment. Please try again later."
    });
  }
};

const unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email address is required"
      });
    }

    const subscriber = await Subscriber.findOneAndUpdate(
      { email },
      { status: "unsubscribed" },
      { new: true }
    );

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Email address not found in our records"
      });
    }

    res.status(200).json({
      success: true,
      message: "You have been successfully unsubscribed from our newsletter"
    });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    res.status(500).json({
      success: false,
      message: "Unable to unsubscribe at this moment. Please try again later."
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
      message: "Error fetching subscribers"
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
      message: "Error fetching subscriber count"
    });
  }
};

export { subscribe, unsubscribe, getAllSubscribers, getSubscriberCount };
