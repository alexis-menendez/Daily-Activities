import express from 'express';
import db from './config/connection.js';
// Require model
import { Genre } from './models/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new document
app.post('/genres', (req, res) => {
  const newGenre = new Genre({ name: req.body.name });
  newGenre.save();
  if (newGenre) {
    res.status(200).json(newGenre);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Finds all documents
app.get('/genres', async (_req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await Genre.find({});
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Find the first document that matches and return it.
app.get('/genres/:name', async (req, res) => {
  try {
    const result = await Genre.findOne({ name: req.params.name });
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Finds the first document that matches and deletes it.
app.delete('/genres/:name', async (req, res) => {
  try {
    const result = await Genre.findOneAndDelete({ name: req.params.name });
    res.status(200).json(result);
    console.log(`Deleted: ${result}`);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

app.put('/genres/:name', async (req, res) => {
  // TODO: Write a route that finds the first document that matches the specified route parameter
  // and updates it using the name provided in the request body.
  // Return the updated document
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
