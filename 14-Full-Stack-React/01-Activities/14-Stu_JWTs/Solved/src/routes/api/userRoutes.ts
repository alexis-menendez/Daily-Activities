import { Router } from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models/index.js';

const router = Router();

// CREATE a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const newUser = req.body;

    newUser.password = await bcrypt.hash(req.body.password, 10);

    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// ! We remove the `/login` route and move it to the `authRoutes.ts` file

export default router;
