import Contact from "../models/Contact.js";
import { sendAdminEmail, sendUserAutoReply } from "../services/emailService.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, company, service, budget, message } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;

    const contact = new Contact({
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
      ipAddress
    });
    
    await contact.save();
    console.log(`Contact saved to database: ${email}`);

    const adminEmailSent = await sendAdminEmail({ name, email, phone, company, service, budget, message });
    
    const userEmailSent = await sendUserAutoReply({ name, email });
    
    if (!adminEmailSent || !userEmailSent) {
      console.warn("Email sending had issues, but data is saved");
    }
    
    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours."
    });
    
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Unable to send message. Please try again later."
    });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts
    });
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching contact submissions"
    });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
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
      message: "Error updating contact status"
    });
  }
};
