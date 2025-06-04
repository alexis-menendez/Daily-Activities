import { Router } from 'express';
const router = Router();
import { getTags, getSingleTag, createTag } from '../../controllers/tagController.js';

// /api/tags
router.route('/').get(getTags).post(createTag);

// /api/tags/:tagId
router.route('/:tagId').get(getSingleTag);

export default router;
