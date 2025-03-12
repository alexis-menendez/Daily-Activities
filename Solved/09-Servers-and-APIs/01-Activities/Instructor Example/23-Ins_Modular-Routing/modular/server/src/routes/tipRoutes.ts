import express, { type Request, type Response } from 'express';
import TipService from '../service/TipService.js';
const router = express.Router();
// This API route ("/api/tips") is a GET Route for retrieving all the tips
router.get('/', async (req: Request, res: Response) => {
  console.info(`${req.method} request received for tips`);
  const data = await TipService.getTips();
  res.json(data);
});

// This API route ("/api/tips") is a POST Route for a new UX/UI tip
router.post('/', async (req: Request, res: Response) => {
  const { username, topic, tip } = req.body;
  if (req.body) {
    await TipService.addTip(username, topic, tip);
    res.json('Tip added successfully');
  } else {
    res.send('Error in adding tip');
  }
});
export default router;
