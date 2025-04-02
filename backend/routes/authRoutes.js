import  express from "express"
import { registerUser, loginUser, getUserProfile } from "../controllers/authController.js";
//import { protect } from "../middleware/authMiddleware"

const router = express.Router();
// Route to register a new user
router.post("/register", registerUser);

// Route to log in a user
router.post("/login", loginUser);

// Route to get the logged-in user's profile (protected route)
//router.get("/profile", protect, getUserProfile);

export default router;