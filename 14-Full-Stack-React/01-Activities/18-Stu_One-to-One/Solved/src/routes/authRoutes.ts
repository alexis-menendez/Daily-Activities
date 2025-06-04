import { Router, type Request, type Response } from 'express';
import { Reader } from '../models/index.js';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const user = await Reader.findOne({
    where: { name },
  });

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await user.checkPassword(password);;
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ name }, secretKey, { expiresIn: '1h' });

  return res.json({ token });

}

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
