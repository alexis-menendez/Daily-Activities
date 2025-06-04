import { Request, Response } from 'express';
import Thought from '../models/Thought.js';

export const addComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { commentText } = req.body;
  try {
    const newComment = await Thought.findOneAndUpdate(
      { _id: id },
      {
        $addToSet: { comments: { commentText }},
      },
      {
        new: true,
        runValidators: true
      }
    );
    res.status(200).json(newComment);
  } catch (err: any) {
    res.status(500).json({message: err.message});
  }
}