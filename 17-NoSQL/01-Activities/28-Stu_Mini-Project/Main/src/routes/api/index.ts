import { Router } from 'express';
import { courseRouter } from './courseRoutes.js';
import { studentRouter } from './studentRoutes.js';

const router = Router();

router.use('/courses', courseRouter);
router.use('/students', studentRouter);

export default router;
