import { useState, useEffect } from "react";
import { retrieveJokes } from "../api/jokeAPI";
import type { JokeData } from "../interfaces/JokeData";
import JokeList from "../components/Jokes.js";
import JokeForm from "../components/JokeForm.js";

const Home = () => {
    // Initialize state for 'jokes' using useState, setting it to an empty array of type JokeData.
    const [jokes, setJokes] = useState<JokeData[]>([]);

    // useEffect hook runs once on component mount due to empty dependency array.
    // It calls fetchJokes to retrieve and set joke data.
    useEffect(() => {
        fetchJokes();
    }, []);

    // Async function fetchJokes retrieves joke data from an external source.
    const fetchJokes = async () => {
        // Call retrieveJokes function which asynchronously fetches joke data.
        try {
            const data = await retrieveJokes();
            // Update 'jokes' state with the fetched data.
            setJokes(data);
        } catch (error) {
            console.error('Failed to retrieve jokes', error);
            // Handle error state or notification
        }
    }

    return (
        <>
            <JokeForm />
            <JokeList jokes={jokes} />
        </>
    );
};

export default Home;
