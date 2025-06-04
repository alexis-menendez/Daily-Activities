import { Router } from "express";
import readerRoutes from "./readerRoutes.js";
import libraryCardRoutes from "./libraryCardRoutes.js";

const router = Router();

router.use('/readers', readerRoutes);
router.use('/cards', libraryCardRoutes);


export default router;
