import express from 'express';
// Run npm install mongodb and require mongodb and MongoClient class
import { MongoClient } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Create variable to hold our database name
const dbName = 'shelterDB';

// Use connect method to connect to the mongo server
await client.connect()
.catch(err => {console.log(err)});

const db = client.db(dbName);

// Built in Express function that parses incoming requests to JSON
app.use(express.json());

app.post('/pets', async (req, res) => {
  try {
    // Use db connection to add a document
    const results = await db.collection('petCollection').insertOne(
      { name: req.body.name, breed: req.body.breed }
    )
    res.status(201).json(results);
  }
  catch (error) {
    res.status(500).json({ error });
  }
});

app.get('/pets', async (_req, res) => {
  try {
    // Use db connection to find all documents in collection
    const results = await db.collection('petCollection')
      .find()
      .toArray()

    res.status(200).json(results);
  }
  catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
