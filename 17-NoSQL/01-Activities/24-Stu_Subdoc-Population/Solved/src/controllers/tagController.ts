import { Tags, Post } from '../models/index.js';
import { Request, Response } from 'express';


export const getTags = async (_req: Request, res: Response) => {
  try {
    const tags = await Tags.find({})
      .select('-__v');
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
}

export const getSingleTag = async (req: Request, res: Response) => {
  try {
    const tag = await Tags.findOne({ _id: req.params.tagId })
      .select('-__v');

    if (!tag) {
      res.status(404).json({ message: 'No tag with that ID' });
    } else {
      res.json(tag);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

// create a new tag
export const createTag = async (req: Request, res: Response) => {
  try {
    const tag = await Tags.create(req.body);
    const post = await Post.findOneAndUpdate(
      { _id: req.body.postId },
      { $addToSet: { tags: tag._id } },
      { new: true }
    );

    if (!post) {
      res
        .status(404)
        .json({ message: 'Tag created, but found no post with that ID' });
    } else {
      res.json('Created the tag 🎉');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
