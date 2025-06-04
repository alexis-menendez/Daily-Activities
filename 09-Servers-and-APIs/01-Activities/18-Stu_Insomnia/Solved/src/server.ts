import express, { type Request, type Response } from 'express';

// Import the JSON data
import { readFileSync } from 'node:fs';
const guestData: Guest[] = JSON.parse(readFileSync('src/guests.json', 'utf8'));

// interface that defines the shape of the guest object
interface Guest {
  id: number;
  guestName: string;
  email: string;
  homeAddress: string;
}

// Variable to keep track of the next ID to be assigned
let nextId = guestData.length + 1;

const app = express();
const PORT = 3001;

// Middleware for parsing JSON and URLencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route to get all of the guests
app.get('/api/guests', (_req: Request, res: Response) => res.json(guestData));

// GET route that returns any specific guest based on the ID provided
app.get('/api/guests/:id', (req: Request, res: Response) => {
  const requestedId = Number.parseInt(req.params.id);

  // Find the guest if it's ID matches `req.params.id`
  const guest = guestData.find((guest) => guest.id === requestedId);

  if (guest) {
    return res.json(guest);
  }

  // Return a message if the guest doesn't exist in our DB
  return res.json('No match found');
});

// POST route to add a new guest to the guestData array
app.post('/api/guests', (req: Request, res: Response) => {
  const newGuest: Guest = {
    id: nextId,
    guestName: req.body.guestName,
    email: req.body.email,
    homeAddress: req.body.homeAddress,
  };
  guestData.push(newGuest);
  nextId++;
  res.json(newGuest);
});

// PUT route to update a guest based on the ID provided
app.put('/api/guests/:id', (req: Request, res: Response) => {
  const requestedId = Number.parseInt(req.params.id);

  // Find the index of the Guest if it matches `req.params.id`
  // Update the guest if it exists
  const updatedGuestIndex = guestData.findIndex((guest) => guest.id === requestedId);
  if (updatedGuestIndex !== -1) {
    const updatedGuest: Guest = {
      ...guestData[updatedGuestIndex],
      ...req.body,
    };
    guestData[updatedGuestIndex] = updatedGuest;
    return res.json(updatedGuest);
  }

  // Return a message if the guest doesn't exist in our DB
  return res.json('No match found');
});

// DELETE route to delete a guest based on the ID provided
app.delete('/api/guests/:id', (req: Request, res: Response) => {
  const requestedId = Number.parseInt(req.params.id);

  // Find the index of the guest if it matches `req.params.id`
  const guestIndex = guestData.findIndex((guest) => guest.id === requestedId);

  if (guestIndex !== -1) {
    // Remove the guest from the guestData array using the spread operator
    guestData.splice(guestIndex, 1);
    return res.json('guest deleted');
  }

  // Return a message if the guest doesn't exist in our DB
  return res.json('No match found');
});

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (_req: Request, res: Response) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/guests">http://localhost:${PORT}/api/guests</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
