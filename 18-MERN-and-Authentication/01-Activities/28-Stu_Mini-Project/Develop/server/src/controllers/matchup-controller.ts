import Matchup from '../models/Matchup.js';
import { Request, Response } from 'express';

export async function createMatchup({ body }: { body: {tech1: string, tech2: string} }, res: Response) {
  const matchup = await Matchup.create(body);

  if (!matchup) {
    return res.status(400).json({ message: 'Unable to create matchup' });
  }

  return res.status(200).json(matchup);
}

export async function createVote(req: Request, res: Response) {
  const vote = await Matchup.findOneAndUpdate(
    { _id: req.body.id },
    { $inc: { [`tech${req.body.techNum}_votes`]: 1 } },
    { new: true }
  );

  if (!vote) {
    return res.status(400).json({ message: 'Unable to vote on matchup' });
  }

  return res.status(200).json(vote);
}

export async function getAllMatchups(_req: Request, res: Response) {
  const allMatchups = await Matchup.find({});

  if (!allMatchups) {
    return res.status(400).json({ message: 'No matchups found' });
  }

  return res.status(200).json(allMatchups);
}

export async function getMatchup({ params }: { params: { id: string } }, res: Response) {
  const matchup = await Matchup.findOne({ _id: params.id });

  if (!matchup) {
    return res.status(400).json({ message: 'No matchup found by that id' });
  }

  return res.status(200).json(matchup);
}
