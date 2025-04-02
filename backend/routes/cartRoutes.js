import express from 'express';
import asyncHandler from 'express-async-handler';
import userData from '../data/userData.js';
import products from '../data/products.json' assert { type: 'json' };

const router = express.Router();

// Add item to cart
router.post('/add', asyncHandler((req, res) => {
  const { userId, productId, quantity } = req.body;

  console.log('Add to Cart Request:', { userId, productId, quantity }); // Debug log

  const user = userData.find((user) => user.id === userId);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  if (!user.cart) user.cart = [];
  const existingItem = user.cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    user.cart.push({ productId, quantity });
  }

  // Include product details in the cart response
  const cartWithDetails = user.cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return {
      ...item,
      name: product.name,
      price: product.price,
      image: product.image,
    };
  });

  console.log('Updated Cart:', cartWithDetails); // Debug log

  res.status(200).json({ cart: cartWithDetails });
}));

// Update cart
router.post('/update', asyncHandler((req, res) => {
  const { userId, cart } = req.body;

  console.log('Update Cart Request:', { userId, cart }); // Debug log

  const user = userData.find((user) => user.id === userId);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  user.cart = cart; // Update the user's cart

  // Include product details in the cart response
  const cartWithDetails = user.cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return {
      ...item,
      name: product.name,
      price: product.price,
      image: product.image,
    };
  });

  console.log('Updated Cart:', cartWithDetails); // Debug log

  res.status(200).json({ cart: cartWithDetails });
}));

export default router;
