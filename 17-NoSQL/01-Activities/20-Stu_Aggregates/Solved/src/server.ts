import express from 'express';
import db from './config/connection.js';
// Require model
import { Book } from './models/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/books', async (_req, res) => {
  try {
    // Using model in route
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Aggregate Functions
app.get('/books/sum-price', async (_req, res) => {
  try {
    // Call aggregate() on model
    const result = await Book
      .aggregate([
        // Filter books that are in stock
        { $match: { inStock: true } },
        {
          $group: {
            // Group by null (no additional grouping by id)
            _id: null,
            // Sum of all prices
            sum_price: { $sum: '$price' },
            // Average of all prices
            avg_price: { $avg: '$price' },
            // Maximum price
            max_price: { $max: '$price' },
            // Minimum price
            min_price: { $min: '$price' },
          },
        },
      ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
