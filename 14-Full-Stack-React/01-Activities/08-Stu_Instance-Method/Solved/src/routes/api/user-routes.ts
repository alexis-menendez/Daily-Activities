import { Router, Request, Response } from 'express';
import { User } from '../../models/index.js';

// GET /Users/:id
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] }
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /Users
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password, firstname, lastname } = req.body;
  try {
    const newUser = await User.create({ username, email, password, firstname, lastname});
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /Users/:id
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.username = username;
      user.password = password;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// GET /Users/:id/fullname
export const getFullname = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // First, we find a user using their primary key (provided by params)
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json({ fullname: `${user.getFullname()}` });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const router = Router();

// GET /users/:id - Get a user by id
router.get('/:id', getUserById);

// POST /users - Create a new user
router.post('/', createUser);

// PUT /users/:id - Update a user by id
router.put('/:id', updateUser);

// GET /users/:id/fullname - Gets a user by id and displays their full name
router.get('/:id/fullname', getFullname);

export { router as userRouter };
