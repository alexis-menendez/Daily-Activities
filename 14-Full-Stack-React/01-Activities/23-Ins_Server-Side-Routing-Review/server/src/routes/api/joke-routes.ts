import express from 'express';
import type { Request, Response } from 'express';
import { Joke } from '../../models/index.js';  // Assuming Joke model is correctly imported


const router = express.Router();

// GET /jokes - Get all jokes
router.get('/', async (_req: Request, res: Response) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /jokes/:id - Get joke by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).json({ error: 'Joke not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /jokes - Create new joke
router.post('/', async (req: Request, res: Response) => {
  try {
    const newJoke = await Joke.create(req.body);
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT /jokes/:id - Update joke by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      await joke.update(req.body);
      res.status(200).json(joke);
    } else {
      res.status(404).json({ error: 'Joke not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE /jokes/:id - Delete joke by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      await joke.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Joke not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as jokeRouter };
