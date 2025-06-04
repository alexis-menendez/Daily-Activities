import { Router } from 'express';
import type { Request, Response } from 'express';
import { Driver, Car, License } from '../../models/index.js';

const router = Router();

// Get all drivers
router.get('/', async (_req: Request, res: Response) => {
  try {
    const drivers = await Driver.findAll({
      include: [{ model: Car }, { model: License }],
    });

    res.status(200).json(drivers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single driver

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const driver = await Driver.findByPk(req.params.id, {
      include: [{ model: Car }, { model: License }],
    });

    if (!driver) {
      res.status(404).json({ message: 'No driver found with this id!' });
      return;
    }

    res.status(200).json(driver);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
