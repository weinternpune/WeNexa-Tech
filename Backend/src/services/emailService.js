import { getEmailCredentials, getMailTransporter, sendMailWithFallback } from "../config/emailConfig.js";
import { sendViaResend } from "./resendEmail.js";

const createTransporter = () => getMailTransporter();
const currentYear = new Date().getFullYear();

const LOGO_HTML = `
  <img 
    src="https://ik.imagekit.io/55miywueb/Untitled%20design.png?updatedAt=1782889193273" 
    alt="WeNexa Technologies" 
    style="max-width: 200px; height: auto; display: block;"
  />
`;

const SOCIAL_ICONS = `
  <a href="https://www.instagram.com/wenexa.in" class="social-link" target="_blank">
    <img src="https://ik.imagekit.io/55miywueb/instagramlogo.png" alt="Instagram" class="social-icon">
  </a>
  <a href="https://twitter.com/wenexa.in" class="social-link" target="_blank">
    <img src="https://ik.imagekit.io/55miywueb/twitterlogo.png" alt="Twitter" class="social-icon">
  </a>
  <a href="https://www.youtube.com/wenexa.in" class="social-link" target="_blank">
    <img src="https://ik.imagekit.io/55miywueb/youtubelogo.png" alt="YouTube" class="social-icon">
  </a>
  <a href="https://www.linkedin.com/company/wenexatech/" class="social-link" target="_blank">
    <img src="https://ik.imagekit.io/55miywueb/linkedinlogo.png" alt="LinkedIn" class="social-icon">
  </a>
`;

const FOOTER_HTML = `
  <div class="footer">
    <div class="footer-brand"> WeNexa Technologies Pvt. Ltd.</div>
    <div class="social-links">${SOCIAL_ICONS}</div>
    <div class="footer-text">© ${currentYear} WeNexa Technologies Pvt. Ltd. All rights reserved.</div>
    <div class="footer-text">Pune, Maharashtra, India</div>
    <div class="footer-links">
      <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/privacy-policy" class="footer-link">Privacy Policy</a>
      <span class="footer-divider">|</span>
      <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/terms" class="footer-link">Terms of Service</a>
    </div>
  </div>
`;

const getCommonStyles = () => `
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      background-color: #f0f7f4;
      margin: 0;
      padding: 20px !important;
      width: 100% !important;
      min-height: 100vh;
    }
    .container {
      max-width: 600px !important;
      width: 100% !important;
      margin: 0 auto !important;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(15, 92, 77, 0.15);
    }
    .header {
      background: linear-gradient(135deg, #ffffff 0%, #f8fcf9 100%);
      padding: 30px 20px 20px 30px;
      border-bottom: 2px solid #e8f5f0;
    }
    .content {
      padding: 40px 30px;
      background: #ffffff;
    }
    .greeting {
      font-size: 26px !important;
      font-weight: 800;
      color: #0F5C4D;
      margin-bottom: 10px;
      letter-spacing: -0.5px;
    }
    .sub-text {
      font-size: 15px !important;
      color: #5a6b67;
      margin-bottom: 30px;
      line-height: 1.6;
    }
    .info-card {
      background: linear-gradient(135deg, #f8fcf9 0%, #e8f5f0 100%);
      border-radius: 20px;
      padding: 28px 24px;
      margin: 24px 0;
      border: 2px solid #d4ede6;
      box-shadow: 0 8px 24px rgba(15, 92, 77, 0.08);
    }
    .info-card h3 {
      font-size: 16px !important;
      color: #0F5C4D;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .feature-list li {
      padding: 10px 0;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      color: #5a6b67;
      font-size: 14px;
      border-bottom: 1px solid #e8f5f0;
    }
    .feature-list li:last-child { border-bottom: none; }
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
      background: #e8f5f0;
      margin: 28px 0;
    }
    .text-muted { 
      color: #8a9b97; 
      font-size: 13px; 
    }
    .text-center { text-align: center; }
    .badge {
      display: inline-block;
      background: #0F5C4D;
      color: #ffffff;
      padding: 4px 16px;
      border-radius: 50px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-top: 8px;
      box-shadow: 0 4px 12px rgba(15, 92, 77, 0.2);
    }
    .contact-card {
      background: linear-gradient(135deg, #f8fcf9 0%, #e8f5f0 100%);
      border-radius: 16px;
      padding: 20px;
      margin: 20px 0;
      text-align: center;
      border: 2px solid #d4ede6;
    }
    .contact-card .phone {
      font-size: 20px;
      font-weight: 700;
      color: #0F5C4D;
      text-decoration: none;
    }
    .contact-card .label {
      font-size: 12px;
      color: #5a6b67;
      margin-bottom: 4px;
    }
    .footer {
      background: #0a0a0a;
      padding: 40px 30px 30px;
      text-align: center;
      border-top: 2px solid #0F5C4D;
    }
    .footer-brand {
      font-size: 18px !important;
      font-weight: 700;
      color: #0F5C4D;
      margin-bottom: 20px;
      letter-spacing: 0.5px;
    }
    .social-links { margin: 20px 0; }
    .social-link {
      display: inline-block;
      margin: 0 8px;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .social-icon {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      vertical-align: middle;
    }
    .social-icon:hover {
      background: #0F5C4D;
      border-color: #0F5C4D;
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(15, 92, 77, 0.4);
    }
    .footer-text {
      font-size: 12px !important;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 4px;
      line-height: 1.6;
    }
    .footer-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin-top: 16px;
      flex-wrap: wrap;
    }
    .footer-link {
      color: #0F5C4D;
      text-decoration: none;
      font-size: 11px;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    .footer-link:hover { color: #1a8a74; text-decoration: underline; }
    .footer-divider { 
    color: rgba(255, 255, 255, 0.1); 
    }
    @media only screen and (max-width: 600px) {
      body { padding: 12px !important; }
      .content { padding: 28px 20px; }
      .header { padding: 20px 16px 16px 20px; }
      .greeting { font-size: 22px !important; }
      .sub-text { font-size: 14px !important; }
      .info-card { padding: 20px 16px; }
      .social-icon { width: 38px; height: 38px; }
      .footer { padding: 30px 20px; }
      .contact-card .phone { font-size: 18px; }
    }
    @media only screen and (max-width: 400px) {
      body { padding: 8px !important; }
      .content { padding: 20px 14px; }
      .greeting { font-size: 20px !important; }
      .social-icon { width: 34px; height: 34px; }
    }
  </style>
`;

const buildOtpEmailHTML = ({ otp, name, isResend = false, attemptsLeft = 3 }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>OTP Verification</title>
      ${getCommonStyles()}
      <style>
        .otp-container {
          background: linear-gradient(135deg, #f8fcf9 0%, #e8f5f0 100%);
          border-radius: 20px;
          padding: 32px 24px;
          margin: 28px 0;
          text-align: center;
          border: 2px solid #d4ede6;
          box-shadow: 0 8px 24px rgba(15, 92, 77, 0.08);
        }
        .otp-label {
          font-size: 12px;
          font-weight: 700;
          color: #0F5C4D;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
          display: block;
        }
        .otp-code {
          font-size: 54px;
          letter-spacing: 16px;
          font-weight: 900;
          background: #fff;
          border: 2px dashed #0F5C4D;
          padding: 16px 0;
          border-radius: 12px;
          color: #0F5C4D;
        }
        .otp-divider {
          width: 60px;
          height: 3px;
          background: #0F5C4D;
          margin: 16px auto;
          border-radius: 2px;
        }
        .info-text {
          font-size: 14px !important;
          color: #5a6b67;
          text-align: center;
          margin-top: 16px;
        }
        .warning-text {
          font-size: 14px !important;
          color: #d97706;
          text-align: center;
          margin-top: 12px;
          font-weight: 600;
          background: #fef3c7;
          padding: 8px 16px;
          border-radius: 8px;
          display: inline-block;
        }
        .resend-badge {
          display: inline-block;
          background: #0F5C4D;
          color: #ffffff;
          padding: 8px 24px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-top: 16px;
          box-shadow: 0 4px 12px rgba(15, 92, 77, 0.2);
        }
        .security-note {
          background: #f8fcf9;
          border-radius: 12px;
          padding: 16px 20px;
          margin: 24px 0 8px;
          border-left: 4px solid #0F5C4D;
        }
        .security-note p {
          font-size: 13px !important;
          color: #5a6b67;
          margin: 0;
        }
        @media only screen and (max-width: 600px) {
          .otp-code { font-size: 38px !important; letter-spacing: 8px; padding: 12px 0; }
          .otp-container { padding: 24px 16px; margin: 20px 0; }
          .resend-badge { font-size: 11px; padding: 6px 18px; }
        }
        @media only screen and (max-width: 400px) {
          .otp-code { font-size: 30px !important; letter-spacing: 6px; padding: 10px 0; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">${LOGO_HTML}</div>
        <div class="content">
          <div class="greeting">Hello${name ? `, ${name}` : ''}! 👋</div>
          <p class="sub-text">
            ${isResend 
              ? 'You have requested a new OTP for verification. Please use the code below.' 
              : 'Please use the verification code below to complete your action.'}
          </p>
          <div class="otp-container">
            <span class="otp-label">Your Verification Code</span>
            <div class="otp-code">${otp}</div>
            <div class="otp-divider"></div>
            <p class="info-text">⏱️ This code is valid for 10 minutes</p>
            ${isResend ? `
              <div style="margin-top: 12px;">
                <span class="warning-text">Attempts Left: <strong>${attemptsLeft}</strong></span>
              </div>
              <div style="margin-top: 12px;">
                <span class="resend-badge">NEW OTP GENERATED</span>
              </div>
            ` : ''}
          </div>
          <div class="security-note">
            <p>🔒 If you didn't request this code, please ignore this email or contact our support team.</p>
          </div>
          <div class="divider"></div>
          <p class="text-muted text-center">For security reasons, never share this OTP with anyone.</p>
        </div>
        ${FOOTER_HTML}
      </div>
    </body>
    </html>
  `;
};

const getStepItem = (number, text) => {
  return `
    <tr>
      <td width="42" valign="top" style="padding-bottom:16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td 
              width="32" 
              height="32" 
              align="center" 
              valign="middle" 
              bgcolor="#0F5C4D"
              style="
                width:32px;
                height:32px;
                background:#0F5C4D;
                color:#ffffff;
                border-radius:50%;
                font-size:14px;
                font-weight:bold;
                font-family:Arial,sans-serif;
                line-height:32px;
                text-align:center;
              "
            >
              ${number}
            </td>
          </tr>
        </table>
      </td>
      <td valign="middle" style="padding-bottom:16px;color:#5a6b67;font-size:14px;line-height:1.5;">
        ${text}
      </td>
    </tr>
  `;
};

const getStepsHTML = (steps) => {
  let rows = '';
  steps.forEach((step, index) => {
    rows += getStepItem(index + 1, step);
  });
  
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${rows}
    </table>
  `;
};

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
          ${getCommonStyles()}
        </head>
        <body>
          <div class="container">
            <div class="header">
              ${LOGO_HTML}
              <div class="badge">WELCOME ABOARD</div>
            </div>
            <div class="content">
              <div class="greeting">Welcome to WeNexa! 🚀</div>
              <p class="sub-text">Thank you for subscribing to our newsletter. You're now part of our growing community of innovators and tech enthusiasts.</p>
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
                <a href="${process.env.FRONTEND_URL || 'https://wenexa.in/blog'}" class="button">Explore Our Blog →</a>
              </div>
              <div class="divider"></div>
              <p class="text-muted text-center">We're excited to have you with us on this journey of digital innovation.</p>
            </div>
            ${FOOTER_HTML}
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

    const subject = `Your OTP Code for WeNexa`;
    const text = `Your OTP code is: ${otp}. This code is valid for 10 minutes.`;
    const html = buildOtpEmailHTML({ otp, name, isResend: false });

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

export const sendResendOTPEmail = async (email, otp, attemptsLeft) => {
  try {
    const creds = getEmailCredentials();

    if (!creds) {
      console.warn("Email credentials missing");
      return { success: false, error: "Email credentials missing" };
    }

    const subject = `Your OTP Code for WeNexa (Resend)`;
    const text = `Your new OTP code is: ${otp}. This code is valid for 10 minutes. You have ${attemptsLeft} attempts remaining.`;
    const html = buildOtpEmailHTML({ otp, isResend: true, attemptsLeft });

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
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="color-scheme" content="light">
          <meta name="supported-color-schemes" content="light">
          <title>New Contact Form Submission</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              background-color: #f5f7f6;
              margin: 0;
              padding: 0;
              color: #0b1f1a;
              -webkit-font-smoothing: antialiased;
            }
            .container {
              max-width: 640px !important;
              width: 100% !important;
              margin: 0 auto !important;
              background: #ffffff;
              border-radius: 28px;
              overflow: hidden;
              border: 1px solid #e6ede9;
              box-shadow: 0 20px 60px -20px rgba(15, 92, 77, 0.18), 0 6px 20px -10px rgba(15, 92, 77, 0.08);
            }
            .px-40 { padding-left: 40px !important; padding-right: 40px !important; }
            .py-40 { padding-top: 40px !important; padding-bottom: 40px !important; }
            .text-center { text-align: center; }
            @media (max-width: 620px) {
              .container { width:100% !important; border-radius:0 !important; margin:0 !important; }
              .px-40 { padding-left:24px !important; padding-right:24px !important; }
              .py-40 { padding-top:28px !important; padding-bottom:28px !important; }
              .hero-title { font-size:26px !important; line-height:1.2 !important; }
              .metric-value { font-size:22px !important; }
              .stack { display:block !important; width:100% !important; }
              .stack > td { display:block !important; width:100% !important; padding:6px 0 !important; }
              .grid-cell { display:block !important; width:100% !important; box-sizing:border-box !important; }
            }
          </style>
        </head>
        <body style="margin:0; padding:0; background-color:#f5f7f6; font-family:-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; color:#0b1f1a; -webkit-font-smoothing:antialiased;">

          <div style="display:none; overflow:hidden; line-height:1px; opacity:0; max-height:0; max-width:0;">
            New enquiry from ${name} — ${service}. Reply directly from your inbox.
          </div>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f7f6;">
            <tr>
              <td align="center" style="padding:40px 16px;">

                <table role="presentation" class="container" width="640" cellpadding="0" cellspacing="0" border="0" style="width:640px; max-width:640px; background:#ffffff; border-radius:28px; overflow:hidden; border:1px solid #e6ede9; box-shadow:0 20px 60px -20px rgba(15,92,77,0.18), 0 6px 20px -10px rgba(15,92,77,0.08);">

                  <tr>
                    <td class="px-40" style="padding:26px 40px; background:#ffffff; border-bottom:1px solid #eef2ef;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td align="left" valign="middle" style="font-size:0;">
                            ${LOGO_HTML}
                          </td>
                          <td align="right" valign="middle">
                            <span style="display:inline-block; padding:8px 14px; background:#eef2fb; color:#0B1D3A; border:1px solid #d5deef; border-radius:999px; font-size:10.5px; font-weight:700; letter-spacing:1.4px;">
                              ● NEW ENQUIRY
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-40" style="padding:36px 40px 8px 40px;">
                      <div style="font-size:11px; font-weight:700; color:#0F5C4D; letter-spacing:2.5px; text-transform:uppercase; margin-bottom:12px;">
                        Inbound · Contact Form
                      </div>
                      <h1 class="hero-title" style="margin:0 0 10px 0; font-size:34px; line-height:1.15; font-weight:700; color:#0b1f1a; letter-spacing:-0.8px;">
                        New lead from <span style="color:#0F5C4D;">${name}</span>
                      </h1>
                      <p style="margin:0; font-size:15px; line-height:1.6; color:#5b6b64; max-width:520px;">
                        A potential client just reached out through your website. Review the details below and respond while intent is high.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-40" style="padding:24px 40px 8px 40px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,#0F5C4D 0%,#14735f 55%,#1a8a72 100%); border-radius:20px;">
                        <tr>
                          <td style="padding:22px 24px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="stack">
                              <tr>
                                <td width="33%" valign="top" style="padding-right:12px;">
                                  <div style="font-size:10px; font-weight:700; color:rgba(255,255,255,0.65); letter-spacing:1.8px; text-transform:uppercase; margin-bottom:6px;">Service</div>
                                  <div class="metric-value" style="font-size:18px; font-weight:700; color:#ffffff; line-height:1.3;">${service}</div>
                                </td>
                                <td width="33%" valign="top" style="padding:0 12px; border-left:1px solid rgba(255,255,255,0.15);">
                                  <div style="font-size:10px; font-weight:700; color:rgba(255,255,255,0.65); letter-spacing:1.8px; text-transform:uppercase; margin-bottom:6px;">Budget</div>
                                  <div class="metric-value" style="font-size:18px; font-weight:700; color:#ffffff; line-height:1.3;">${budget || 'Not specified'}</div>
                                </td>
                                <td width="33%" valign="top" style="padding-left:12px; border-left:1px solid rgba(255,255,255,0.15);">
                                  <div style="font-size:10px; font-weight:700; color:rgba(255,255,255,0.65); letter-spacing:1.8px; text-transform:uppercase; margin-bottom:6px;">Company</div>
                                  <div class="metric-value" style="font-size:18px; font-weight:700; color:#ffffff; line-height:1.3;">${company || 'Not provided'}</div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-40" style="padding:20px 40px 4px 40px;">
                      <div style="font-size:11px; font-weight:700; color:#0F5C4D; letter-spacing:1.8px; text-transform:uppercase; margin-bottom:12px;">Contact Details</div>

                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td class="grid-cell" width="50%" valign="top" style="padding:0 6px 12px 0;">
                            <div style="padding:16px 18px; background:#f8faf9; border:1px solid #e6ede9; border-radius:14px;">
                              <div style="font-size:10px; font-weight:700; color:#8a978f; text-transform:uppercase; letter-spacing:1.4px; margin-bottom:6px;">Name</div>
                              <div style="font-size:15px; color:#0b1f1a; font-weight:600;">${name}</div>
                            </div>
                          </td>
                          <td class="grid-cell" width="50%" valign="top" style="padding:0 0 12px 6px;">
                            <div style="padding:16px 18px; background:#f8faf9; border:1px solid #e6ede9; border-radius:14px;">
                              <div style="font-size:10px; font-weight:700; color:#8a978f; text-transform:uppercase; letter-spacing:1.4px; margin-bottom:6px;">Email</div>
                              <div style="font-size:15px; font-weight:600;"><a href="mailto:${email}" style="color:#0F5C4D; text-decoration:none;">${email}</a></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="grid-cell" width="50%" valign="top" style="padding:0 6px 12px 0;">
                            <div style="padding:16px 18px; background:#f8faf9; border:1px solid #e6ede9; border-radius:14px;">
                              <div style="font-size:10px; font-weight:700; color:#8a978f; text-transform:uppercase; letter-spacing:1.4px; margin-bottom:6px;">Phone</div>
                              <div style="font-size:15px; color:#0b1f1a; font-weight:600;">${phone || 'Not provided'}</div>
                            </div>
                          </td>
                          <td class="grid-cell" width="50%" valign="top" style="padding:0 0 12px 6px;">
                            <div style="padding:16px 18px; background:#f8faf9; border:1px solid #e6ede9; border-radius:14px;">
                              <div style="font-size:10px; font-weight:700; color:#8a978f; text-transform:uppercase; letter-spacing:1.4px; margin-bottom:6px;">Submitted</div>
                              <div style="font-size:15px; color:#0b1f1a; font-weight:600;">${new Date().toLocaleString()}</div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-40" style="padding:12px 40px 8px 40px;">
                      <div style="font-size:11px; font-weight:700; color:#0F5C4D; letter-spacing:1.8px; text-transform:uppercase; margin-bottom:12px;">Message</div>
                      <div style="padding:22px 24px; background:#ffffff; border:1px solid #e6ede9; border-left:3px solid #0F5C4D; border-radius:14px;">
                        <div style="font-size:15.5px; color:#0b1f1a; line-height:1.7; white-space:pre-wrap;">${message?.replace(/\n/g, '<br>') || 'No message provided'}</div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-40" style="padding:28px 40px 8px 40px;" align="center">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                        <tr>
                          <td style="border-radius:999px; background:#0F5C4D; box-shadow:0 10px 24px -8px rgba(15,92,77,0.5);">
                            <a href="mailto:${email}" style="display:inline-block; padding:15px 34px; color:#ffffff; text-decoration:none; border-radius:999px; font-size:14.5px; font-weight:600; letter-spacing:0.2px;">
                              Reply to ${name} &nbsp;→
                            </a>
                          </td>
                          <td style="width:10px;">&nbsp;</td>
                          <td style="border-radius:999px; background:#ffffff; border:1px solid #d6e0da;">
                            <a href="tel:${phone || '+917414974582'}" style="display:inline-block; padding:14px 26px; color:#0F5C4D; text-decoration:none; border-radius:999px; font-size:14.5px; font-weight:600;">
                              Call
                            </a>
                          </td>
                        </tr>
                      </table>
                      <div style="margin-top:14px; font-size:12px; color:#8a978f;">
                        Aim to respond within <span style="color:#0F5C4D; font-weight:600;">1 hour</span> — leads cool fast.
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0; background:#0B1D3A;">
                      <div style="height:4px; background:linear-gradient(90deg,#0F5C4D 0%,#1a8a72 50%,#3b82f6 100%);"></div>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td class="px-40" style="padding:36px 40px 28px 40px;" align="center">
                            <div style="font-size:14px; font-weight:700; color:#ffffff; letter-spacing:0.5px; margin-bottom:6px;">
                              WENEXA <span style="font-weight:500; color:#8fa3c7; letter-spacing:2px;">TECHNOLOGIES</span>
                            </div>
                            <div style="font-size:12px; color:#8fa3c7; line-height:1.7; max-width:420px; margin:0 auto;">
                              This is an automated notification from your website contact form.
                            </div>

                            <div style="margin:20px 0 8px 0; font-size:0;">
                              <a href="${process.env.FRONTEND_URL || 'https://wenexa.in/'}" style="display:inline-block; margin:0 10px; color:#c7d3e8; text-decoration:none; font-size:12px; font-weight:600; letter-spacing:0.3px;">Website</a>
                              <span style="display:inline-block; width:3px; height:3px; background:#3a4d70; border-radius:50%; vertical-align:middle;"></span>
                              <a href="https://www.linkedin.com/company/wenexatech/" style="display:inline-block; margin:0 10px; color:#c7d3e8; text-decoration:none; font-size:12px; font-weight:600; letter-spacing:0.3px;">LinkedIn</a>
                            </div>

                            <div style="margin-top:18px; padding-top:18px; border-top:1px solid rgba(255,255,255,0.08); font-size:11px; color:#6b7fa3; letter-spacing:0.2px;">
                              © ${currentYear} WeNexa Technologies Pvt. Ltd. · All rights reserved.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>

        </body>
        </html>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log("Admin email sent to:", adminEmail);
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
    
    const steps = [
      'Our team reviews your requirements (within 24 hrs)',
      'We schedule a 30-minute discovery call',
      'You receive a detailed proposal tailored to your requirements',
      'Project kickoff after agreement and onboarding'
    ];
    
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
          ${getCommonStyles()}
        </head>
        <body>
          <div class="container">
            <div class="header">
              ${LOGO_HTML}
              <div class="badge">MESSAGE RECEIVED</div>
            </div>
            <div class="content">
              <div class="greeting">Thank You, ${name}! 🙏</div>
              <p class="sub-text">We've received your enquiry and our team is already reviewing it.</p>
              
              <div class="info-card">
                <h3>📋 What Happens Next:</h3>
                ${getStepsHTML(steps)}
              </div>
              
              <div class="button-group">
                <a href="${process.env.FRONTEND_URL || 'https://wenexa.in/'}" class="button">View Portfolio →</a>
              </div>
              
              <div class="contact-card">
                <div class="label">📞 Need immediate assistance?</div>
                <a href="tel:+917414974582" class="phone">+91 7414974582</a>
              </div>
              
              <div class="divider"></div>
              <p class="text-muted text-center">
                Best regards,<br>
                <strong style="color: #0F5C4D;">Team WeNexa Technologies</strong>
              </p>
            </div>
            ${FOOTER_HTML}
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

export default sendWelcomeEmail;