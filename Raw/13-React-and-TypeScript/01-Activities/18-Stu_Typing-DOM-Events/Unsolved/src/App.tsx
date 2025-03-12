import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');

  // TODO: What type of event are we handling here?
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const isValid = (input: string) => {
    // Check if input is alphanumeric lowercase and also allow underscore
    const regex = /^[a-z0-9_]*$/;
    // use regex.test() to check if input is valid and input.length to check if it is at least 5 characters long
    return regex.test(input) && input.length >= 5;
  }

  // TODO: What type of event are we handling here?
  const handleMouseEnter = (e: React.MouseEvent<HTMLFormElement>) => {
    // TODO: How does this work?
    if (e.shiftKey) {
      alert("Mouse Entered Form with Shift Key Pressed");
    }
  }

  // TODO: What type of event are we handling here?
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form Submitted with valid input!");
    setText('');
  }

  return (
    <div className="App">
      <h1>Typing DOM Events</h1>
      {/* TODO: What type of events are we handling here? */}
      <form onSubmit={handleSubmit} onMouseEnter={handleMouseEnter}>
        {/* TODO: What type of event are we handling here? */}
        <input type="text" value={text} onChange={handleChange} />
        <p>Text Input Valid: <span style={isValid(text) ? { color: "green" } : { color: "red" }}>{isValid(text) ? "True" : "False"}</span></p>
        {isValid(text) && <button>Submit</button>}
      </form>
    </div>
  )
}

export default App;
