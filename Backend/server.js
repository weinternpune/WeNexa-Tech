import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./src/config/database.js"
import subscriberRoutes from "./src/routes/subscriberRoutes.js"

dotenv.config();

const app = express();

// Connect to database
connectDb();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", subscriberRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});