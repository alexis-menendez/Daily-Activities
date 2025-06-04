import type React from 'react';
import { useEffect, useState } from 'react';
import FilmsToWatchList from '../components/FilmsToWatchList';
import type Film from '../utils/interfaces/Film.interface';

const WatchList = () => {
  const [filmsToWatch, setFilmsToWatch] = useState<Film[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    currentlyOnWatchList: boolean | null | undefined,
    currentlyOnSeenItList: boolean | null | undefined,
    title: string | null
  ) => {
    e.preventDefault();
    if (currentlyOnWatchList) {
      let parsedFilmsToWatch: Film[] = [];

      const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
      if (typeof storedFilmsToWatch === 'string') {
        parsedFilmsToWatch = JSON.parse(storedFilmsToWatch);
      }
      parsedFilmsToWatch = parsedFilmsToWatch.filter(
        (film) => film.Title !== title
      );
      setFilmsToWatch(parsedFilmsToWatch);
      localStorage.setItem('filmsToWatch', JSON.stringify(parsedFilmsToWatch));
    } else if (currentlyOnSeenItList) {
      let parsedAlreadySeenFilms: Film[] = [];
      const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
      if (typeof storedAlreadySeenFilms === 'string') {
        parsedAlreadySeenFilms = JSON.parse(storedAlreadySeenFilms);
      }
      parsedAlreadySeenFilms = parsedAlreadySeenFilms.filter(
        (film) => film.Title !== title
      );
      localStorage.setItem(
        'alreadySeenFilms',
        JSON.stringify(parsedAlreadySeenFilms)
      );
    }
  };

  useEffect(() => {
    const parsedFilmsToWatch = JSON.parse(
      localStorage.getItem('filmsToWatch') as string
    );
    setFilmsToWatch(parsedFilmsToWatch);
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Watch List</h1>
      {(!filmsToWatch?.length || filmsToWatch?.length === 0) ? (
        <h1 style={{ margin: '16px 0' }} className="emptyMessage">Add films to your watchlist.</h1>
      ) : (
        <FilmsToWatchList
          filmsToWatch={filmsToWatch}
          removeFromStorage={removeFromStorage}
        />
      )}
    </>
  );
};

export default WatchList;
