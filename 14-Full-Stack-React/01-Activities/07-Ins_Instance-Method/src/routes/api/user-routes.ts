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
  const { username, email, password, numberOfPets } = req.body;
  try {
    const newUser = await User.create({ username, email, password, numberOfPets });
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

// GET /Users/:id/hasPets
export const hasPets = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // First, we find a user using their primary key (provided by params)
    const user = await User.findByPk(id);
    if (user) {
      // If a user does exist at the primary key, we get to use the instance method that we wrote in User.js to see if the user has pets
      const petData = user.hasPets();
      // If petData evaluates as false (user has 0 pets), then the user will receive the message below
      if (!petData) {
        res.status(200).json({ message: 'This user has no pets.' });
        return;
      }
      // Otherwise, the user will see that the user that they searched does have pets!
      res.status(200).json({ message: 'This user has pets!' });
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

// GET /users/:id/hasPets - Gets a user by id and checks if they have pets
router.get('/:id/hasPets', hasPets);

export { router as userRouter };
