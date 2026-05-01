import express from "express";
import {
  submitContactForm,
  getAllContacts,
  updateContactStatus
} from "../controllers/contactController.js";
import { validateContact } from "../middleware/validation.js";

const router = express.Router();

router.post("/contact", validateContact, submitContactForm);
router.get("/contacts", getAllContacts);
router.put("/contacts/:id/status", updateContactStatus);

export default router;
