import { Router } from 'express';
import { bookRouter } from './book-routes.js';

const router = Router();

// Prefix all routes defined in `bookRoutes.js` with `/books
router.use('/books', bookRouter);

export default router;
