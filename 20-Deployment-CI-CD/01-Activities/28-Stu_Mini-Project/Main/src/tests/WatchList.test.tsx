import { render } from '@testing-library/react';
import WatchList from '../pages/WatchList';

describe('WatchList', () => {
  it('should display a placeholder message if no films are added', () => {
    // Render the component
    render(<WatchList/>);

    const WatchListContainer = document.querySelector('.emptyMessage') as HTMLHeadingElement;

    // Verify the output
    expect(WatchListContainer.innerHTML).toBe('Add films to your watchlist.');
  });
});
