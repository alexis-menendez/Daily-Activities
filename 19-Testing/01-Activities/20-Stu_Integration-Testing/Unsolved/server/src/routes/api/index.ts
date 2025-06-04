import { Router } from 'express';
import thoughtRoutes from './thoughtRoutes.js';
import commentRoutes from './commentRoutes.js';
const router = Router();

router.use('/thought', thoughtRoutes);
router.use('/comment', commentRoutes);

export default router;