import { Router } from 'express';
import { addComment } from '../../controllers/comment-controller.js';
const router = Router();

router.post('/:id', addComment);

export default router;
