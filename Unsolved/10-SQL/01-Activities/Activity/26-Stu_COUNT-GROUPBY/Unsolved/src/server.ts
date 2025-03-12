import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Write a comment to explain what the following code is doing.
pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
  } else if (result) {
    console.log(result.rows);
  }
});

// TODO: Write a comment to explain what the following code is doing.
pool.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
  } else if (result) {
    console.log(result.rows);
  }
});

app.use((_req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
