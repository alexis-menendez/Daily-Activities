import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(routes);

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
