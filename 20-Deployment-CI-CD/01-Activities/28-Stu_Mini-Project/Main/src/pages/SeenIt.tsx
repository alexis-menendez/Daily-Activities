import type React from 'react';
import { useEffect, useState } from 'react';
import FilmsAlreadySeen from '../components/FilmsAlreadySeen';
import type Film from '../utils/interfaces/Film.interface';

const SeenIt = () => {
  const [alreadyWatchedFilms, setAlreadyWatchedFilms] = useState<Film[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    currentlyOnWatchList: boolean | null | undefined,
    currentlyOnSeenItList: boolean | null | undefined,
    title: string | null
  ) => {
    e.preventDefault();
    if (currentlyOnWatchList) {
      console.log(title);
      let parsedFilmsToWatch: Film[] = [];

      const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
      if (typeof storedFilmsToWatch === 'string') {
        parsedFilmsToWatch = JSON.parse(storedFilmsToWatch);
      }
      parsedFilmsToWatch = parsedFilmsToWatch.filter(
        (film) => film.Title !== title
      );
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

      setAlreadyWatchedFilms(parsedAlreadySeenFilms);
      localStorage.setItem(
        'alreadySeenFilms',
        JSON.stringify(parsedAlreadySeenFilms)
      );
    }
  };

  useEffect(() => {
    const parsedAlreadyWatchedFilms = JSON.parse(
      localStorage.getItem('alreadySeenFilms') as string
    );
    setAlreadyWatchedFilms(parsedAlreadyWatchedFilms);
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Seen It</h1>
      {(!alreadyWatchedFilms?.length || alreadyWatchedFilms.length === 0) ? (
        <h1 style={{ margin: '16px 0' }} className="emptyMessage">
          Add films you've already seen here.
        </h1>
      ) : (
        <FilmsAlreadySeen
          alreadyWatchedFilms={alreadyWatchedFilms}
          removeFromStorage={removeFromStorage}
        />
      )}
    </>
  );
};

export default SeenIt;
