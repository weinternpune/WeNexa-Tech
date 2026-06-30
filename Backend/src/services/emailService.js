import { getEmailCredentials, getMailTransporter, sendMailWithFallback } from "../config/emailConfig.js";
import { buildOtpEmailContent } from "../utils/otpEmailTemplate.js";
import { sendViaResend } from "./resendEmail.js";

const createTransporter = () => getMailTransporter();

const getEmailStyles = () => `
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      background-color: #020817;
      margin: 0;
      padding: 16px !important;
      width: 100% !important;
    }
    
    .container {
      max-width: 600px !important;
      width: 100% !important;
      margin: 0 auto !important;
      background: #020817;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid rgba(15, 92, 77, 0.2);
    }
    
    .header {
      background: linear-gradient(135deg, #020817 0%, #0B1F3A 100%);
      padding: 32px 20px;
      text-align: center;
      border-bottom: 1px solid rgba(15, 92, 77, 0.2);
    }
    
    .logo {
      font-size: 28px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.5px;
    }
    
    .logo span {
      color: #0F5C4D;
    }
    
    .badge {
      display: inline-block;
      background: rgba(15, 92, 77, 0.2);
      border: 1px solid rgba(15, 92, 77, 0.3);
      padding: 4px 12px;
      border-radius: 50px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: #0F5C4D;
      margin-top: 12px;
    }
    
    .content {
      padding: 32px 24px;
      background: #020817;
    }
    
    h1 {
      font-size: 24px !important;
      margin-bottom: 20px !important;
      color: #ffffff;
      font-weight: 700;
      line-height: 1.3;
    }
    
    h2 {
      font-size: 18px !important;
      margin-bottom: 12px !important;
      color: #ffffff;
      font-weight: 600;
    }
    
    h3 {
      font-size: 16px !important;
      margin-bottom: 12px !important;
      color: #0F5C4D;
      font-weight: 600;
    }
    
    p {
      font-size: 14px !important;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 16px;
    }
    
    .greeting {
      font-size: 22px !important;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 20px;
    }
    
    .info-card {
      background: rgba(15, 92, 77, 0.1);
      border-radius: 16px;
      padding: 24px;
      margin: 24px 0;
      border-left: 4px solid #0F5C4D;
    }
    
    .feature-list {
      list-style: none;
      padding: 0;
      margin-top: 16px;
    }
    
    .feature-list li {
      padding: 10px 0;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
      border-bottom: 1px solid rgba(15, 92, 77, 0.2);
    }
    
    .feature-list li:last-child {
      border-bottom: none;
    }
    
    .feature-list li::before {
      content: "▹";
      color: #0F5C4D;
      font-weight: bold;
      flex-shrink: 0;
    }
    
    .button {
      display: inline-block;
      background: transparent;
      color: #0F5C4D;
      text-decoration: none;
      padding: 12px 28px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
      border: 2px solid #0F5C4D;
      transition: all 0.3s ease;
    }
    
    .button:hover {
      background: #0F5C4D;
      color: #ffffff;
    }
    
    .button-group {
      margin: 24px 0;
      text-align: center;
    }
    
    .divider {
      height: 1px;
      background: rgba(15, 92, 77, 0.2);
      margin: 24px 0;
    }
    
    .footer {
      background: rgba(11, 31, 58, 0.5);
      padding: 24px;
      text-align: center;
      border-top: 1px solid rgba(15, 92, 77, 0.2);
    }
    
    .footer-text {
      font-size: 11px !important;
      color: rgba(255, 255, 255, 0.3);
      margin-bottom: 8px;
    }
    
    .social-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin: 16px 0;
    }
    
    .social-link {
      color: rgba(255, 255, 255, 0.4);
      text-decoration: none;
      font-size: 12px;
      transition: color 0.3s ease;
    }
    
    .social-link:hover {
      color: #0F5C4D;
    }
    
    .text-muted {
      color: rgba(255, 255, 255, 0.4);
      font-size: 12px;
    }
    
    .text-center {
      text-align: center;
    }
    
    @media only screen and (max-width: 480px) {
      body {
        padding: 8px !important;
      }
      
      .content {
        padding: 24px 16px;
      }
      
      .logo {
        font-size: 24px;
      }
      
      .greeting {
        font-size: 20px !important;
      }
      
      .button {
        padding: 10px 24px;
        font-size: 13px;
      }
    }
  </style>
`;

export const sendWelcomeEmail = async (email) => {
  try {
    const creds = getEmailCredentials();
    
    if (!creds) {
      console.warn("Email credentials missing");
      return false;
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: `"WeNexa Technologies" <${creds.user}>`,
      to: email,
      subject: "Welcome to WeNexa - Your Digital Innovation Partner",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to WeNexa</title>
          ${getEmailStyles()}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">WeNexa <span>Technologies</span></div>
              <div class="badge">WELCOME ABOARD</div>
            </div>
            
            <div class="content">
              <div class="greeting">Welcome to WeNexa!</div>
              
              <p>Thank you for subscribing to our newsletter. You're now part of our growing community of innovators and tech enthusiasts.</p>
              
              <div class="info-card">
                <h3>✨ What You'll Receive:</h3>
                <ul class="feature-list">
                  <li>Latest tech insights and industry trends</li>
                  <li>Exclusive offers and early access to products</li>
                  <li>Case studies and success stories</li>
                  <li>Event invitations and webinar updates</li>
                  <li>Tips for digital transformation</li>
                </ul>
              </div>
              
              <div class="button-group">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/blog" class="button">Explore Our Blog →</a>
              </div>
              
              <div class="divider"></div>
              
              <p class="text-muted text-center">We're excited to have you with us on this journey of digital innovation.</p>
            </div>
            
            <div class="footer">
              <div class="social-links">
                <a href="https://www.linkedin.com/company/wenexatech/" class="social-link">LinkedIn</a>
                <a href="https://twitter.com/wenexa.in" class="social-link">Twitter</a>
                <a href="https://www.instagram.com/wenexa.in" class="social-link">Instagram</a>
                <a href="https://www.youtube.com/wenexa.in" class="social-link">YouTube</a>
              </div>
              <div class="footer-text">© 2026 WeNexa Technologies Pvt. Ltd. All rights reserved.</div>
              <div class="footer-text">Pune, Maharashtra, India</div>
              <div class="divider"></div>
              <div>
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/unsubscribe?email=${email}" style="color: #0F5C4D; text-decoration: none; font-size: 11px;">Unsubscribe</a>
                &nbsp;|&nbsp;
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/privacy-policy" style="color: #0F5C4D; text-decoration: none; font-size: 11px;">Privacy Policy</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent to:", email);
    return true;
    
  } catch (error) {
    console.error("Welcome email error:", error.message);
    return false;
  }
};

export const sendOTPEmail = async (email, otp, name) => {
  try {
    const creds = getEmailCredentials();

    if (!creds) {
      console.warn("Email credentials missing");
      return { success: false, error: "Email credentials missing" };
    }

    const { subject, text, html } = buildOtpEmailContent({ otp, name });

    let info = null;

    if (process.env.RESEND_API_KEY?.trim()) {
      try {
        info = await sendViaResend({ to: email, subject, html, text });
        console.log(`[OTP via Resend] ${email} => ${otp} | ${info.messageId}`);
      } catch (resendError) {
        console.warn("Resend failed, falling back to Gmail SMTP:", resendError.message);
      }
    }

    if (!info) {
      info = await sendMailWithFallback({
        from: `"WeNexa" <${creds.user}>`,
        to: email,
        replyTo: creds.user,
        subject,
        text,
        html,
      });
      console.log(`[OTP via Gmail] ${email} => ${otp} (valid 10 min) | messageId: ${info.messageId}`);
    }

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("OTP email error:", error.code || error.responseCode, "-", error.message);
    return { success: false, error: error.message };
  }
};

export const sendAdminEmail = async (formData) => {
  try {
    const creds = getEmailCredentials();
    const adminEmail = process.env.ADMIN_EMAIL || creds?.user;
    
    const { name, email, phone, company, service, budget, message } = formData;
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"WeNexa Contact Form" <${creds.user}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Contact Form: ${name} - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          ${getEmailStyles()}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">WeNexa <span>Technologies</span></div>
              <div class="badge">NEW ENQUIRY</div>
            </div>
            
            <div class="content">
              <h1>New Contact Form Submission</h1>
              
              <div style="margin: 20px 0;">
                <div style="margin-bottom: 12px; padding: 12px; background: rgba(15, 92, 77, 0.1); border-radius: 12px; border-left: 3px solid #0F5C4D;">
                  <div style="font-size: 10px; font-weight: 600; color: #0F5C4D; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">NAME</div>
                  <div style="font-size: 15px; color: #ffffff;">${name}</div>
                </div>
                
                <div style="margin-bottom: 12px; padding: 12px; background: rgba(15, 92, 77, 0.1); border-radius: 12px; border-left: 3px solid #0F5C4D;">
                  <div style="font-size: 10px; font-weight: 600; color: #0F5C4D; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">EMAIL</div>
                  <div style="font-size: 15px; color: #ffffff;"><a href="mailto:${email}" style="color: #0F5C4D;">${email}</a></div>
                </div>
                
                <div style="margin-bottom: 12px; padding: 12px; background: rgba(15, 92, 77, 0.1); border-radius: 12px; border-left: 3px solid #0F5C4D;">
                  <div style="font-size: 10px; font-weight: 600; color: #0F5C4D; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">PHONE</div>
                  <div style="font-size: 15px; color: #ffffff;">${phone || 'Not provided'}</div>
                </div>
                
                <div style="margin-bottom: 12px; padding: 12px; background: rgba(15, 92, 77, 0.1); border-radius: 12px; border-left: 3px solid #0F5C4D;">
                  <div style="font-size: 10px; font-weight: 600; color: #0F5C4D; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">COMPANY</div>
                  <div style="font-size: 15px; color: #ffffff;">${company || 'Not provided'}</div>
                </div>
                
                <div style="margin-bottom: 12px; padding: 12px; background: rgba(15, 92, 77, 0.1); border-radius: 12px; border-left: 3px solid #0F5C4D;">
                  <div style="font-size: 10px; font-weight: 600; color: #0F5C4D; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">SERVICE</div>
                  <div style="font-size: 15px; color: #ffffff;">${service}</div>
                </div>
                
                <div style="margin-bottom: 12px; padding: 12px; background: rgba(15, 92, 77, 0.1); border-radius: 12px; border-left: 3px solid #0F5C4D;">
                  <div style="font-size: 10px; font-weight: 600; color: #0F5C4D; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">BUDGET</div>
                  <div style="font-size: 15px; color: #ffffff;">${budget || 'Not specified'}</div>
                </div>
                
                <div style="margin-bottom: 12px; padding: 12px; background: rgba(15, 92, 77, 0.1); border-radius: 12px; border-left: 3px solid #0F5C4D;">
                  <div style="font-size: 10px; font-weight: 600; color: #0F5C4D; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">MESSAGE</div>
                  <div style="font-size: 15px; color: #ffffff; white-space: pre-wrap;">${message?.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              
              <div class="button-group">
                <a href="mailto:${email}" class="button">Reply to ${name} →</a>
              </div>
              
              <div class="text-muted text-center">Submitted on: ${new Date().toLocaleString()}</div>
            </div>
            
            <div class="footer">
              <div class="footer-text">© 2026 WeNexa Technologies Pvt. Ltd. All rights reserved.</div>
            </div>
          </div>
        </body>
        </html>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log("Admin email sent");
    return true;
    
  } catch (error) {
    console.error("Admin email error:", error.code || error.responseCode, "-", error.message);
    return false;
  }
};

export const sendUserAutoReply = async (formData) => {
  try {
    const creds = getEmailCredentials();
    const { name, email } = formData;
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"WeNexa Technologies" <${creds.user}>`,
      to: email,
      subject: "We've Received Your Message - WeNexa Technologies",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting Us</title>
          ${getEmailStyles()}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">WeNexa <span>Technologies</span></div>
              <div class="badge">MESSAGE RECEIVED</div>
            </div>
            
            <div class="content">
              <div class="greeting">Thank You, ${name}!</div>
              
              <p>We've received your enquiry and our team is already reviewing it.</p>
              
              <div class="info-card">
                <h3>What Happens Next:</h3>
                <div style="margin: 16px 0;">
                  <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; padding: 8px 0;">
                    <div style="width: 26px; height: 26px; background: #0F5C4D; color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0;">1</div>
                    <div style="flex: 1; color: rgba(255, 255, 255, 0.7); font-size: 14px;">Our team reviews your requirements (within 24 hrs)</div>
                  </div>
                  <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; padding: 8px 0;">
                    <div style="width: 26px; height: 26px; background: #0F5C4D; color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0;">2</div>
                    <div style="flex: 1; color: rgba(255, 255, 255, 0.7); font-size: 14px;">We schedule a 30-min discovery call</div>
                  </div>
                  <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; padding: 8px 0;">
                    <div style="width: 26px; height: 26px; background: #0F5C4D; color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0;">3</div>
                    <div style="flex: 1; color: rgba(255, 255, 255, 0.7); font-size: 14px;">You receive a detailed proposal</div>
                  </div>
                  <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; padding: 8px 0;">
                    <div style="width: 26px; height: 26px; background: #0F5C4D; color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0;">4</div>
                    <div style="flex: 1; color: rgba(255, 255, 255, 0.7); font-size: 14px;">Project kickoff after agreement</div>
                  </div>
                </div>
              </div>
              
              <div class="button-group">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/portfolio" class="button">View Portfolio →</a>
              </div>
              
              <div style="background: rgba(15, 92, 77, 0.1); border-radius: 16px; padding: 20px; margin: 20px 0; text-align: center;">
                <div style="font-weight: 600; margin-bottom: 8px; color: #ffffff;">Need immediate assistance?</div>
                <a href="tel:+917414974582" style="font-size: 18px; font-weight: 700; color: #0F5C4D; text-decoration: none;">+91 7414974582</a>
              </div>
              
              <p style="margin-top: 24px;">
                Best regards,<br>
                <strong>Team WeNexa Technologies</strong>
              </p>
            </div>
            
            <div class="footer">
              <div class="social-links">
                <a href="https://www.linkedin.com/company/wenexatech/" class="social-link">LinkedIn</a>
                <a href="https://twitter.com/wenexa.in" class="social-link">Twitter</a>
                <a href="https://www.instagram.com/wenexa.in" class="social-link">Instagram</a>
                <a href="https://www.youtube.com/wenexa.in" class="social-link">YouTube</a>
              </div>
              <div class="footer-text">© 2026 WeNexa Technologies Pvt. Ltd. All rights reserved.</div>
              <div class="footer-text">Pune, Maharashtra, India</div>
            </div>
          </div>
        </body>
        </html>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log("Auto-reply sent to:", email);
    return true;
    
  } catch (error) {
    console.error("Auto-reply error:", error.code || error.responseCode, "-", error.message);
    return false;
  }
};

export const sendResendOTPEmail = async (email, otp, attemptsLeft) => {
  try {
    const creds = getEmailCredentials();

    if (!creds) {
      console.warn("Email credentials missing");
      return { success: false, error: "Email credentials missing" };
    }

    const { subject, text, html } = buildOtpEmailContent({
      otp,
      isResend: true,
      attemptsLeft,
    });

    const info = await sendMailWithFallback({
      from: `"WeNexa" <${creds.user}>`,
      to: email,
      replyTo: creds.user,
      subject,
      text,
      html,
    });

    console.log(`[OTP RESEND] ${email} => ${otp} | messageId: ${info.messageId}`);

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Resend OTP email error:", error.code || error.responseCode, "-", error.message);
    return { success: false, error: error.message };
  }
};

export default sendWelcomeEmail;
