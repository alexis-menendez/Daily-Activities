import React from 'react';
import { Link } from 'react-router-dom';
import type { JokeData } from "../interfaces/JokeData.js";

interface JokeListProps {
  jokes: JokeData[] | null;
}

const JokeList: React.FC<JokeListProps> = ({ jokes }) => {
  return (
    <>
      {jokes && jokes.map((joke) => (
        <div className="card mb-3" key={joke.id}>
          <h4 className="card-header bg-primary text-light p-2 m-0">{joke.jokeTeller}'s Joke: 
            <Link to={`/joke/${joke.id}`}> {joke.joke}</Link>
            </h4>
        </div>
      ))}
    </>
  );
};

export default JokeList;
