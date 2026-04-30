import nodemailer from "nodemailer";

const sendWelcomeEmail = async (email) => {
  try {
    console.log(`Welcome email sent to: ${email}`);

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Wenexa Tech" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Welcome to Wenexa Tech Newsletter!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #06b6d4;">Welcome to Wenexa Tech!</h2>
            </div>
            <p>Dear Subscriber,</p>
            <p>Thank you for subscribing to our newsletter. You're now part of our tech community!</p>
            <p>You'll receive:</p>
            <ul>
              <li>Latest tech insights</li>
              <li>New product launches</li>
              <li>Exclusive offers & discounts</li>
              <li>Industry trends & updates</li>
            </ul>
            <p>Stay tuned for exciting updates!</p>
            <hr style="margin: 20px 0; border-color: #e2e8f0;">
            <p style="font-size: 12px; color: #64748b;">
              <a href="${process.env.FRONTEND_URL}/unsubscribe?email=${email}" style="color: #06b6d4;">Unsubscribe</a> | 
              © 2026 Wenexa Tech
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.log("Email credentials not configured. Skipping email send.");
    }
    return true;
  } catch (error) {
    console.log("Error sending email:", error);
    return false;
  }
};

export default sendWelcomeEmail;