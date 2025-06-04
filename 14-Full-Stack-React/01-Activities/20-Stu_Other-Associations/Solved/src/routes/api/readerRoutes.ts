import { Router } from 'express';
import type { Request, Response } from 'express';
import { Reader, LibraryCard, Book } from '../../models/index.js';

const router = Router();

// GET all readers
router.get('/', async (_req: Request, res: Response) => {
  try {
    const readerData = await Reader.findAll({
      // ! This will retrieve every Reader's associated LibraryCard data. In SQL, this would be a JOIN function. It also retrieves the associated Book data.
      include: [{ model: LibraryCard }, { model: Book }],
    });
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single reader
router.get('/:id', async (req: Request, res: Response) => {
  try {
    // ! This will retrieve a single Reader's associated LibraryCard and Book data.
    const readerData = await Reader.findByPk(req.params.id, {
      include: [{ model: LibraryCard }, { model: Book }],
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a reader
router.post('/', async (req: Request, res: Response) => {
  try {
    const readerData = await Reader.create(req.body);
    res.status(200).json(readerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a reader
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const readerData = await Reader.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
