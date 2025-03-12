import express, { type Request, type Response } from 'express';

// Import the JSON data
import { readFileSync } from 'node:fs';
const termData: Term[] = JSON.parse(readFileSync('src/terms.json', 'utf8'));

interface Term {
  term: string;
  definition: string;
  url: string;
}

const app = express();
const PORT = 3001;

// GET route to get all of the terms
app.get('/api/terms', (_req: Request, res: Response) => res.json(termData));

// GET route that returns any specific term
app.get('/api/terms/:term', (req: Request, res: Response) => {
  // Coerce the specific search term to lowercase
  const requestedTerm = req.params.term.toLowerCase();

  // Use the `.find()` array method to check if a term in the array matches `req.params.term`
  const term = termData.find((term) => term.term.toLowerCase() === requestedTerm);

  if (term) {
    return res.json(term);
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (_req: Request, res: Response) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
