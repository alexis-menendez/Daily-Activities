import { Router } from 'express';
import type { Request, Response } from 'express';
import { Book, Author, Reader } from '../../models/index.js';

const router = Router();

// GET all books
router.get('/', async (_req: Request, res: Response) => {
  try {
    // ! find all books and perform a JOIN to include all associated Authors
    const bookData = await Book.findAll({
      include: [{ model: Author }, { model: Reader }],
    });
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single book
router.get('/:id', async (req: Request, res: Response) => {
  try {
    // ! find a single book by its `id` and perform a JOIN to include the associated Author and the readers of that book.
    const bookData = await Book.findByPk(req.params.id, {
      include: [{ model: Author }, { model: Reader }],
    });

    if (!bookData) {
      res.status(404).json({ message: 'No book found with that id!' });
      return;
    }

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a book
router.post('/', async (req: Request, res: Response) => {
  try {
    const bookData = await Book.create(req.body);
    res.status(200).json(bookData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a book
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const bookData = await Book.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!bookData) {
      res.status(404).json({ message: 'No book found with that id!' });
      return;
    }

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
