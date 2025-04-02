import asyncHandler from "express-async-handler";
import userData from "../data/userData.js";

// Generate Discount Code
const generateDiscountCode = asyncHandler((req, res) => {
  const { userId, orderNumber } = req.body;

  // Check if the order qualifies for a discount
  const nthOrder = 5; // Every 5th order gets a discount
  if (orderNumber % nthOrder === 0) {
    const discountCode = `DISCOUNT${Math.floor(Math.random() * 10000)}`;
    const user = userData.find((user) => user.id === userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (!user.discountCodes) user.discountCodes = [];
    user.discountCodes.push(discountCode);

    res.status(200).json({ discountCode });
  } else {
    res.status(400).json({ message: "Order does not qualify for a discount" });
  }
});

// Admin Report
const getAdminReport = asyncHandler((req, res) => {
  let totalItems = 0;
  let totalAmount = 0;
  const discountCodes = [];
  let totalDiscountAmount = 0;

  userData.forEach((user) => {
    if (user.cart) {
      user.cart.forEach((item) => {
        totalItems += item.quantity;
        totalAmount += item.quantity * item.price;
      });
    }
    if (user.discountCodes) {
      discountCodes.push(...user.discountCodes);
      totalDiscountAmount += user.discountCodes.length * 10; // Assuming each discount is $10
    }
  });

  res.status(200).json({
    totalItems,
    totalAmount,
    discountCodes,
    totalDiscountAmount,
  });
});

export { generateDiscountCode, getAdminReport };
