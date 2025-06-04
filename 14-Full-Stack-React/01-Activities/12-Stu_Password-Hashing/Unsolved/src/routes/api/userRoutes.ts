import { Router } from "express";
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models/index.js';

const router = Router();

// CREATE a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    // ! hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 10);
    // ! create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: Add comments describing the functionality of this `login` route
router.post('/login', async (req: Request, res: Response) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

