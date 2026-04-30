import { body, validationResult } from "express-validator";

const validateSubscription = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
      });
    }
    next();
  },
];

export default validateSubscription;