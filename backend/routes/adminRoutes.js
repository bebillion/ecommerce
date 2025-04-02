import express from "express";
import { generateDiscountCode, getAdminReport } from "../controllers/admin.js";

const router = express.Router();

// Generate Discount Code
router.post("/generate-discount", generateDiscountCode);

// Admin Report
router.get("/report", getAdminReport);

export default router;
