import { body, validationResult } from "express-validator";
import { ALLOWED_SERVICES } from "../utils/contactConstants.js";

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      code: "VALIDATION_ERROR",
      message: errors.array()[0].msg,
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      })),
    });
  }
  next();
};

export const validateContact = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Name must be at least 3 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),

  body("previousEmail")
    .optional({ values: "falsy" })
    .trim()
    .isEmail()
    .withMessage("Please enter a valid previous email address")
    .normalizeEmail(),

  body("countryCode")
    .optional({ values: "falsy" })
    .trim()
    .matches(/^\+[0-9]{1,4}$/)
    .withMessage("Please select a valid country code"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .customSanitizer((value) => String(value || "").replace(/\s/g, ""))
    .custom((value, { req }) => {
      const countryCode = req.body.countryCode || "+91";
      const phoneRules = {
        "+91": /^[6-9]\d{9}$/,
        "+1": /^\d{10}$/,
        "+44": /^\d{10}$/,
      };

      const rule = phoneRules[countryCode] || /^[0-9]{10,15}$/;
      return rule.test(value);
    })
    .withMessage("Please enter a valid phone number"),

  body("company")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 150 })
    .withMessage("Company name must be under 150 characters"),

  body("service")
    .trim()
    .notEmpty()
    .withMessage("Service selection is required")
    .isIn(ALLOWED_SERVICES)
    .withMessage("Please select a valid service"),

  body("budget")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 100 })
    .withMessage("Budget selection is invalid"),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 10, max: 5000 })
    .withMessage("Message must be between 10 and 5000 characters"),

  handleValidationErrors,
];

export const validateVerifyOtp = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),

  body("otp")
    .trim()
    .notEmpty()
    .withMessage("Verification code is required")
    .isLength({ min: 6, max: 6 })
    .withMessage("Please enter the 6-digit verification code")
    .matches(/^\d{6}$/)
    .withMessage("Verification code must contain only numbers"),

  handleValidationErrors,
];

export const validateResendOtp = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),

  handleValidationErrors,
];

export const validateChangeOtpEmail = [
  body("previousEmail")
    .trim()
    .notEmpty()
    .withMessage("Current email is required")
    .isEmail()
    .withMessage("Please enter a valid current email address")
    .normalizeEmail(),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("New email is required")
    .isEmail()
    .withMessage("Please enter a valid new email address")
    .normalizeEmail(),

  handleValidationErrors,
];

export const validateSubscription = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg
      });
    }
    next();
  }
];
