import nodemailer from "nodemailer";

export function getEmailCredentials() {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS?.trim().replace(/\s/g, "");

  if (!user || !pass) {
    return null;
  }

  return { user, pass };
}

export function createMailTransporter() {
  const creds = getEmailCredentials();
  if (!creds) {
    throw new Error("EMAIL_USER and EMAIL_PASS are required in Backend/.env");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: creds,
  });
}

export async function verifyEmailTransport() {
  const creds = getEmailCredentials();
  if (!creds) {
    console.warn("EMAIL_USER / EMAIL_PASS missing — OTP emails will not send.");
    return false;
  }

  try {
    const transporter = createMailTransporter();
    await transporter.verify();
    console.log("Gmail SMTP connected — OTP emails ready");
    return true;
  } catch (error) {
    console.error("Gmail SMTP failed — OTP emails will NOT send.");
    console.error("   Fix: Google Account → Security → 2-Step ON → App passwords → new 16-char password");
    console.error("   Put in .env as EMAIL_PASS=xxxxxxxxxxxxxxxx (no spaces)");
    if (error.code === "EAUTH" || error.responseCode === 535) {
      console.error("   Detail: Invalid Gmail username or app password (535)");
    } else {
      console.error("   Detail:", error.message);
    }
    return false;
  }
}
