// Import Express.js
import express, { type Request, type Response } from 'express';

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Create Express.js routes for default '/', '/send' and '/paths' endpoints
app.get('/', (_req: Request, res: Response) => res.send('Navigate to /send or /paths'));

app.get('/send', (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../public/send.html'))
);

app.get('/paths', (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../public/paths.html'))
);

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
