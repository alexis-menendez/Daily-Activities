import { Post } from '../models/index.js';
import { Request, Response } from 'express';


  export const getPosts = async (_req: Request, res: Response) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  export const getSinglePost = async (req: Request, res: Response) => {
    try {
      const post = await Post.findOne({ _id: req.params.postId });

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
  export const createPost = async(req: Request, res: Response) => {
    try {
      const dbPostData = await Post.create(req.body);
      res.json(dbPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
