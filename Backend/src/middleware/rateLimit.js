import rateLimit from "express-rate-limit";

// IP based rate limiter - 5 requests per hour per IP
export const ipLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many requests from your IP. Please try after 1 hour."
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false,
});

// Stricter limiter for OTP verification - 3 attempts per email per 24 hours
export const emailLimiter = (req, res, next) => {
  const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 3,
    keyGenerator: (req) => {
      return `email:${req.body.email}`;
    },
    message: {
      success: false,
      message: "You have exceeded maximum attempts (3). Please try after 24 hours."
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
  
  return limiter(req, res, next);
};

// Global limiter for all API routes - 100 requests per 15 minutes
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter limiter for sending OTP - 3 requests per hour per IP
export const otpSendLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: {
    success: false,
    message: "Too many OTP requests. Please try after 1 hour."
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Resend limiter - 2 resend requests per hour
export const resendLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 2,
  message: {
    success: false,
    message: "Too many resend attempts. Please try after 1 hour."
  },
  standardHeaders: true,
  legacyHeaders: false,
});