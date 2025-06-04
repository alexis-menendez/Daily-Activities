import express from 'express';
import { MongoClient, MongoError } from 'mongodb';
import data from './models/data.js';

const app = express();
const PORT = process.env.PORT || 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

const dbName = 'alphabetDB';

await client.connect()
  .catch(err => { console.log(err) });

const db = client.db(dbName);

async function seedDB() {
  try {
    await db.collection('letterList').deleteMany({});
    await db.collection('letterList').insertMany(data);

  } catch (err: unknown) {
    const MongoClientError = err as MongoError;

    console.error('Mongo connection error: ', MongoClientError.message);
  }
}

await seedDB();

app.use(express.json());

// GET request to read all the documents in a collection
app.get('/letters', async (_req, res) => {
  try {
    const results = await db.collection('letterList')
      // find() returns all documents. Equivalent to `Select *` in SQL.
      .find()
      // sort() sorts in ascending or descending order
      .sort({ letter: 1 })
      // skips first returned document
      .skip(1)
      // limits returns to 10
      .limit(10)
      .toArray()

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
