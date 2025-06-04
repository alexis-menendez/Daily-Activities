import { Router } from "express";
import readerRoutes from "./readerRoutes.js";
import libraryCardRoutes from "./libraryCardRoutes.js";
import authorRoutes from "./authorRoutes.js";
import bookRoutes from "./bookRoutes.js";

const router = Router();

router.use('/readers', readerRoutes);
router.use('/cards', libraryCardRoutes);
router.use('/authors', authorRoutes);
router.use('/books', bookRoutes);


export default router;
