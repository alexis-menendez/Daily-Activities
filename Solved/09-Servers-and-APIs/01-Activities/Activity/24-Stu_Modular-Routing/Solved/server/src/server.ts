import express, { type Request, type Response } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import allRoutes from './routes/index.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../client/dist'));

app.use(allRoutes);

// This route is a GET route for the home page
app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// This view route is a GET route for the feedback page
app.get('/feedback', (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../../client/dist/feedback.html'))
);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
