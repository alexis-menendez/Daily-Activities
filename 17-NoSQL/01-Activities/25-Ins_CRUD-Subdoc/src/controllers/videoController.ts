import { Video, User } from '../models/index.js';
import { Request, Response } from 'express';


  export const getVideos = async (_req: Request, res: Response) => {
    try {
      const videos = await Video.find();
      res.json(videos);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  export const getSingleVideo = async (req: Request, res: Response) => {
    try {
      const video = await Video.findOne({ _id: req.params.videoId })
  
      if (!video) {
        return res.status(404).json({ message: 'No video with that ID' });
      }
  
      res.json(video);
      return; 
    } catch (err) {
      res.status(500).json(err);
    }
  
    return;
  }

  // create a new video
  export const createVideo = async (req: Request, res: Response) => {
    try {
      const video = await Video.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { videos: video._id } },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({
          message: 'Video created, but found no user with that ID',
        });
      }
  
      res.json('Created the video 🎉');
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  
    return;
  }

  export const updateVideo = async (req: Request, res: Response) => {
    try {
      const video = await Video.findOneAndUpdate(
        { _id: req.params.videoId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
  
      if (!video) {
        return res.status(404).json({ message: 'No video with this id!' });
      }
  
      res.json(video);
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      return; 
    }
  }

  export const deleteVideo = async (req: Request, res: Response) => {
    try {
      const video = await Video.findOneAndDelete({ _id: req.params.videoId });
  
      if (!video) {
        return res.status(404).json({ message: 'No video with this id!' });
      }
  
      const user = await User.findOneAndUpdate(
        { videos: req.params.videoId },
        { $pull: { videos: req.params.videoId } },
        { new: true }
      );
  
      if (!user) {
        return res
          .status(404)
          .json({ message: 'Video created but no user with this id!' });
      }
  
      res.json({ message: 'Video successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  
    return; 
  }

  // Add a video response
  export const addVideoResponse = async (req: Request, res: Response) => {
    try {
      const video = await Video.findOneAndUpdate(
        { _id: req.params.videoId },
        { $addToSet: { responses: req.body } },
        { runValidators: true, new: true }
      );

      if (!video) {
        return res.status(404).json({ message: 'No video with this id!' });
      }

      res.json(video);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

  // Remove video response
  export const removeVideoResponse = async (req: Request, res: Response) => {
    try {
      const video = await Video.findOneAndUpdate(
        { _id: req.params.videoId },
        { $pull: { reactions: { responseId: req.params.responseId } } },
        { runValidators: true, new: true }
      )

      if (!video) {
        return res.status(404).json({ message: 'No video with this id!' });
      }

      res.json(video);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }
