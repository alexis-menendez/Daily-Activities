import express from 'express';
import db from './config/connection.js';
// Require model
import { Department } from './models/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Finds all departments
app.get('/departments', async (_req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await Department.find({});
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
