import { Router } from 'express';
const router = Router();

import  {
  getAllMatchups,
  createMatchup,
  getMatchup,
  createVote,
} from '../../controllers/matchup-controller.js';

router.route('/').get(getAllMatchups);
router.route('/').post(createMatchup);
router.route('/:id').get(getMatchup);
router.route('/:id').put(createVote);

export default router;
