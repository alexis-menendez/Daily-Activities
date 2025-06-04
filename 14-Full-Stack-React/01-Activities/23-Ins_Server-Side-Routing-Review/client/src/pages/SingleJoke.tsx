import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { retrieveJoke, deleteJoke } from "../api/jokeAPI";
import UpdateJokeForm from "../components/UpdateJokeForm.js";


const SingleJoke = () => {
    const { id } = useParams();

    // Initialize state for 'joke' using useState, setting it to an empty object of type JokeData.
    const [joke, setJoke] = useState({
        id: "",
        jokeTeller: "",
        joke: "",
    });

    // useEffect hook runs once on component mount due to empty dependency array.
    // It calls fetchJoke to retrieve and set joke data.
    useEffect(() => {
        fetchJoke(id);
    }, [id]);

    // Async function fetchJoke retrieves joke data from an external source.
    const fetchJoke = async (id: string | undefined) => {
        try {
            // Call retrieveJoke function which asynchronously fetches joke data.
            const data = await retrieveJoke(id);
            // Update 'joke' state with the fetched data.
            setJoke(data);
        } catch (error) {
            console.error('Failed to fetch joke', error);
            // Handle error state or notification
        }
    }

    const handleDeleteJoke = async (id: string) => {
        try {
            // Call deleteJoke function to delete the joke.
            await deleteJoke(id);
            // Redirect to home page after deletion.
            window.location.assign('/');
        } catch (error) {
            console.error('Failed to delete joke', error);
            // Handle error state or notification
        }
    }

    return (
        <>
            <UpdateJokeForm />
            <div className="card mb-3" key={joke.id}>
                <h4 className="card-header bg-primary text-light p-2 m-0">{joke.jokeTeller}'s joke:
                    {joke.joke}
                    <p><a onClick={() => handleDeleteJoke(joke.id)}>Delete this joke</a></p>
                </h4>
            </div>
        </>
    );
};

export default SingleJoke;
