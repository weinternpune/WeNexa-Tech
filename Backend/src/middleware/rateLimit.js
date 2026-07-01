import rateLimit from "express-rate-limit";

const buildRateLimitHandler = (code, message, windowMs) => (req, res) => {
  const retryAfter = new Date(Date.now() + windowMs).toISOString();
  res.status(429).json({
    success: false,
    code,
    message,
    retryAfter,
    remainingMs: windowMs,
  });
};

export const ipLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 30,
  handler: buildRateLimitHandler(
    "IP_LIMIT",
    "Too many requests from your IP. Please try again later.",
    60 * 60 * 1000
  ),
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false,
});

export const emailLimiter = (req, res, next) => {
  const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 3,
    keyGenerator: (req) => `email:${req.body.email}`,
    handler: buildRateLimitHandler(
      "OTP_ATTEMPTS_EXCEEDED",
      "You have exceeded maximum attempts (3). Please try again after 24 hours.",
      24 * 60 * 60 * 1000
    ),
    standardHeaders: true,
    legacyHeaders: false,
  });

  return limiter(req, res, next);
};

export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: buildRateLimitHandler(
    "RATE_LIMIT",
    "Too many requests. Please try again later.",
    15 * 60 * 1000
  ),
  standardHeaders: true,
  legacyHeaders: false,
});

export const otpSendLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  handler: buildRateLimitHandler(
    "OTP_SEND_LIMIT",
    "Too many OTP requests. Please try again after 1 hour.",
    60 * 60 * 1000
  ),
  standardHeaders: true,
  legacyHeaders: false,
});

export const resendLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  keyGenerator: (req) => `resend:${String(req.body.email || "").trim().toLowerCase()}`,
  handler: buildRateLimitHandler(
    "RESEND_LIMIT",
    "Too many resend attempts. Please wait before requesting another code.",
    60 * 60 * 1000
  ),
  standardHeaders: true,
  legacyHeaders: false,
});

export const contactSubmitLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 3,
  keyGenerator: (req) => `contact:${String(req.body.email || "").trim().toLowerCase()}`,
  handler: buildRateLimitHandler(
    "CONTACT_SUBMIT_LIMIT",
    "You have reached the maximum of 3 submissions in 24 hours. Please try again tomorrow.",
    24 * 60 * 60 * 1000
  ),
  standardHeaders: true,
  legacyHeaders: false,
});
