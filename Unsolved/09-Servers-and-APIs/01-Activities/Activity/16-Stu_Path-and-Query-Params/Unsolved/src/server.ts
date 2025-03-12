import express, { type Request, type Response } from 'express';

// Import sortData function
import sortData from './sortdata.js';

// import Term type
import type { Term } from './sortdata.js';

// Import the JSON data
import { readFileSync } from 'node:fs';
const termData: Term[] = JSON.parse(readFileSync('src/terms.json', 'utf8'));


const app = express();
const PORT = 3001;

// Call a helper function to sort the data into a new array so we don't mutate the original data
const sortHelper = (type: 'asc' | 'dsc') => {
  const sortedData = [...termData];
  sortedData.sort(sortData('term', 'relevance', type));
  return sortedData;
};

// TODO: Add a comment describing the functionality of this route

app.get('/api/terms/', (req: Request, res: Response) => {
  // TODO: Add a comment describing the req.query object

  const hasQuery = Object.keys(req.query).length > 0;

  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// TODO: Add a comment describing what this route will return

app.get('/api/term/:term', (req: Request, res: Response) => {
  // TODO: Add a comment describing the content of req.params in this instance

  const requestedTerm = req.params.term.toLowerCase();

  const term = termData.find((term) => term.term.toLowerCase() === requestedTerm);

  if (term) {
    return res.json(term);
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// TODO: Add a comment describing what this route will return

app.get('/api/terms/:category', (req: Request, res: Response) => {
  const requestedCategory = req.params.category.toLowerCase();

  const result = termData.filter((term) => term.category.toLowerCase() === requestedCategory);

  return res.json(result);
});

// TODO: Add a comment describing what this route will return

app.get('/api/categories', (_req: Request, res: Response) => {
  const categories = termData.map((term: Term) => term.category);

  const result = categories.filter(
    (cat: string, i: number) => categories.indexOf(cat) === i
  );

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
