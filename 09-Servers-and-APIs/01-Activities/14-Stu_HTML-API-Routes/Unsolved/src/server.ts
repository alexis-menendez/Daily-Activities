// TODO: import express

// Import the JSON data
import { readFileSync } from 'node:fs';
const termData = JSON.parse(readFileSync('src/terms.json', 'utf8'));

// TODO: initialize app variable
const PORT = 3001;

// TODO: Create a route for a GET request that will return the content of our `terms.json` file

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
