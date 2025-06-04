import { Router } from 'express';
const router = Router();
import postRoutes from './postRoutes.js';
import tagRoutes from './tagRoutes.js';

router.use('/posts', postRoutes);
router.use('/tags', tagRoutes);

export default router;
