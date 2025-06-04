import express from 'express';
import { MongoClient, MongoError } from 'mongodb';
import data from './models/data.js';

const app = express();
const PORT = process.env.PORT || 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

const dbName = 'authorListDB';

await client.connect()
  .catch(err => { console.log(err) });

const db = client.db(dbName);

async function seedDB() {
  try {
    // Drops any documents, if they exist
    await db.collection('authorList').deleteMany({});
    // Adds data to database
    const res = await db.collection('authorList').insertMany(data);
    console.log(res);
  } catch (err: unknown) {
    const MongoClientError = err as MongoError;

    console.error('Mongo connection error: ', MongoClientError.message);
  }
}

await seedDB();

app.use(express.json());

app.get('/authors/price-less-than-10', async (_req, res) => {
  try {
    const results = await db.collection('authorList')
      .find({ data: { $lt: 10 } })
      .toArray()

    res.status(200).json(results);
  }
  catch (error) {
    res.status(500).json({ error });
  }
});

app.get('/authors/featured', async (_req, res) => {
  try {
    const results = await db.collection('authorList')
      .find({ featured: true })
      .toArray()

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
