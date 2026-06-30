export const OTP_VALIDITY_MS = 10 * 60 * 1000;
export const MAX_OTP_ATTEMPTS = 3;
export const OTP_BLOCK_MS = 24 * 60 * 60 * 1000;
export const RESUBMIT_COOLDOWN_MS = 4 * 24 * 60 * 60 * 1000;

export const ALLOWED_SERVICES = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Cloud & DevOps",
  "AI / Automation",
  "Other",
];

export function formatWaitTime(ms) {
  if (ms <= 0) return "now";

  const totalMinutes = Math.ceil(ms / (60 * 1000));
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;

  if (days > 0) {
    return hours > 0 ? `${days} day(s) and ${hours} hour(s)` : `${days} day(s)`;
  }
  if (hours > 0) {
    return minutes > 0 ? `${hours} hour(s) and ${minutes} minute(s)` : `${hours} hour(s)`;
  }
  return `${minutes} minute(s)`;
}
