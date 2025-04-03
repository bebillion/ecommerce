import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import userData from "../data/userData.js";
import dotenv from "dotenv";

dotenv.config();

// Middleware to protect admin routes
const protectAdmin = asyncHandler((req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = userData.find((user) => user.id === decoded.id);

    if (!user || user.email !== "admin@example.com") {
      res.status(403);
      throw new Error("Not authorized as admin");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, token failed");
  }
});

export { protectAdmin };
