import { Router } from 'express';
import type { Request, Response } from 'express';
import { Reader, LibraryCard } from '../../models/index.js';

const router = Router();

// GET all cards
router.get('/', async (_req: Request, res: Response) => {
  try {
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

    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
