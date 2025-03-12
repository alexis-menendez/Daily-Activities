import express, { type Request, type Response } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import TipService from './service/TipService.js';
import FeedbackService from './service/FeedbackService.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../client/dist'));

// This view route is a GET route for the home page
app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// This view route is a GET route for the feedback page
app.get('/feedback', (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../../client/dist/feedback.html'))
);

// This API route is a GET Route for retrieving all the tips
app.get('/api/tips', async (req: Request, res: Response) => {
  console.info(`${req.method} request received for tips`);
  const data = await TipService.getTips();
  res.json(data);
});

// This API route is a POST Route for a new UX/UI tip
app.post('/api/tips', async (req: Request, res: Response) => {
  const { username, topic, tip } = req.body;
  if (req.body) {
    await TipService.addTip(username, topic, tip);
    res.json('Tip added successfully');
  } else {
    res.send('Error in adding tip');
  }
});
// This API route is a GET Route for retrieving all the feedback
app.get('/api/feedback', async (req: Request, res: Response) => {
  console.info(`${req.method} request received for feedback`);
  const data = await FeedbackService.getFeedback();
  res.json(data);
});

// This API route is a POST Route for a new piece of feedback
app.post('/api/feedback', async (req: Request, res: Response) => {
  const { feedback, feedbackType, email } = req.body;
  if (req.body) {
    await FeedbackService.addFeedback(email, feedbackType, feedback);
    res.json('Feedback added successfully');
  } else {
    res.send('Error in adding feedback');
  }
});

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
