import { useState } from 'react';

function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState('microsoft/vscode');

  const sendTerm = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={sendTerm}>
        <div className="field">
          <label>Retrieve GitHub Issues</label>
          <input
            type="text"
            value={term}
            onChange={({ target }) => setTerm(target.value)}
            placeholder="facebook/react"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
