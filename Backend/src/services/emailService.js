import nodemailer from "nodemailer";

const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    throw new Error("Email credentials missing in .env");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

// Welcome Email
export const sendWelcomeEmail = async (email) => {
  try {
    const emailUser = process.env.EMAIL_USER;
    
    if (!emailUser) {
      console.warn("Email credentials missing. Skipping welcome email.");
      return false;
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: `"Wenexa Tech" <${emailUser}>`,
      to: email,
      subject: "Welcome to Wenexa Tech Newsletter!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; text-decoration: none; border-radius: 5px; }
            .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Welcome to Wenexa Tech!</h2>
            </div>
            <div class="content">
              <p>Dear Subscriber,</p>
              <p>Thank you for subscribing to our newsletter. You're now part of our tech community!</p>
              
              <p><strong>You'll receive:</strong></p>
              <ul>
                <li>Latest tech insights & trends</li>
                <li>New product launches</li>
                <li>Exclusive offers & discounts</li>
                <li>Industry updates & case studies</li>
              </ul>
              
              <p>Stay tuned for exciting updates!</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/blog" class="button" style="color: white; text-decoration: none; padding: 12px 24px; background: linear-gradient(135deg, #06b6d4, #3b82f6); border-radius: 5px;">
                  Read Our Blog
                </a>
              </div>
            </div>
            <div class="footer">
              <p>© 2026 Wenexa Tech. All rights reserved.</p>
              <p>
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/unsubscribe?email=${email}" style="color: #06b6d4;">Unsubscribe</a> | 
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/privacy" style="color: #06b6d4;">Privacy Policy</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Welcome email sent to:", email, "-", info.messageId);
    return true;
    
  } catch (error) {
    console.error("Welcome email error:", error.message);
    return false;
  }
};

// Admin Email
export const sendAdminEmail = async (formData) => {
  try {
    const emailUser = process.env.EMAIL_USER;
    const adminEmail = process.env.ADMIN_EMAIL || emailUser;
    
    const { name, email, phone, company, service, budget, message } = formData;
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Wenexa Contact Form" <${emailUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Contact Form: ${name} - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; background: #f0f2f5; }
            .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; padding: 15px; background: #f8fafc; border-left: 3px solid #06b6d4; border-radius: 5px; }
            .label { font-weight: bold; color: #06b6d4; margin-bottom: 5px; font-size: 12px; text-transform: uppercase; }
            .value { color: #1e293b; margin-top: 5px; font-size: 16px; }
            .badge { display: inline-block; padding: 4px 12px; background: #e2e8f0; border-radius: 12px; font-size: 12px; }
            .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #64748b; }
            .action-button { display: inline-block; padding: 10px 20px; background: #06b6d4; color: white; text-decoration: none; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>Wenexa Tech - Client Enquiry</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value"><strong>${name}</strong></div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${phone || '<span class="badge">Not provided</span>'}</div>
              </div>
              
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company || '<span class="badge">Not provided</span>'}</div>
              </div>
              
              <div class="field">
                <div class="label">Service Needed</div>
                <div class="value"><span class="badge" style="background: #06b6d420; color: #06b6d4;">${service}</span></div>
              </div>
              
              <div class="field">
                <div class="label">Budget Range</div>
                <div class="value">${budget || '<span class="badge">Not specified</span>'}</div>
              </div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" class="action-button" style="color: white; text-decoration: none; padding: 10px 20px; background: #06b6d4; border-radius: 5px;">
                  Reply to ${name}
                </a>
              </div>
            </div>
            <div class="footer">
              <p>Submitted on: ${new Date().toLocaleString()}</p>
              <p>This message was sent from Wenexa Tech Contact Form</p>
              <p>© 2026 Wenexa Tech</p>
            </div>
          </div>
        </body>
        </html>
      `
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log("Admin email sent - Message ID:", info.messageId);
    return true;
    
  } catch (error) {
    console.error("Admin email error:", error.message);
    return false;
  }
};

export const sendUserAutoReply = async (formData) => {
  try {
    const emailUser = process.env.EMAIL_USER;
    const { name, email } = formData;
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Wenexa Tech" <${emailUser}>`,
      to: email,
      subject: "Thank you for contacting Wenexa Tech!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .timeline { margin: 20px 0; }
            .step { display: flex; align-items: center; margin-bottom: 15px; }
            .step-number { width: 30px; height: 30px; background: #06b6d4; color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; }
            .button { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; text-decoration: none; border-radius: 5px; margin: 10px; }
            .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            .social-links { margin-top: 20px; }
            .social-links a { margin: 0 10px; display: inline-block; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Welcome to Wenexa Tech!</h2>
            </div>
            <div class="content">
              <h3>Dear ${name},</h3>
              <p>Thank you for reaching out to <strong>Wenexa Tech</strong>!</p>
              <p>We have received your enquiry and our team will get back to you within <strong>24 hours</strong>.</p>
              
              <div class="timeline">
                <h4>Here's what happens next:</h4>
                <div class="step">
                  <div class="step-number">1</div>
                  <div>Our team reviews your requirements</div>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <div>We schedule a 30-min discovery call</div>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <div>You receive a detailed proposal</div>
                </div>
                <div class="step">
                  <div class="step-number">4</div>
                  <div>Project kickoff after agreement</div>
                </div>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/portfolio" class="button" style="color: white; text-decoration: none;">
                  View Our Portfolio
                </a>
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/blog" class="button" style="color: white; text-decoration: none;">
                  Read Our Blog
                </a>
              </div>
              
              <div class="social-links" style="text-align: center;">
                <p><strong>Connect with us:</strong></p>
                <a href="https://linkedin.com/company/wenexatech" style="color: #0077b5;">LinkedIn</a> |
                <a href="https://twitter.com/wenexatech" style="color: #1da1f2;">Twitter</a> |
                <a href="https://github.com/wenexatech" style="color: #333;">GitHub</a> |
                <a href="https://instagram.com/wenexatech" style="color: #e4405f;">Instagram</a>
              </div>
              
              <p style="margin-top: 20px;">We're excited to work with you!</p>
              <p>Best regards,<br><strong>Team Wenexa Tech</strong></p>
              <p style="font-size: 12px; color: #64748b;">Pune, Maharashtra, India</p>
            </div>
            <div class="footer">
              <p>© 2026 Wenexa Tech. All rights reserved.</p>
              <p>Need immediate help? Call us at <a href="tel:+917414974582">+91 7414974582</a></p>
            </div>
          </div>
        </body>
        </html>
      `
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log("Auto-reply sent to:", email, "-", info.messageId);
    return true;
    
  } catch (error) {
    console.error("Auto-reply error:", error.message);
    return false;
  }
};

export default sendWelcomeEmail;
