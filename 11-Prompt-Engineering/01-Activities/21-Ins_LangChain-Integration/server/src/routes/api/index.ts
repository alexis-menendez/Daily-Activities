import askRoutes from './askRoutes.js';
import express from 'express';
const router = express.Router();

router.use('/ask', askRoutes);

export default router;
