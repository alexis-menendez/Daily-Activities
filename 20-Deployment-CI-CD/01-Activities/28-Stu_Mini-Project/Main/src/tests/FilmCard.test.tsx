import pretty from 'pretty';
import { render } from '@testing-library/react';
import FilmCard from '../components/FilmCard';
import type Film from '../utils/interfaces/Film.interface';

const film: Film = {
  Title: 'Gamera, the Guardian of the Universe',
  Director: 'Shûsuke Kaneko',
  Actors: 'Tsuyoshi Ihara, Akira Onodera, Shinobu Nakayama',
  Released: '16 Apr 1997',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNTFkNzAxYTUtZGE4ZC00NjBkLWE3ZDAtYjE4NzQ0MDBhZWQwXkEyXkFqcGdeQXVyNjQ2MzU1NzQ@._V1_SX300.jpg',
  Genre: 'Action, Drama, Fantasy',
  Plot: 'An ornithologist investigates reports of a monstrous new species of bird just as a teenage girl is gifted an amulet found on mysterious atoll. As the creatures begin to attack, an ancient guardian with a bond to the girl emerges.',
};

describe('FilmCard', () => {
  it('should contain the film information', () => {

    render(<FilmCard currentFilm={film}/>);

    const filmImg = document.querySelector('img');

    if (filmImg) {
      expect(filmImg.getAttribute('src')).toBe(
        'https://m.media-amazon.com/images/M/MV5BNTFkNzAxYTUtZGE4ZC00NjBkLWE3ZDAtYjE4NzQ0MDBhZWQwXkEyXkFqcGdeQXVyNjQ2MzU1NzQ@._V1_SX300.jpg'
      );  
    }
    
  });

  it('should match snapshot', () => {
    render(<FilmCard currentFilm={film} addToWatchList={null} addToSeenItList={null}/>);

    const filmContainer = document.querySelector('.filmCard') as HTMLElement;

    if (filmContainer) {
      expect(pretty(filmContainer.innerHTML)).toMatchSnapshot();
    }
  })
  
});
