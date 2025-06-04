import { JokeAdd } from "../interfaces/JokeAdd.js"
import { JokeUpdate } from "../interfaces/JokeUpdate.js"

// Retrieve all jokes from the API
const retrieveJokes = async () => {
  try {
    const response = await fetch('/api/jokes', {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.log('Error from joke retrieval:', err);
    return [];
  }
}

// Retrieve a single joke by ID from the API
const retrieveJoke = async (id: string | undefined) => {
  try {
    const response = await fetch(`/api/jokes/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.log('Error from joke retrieval:', err);
    return {};
  }
}

// Add a new joke via POST request to the API
const addJoke = async (body: JokeAdd) => {
  try {
    const response = await fetch(
      '/api/jokes/', {
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
    console.log('Error from joke creation: ', err);
    return Promise.reject('Could not create joke');
  }
}

// Update an existing joke via PUT request to the API
const updateJoke = async (id: string | undefined, body: JokeUpdate) => {
  try {
    const response = await fetch(
      `/api/jokes/${id}`, {
        method: 'PUT',
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
    console.log('Error from joke updating: ', err);
    return Promise.reject('Could not update joke');
  }
}

// Delete a joke by ID via DELETE request to the API
const deleteJoke = async (id: string | undefined) => {
  try {
    const response = await fetch(
      `/api/jokes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return;

  } catch (err) {
    console.log('Error from joke deleting: ', err);
    return Promise.reject('Could not delete joke');
  }
}

export { retrieveJokes, retrieveJoke, addJoke, updateJoke, deleteJoke };
