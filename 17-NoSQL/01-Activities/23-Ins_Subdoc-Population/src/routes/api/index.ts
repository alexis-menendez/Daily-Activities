import { Router } from 'express';
const router = Router();
import postRoutes from './postRoutes.js';
import userRoutes from './userRoutes.js';

router.use('/posts', postRoutes);
router.use('/users', userRoutes);

export default router;
