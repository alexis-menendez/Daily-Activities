import type { TipData } from '../interfaces/TipData';
import type { TipUpdate } from '../interfaces/TipUpdate';

const retrieveTips = async () => {
  try {
    const response = await fetch('/api/tips', {
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

const retrieveTip = async (id: string | undefined) => {
  try {
    const response = await fetch(`/api/tips/${id}`, {
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

const addTip = async (body: TipData) => {
  try {
    const response = await fetch('/api/tips/', {
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
    console.log('Error from Tip Creation: ', err);
    return Promise.reject('Could not create tip');
  }
};

const updateTip = async (id: string | undefined, body: TipUpdate) => {
  try {
    const response = await fetch(`/api/tips/${id}`, {
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
    console.log('Error from Tip Updating: ', err);
    return Promise.reject('Could not update tip');
  }
};

const deleteTip = async (id: string | undefined) => {
  try {
    const response = await fetch(`/api/tips/${id}`, {
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
    console.log('Error from Tip Deleting: ', err);
    return Promise.reject('Could not delete tip');
  }
};
export { retrieveTips, retrieveTip, addTip, updateTip, deleteTip };
