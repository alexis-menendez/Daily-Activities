import pretty from 'pretty';
import { render } from '@testing-library/react';
import FilmsAlreadySeen from '../components/FilmsAlreadySeen';
import type Film from '../utils/interfaces/Film.interface';

const films: Film[] = [{
  Title: 'Gamera, the Guardian of the Universe',
  Director: 'Shûsuke Kaneko',
  Actors: 'Tsuyoshi Ihara, Akira Onodera, Shinobu Nakayama',
  Released: '16 Apr 1997',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNTFkNzAxYTUtZGE4ZC00NjBkLWE3ZDAtYjE4NzQ0MDBhZWQwXkEyXkFqcGdeQXVyNjQ2MzU1NzQ@._V1_SX300.jpg',
  Genre: 'Action, Drama, Fantasy',
  Plot: 'An ornithologist investigates reports of a monstrous new species of bird just as a teenage girl is gifted an amulet found on mysterious atoll. As the creatures begin to attack, an ancient guardian with a bond to the girl emerges.',
},
{
  Title:"Little Nemo: Adventures in Slumberland",
  Director: 'Masami Hata, Masanori Hata, William T. Hurtz',
  Actors: 'Gabriel Damon, Mickey Rooney, Rene Auberjonois',
  Released: '21 Aug 1992',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMmNkM2MzNDgtNzk3Ny00ZTZmLTg4MDMtODc5M2Y4ZGQ4MGMyXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg',
  Genre: 'Animation, Adventure, Comedy',
  Plot: 'Each night, young Nemo goes to Slumberland and has adventures and befriends the king of Slumberland, Morpheus. But one night Nemo discovers Nightmare Land, and the evil nightmare king, throwing Slumberland and Nemo himself into danger.',
},
{
  Title: 'FernGully: The Last Rainforest',
  Director: 'Bill Kroyer',
  Actors: 'Samantha Mathis, Christian Slater, Robin Williams',
  Released: '19 Jun 1992',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNzNiNTliMjItMmY0ZS00YTMzLTllYTQtMzE2ZDM1YTgwZjlmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_SX300.jpg',
  Genre: 'Animation, Adventure, Family',
  Plot: 'The magical inhabitants of a rainforest fight to save their home, which is threatened by logging and a polluting force of destruction called Hexxus.',
}];

describe('FilmsAlreadySeen', () => {

  it('should match snapshot', () => {
    render(<FilmsAlreadySeen alreadyWatchedFilms={films} removeFromStorage={null}/>);

    const filmContainer = document.querySelector('.filmCard') as HTMLElement;

    if (filmContainer) {
      expect(pretty(filmContainer.innerHTML)).toMatchSnapshot();
    }
  })
  
});
