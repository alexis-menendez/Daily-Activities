import type { FeedbackData } from '../interfaces/FeedbackData';
import type { FeedbackUpdate } from '../interfaces/FeedbackUpdate';

const retrieveFeedbacks = async () => {
  try {
    const response = await fetch('/api/feedback', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};

const retrieveFeedback = async (id: string | undefined) => {
  try {
    const response = await fetch(`/api/feedback/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return {};
  }
};

const addFeedback = async (body: FeedbackData) => {
  try {
    const response = await fetch('/api/feedback/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from Feedback Creation: ', err);
    return Promise.reject('Could not create feedback');
  }
};

const updateFeedback = async (id: string | undefined, body: FeedbackUpdate) => {
  try {
    //Make sure to add the id to the url
    const response = await fetch(`/api/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = response.json();

    if (!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from Feedback Updating: ', err);
    return Promise.reject('Could not update feedback');
  }
};

const deleteFeedback = async (id: string | undefined) => {
  try {
    //Make sure to add the id to the url
    const response = await fetch(`/api/feedback/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.json();

    if (!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from Feedback Deleting: ', err);
    return Promise.reject('Could not delete feedback');
  }
};
export {
  retrieveFeedbacks,
  retrieveFeedback,
  addFeedback,
  updateFeedback,
  deleteFeedback,
};
