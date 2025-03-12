import summarizeRoutes from './summarizeRoutes.js';
import express from 'express';
const router = express.Router();

router.use('/summarize', summarizeRoutes);

export default router;
