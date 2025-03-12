import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import historyService from '../../service/historyService.js';

router.get('/', async (_req, res) => {
  try {
    const savedStates = await HistoryService.getStates();
    res.json(savedStates);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(400).json({ msg: 'State id is required' });
    }
    await historyService.removeState(req.params.id);
    res.json({ success: 'State successfully removed from search history' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
