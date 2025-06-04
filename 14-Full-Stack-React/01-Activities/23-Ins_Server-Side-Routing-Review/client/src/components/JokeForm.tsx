import { useState, FormEvent, ChangeEvent } from "react";
import { addJoke } from "../api/jokeAPI.js";

const JokeForm = () => {
  const [jokeData, setJokeData] = useState({
    jokeTeller: '',
    joke: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJokeData({
      ...jokeData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await addJoke(jokeData); // Use addJoke function from jokeAPI to add a joke

      // Optionally, you might want to handle successful submission feedback here
      console.log('Joke added successfully:', data);

      // Reload the page or update state as needed
      window.location.reload();
    } catch (err) {
      console.error('Failed to add joke', err);
      // Optionally, you can handle error feedback to the user here
    }
  };

  return (
    <section className="joke-form">
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        id="joke-form"
        onSubmit={handleSubmit}
      >
        <div className="col-12">
          <textarea
            name="joke"
            placeholder="Share a funny joke..."
            value={jokeData.joke}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="jokeTeller"
            id="jokeTeller"
            placeholder="Who told this joke?"
            value={jokeData.jokeTeller}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Joke
          </button>
        </div>
      </form>
    </section>
  );
};

export default JokeForm;
