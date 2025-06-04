import { Router } from 'express';
const router = Router();

import { getSinglePost, getPosts, createPost } from '../../controllers/postController.js';

router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getSinglePost);
export default router;
