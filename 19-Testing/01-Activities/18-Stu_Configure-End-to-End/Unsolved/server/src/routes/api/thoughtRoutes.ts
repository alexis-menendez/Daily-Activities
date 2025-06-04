import { Router } from 'express';
import { getAllThoughts, getSingleThought, createThought } from '../../controllers/thought-controller.js';
const router = Router();

router.get('/', getAllThoughts);

router.get('/:id', getSingleThought);

router.post('/', createThought);

export default router;
