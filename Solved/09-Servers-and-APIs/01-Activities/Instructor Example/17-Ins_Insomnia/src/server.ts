import express, { type Request, type Response } from 'express';

// Import the JSON data
import { readFileSync } from 'node:fs';
const termData: Term[] = JSON.parse(readFileSync('src/terms.json', 'utf8'));

// interface that defines the shape of the term object
interface Term {
  id: number;
  term: string;
  definition: string;
  url: string;
}

// Variable to keep track of the next ID to be assigned
let nextId = termData.length + 1;

const app = express();
const PORT = 3001;

// Middleware for parsing JSON and URLencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route to get all of the terms
app.get('/api/terms', (_req: Request, res: Response) => res.json(termData));

// GET route that returns any specific term based on the ID provided
app.get('/api/terms/:id', (req: Request, res: Response) => {
  const requestedId = Number.parseInt(req.params.id);

  // Use the `.find()` array method to iterate through the terms to check if it matches `req.params.id`
  const term = termData.find((term) => term.id === requestedId);

  if (term) {
    return res.json(term);
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});

// POST route to add a new term to the termData array
app.post('/api/terms', (req: Request, res: Response) => {
  const newTerm: Term = {
    id: nextId,
    term: req.body.term,
    definition: req.body.definition,
    url: req.body.url,
  };
  termData.push(newTerm);
  nextId++;
  res.json(newTerm);
});

// PUT route to update a term based on the ID provided
app.put('/api/terms/:id', (req: Request, res: Response) => {
  const requestedId = Number.parseInt(req.params.id);

  // Find the index of the term in the termData array
  const termIndex = termData.findIndex((term) => term.id === requestedId);

  if (termIndex !== -1) {
    // Create a new updated term object using the spread operator
    const updatedTerm: Term = {
      ...termData[termIndex],
      ...req.body,
    };

    // Update the term in the termData array
    termData[termIndex] = updatedTerm;

    return res.json(updatedTerm);
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});

// DELETE route to delete a term based on the ID provided
app.delete('/api/terms/:id', (req: Request, res: Response) => {
  const requestedId = Number.parseInt(req.params.id);

  // Find the index of the term in the termData array
  const termIndex = termData.findIndex((term) => term.id === requestedId);

  if (termIndex !== -1) {
    // Remove the term from the termData array using splice
    termData.splice(termIndex, 1);
    return res.json('Term deleted');
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
