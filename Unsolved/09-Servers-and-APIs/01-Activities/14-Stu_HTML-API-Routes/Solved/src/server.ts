import express, { type Request, type Response } from 'express';

// Import the JSON data
import { readFileSync } from 'node:fs';
const termData = JSON.parse(readFileSync('src/terms.json', 'utf8'));

const app = express();
const PORT = 3001;

app.get('/', (_req: Request, res: Response) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (_req: Request, res: Response) => res.json(termData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
