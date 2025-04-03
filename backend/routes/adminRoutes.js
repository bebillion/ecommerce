import express from "express";
import { generateDiscountCode, getAdminReport } from "../controllers/admin.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Generate Discount Code
router.post("/generate-discount", protectAdmin, generateDiscountCode);

// Admin Report
router.get("/report", protectAdmin, getAdminReport);

export default router;
