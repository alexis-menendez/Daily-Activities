import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

// This view route is a GET route for the feedback page
router.get('/feedback', (_req, res) =>
  res.sendFile(path.join(__dirname, '../../../client/dist/feedback.html'))
);

export default router;
