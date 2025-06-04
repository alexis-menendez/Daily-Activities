import { Post, User } from '../models/index.js';
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
      res.status(500).json(err)
    }
  }

  // create a new post
  export const createPost = async (req: Request, res: Response) => {
    try {
      const post = await Post.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { posts: post._id } },
        { new: true }
      );

      if (!user) {
         res
          .status(404)
          .json({ message: 'Post created, but found no user with that ID' });
      } else {  
        res.json('Created the post 🎉');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

