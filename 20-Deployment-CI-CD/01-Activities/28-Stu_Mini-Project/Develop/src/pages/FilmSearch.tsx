import { type FormEvent, useState } from 'react';

import { searchOMDB } from '../api/API';
import FilmCard from '../components/FilmCard';
import type Film from '../utils/interfaces/Film.interface';

const FilmSearch = () => {
  const [currentFilm, setCurrentFilm] = useState<Film>({
    Title: '',
    Director: '',
    Actors: '',
    Released: '',
    Poster: '',
    Genre: '',
    Plot: '',
  });

  const [searchInput, setSearchInput] = useState<string>('');

  const addToWatchList = () => {
    let parsedFilmsToWatch: Film[] = [];
    const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
    if (typeof storedFilmsToWatch === 'string') {
      parsedFilmsToWatch = JSON.parse(storedFilmsToWatch);
    }
    parsedFilmsToWatch.push(currentFilm);
    localStorage.setItem('filmsToWatch', JSON.stringify(parsedFilmsToWatch));
  };

  const addToSeenItList = () => {
    let parsedAlreadySeenFilms: Film[] = [];
    const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
    if (typeof storedAlreadySeenFilms === 'string') {
      parsedAlreadySeenFilms = JSON.parse(storedAlreadySeenFilms);
    }
    parsedAlreadySeenFilms.push(currentFilm);
    localStorage.setItem(
      'alreadySeenFilms',
      JSON.stringify(parsedAlreadySeenFilms)
    );
  };

  const searchForFilmByTitle = async (event: FormEvent, film_title: string) => {
    event.preventDefault();
    const data: Film = await searchOMDB(film_title);

    setCurrentFilm(data);
  };

  return (
    <>
      <section id='searchSection'>
        <form
          onSubmit={(event: FormEvent) =>
            searchForFilmByTitle(event, searchInput)
          }
        >
          <input
            type='text'
            name=''
            id=''
            placeholder='Enter a Film'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' id='searchBtn'>
            Search
          </button>
        </form>
      </section>
      <FilmCard
        currentFilm={currentFilm}
        addToWatchList={addToWatchList}
        addToSeenItList={addToSeenItList}
      />
    </>
  );
};

export default FilmSearch;
