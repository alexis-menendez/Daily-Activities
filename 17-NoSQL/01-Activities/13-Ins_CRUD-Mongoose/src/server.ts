import express from 'express';
import db from './config/connection.js';
// Require model
import { Department } from './models/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new department
app.post('/departments', (req, res) => {
  const newDepartment = new Department({ name: req.body.name });
  newDepartment.save();
  if (newDepartment) {
    res.status(201).json(newDepartment);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Finds all departments
app.get('/departments', async (_req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await Department.find({});
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Finds the first matching document by name and returns it.
app.get('/departments/:name', async (req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await Department.findOne({ name: req.params.name });
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Finds the first matching document by name and deletes it.
app.delete('/departments/:name', async (req, res) => {
  try {
    const result = await Department.findOneAndDelete({ name: req.params.name });
    res.status(200).json(result);
    console.log(`Deleted: ${result}`);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
