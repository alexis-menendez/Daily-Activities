import Tech from '../models/Tech.js';
import { Request, Response } from 'express';


export async function getAllTech(_req: Request, res: Response) {
  const allTech = await Tech.find({});

  if (!allTech) {
    return res.status(400).json({ message: 'No technologies found' });
  }
  return res.status(200).json(allTech);
}
