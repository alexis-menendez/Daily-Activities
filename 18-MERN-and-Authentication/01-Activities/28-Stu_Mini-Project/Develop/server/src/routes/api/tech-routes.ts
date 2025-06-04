import { Router } from 'express';
const router = Router();

import { getAllTech } from '../../controllers/tech-controller.js';

router.route('/').get(getAllTech);

export default router;
