import { Router } from 'express';
import type { Request, Response } from 'express';
import { Author } from '../../models/index.js';

const router = Router();

// TODO: GET all authors and associated data
router.get('/', async (_req: Request, res: Response) => {});

// TODO: GET a single author and associated data
router.get('/:id', async (req: Request, res: Response) => {});

// CREATE an author
router.post('/', async (req: Request, res: Response) => {
  try {
    const authorData = await Author.create(req.body);
    res.status(200).json(authorData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an author
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const authorData = await Author.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!authorData) {
      res.status(404).json({ message: 'No author found with that id!' });
      return;
    }

    res.status(200).json(authorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
