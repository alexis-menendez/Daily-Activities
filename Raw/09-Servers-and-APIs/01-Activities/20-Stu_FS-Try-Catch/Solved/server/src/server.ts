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
  const { contactName, phone, email } = req.body;

  try {
    const newContact: Contact = {
      id: uuidv4(),
      contactName,
      phone,
      email,
    };

    // Validate the new contact
    if (!newContact.contactName || !newContact.phone || !newContact.email) {
      return res
        .status(400)
        .json('Please include a name, phone number, and email');
    }

    // Read contacts from the file
    const contacts: string = await fs.readFile('src/db/contacts.json', 'utf8');
    const parsedContacts: Contact[] = JSON.parse(contacts);
    parsedContacts.push(newContact);

    await fs.writeFile(
      'src/db/contacts.json',
      JSON.stringify(parsedContacts, null, 2)
    );
    return res.status(201).json(newContact);
  } catch (error) {
    console.error('Error adding contact:', error);
    return res.status(500).json({ message: 'Error adding contact', error });
  }
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
