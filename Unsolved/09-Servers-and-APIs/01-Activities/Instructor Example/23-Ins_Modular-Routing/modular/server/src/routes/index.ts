import tipRoutes from './tipRoutes.js';
import feedbackRoutes from './feedbackRoutes.js';
import express from 'express';
const router = express.Router();

router.use('/api/tips', tipRoutes);
router.use('/api/feedback', feedbackRoutes);

export default router;
