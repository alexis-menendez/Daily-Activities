import { Router, Request, Response } from 'express';
import { Book } from '../../models/index.js';

export const getAllBooks = async (_req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const router = Router();

// GET /books - Get all books
router.get('/', getAllBooks);

export { router as bookRouter };
