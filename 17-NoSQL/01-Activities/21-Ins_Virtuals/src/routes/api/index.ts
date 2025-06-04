import { Router } from 'express';
const router = Router();
import postRoutes from './postRoutes.js';
import commentRoutes from './commentRoutes.js';

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

export default router;
