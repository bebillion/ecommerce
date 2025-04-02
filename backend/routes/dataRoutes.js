import express from 'express';
import { getAllData } from '../controllers/data.js';

const router = express.Router();

// Route to get all data
router.get('/', getAllData);

export default router;
