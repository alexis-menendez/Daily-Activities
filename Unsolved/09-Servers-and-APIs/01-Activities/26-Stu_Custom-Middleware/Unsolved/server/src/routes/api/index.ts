import tipRoutes from './tipsRoutes.js';
import feedbackRoutes from './feedbackRoutes.js';
import express from 'express';
const router = express.Router();

router.use('/tips', tipRoutes);
router.use('/feedback', feedbackRoutes);

export default router;
