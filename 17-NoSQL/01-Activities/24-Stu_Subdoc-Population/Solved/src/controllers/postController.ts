import { Post } from '../models/index.js';
import { Request, Response } from 'express';

  export const getPosts = async (_req: Request, res: Response) => {
    try {
      const posts = await Post.find()
        .populate({ path: 'tags', select: '-__v' });

      res.json(posts);
    } catch (err) {
      console.error({ message: err });
      res.status(500).json(err);
    }
  }

  export const getSinglePost = async (req: Request, res: Response) => {
    try {
      const post = await Post.findOne({ _id: req.params.postId })
        .populate({ path: 'tags', select: '-__v' });

      if (!post) {
         res.status(404).json({ message: 'No post with that ID' });
      } else {
        res.json(post);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // create a new post
  export const createPost = async (req: Request, res: Response) => {
    try {
      const post = await Post.create(req.body);
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

