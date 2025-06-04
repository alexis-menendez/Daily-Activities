import { Router } from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';

const router = Router();

// CREATE a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
