import { render, screen, waitFor } from '@testing-library/react';
import MovieList from '../components/MovieList';
import { expect } from 'vitest';

describe('MovieList', () => {
  it('should render a movie card for each movie retrieved', async () => {
    // Render the MovieList component which will fetch movies from the mock API
    render(<MovieList />);

    // Wait for the MovieList component to render and check that the first movie in the mock data is displayed
    await waitFor(() => {
      expect(screen.getByText('Forrest Gump')).not.toBeNull();
    });

    const movieCards = document.querySelectorAll('.card');
    // Check that the correct number of movie cards are displayed
    expect(movieCards.length).toBe(3);
  });

  it('should render movie cards with the correct data', async () => {
    // Render the MovieList component which will fetch movies from the mock API
    render(<MovieList />);

    // Wait for the MovieList component to render and check that the first movie in the mock data is displayed
    await waitFor(() => {
      expect(screen.getByText('Forrest Gump')).not.toBeNull();
    });

    const movieTitles = document.querySelectorAll('.card-title');
    const forrestGump = movieTitles[0];
    const fightClub = movieTitles[1];
    const se7en = movieTitles[2];

    expect(forrestGump.textContent).toBe('Forrest Gump');
    expect(fightClub.textContent).toBe('Fight Club');
    expect(se7en.textContent).toBe('Se7en');

    const movieDescriptions = document.querySelectorAll('.card-text');
    const forrestGumpDescription = movieDescriptions[0];
    const fightClubDescription = movieDescriptions[1];
    const se7enDescription = movieDescriptions[2];

    expect(forrestGumpDescription.textContent).toBe('The history of the United States from the 1950s to the \'70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.');
    expect(fightClubDescription.textContent).toBe('An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.');
    expect(se7enDescription.textContent).toBe('Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.');

    const movieYears = document.querySelectorAll('.released');
    const forrestGumpYear = movieYears[0];
    const fightClubYear = movieYears[1];
    const se7enYear = movieYears[2];

    expect(forrestGumpYear.textContent).toBe('Year Released: 1994');
    expect(fightClubYear.textContent).toBe('Year Released: 1999');
    expect(se7enYear.textContent).toBe('Year Released: 1995');

    const movieRatings = document.querySelectorAll('.rating');
    const forrestGumpRating = movieRatings[0];
    const fightClubRating = movieRatings[1];
    const se7enRating = movieRatings[2];
    
    expect(forrestGumpRating.textContent).toBe('IMDb Rating: 8.8');
    expect(fightClubRating.textContent).toBe('IMDb Rating: 8.8');
    expect(se7enRating.textContent).toBe('IMDb Rating: 8.6');
  });
});
