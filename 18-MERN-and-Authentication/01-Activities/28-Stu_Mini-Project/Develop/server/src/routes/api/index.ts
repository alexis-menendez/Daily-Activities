import { Router } from 'express';
import matchupRoutes from './matchup-routes.js';
import techRoutes from './tech-routes.js';

const router = Router();

router.use('/matchup', matchupRoutes);
router.use('/tech', techRoutes);

export default router;
