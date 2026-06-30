import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./src/config/database.js";
import { verifyEmailTransport } from "./src/config/emailConfig.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import subscriberRoutes from "./src/routes/subscriberRoutes.js";

dotenv.config();

const app = express();

connectDb();
verifyEmailTransport();

app.use(cors({
  origin: process.env.FRONTEND_URL || true,
  credentials: true,
}));
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", contactRoutes);
app.use("/api", subscriberRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date() });
});

app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later."
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email service ready`);
  console.log(`Rate limiting active`);
});
