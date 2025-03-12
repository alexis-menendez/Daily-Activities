// We import useContext to have access to the context.
import { useState, useEffect, useContext } from 'react';
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';
// We import the ThemeContext so we can use the theme and toggleTheme functions.
import { ThemeContext } from './components/ThemeContext';

function App() {
  const [issues, setIssues] = useState([]);
  // The useContext hook gets us the current theme and the function to toggle it.
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'GitHub issues';
  }, []);

  const getRepoIssues = async (repo) => {
    const issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
    console.log('issuesURL', issuesURL);

    const res = await fetch(issuesURL);
    const response = await res.json();
    setIssues(response);
  };

  return (
    // Apply the current theme to the main div for the application.
    <div className={`app ${theme}`}>
      {/* Allow the button click to toggle between light and dark themes. */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <SearchBar onFormSubmit={getRepoIssues} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <IssueList issues={issues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
