import feedbackRoutes from './feedbackRoutes.js';
import express from 'express';
const router = express.Router();

router.use('/feedback', feedbackRoutes);

export default router;
