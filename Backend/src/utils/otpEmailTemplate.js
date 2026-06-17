export function buildOtpEmailContent({ otp, name, isResend = false, attemptsLeft = 3 }) {
  const greeting = name ? `Hello ${name},` : "Hello,";
  const title = isResend ? "New Verification Code" : "Email Verification Code";
  const attemptsLine = isResend
    ? `You have ${attemptsLeft} attempt(s) remaining.`
    : "You have 3 attempts to enter this code.";

  const text = [
    greeting,
    "",
    `Your WeNexa ${title.toLowerCase()} is: ${otp}`,
    "",
    "This code is valid for 10 minutes.",
    attemptsLine,
    "",
    "If you did not request this email, please ignore it.",
    "",
    "WeNexa Technologies",
  ].join("\n");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f7fb;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:520px;background:#ffffff;border-radius:16px;padding:32px 28px;border:1px solid #e5e7eb;">
          <tr>
            <td>
              <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#059669;letter-spacing:0.08em;text-transform:uppercase;">WeNexa Technologies</p>
              <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;color:#111827;">${title}</h1>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#4b5563;">${greeting}<br><br>Use the code below to verify your contact form submission.</p>
              <div style="margin:24px 0;padding:20px;border-radius:12px;background:#ecfdf5;border:1px solid #a7f3d0;text-align:center;">
                <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#047857;text-transform:uppercase;letter-spacing:0.12em;">Your Code</p>
                <p style="margin:0;font-size:36px;font-weight:800;letter-spacing:10px;color:#065f46;font-family:'Courier New',monospace;">${otp}</p>
              </div>
              <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#4b5563;">Valid for <strong>10 minutes</strong>.</p>
              <p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:#4b5563;">${attemptsLine}</p>
              <p style="margin:0;font-size:13px;line-height:1.6;color:#6b7280;">If you did not request this code, you can safely ignore this email.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { text, html, subject: `${title}: ${otp}` };
}
