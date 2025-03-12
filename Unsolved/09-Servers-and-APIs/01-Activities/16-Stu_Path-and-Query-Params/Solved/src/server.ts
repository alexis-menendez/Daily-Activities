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

// GET route to get all of the terms or all the terms sorted in ascending or descending order
app.get('/api/terms/', (req: Request, res: Response) => {
  // Check and see if there is a query parameter at all
  const hasQuery = Object.keys(req.query).length > 0;

  // If we have a query of 'sort' and it's value is 'dsc' send the results in descending order
  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  // If we have a query of 'sort' and it's value is 'asc' send the results in ascending order
  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter or the value of 'sort' is invalid, return terms
  return res.json(termData);
});

// GET route that returns any specific term
app.get('/api/term/:term', (req: Request, res: Response) => {
  const requestedTerm = req.params.term.toLowerCase();

  // Use the `.find()` array method to check if a term in the array matches `req.params.term`
  const term = termData.find((term) => term.term.toLowerCase() === requestedTerm);

  if (term) {
    return res.json(term);
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// GET route for returning all terms from a given category
app.get('/api/terms/:category', (req: Request, res: Response) => {
  const requestedCategory = req.params.category.toLowerCase();

  const result = termData.filter((term) => term.category.toLowerCase() === requestedCategory);

  return res.json(result);
});

app.get('/api/categories', (_req: Request, res: Response) => {
  // Make an array with all the categories
  const categories = termData.map((term: Term) => term.category);

  // Filter duplicate categories from the array
  const result = categories.filter(
    (cat: string, i: number) => categories.indexOf(cat) === i
  );

  // Return the result
  return res.json(result);
});

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
