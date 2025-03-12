import express, { Request, Response} from 'express';
import FeedbackService from '../service/FeedbackService.js';
const router = express.Router();
// This API route ("/api/feedback") is a GET Route for retrieving all the feedback
router.get('/', async (req: Request, res: Response) => {
  console.info(`${req.method} request received for feedback`);
  const data = await FeedbackService.getFeedback();
  res.json(data);
});

// This API route ("/api/feedback") is a POST Route for a new piece of feedback
router.post('/', async (req: Request, res: Response) => {
  const { feedback, feedbackType, email } = req.body;
  if (req.body) {
    await FeedbackService.addFeedback(email, feedbackType, feedback);
    res.json(`Feedback added successfully`);
  } else {
    res.send('Error in adding feedback');
  }
});

export default router;
