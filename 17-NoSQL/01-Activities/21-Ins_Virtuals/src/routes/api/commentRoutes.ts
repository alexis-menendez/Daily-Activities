import { Router } from 'express';
const router = Router();

import { getComments, getSingleComment, createComment } from '../../controllers/commentController.js';

// /api/comments
router.route('/').get(getComments).post(createComment);

// /api/comments/:commentId
router.route('/:commentId').get(getSingleComment);

export default router;
