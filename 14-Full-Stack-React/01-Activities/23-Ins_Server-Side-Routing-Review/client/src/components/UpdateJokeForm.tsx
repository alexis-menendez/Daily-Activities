import { useState, FormEvent, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { updateJoke } from "../api/jokeAPI";
import { JokeData } from "../interfaces/JokeData";

const UpdateJokeForm = () => {
  const { id } = useParams<{ id: string }>(); // Assuming id is a string

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
      const data = await updateJoke(id, jokeData);

      // Optionally handle success, e.g., redirect or show a success message
      console.log('Joke updated successfully:', data);

      // Reload the page or navigate to another route as needed
      window.location.reload();
    } catch (err) {
      console.error('Failed to update joke', err);
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
            placeholder="Update the joke below!"
            value={jokeData.joke}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="jokeTeller"
            id="jokeTeller"
            placeholder="Update joke teller's name..."
            value={jokeData.jokeTeller}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Update Joke
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateJokeForm;
