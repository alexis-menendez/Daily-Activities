import { Router } from 'express';
import type { Request, Response } from 'express';
import { Reader, LibraryCard } from '../../models/index.js';

const router = Router();

// GET all cards
router.get('/', async (_req: Request, res: Response) => {
  try {
    // ! find all library cards and perform a JOIN to include all associated Readers
    const libraryCardData = await LibraryCard.findAll({
      include: [{ model: Reader }],
    });
    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single card
router.get('/:id', async (req: Request, res: Response) => {
  try {
    // ! find a single library card by its `id` and include the associated Reader
    const libraryCardData = await LibraryCard.findByPk(req.params.id, {
      include: [{ model: Reader }],
    });

    if (!libraryCardData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a card
router.post('/', async (req: Request, res: Response) => {
  try {
    // ! Since the model will create a unique UUID value by default, we just need to provide the `id` of the Reader that will own this card
    const locationData = await LibraryCard.create({
      ...req.body,
      readerId: req.body.readerID
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a card
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const libraryCardData = await LibraryCard.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!libraryCardData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json({ data: libraryCardData, message: 'Library Card was successfully deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
