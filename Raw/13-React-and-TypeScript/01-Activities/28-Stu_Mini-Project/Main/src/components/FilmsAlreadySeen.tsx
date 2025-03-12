import type React from 'react';
import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

interface seenFilmProps {
  alreadyWatchedFilms: Film[];
  removeFromStorage:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnWatchList: boolean | null | undefined,
        currentlyOnSeenItList: boolean | null | undefined,
        title: string | null
      ) => void)
    | null;
}

const FilmsAlreadySeen = ({
  alreadyWatchedFilms,
  removeFromStorage,
}: seenFilmProps) => {
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
