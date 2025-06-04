import { Router } from 'express';
const router = Router();

import { getApplications, getSingleApplication, createApplication, updateApplication, deleteApplication, addTag, removeTag } from '../../controllers/appController.js';

// /api/applications
router.route('/').get(getApplications).post(createApplication);

// /api/applications/:applicationId
router
  .route('/:applicationId')
  .get(getSingleApplication)
  .put(updateApplication)
  .delete(deleteApplication);

// /api/applications/:applicationId/tags
router.route('/:applicationId/tags').post(addTag);

// /api/applications/:applicationId/tags/:tagId
router.route('/:applicationId/tags/:tagId').delete(removeTag);

export default router;
