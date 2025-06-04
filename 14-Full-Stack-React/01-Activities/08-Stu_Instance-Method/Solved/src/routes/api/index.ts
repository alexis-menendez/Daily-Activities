import { Router } from 'express';
import { userRouter } from './user-routes.js';

const router = Router();

// Prefix all routes defined in `user-routes.js` with `/users
router.use('/users', userRouter);

export default router;
