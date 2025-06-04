import { render } from '@testing-library/react';
import SeenIt from '../pages/SeenIt';

describe('SeenIt', () => {
  it('should display a placeholder message if no films are added', () => {
    // Render the component
    render(<SeenIt/>);

    const SeenItContainer = document.querySelector('.emptyMessage') as HTMLHeadingElement;

    expect(SeenItContainer.innerHTML).toBe("Add films you've already seen here.");
  });
});
