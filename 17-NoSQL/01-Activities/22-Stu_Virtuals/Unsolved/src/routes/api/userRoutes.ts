import { Router } from 'express';
const router = Router();
import { createUser, getUsers, getSingleUser } from '../../controllers/userController.js';

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

export default router;
