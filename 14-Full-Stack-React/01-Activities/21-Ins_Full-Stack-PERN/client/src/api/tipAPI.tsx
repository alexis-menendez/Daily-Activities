import { TipData } from "../interfaces/TipData";

 // This function sends a GET request to the '/api/tips' endpoint to fetch
 // tips data. It handles errors by logging them to the console and returns
 // an empty array if an error occurs.
const retrieveTips = async () => {
  try {
    const response = await fetch('/api/tips', {
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


 // This function sends a POST request to the '/api/tips/' endpoint with the
 // tip data provided in the body. It handles errors by logging them to the
 // console and returns a rejected promise if an error occurs.
const addTip = async (body: TipData) => {
  try {
    const response = await fetch(
      '/api/tips/', {
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
    console.log('Error from Tip Creation: ', err);
    return Promise.reject('Could not create tip');
  }
}

export { retrieveTips, addTip };
