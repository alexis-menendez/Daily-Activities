import { Application, User } from '../models/index.js';
import { Request, Response } from 'express';


  // TODO: Add comments to the functionality of the getApplications method
  export const getApplications = async (_req: Request, res: Response) => {
    try {
      const applications = await Application.find();
      res.json(applications);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // TODO: Add comments to the functionality of the getSingleApplication method
  export const getSingleApplication = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOne({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with that ID' });
      }

      res.json(application);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

// TODO: Add comments to the functionality of the createApplication method
  export const createApplication = async (req: Request, res: Response) => {
    try {
      const application = await Application.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { applications: application._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created, but found no user with that ID',
        })
      }

      res.json('Created the application 🎉');
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      return;
    }
  }
  
  // TODO: Add comments to the functionality of the updateApplication method
  export const updateApplication = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      return;
    }
  }

  // TODO: Add comments to the functionality of the deleteApplication method
  export const deleteApplication = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndDelete({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      const user = await User.findOneAndUpdate(
        { applications: req.params.applicationId },
        { $pull: { applications: req.params.applicationId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created but no user with this id!',
        });
      }

      res.json({ message: 'Application successfully deleted!' });
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

   // TODO: Add comments to the functionality of the addTag method
  export const addTag = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $addToSet: { tags: req.body } },
        { runValidators: true, new: true }
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

  // TODO: Add comments to the functionality of the addTag method
  export const removeTag = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $pull: { tags: { tagId: req.params.tagId } } },
        { runValidators: true, new: true }
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

