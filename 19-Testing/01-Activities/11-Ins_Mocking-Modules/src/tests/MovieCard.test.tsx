import { render } from "@testing-library/react";
import MovieCard from "../components/MovieCard";
import pretty from 'pretty';
import { vi } from 'vitest'

const movie = {
  title: "Longlegs",
  description: "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.",
  yearReleased: 2024,
  IMDbRating: 7.2,
}

vi.mock('../components/MovieDetails', () => {
  return {
    default: () => <div>
      <p>Year Released: 2023</p>
      <p>IMDb Rating: 9.9</p>
    </div>
  }
});

describe('MovieCard', () => {
  it('should render a MovieCard with the mocked MovieDetails component', () => {
    render(<MovieCard movie={movie} />);

    const movieCardTitle = document.querySelector('h3');
    const movieDetails = document.querySelectorAll('p');

    const description = movieDetails[0].textContent;
    const yearReleased = movieDetails[1].textContent;
    const imdbRating = movieDetails[2].textContent;

    expect(movieCardTitle?.textContent).toBe('Longlegs');
    expect(description).toBe('In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.');
    expect(yearReleased).toBe('Year Released: 2023');
    expect(imdbRating).toBe('IMDb Rating: 9.9');
  });

  it('should render a MovieCard that matches the snapshot', () => {
    render(<MovieCard movie={movie} />);
    
    const movieCard = document.querySelector('.card');

    if(movieCard) {
      expect(pretty(movieCard.innerHTML)).toMatchSnapshot();
    }
  });
});
