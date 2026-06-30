import express from "express";
import {
  subscribe,
  unsubscribe,
  getSubscriberCount,
  getAllSubscribers,
} from "../controllers/subscriberController.js";
import { validateSubscription } from "../middleware/validation.js";
import { globalLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

router.use(globalLimiter);

router.post("/subscribe", validateSubscription, subscribe);
router.post("/unsubscribe", unsubscribe);
router.get("/subscribers/count", getSubscriberCount);
router.get("/subscribers", getAllSubscribers);

export default router;
