import { FeedbackData } from "../interfaces/FeedbackData";

 // This function sends a GET request to the '/api/feedback' endpoint to fetch
 // feedback data. It handles errors by logging them to the console and returns
 // an empty array if an error occurs.
const retrieveFeedbacks = async () => {
  try {
    const response = await fetch('/api/feedback', {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    return data;

  } catch (err) { 
    console.log('Error from data retrieval:', err);
    return [];
  }
}


 // This function sends a POST request to the '/api/feedback/' endpoint with the
 // feedback data provided in the body. It handles errors by logging them to the
 // console and returns a rejected promise if an error occurs.

const addFeedback = async (body: FeedbackData) => {
  try {
    const response = await fetch(
      '/api/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }
    )
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.log('Error from Feedback Creation: ', err);
    return Promise.reject('Could not create feedback');
  }
}

export { retrieveFeedbacks, addFeedback };
