import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

class Feedback {
  email: string;
  feedbackType: string;
  feedback: string;
  feedback_id: string;

  constructor(
    email: string,
    feedbackType: string,
    feedback: string,
    feedback_id: string
  ) {
    this.email = email;
    this.feedbackType = feedbackType;
    this.feedback = feedback;
    this.feedback_id = feedback_id;
  }
}

class FeedbackService {
  private async read() {
    return await fs.readFile('db/feedback.json', {
      flag: 'a+',
      encoding: 'utf8',
    });
  }

  private async write(feedback: Feedback[]) {
    return await fs.writeFile(
      'db/feedback.json',
      JSON.stringify(feedback, null, '\t')
    );
  }

  async getFeedback() {
    return await this.read().then((feedback) => {
      let parsedFeedback: Feedback[];

      // If feedback isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedFeedback = [].concat(JSON.parse(feedback));
      } catch (err) {
        parsedFeedback = [];
      }

      return parsedFeedback;
    });
  }

  async addFeedback(
    email: string,
    feedbackType = 'Complaint',
    feedback: string
  ) {
    if (!email || !feedback) {
      throw new Error('Feedback and email cannot be blank');
    }

    // Add a unique id to the feedback using uuid package
    const newFeedback: Feedback = {
      email: email,
      feedbackType: feedbackType,
      feedback: feedback,
      feedback_id: uuidv4(),
    };

    // Get all feedbacks, add the new feedback, write all the updated feedbacks, return the newFeedback
    return await this.getFeedback()
      .then((feedback) => {
        return [...feedback, newFeedback];
      })
      .then((updatedFeedback) => this.write(updatedFeedback))
      .then(() => newFeedback);
  }
}

export default new FeedbackService();
