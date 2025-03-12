import type React from 'react';
import { useEffect, useState } from 'react';
import FilmsAlreadySeen from '../components/FilmsAlreadySeen';
// TODO: Uncomment when Film interface is added
// import type Film from '../utils/interfaces/Film.interface';

const SeenIt = () => {
  // TODO: Add Film interface to state variable
  const [alreadyWatchedFilms, setAlreadyWatchedFilms] = useState([]);

  // TODO: Add correct types to the following parameters
  const removeFromStorage = (
    e,
    currentlyOnWatchList,
    currentlyOnSeenItList,
    title
  ) => {
    e.preventDefault();
    if (currentlyOnWatchList) {
      console.log(title);
      // TODO: Add Film interface
      let parsedFilmsToWatch = [];

      const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
      if (typeof storedFilmsToWatch === 'string') {
        parsedFilmsToWatch = JSON.parse(storedFilmsToWatch);
      }
      parsedFilmsToWatch = parsedFilmsToWatch.filter(
        (film) => film.Title !== title
      );
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

      setAlreadyWatchedFilms(parsedAlreadySeenFilms);
      localStorage.setItem(
        'alreadySeenFilms',
        JSON.stringify(parsedAlreadySeenFilms)
      );
    }
  };

  useEffect(() => {
    const parsedAlreadyWatchedFilms = JSON.parse(
      // TODO: Add correct type assertion
      localStorage.getItem('alreadySeenFilms')
    );
    setAlreadyWatchedFilms(parsedAlreadyWatchedFilms);
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Seen It</h1>
      {(!alreadyWatchedFilms?.length || alreadyWatchedFilms.length === 0) ? (
        <h1 style={{ margin: '16px 0' }}>
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
