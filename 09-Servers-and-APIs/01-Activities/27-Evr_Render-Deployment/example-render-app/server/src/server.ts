import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import allRoutes from './routes/index.js';
import logRequest from './middleware/logRequest.js';

const app = express();

const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logRequest);
app.use(express.static('../client/dist'));

app.use(allRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
