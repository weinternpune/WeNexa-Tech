import nodemailer from "nodemailer";

export function getEmailCredentials() {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS?.trim().replace(/\s/g, "");

  if (!user || !pass) {
    return null;
  }

  return { user, pass };
}

function buildTransportOptions(creds, { port, secure }) {
  return {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure,
    auth: creds,
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 30000,
    pool: false,
    ...(port === 587 ? { requireTLS: true, tls: { minVersion: "TLSv1.2" } } : {}),
  };
}

export function createMailTransporter(port = 465) {
  const creds = getEmailCredentials();
  if (!creds) {
    throw new Error("EMAIL_USER and EMAIL_PASS are required in Backend/.env");
  }

  return nodemailer.createTransport(
    buildTransportOptions(creds, { port, secure: port === 465 })
  );
}

export async function sendMailWithFallback(mailOptions) {
  const creds = getEmailCredentials();
  if (!creds) {
    throw new Error("EMAIL_USER and EMAIL_PASS are required in Backend/.env");
  }

  const fromAddress = creds.user;
  const options = {
    ...mailOptions,
    from: mailOptions.from || fromAddress,
    envelope: {
      from: fromAddress,
      to: mailOptions.to,
    },
  };

  const ports = [465, 587];
  let lastError = null;

  for (const port of ports) {
    try {
      const transporter = createMailTransporter(port);
      const info = await transporter.sendMail(options);
      console.log(`Email delivered via SMTP:${port} -> ${mailOptions.to} | ${info.messageId}`);
      return info;
    } catch (error) {
      lastError = error;
      console.warn(`SMTP port ${port} failed for ${mailOptions.to}:`, error.message);
    }
  }

  throw lastError || new Error("Failed to send email");
}

export function getMailTransporter() {
  return createMailTransporter(465);
}

export async function verifyEmailTransport() {
  const creds = getEmailCredentials();
  if (!creds) {
    console.warn("EMAIL_USER / EMAIL_PASS missing — OTP emails will not send.");
    return false;
  }

  const ports = [465, 587];
  for (const port of ports) {
    try {
      const transporter = createMailTransporter(port);
      await transporter.verify();
      console.log(`Gmail SMTP connected on port ${port} — OTP emails ready`);
      console.log(`Using account: ${creds.user}`);
      return true;
    } catch (error) {
      console.warn(`SMTP verify failed on port ${port}:`, error.message);
    }
  }

  console.error("Gmail SMTP failed — OTP emails will NOT send.");
  console.error("Fix: Google Account -> Security -> 2-Step ON -> App passwords -> new 16-char password");
  console.error("Put in .env as EMAIL_PASS=xxxxxxxxxxxxxxxx (no spaces)");
  return false;
}
