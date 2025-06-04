import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req: Request, res: Response) => {
    //TODO: Get all the Users out of the database and send them to the client as a response
});

export { router as userRouter };
