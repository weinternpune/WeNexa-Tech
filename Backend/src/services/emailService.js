import { createMailTransporter, getEmailCredentials } from "../config/emailConfig.js";

const createTransporter = () => createMailTransporter();

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
      background-color: #f0f2f5;
      margin: 0;
      padding: 16px !important;
      width: 100% !important;
    }
    
    .container {
      max-width: 600px !important;
      width: 100% !important;
      margin: 0 auto !important;
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    
    .header {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      padding: 32px 20px;
      text-align: center;
    }
    
    .logo {
      font-size: 24px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.5px;
    }
    
    .logo span {
      color: #0E8F6F;
    }
    
    .badge {
      display: inline-block;
      background: rgba(14, 143, 111, 0.2);
      border: 1px solid rgba(14, 143, 111, 0.3);
      padding: 4px 12px;
      border-radius: 50px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: #0E8F6F;
      margin-top: 12px;
    }
    
    .content {
      padding: 24px 20px;
      background: #ffffff;
    }
    
    h1 {
      font-size: 22px !important;
      margin-bottom: 16px !important;
      color: #0f172a;
      font-weight: 700;
      line-height: 1.3;
      word-break: break-word;
    }
    
    h2 {
      font-size: 18px !important;
      margin-bottom: 12px !important;
      color: #0f172a;
      font-weight: 600;
    }
    
    h3 {
      font-size: 16px !important;
      margin-bottom: 12px !important;
      color: #0f172a;
      font-weight: 600;
    }
    
    p {
      font-size: 14px !important;
      line-height: 1.5;
      color: #475569;
      margin-bottom: 16px;
      word-break: break-word;
    }
    
    .greeting {
      font-size: 20px !important;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 16px;
      word-break: break-word;
    }
   
    .otp-box {
      background: #f8fafc;
      border-radius: 16px;
      padding: 20px;
      text-align: center;
      margin: 20px 0;
      border: 1px solid #e2e8f0;
    }
    
    .otp-label {
      color: #64748b;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }
    
    .otp-code {
      font-size: 32px !important;
      font-weight: 800;
      letter-spacing: 8px;
      color: #0f172a;
      background: white;
      padding: 16px;
      border-radius: 12px;
      font-family: 'Courier New', monospace;
      border: 2px solid #0E8F6F;
      margin: 12px 0;
      word-break: break-all;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
   
    .info-card {
      background: #f8fafc;
      border-radius: 16px;
      padding: 20px;
      margin: 20px 0;
      border-left: 4px solid #0E8F6F;
    }
    
    .warning-card {
      background: #fef3c7;
      border-radius: 16px;
      padding: 16px;
      margin: 20px 0;
      border-left: 4px solid #f59e0b;
    }
    
    .warning-title {
      color: #92400e;
      font-weight: 600;
      font-size: 13px;
      margin-bottom: 8px;
    }
   
    .field-grid {
      display: block;
      width: 100%;
      margin: 20px 0;
    }
    
    .field-item {
      display: block;
      width: 100%;
      margin-bottom: 12px;
      padding: 12px;
      background: #f8fafc;
      border-radius: 12px;
      border-left: 3px solid #0E8F6F;
      word-break: break-word;
      overflow-wrap: break-word;
    }
    
    .field-label {
      font-size: 10px;
      font-weight: 600;
      color: #0E8F6F;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
      display: block;
    }
    
    .field-value {
      font-size: 15px;
      color: #1e293b;
      font-weight: 500;
      word-break: break-word;
      overflow-wrap: break-word;
      display: block;
      line-height: 1.4;
    }
    
    .step-list {
      margin: 16px 0;
    }
    
    .step-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 14px;
      padding: 8px 0;
    }
    
    .step-number {
      width: 26px;
      height: 26px;
      background: #0E8F6F;
      color: white;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 12px;
      flex-shrink: 0;
    }
    
    .step-text {
      flex: 1;
      color: #475569;
      font-size: 14px;
      line-height: 1.4;
      word-break: break-word;
    }
   
    .stats-grid {
      display: block;
      margin: 20px 0;
    }
    
    .stat-item {
      display: block;
      text-align: center;
      padding: 16px;
      background: #f8fafc;
      border-radius: 12px;
      margin-bottom: 10px;
    }
    
    .stat-number {
      font-size: 22px;
      font-weight: 800;
      color: #0E8F6F;
    }
    
    .stat-label {
      font-size: 11px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 4px;
    }
   
    .feature-list {
      list-style: none;
      padding: 0;
    }
    
    .feature-list li {
      padding: 8px 0;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      color: #475569;
      font-size: 14px;
      word-break: break-word;
    }
    
    .feature-list li::before {
      content: "▹";
      color: #0E8F6F;
      font-weight: bold;
      flex-shrink: 0;
    }
  
    .button {
      display: block;
      background: #0f172a;
      color: white;
      text-decoration: none;
      padding: 14px 20px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
      margin: 8px 0;
      width: 100%;
    }
    
    .button-primary {
      background: #0E8F6F;
    }
    
    .button-secondary {
      background: #334155;
    }
    
    .button-group {
      margin: 20px 0;
    }
    
    /* Contact Info */
    .contact-info {
      background: #f8fafc;
      border-radius: 16px;
      padding: 20px;
      margin: 20px 0;
      text-align: center;
    }
    
    .contact-phone {
      font-size: 18px;
      font-weight: 700;
      color: #0E8F6F;
      text-decoration: none;
      display: inline-block;
      margin-top: 8px;
      word-break: break-word;
    }
 
    .divider {
      height: 1px;
      background: #e2e8f0;
      margin: 24px 0;
    }
 
    .footer {
      background: #f8fafc;
      padding: 24px 20px;
      text-align: center;
      border-top: 1px solid #e2e8f0;
    }
    
    .footer-text {
      font-size: 11px !important;
      color: #94a3b8;
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
      color: #64748b;
      text-decoration: none;
      font-size: 12px;
    }
    
    /* Utilities */
    .text-center {
      text-align: center;
    }
    
    .text-muted {
      color: #64748b;
      font-size: 12px;
    }
    
    .mt-4 {
      margin-top: 16px;
    }
    
    .mb-4 {
      margin-bottom: 16px;
    }
  
    @media only screen and (max-width: 480px) {
      body {
        padding: 8px !important;
      }
      
      .container {
        border-radius: 16px;
      }
      
      .content {
        padding: 20px 16px;
      }
      
      .header {
        padding: 24px 16px;
      }
      
      .logo {
        font-size: 20px;
      }
      
      .greeting {
        font-size: 18px !important;
      }
      
      .otp-code {
        font-size: 24px !important;
        letter-spacing: 4px;
        padding: 12px;
      }
      
      .field-item {
        padding: 10px;
      }
      
      .field-value {
        font-size: 14px;
      }
      
      .step-item {
        gap: 10px;
      }
      
      .step-text {
        font-size: 13px;
      }
    }
    
    table {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
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
      from: `"Wenexa Tech" <${creds.user}>`,
      to: email,
      subject: "Welcome to Wenexa Tech",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Wenexa Tech</title>
          ${getEmailStyles()}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">WENEXA <span>TECH</span></div>
              <div class="badge">WELCOME</div>
            </div>
            
            <div class="content">
              <div class="greeting">Welcome to Wenexa Tech!</div>
              
              <p>Dear Subscriber,</p>
              
              <p>Thank you for subscribing to our newsletter. You're now part of our growing tech community.</p>
              
              <div class="info-card">
                <h3>What You'll Receive:</h3>
                <ul class="feature-list">
                  <li>Latest tech insights and trends</li>
                  <li>New product launches</li>
                  <li>Exclusive offers and discounts</li>
                  <li>Industry updates and case studies</li>
                </ul>
              </div>
              
              <div class="button-group">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/blog" class="button button-primary">Read Our Blog</a>
              </div>
            </div>
            
            <div class="footer">
              <div class="social-links">
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">GitHub</a>
                <a href="#" class="social-link">Instagram</a>
              </div>
              <div class="footer-text">© 2026 Wenexa Tech. All rights reserved.</div>
              <div class="footer-text">Pune, Maharashtra, India</div>
              <div class="divider"></div>
              <div>
                <a href="#" style="color: #0E8F6F; text-decoration: none; font-size: 11px;">Unsubscribe</a>
                &nbsp;|&nbsp;
                <a href="#" style="color: #0E8F6F; text-decoration: none; font-size: 11px;">Privacy Policy</a>
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
      return false;
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: `"Wenexa Tech" <${creds.user}>`,
      to: email,
      subject: "Verify Your Email - Wenexa Tech",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification</title>
          ${getEmailStyles()}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">WENEXA <span>TECH</span></div>
              <div class="badge">VERIFICATION</div>
            </div>
            
            <div class="content">
              <div class="greeting">Hello, ${name}!</div>
              
              <p>Thank you for contacting Wenexa Tech. Please use the verification code below to complete your submission.</p>
              
              <div class="otp-box">
                <div class="otp-label">Your Verification Code</div>
                <div class="otp-code">${otp}</div>
                <div class="text-muted">Valid for 10 minutes</div>
              </div>
              
              <div class="warning-card">
                <div class="warning-title">Important Security Information</div>
                <p style="margin: 0; font-size: 12px;">• You have only 3 attempts to enter the correct code</p>
                <p style="margin: 0; font-size: 12px;">• Each failed attempt counts toward your limit</p>
                <p style="margin: 0; font-size: 12px;">• Never share this code with anyone</p>
              </div>
              
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-number">10 min</div>
                  <div class="stat-label">Code Validity</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">3</div>
                  <div class="stat-label">Max Attempts</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">Support</div>
                </div>
              </div>
              
              <p class="text-muted">If you didn't request this code, please ignore this email.</p>
            </div>
            
            <div class="footer">
              <div class="social-links">
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">GitHub</a>
                <a href="#" class="social-link">Instagram</a>
              </div>
              <div class="footer-text">© 2026 Wenexa Tech. All rights reserved.</div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("OTP email sent to:", email);
    return true;
    
  } catch (error) {
    console.error("OTP email error:", error.message);
    return false;
  }
};

export const sendAdminEmail = async (formData) => {
  try {
    const creds = getEmailCredentials();
    const adminEmail = process.env.ADMIN_EMAIL || creds?.user;
    
    const { name, email, phone, company, service, budget, message } = formData;
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Wenexa Contact Form" <${creds.user}>`,
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
              <div class="logo">WENEXA <span>TECH</span></div>
              <div class="badge">NEW ENQUIRY</div>
            </div>
            
            <div class="content">
              <h1>New Contact Form Submission</h1>
              
              <div class="field-grid">
                <div class="field-item">
                  <div class="field-label">NAME</div>
                  <div class="field-value">${name}</div>
                </div>
                
                <div class="field-item">
                  <div class="field-label">EMAIL</div>
                  <div class="field-value"><a href="mailto:${email}" style="color: #0E8F6F; word-break: break-all;">${email}</a></div>
                </div>
                
                <div class="field-item">
                  <div class="field-label">PHONE</div>
                  <div class="field-value">${phone || 'Not provided'}</div>
                </div>
                
                <div class="field-item">
                  <div class="field-label">COMPANY</div>
                  <div class="field-value">${company || 'Not provided'}</div>
                </div>
                
                <div class="field-item">
                  <div class="field-label">SERVICE</div>
                  <div class="field-value">${service}</div>
                </div>
                
                <div class="field-item">
                  <div class="field-label">BUDGET</div>
                  <div class="field-value">${budget || 'Not specified'}</div>
                </div>
                
                <div class="field-item">
                  <div class="field-label">MESSAGE</div>
                  <div class="field-value">${message?.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              
              <div class="button-group">
                <a href="mailto:${email}" class="button button-primary">Reply to ${name}</a>
              </div>
              
              <div class="text-muted text-center">Submitted on: ${new Date().toLocaleString()}</div>
            </div>
            
            <div class="footer">
              <div class="footer-text">© 2026 Wenexa Tech. All rights reserved.</div>
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
    console.error("Admin email error:", error.message);
    return false;
  }
};

export const sendUserAutoReply = async (formData) => {
  try {
    const creds = getEmailCredentials();
    const { name, email } = formData;
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Wenexa Tech" <${creds.user}>`,
      to: email,
      subject: "We've Received Your Message - Wenexa Tech",
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
              <div class="logo">WENEXA <span>TECH</span></div>
              <div class="badge">MESSAGE RECEIVED</div>
            </div>
            
            <div class="content">
              <div class="greeting">Thank You, ${name}!</div>
              
              <p>We've received your enquiry and our team is already reviewing it.</p>
              
              <div class="info-card">
                <h3>What Happens Next:</h3>
                <div class="step-list">
                  <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-text">Our team reviews your requirements (within 24 hrs)</div>
                  </div>
                  <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-text">We schedule a 30-min discovery call</div>
                  </div>
                  <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-text">You receive a detailed proposal</div>
                  </div>
                  <div class="step-item">
                    <div class="step-number">4</div>
                    <div class="step-text">Project kickoff after agreement</div>
                  </div>
                </div>
              </div>
              
              <div class="button-group">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/portfolio" class="button button-secondary">View Portfolio</a>
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/blog" class="button button-primary">Read Blog</a>
              </div>
              
              <div class="contact-info">
                <div style="font-weight: 600; margin-bottom: 8px;">Need immediate assistance?</div>
                <a href="tel:+917414974582" class="contact-phone">+91 7414974582</a>
              </div>
              
              <p style="margin-top: 24px;">
                Best regards,<br>
                <strong>Team Wenexa Tech</strong>
              </p>
            </div>
            
            <div class="footer">
              <div class="social-links">
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">GitHub</a>
                <a href="#" class="social-link">Instagram</a>
              </div>
              <div class="footer-text">© 2026 Wenexa Tech. All rights reserved.</div>
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
    console.error("Auto-reply error:", error.message);
    return false;
  }
};

export const sendResendOTPEmail = async (email, otp, attemptsLeft) => {
  try {
    const creds = getEmailCredentials();
    
    if (!creds) {
      console.warn("Email credentials missing");
      return false;
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: `"Wenexa Tech" <${creds.user}>`,
      to: email,
      subject: "New Verification Code - Wenexa Tech",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Verification Code</title>
          ${getEmailStyles()}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">WENEXA <span>TECH</span></div>
              <div class="badge">NEW CODE</div>
            </div>
            
            <div class="content">
              <h1>New Verification Code</h1>
              
              <div class="otp-box">
                <div class="otp-label">Your New Verification Code</div>
                <div class="otp-code">${otp}</div>
                <div class="text-muted">Valid for 10 minutes</div>
              </div>
              
              <div class="warning-card">
                <div class="warning-title">Remaining Attempts: ${attemptsLeft}</div>
                <p style="margin: 0;">You have ${attemptsLeft} attempt(s) left. Please enter the code carefully.</p>
              </div>
            </div>
            
            <div class="footer">
              <div class="footer-text">© 2026 Wenexa Tech. All rights reserved.</div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Resend OTP email sent to:", email);
    return true;
    
  } catch (error) {
    console.error("Resend OTP email error:", error.message);
    return false;
  }
};

export default sendWelcomeEmail;
