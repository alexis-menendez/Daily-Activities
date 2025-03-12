import translateRoutes from './translateRoutes.js';
import express from 'express';
const router = express.Router();

router.use('/translate', translateRoutes);

export default router;
