import type React from 'react';
// TODO: Uncomment when Film interface is added
// import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

// TODO: Define seenFilmProps
// interface seenFilmProps {
// }

// TODO: Destructure alreadyWatchedFilms from props
const FilmsAlreadySeen = (props) => {
  return (
    <ul>
      {alreadyWatchedFilms.map((film) => (
        <FilmCard
          currentFilm={film}
          key={film.Title}
          onSeenItList={true}
          removeFromStorage={removeFromStorage}
        />
      ))}
    </ul>
  );
};

export default FilmsAlreadySeen;
