import apiRoutes from './api/index.js';
import htmlRoutes from './htmlRoutes.js';
import express from 'express';
const router = express.Router();

router.use('/api', apiRoutes);
router.use(htmlRoutes);

export default router;
