// import pretty from 'pretty';
import { render } from '@testing-library/react';
import SeenIt from '../pages/SeenIt';

describe('SeenIt', () => {
  it('should display a placeholder message if no films are added', () => {
    // Render the component
    render(<SeenIt/>);

    // TODO: emptyMessage is a class, not an id. This test should fail our actions
    // TODO: After confirming the actions work as expected, change the querySelector back to a class and commit the changes. Then confirm the actions allow the pull requests
    const SeenItContainer = document.querySelector('#emptyMessage') as HTMLHeadingElement;

    // Verify the output
    expect(SeenItContainer.innerHTML).toBe("Add films you've already seen here.");
    
  });
});
