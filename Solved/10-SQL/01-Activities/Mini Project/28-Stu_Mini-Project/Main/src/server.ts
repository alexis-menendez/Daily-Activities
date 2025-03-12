import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a movie
app.post('/api/new-movie', ({ body }, res) => {
  const sql = `INSERT INTO movies (movie_name)
    VALUES ($1)`;
  const params = [body.movie_name];

  pool.query(sql, params, (err, _result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body,
    });
  });
});

// Read all movies
app.get('/api/movies', (_req, res) => {
  const sql = `SELECT id, movie_name AS title FROM movies`;

  pool.query(sql, (err: Error, result: QueryResult) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    const { rows } = result;
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

// Delete a movie
app.delete('/api/movie/:id', (req, res) => {
  const sql = `DELETE FROM movies WHERE id = $1`;
  const params = [req.params.id];

  pool.query(sql, params, (err: Error, result: QueryResult) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.rowCount) {
      res.json({
        message: 'Movie not found',
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.rowCount,
        id: req.params.id,
      });
    }
  });
});

// Read list of all reviews and associated movie name using LEFT JOIN
app.get('/api/movie-reviews', (_req, res) => {
  const sql = `SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
  pool.query(sql, (err: Error, result: QueryResult) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    const { rows } = result;
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

// BONUS: Update review
app.put('/api/review/:id', (req, res) => {
  const sql = `UPDATE reviews SET review = $1 WHERE id = $2`;
  const params = [req.body.review, req.params.id];

  pool.query(sql, params, (err: Error, result: QueryResult) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.rowCount) {
      res.json({
        message: 'Review not found',
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.rowCount,
      });
    }
  });
});

// Default response for any other request (Not Found)
app.use((_req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
