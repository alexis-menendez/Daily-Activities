// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';

import CommentList from '../components/CommentList/index.tsx';
import CommentForm from '../components/CommentForm/index.tsx';

import { getSingleThought } from '../utils/api.ts';
import { useState } from 'react';
import { Thought } from '../components/ThoughtList/index.tsx';
import { useEffect } from 'react';

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const [thought, setThought] = useState<Thought>({} as Thought);

  const fetchData = async (thoughtId: string | undefined) => {
    try {
      if (thoughtId) {
        const res = await getSingleThought(thoughtId);
        const json = await res.json();
        setThought(json);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
   
    fetchData(thoughtId);
  }, [thoughtId]);

  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {thought.thoughtAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {thought.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {thought.thoughtText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={thought.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm setThought={setThought} thoughtId={thought._id} />
      </div>
    </div>
  );
};

export default SingleThought;
