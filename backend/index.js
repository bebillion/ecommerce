import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import dataRoutes from './routes/dataRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes); // Updated to use dataRoutes
app.use('/api/cart', cartRoutes);
app.use('/api/admin', adminRoutes); // Add admin routes
app.use('/api/orders', orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || "Server Error" });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});