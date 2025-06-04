import React from 'react';

import type { FeedbackData } from "../interfaces/FeedbackData";

// Define the props for the component
interface FeedbackListProps {
  feedbacks: FeedbackData[] | null; 
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => {
  return (
    <>
      {feedbacks && feedbacks.map((feedback) => (
        <div className="card mb-3" key={feedback.id}>
          <h4 className="card-header bg-primary text-light p-2 m-0">{feedback.email}</h4>
          <div className="card-body bg-light p-2">
            <p>{feedback.feedback}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeedbackList;
