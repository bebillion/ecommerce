import express from "express";
import asyncHandler from "express-async-handler";
import userData from "../data/userData.js";

const router = express.Router();

// Save an order
router.post("/save", asyncHandler((req, res) => {
  const { userId, order } = req.body;

  const user = userData.find((user) => user.id === userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  if (!user.orders) user.orders = [];
  user.orders.push(order);

  res.status(201).json({ message: "Order saved successfully", orders: user.orders });
}));

// Get all orders for a user
router.get("/:userId", asyncHandler((req, res) => {
  const { userId } = req.params;

  const user = userData.find((user) => user.id === parseInt(userId));
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(200).json(user.orders || []);
}));

export default router;
