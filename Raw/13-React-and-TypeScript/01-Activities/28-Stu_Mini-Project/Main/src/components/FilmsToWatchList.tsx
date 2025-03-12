import type React from 'react';
import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

interface FilmsToWatchProps {
  filmsToWatch: Film[];
  removeFromStorage:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnWatchList: boolean | null | undefined,
        currentlyOnSeenItList: boolean | null | undefined,
        title: string | null
      ) => void)
    | null;
}

const FilmsToWatchList = ({
  filmsToWatch,
  removeFromStorage,
}: FilmsToWatchProps) => {
  console.log(filmsToWatch);

  return (
    <>
      <ul>
        {filmsToWatch.map((film) => (
          <FilmCard
            currentFilm={film}
            key={film.Title}
            onWatchList={true}
            removeFromStorage={removeFromStorage}
          />
        ))}
      </ul>
    </>
  );
};

export default FilmsToWatchList;
