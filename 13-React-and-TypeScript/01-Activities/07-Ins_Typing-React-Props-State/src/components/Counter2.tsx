import { useState } from 'react';

type CounterState = {
  count: number;
  increment: number;
}

export default function Counter2() {
  const [countState, setCountState] = useState<CounterState>({ count: 0, increment: 2 });

  const handleClick = () => {
    setCountState((prev) => ({ count: prev.count + prev.increment, increment: prev.increment }));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Increment Button!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {countState.count}</p>
        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Increment By 2
        </button>
      </div>
    </div>
  );
}
