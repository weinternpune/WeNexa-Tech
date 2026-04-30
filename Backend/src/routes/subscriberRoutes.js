import express from "express";
import {
  subscribe,
  unsubscribe,
  getSubscriberCount,
  getAllSubscribers,
} from "../controllers/subscriberController.js";
import validateSubscription from "../middleware/validation.js";

const router = express.Router();

router.post("/subscribe", validateSubscription, subscribe);
router.post("/unsubscribe", unsubscribe);
router.get("/subscribers/count", getSubscriberCount);
router.get("/subscribers", getAllSubscribers);

export default router;