import { Post, Comment } from '../models/index.js';
import { Request, Response } from 'express';


  export const getComments = async (_req: Request, res: Response) => {
    try {
      const comment = await Comment.find();
      res.json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // Get a single comment
  export const getSingleComment = async (req: Request, res: Response) => {
    try {
      const comment = await Comment.findOne({ _id: req.params.commentId });

      if (!comment) {
        res.status(404).json({ message: 'No comment found with that id' });
      } else {
        res.json(comment);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // Create a comment
  export const createComment = async (req: Request, res: Response) => {
    try {
      const comment = await Comment.create(req.body);
      const post = await Post.findOneAndUpdate(
        { _id: req.body.postId },
        { $push: { comments: comment._id } },
        { new: true }
      );

      if (!post) {
        res
          .status(404)
          .json({ message: 'comment created, but no posts with this ID' });
      } else {
        res.json({ message: 'comment created' });
      }


    } catch (err) {
      console.error(err);
    }
  }

