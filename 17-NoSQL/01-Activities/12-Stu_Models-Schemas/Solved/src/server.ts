import express from 'express';
import db from './config/connection.js';
// Import the `Book` model, which we will use to access the books in our collection.
import { Book } from './models/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/books', async (_req, res) => {
  try {
    // Use the `.find()` method on our `Book` model to find all the books in our collection.
    // Return the results in JSON format.
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
