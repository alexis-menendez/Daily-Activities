import { Router } from 'express';
const router = Router();

import parkRoutes from './parkRoutes.js';
import historyRoutes from './historyRoutes.js';

router.use('/parks', parkRoutes);
router.use('/history', historyRoutes);

export default router;
