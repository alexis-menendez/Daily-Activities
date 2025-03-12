import type React from 'react';
import { useEffect, useState } from 'react';
import FilmsToWatchList from '../components/FilmsToWatchList';
// TODO: Uncomment when Film interface is added
// import type Film from '../utils/interfaces/Film.interface';

const WatchList = () => {
  // TODO: Add Film interface to state variable
  const [filmsToWatch, setFilmsToWatch] = useState([]);

  // TODO: Add correct types to the following parameters
  const removeFromStorage = (
    e,
    currentlyOnWatchList,
    currentlyOnSeenItList,
    title
  ) => {
    e.preventDefault();
    if (currentlyOnWatchList) {
      // TODO: Add Film interface
      let parsedFilmsToWatch = [];

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
      // TODO: Add Film interface
      let parsedAlreadySeenFilms = [];
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
      // TODO: Add correct type assertion
      localStorage.getItem('filmsToWatch')
    );
    setFilmsToWatch(parsedFilmsToWatch);
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Watch List</h1>
      {(!filmsToWatch?.length || filmsToWatch?.length === 0) ? (
        <h1 style={{ margin: '16px 0' }}>Add films to your watchlist.</h1>
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
