import express, { type Request, type Response } from 'express';
import TipService from '../../service/TipService.js';
const router = express.Router();
// This API route is a GET Route for retrieving all the tips
router.get('/', (_req: Request, res: Response) => {
  TipService.getTips().then((data) => res.json(data));
});

// This API route is a POST Route for a new UX/UI tip
router.post('/', async (req: Request, res: Response) => {
  const { username, topic, tip } = req.body;
  if (req.body) {
    await TipService.addTip(username, topic, tip);
    res.json(`Tip added successfully`);
  } else {
    res.send('Error in adding tip');
  }
});
export default router;
