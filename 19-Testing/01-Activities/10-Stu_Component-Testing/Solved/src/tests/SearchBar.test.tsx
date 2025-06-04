import pretty from 'pretty';
import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  // In this example, we render the SearchBar component and format the rendered HTML using the pretty package before
  // saving it as a snapshot
  it('should render and match snapshot', () => {
    // Render the component
    render(<SearchBar onFormSubmit={() => {}}/>);

    const SearchBarElement = document.querySelector('.search-bar');

    if (SearchBarElement) {
      // Format the rendered output
      const html = pretty(SearchBarElement.outerHTML);

      // Verify the output
      expect(html).toMatchSnapshot();
    }
  });
});
