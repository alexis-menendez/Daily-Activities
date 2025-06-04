import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');

  // type event as React.ChangeEvent<HTMLInputElement> to give intellisense for event. This means that this is a change event on an input element. This event is triggered when the value of the input element changes.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const isValid = (input: string) => {
    // Check if input is alphanumeric lowercase and also allow underscore
    const regex = /^[a-z0-9_]*$/;
    // use regex.test() to check if input is valid and input.length to check if it is at least 5 characters long
    return regex.test(input) && input.length >= 5;
  }

  // type event as React.MouseEvent<HTMLFormElement> to give intellisense for event. This means that this is a mouse even on a form element. Mouse enter event is triggered when the mouse enters the form.
  const handleMouseEnter = (e: React.MouseEvent<HTMLFormElement>) => {
    // Check if shift key is pressed when mouse enters form e.shiftKey is a boolean value that is true if the shift key is pressed when the event is triggered
    if (e.shiftKey) {
      alert("Mouse Entered Form with Shift Key Pressed");
    }
  }

  // type event as React.FormEvent<HTMLFormElement> to give intellisense for event. This means that this is a form event on a form element. This event is triggered when the form is submitted.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission
    e.preventDefault();
    // Alert if form is submitted with valid input
    alert("Form Submitted with valid input!");
    // Clear input field after submission
    setText('');
  }

  return (
    <div className="App">
      <h1>Typing DOM Events</h1>
      {/* add event handlers for submit and mouse enter events */}
      <form onSubmit={handleSubmit} onMouseEnter={handleMouseEnter}>
        {/* add event handler for change event */}
        <input type="text" value={text} onChange={handleChange} />
        <p>Text Input Valid: <span style={isValid(text) ? { color: "green" } : { color: "red" }}>{isValid(text) ? "True" : "False"}</span></p>
        {isValid(text) && <button>Submit</button>}
      </form>
    </div>
  )
}

export default App;
