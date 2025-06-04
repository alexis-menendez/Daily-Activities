import React from 'react';

import type { TipData } from "../interfaces/TipData";

// Define the props for the component
interface TipListProps {
  tips: TipData[] | null; 
}

const TipList: React.FC<TipListProps> = ({ tips }) => {
  return (
    <>
      {tips && tips.map((tip) => (
        <div className="card mb-3" key={tip.id}>
          <h4 className="card-header bg-primary text-light p-2 m-0">{tip.username}</h4>
          <div className="card-body bg-light p-2">
            <p>{tip.tip}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TipList;
