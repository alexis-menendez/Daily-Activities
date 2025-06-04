import { Request, Response } from 'express';
import Thought from '../models/Thought.js';

export const getAllThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find().sort({ createdAt: -1 });
    res.json(thoughts);
  } catch(err: any) {
    res.status(500).json({message: err.message});
  }
};

export const getSingleThought = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const thought = await Thought.findOne({ _id: id });
    if(thought) {
      res.json(thought);
    } else {
      res.status(404).json({ message: 'Thought not found' });
    }
  } catch(err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createThought = async(req: Request, res: Response) => {
  const { thoughtText, thoughtAuthor } = req.body;
  try {
    const newThought = await Thought.create({
      thoughtText,
      thoughtAuthor
    });

    res.status(201).json(newThought);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
