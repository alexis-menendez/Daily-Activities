export const getAllThoughts = () => {
  return fetch('/api/thought', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getSingleThought = (id: string) => {
  return fetch(`/api/thought/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createThought = (thoughtData: {thoughtText: string, thoughtAuthor: string}) => {
  return fetch('/api/thought', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(thoughtData),
  });
};

export const createComment = (thoughtId: string, commentData: {commentText: string}) => {
  return fetch(`/api/comment/${thoughtId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  });
};
