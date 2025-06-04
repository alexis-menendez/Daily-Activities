import { Router } from "express";
import driverRoutes from './driverRoutes.js';

const router = Router();

router.use('/drivers', driverRoutes);

export default router;
