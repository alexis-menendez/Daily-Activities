import express from 'express';
// We import the ObjectId class from mongodb
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

const dbName = 'inventoryDB';

await client.connect()
  .catch(err => { console.log(err) });

const db = client.db(dbName);

app.use(express.json());

app.post('/books', async (req, res) => {
  try {
    const results = await db.collection('bookCollection').insertOne(
      { title: req.body.title, author: req.body.author }
    )

    res.status(201).json(results);
  }
  catch (error) {
    res.status(500).json({ error });
  }
});

app.get('/books', async (_req, res) => {
  try {
    const results = await db.collection('bookCollection')
      .find({})
      .toArray()

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// To delete a document, we need to convert the string id parameter to an ObjectId
app.delete('/books/:id', async (req, res) => {
  try {
    // Wrap the id in the ObjectId class to instantiate a new instance
    const bookId = new ObjectId(req.params.id);

    // Use deleteOne() to delete one object
    const results = await db.collection('bookCollection').deleteOne(
      // This is the filter. We delete only the document that matches the _id provided in the specified parameter.
      { _id: bookId }
    );

    res.send(results.deletedCount ? 'Document deleted' : 'No document found!');
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
