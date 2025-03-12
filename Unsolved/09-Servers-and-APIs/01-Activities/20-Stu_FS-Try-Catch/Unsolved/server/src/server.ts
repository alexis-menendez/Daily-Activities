import express, { type Request, type Response } from 'express';
import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

// interface that defines the shape of the contact object
interface Contact {
  id: string;
  contactName: string;
  phone: string;
  email: string;
}

const app = express();
const PORT = 3001;

// Middleware for parsing JSON and URLencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route to get all of the contacts
app.get('/api/contacts', async (_req: Request, res: Response) => {
  try {
    // Read contacts from the file
    const contacts: string = await fs.readFile('src/db/contacts.json', 'utf8');
    const parsedContacts: Contact[] = JSON.parse(contacts);
    return res.status(200).json(parsedContacts);
  } catch (error) {
    console.error('Error getting contacts:', error);
    return res.status(500).json({ message: 'Error getting contacts', error });
  }
});

// GET route that returns any specific contact based on the ID provided
app.get('/api/contacts/:id', async (req: Request, res: Response) => {
  try {
    const requestedId: string = req.params.id;

    // Read contacts from the file, parse the JSON, and find the contact with the requested ID
    const contacts: string = await fs.readFile('src/db/contacts.json', 'utf8');
    const parsedContacts: Contact[] = JSON.parse(contacts);
    const result = parsedContacts.find(
      (contact: Contact) => contact.id === requestedId
    );

    if (!result) {
      return res.status(404).json('No match found');
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error getting contacts:', error);
    return res.status(500).json({ message: 'Error getting contacts', error });
  }
});

// POST route to add a new contact to the contactData array
app.post('/api/contacts', async (req: Request, res: Response) => {
  // TODO: delete these lines
  console.log(uuidv4());
  console.log(req.body);
  return res.status(200).json('Contact added');
  // TODO: Add a try/catch block to handle errors
  // TODO: Add code to read the contacts from the file add the new contact to the array, and write the updated array back to the file
  // TODO: use uuidv4() to generate a unique ID for the new contact
  // TODO: Validate the request body to ensure it has the required fields if not return a 400 status code
  // TODO: Return a 201 status code and the new contact if the contact was successfully added
  // TODO: Return a 500 status code and an error message if the contact was not added but the request was valid
});

// DELETE route to delete a contact based on the ID provided
app.delete('/api/contacts/:id', async (req: Request, res: Response) => {
  try {
    const requestedId: string = req.params.id;

    // Read contacts from the file
    const contacts: string = await fs.readFile('src/db/contacts.json', 'utf8');
    const parsedContacts: Contact[] = JSON.parse(contacts);

    // Filter out the contact with the requested ID
    const filteredContacts = parsedContacts.filter(
      (contact: Contact) => contact.id !== requestedId
    );

    // Check if the contact was deleted
    if (parsedContacts.length === filteredContacts.length) {
      return res.status(404).json('No match found');
    }

    await fs.writeFile(
      'src/db/contacts.json',
      JSON.stringify(filteredContacts, null, 2)
    );
    return res.status(200).json('Contact deleted');
  } catch (error) {
    console.error('Error deleting contact:', error);
    return res.status(500).json({ message: 'Error deleting contact', error });
  }
});

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (_req: Request, res: Response) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/contacts">http://localhost:${PORT}/api/contacts</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
