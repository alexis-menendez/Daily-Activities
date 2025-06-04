import pretty from 'pretty';
import { render } from '@testing-library/react';
import FilmsToWatchList from '../components/FilmsToWatchList';
import type Film from '../utils/interfaces/Film.interface';

const films: Film[] = [{
  Title: 'Jurassic Park',
  Director: 'Steven Spielberg',
  Actors: 'Sam Neill, Laura Dern, Jeff Goldblum',
  Released: '11 Jun 1993',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg',
  Genre: 'Action, Adventure, Sci-Fi',
  Plot: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
},
{
  Title:'The Godfather',
  Director: 'Francis Ford Coppola',
  Actors: 'Marlon Brando, Al Pacino, James Caan',
  Released: '24 Mar 1972',
  Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  Genre: 'Crime, Drama',
  Plot: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
},
{
  Title: 'Alien',
  Director: 'Ridley Scott',
  Actors: 'Sigourney Weaver, Tom Skerritt, John Hurt',
  Released: '22 Jun 1979',
  Poster: 'https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
  Genre: 'Horror, Sci-Fi',
  Plot: 'The crew of a commercial spacecraft encounters a deadly lifeform after investigating a mysterious transmission of unknown origin.',
}];

describe('FilmsToWatchList', () => {

  it('should match snapshot', () => {
    render(<FilmsToWatchList filmsToWatch={films} removeFromStorage={null}/>);

    const filmContainer = document.querySelector('.filmCard') as HTMLElement;

    if (filmContainer) {
      expect(pretty(filmContainer.innerHTML)).toMatchSnapshot();
    }
  })
  
});
