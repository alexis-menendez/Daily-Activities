import express from 'express';
import tipRoutes from './tipsRoutes.js';
import feedbackRoutes from './feedbackRoutes.js';

const router = express.Router();

router.use('/tips', tipRoutes);
router.use('/feedback', feedbackRoutes);

export default router;
