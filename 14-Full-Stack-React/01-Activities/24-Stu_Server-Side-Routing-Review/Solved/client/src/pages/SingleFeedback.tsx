import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { retrieveFeedback, deleteFeedback } from "../api/feedbackAPI";
import UpdateFeedbackForm from "../components/UpdateFeedbackForm.tsx";

const SingleFeedback = () => {

    const { id } = useParams();
    // Initialize state for 'feedback' using useState, setting it to an empty array of type UserData.
    const [feedback, setFeedback] = useState({
        id:"",
        feedback:"",
        email:""
    });

    // useEffect hook runs once on component mount due to empty dependency array.
    // It calls fetchfeedback to retrieve and set user data.
    useEffect(() => {
        fetchFeedback(id);
    }, []);

    // Async function fetchfeedback retrieves feedback data from an external source.
    const fetchFeedback = async (id: string | undefined) => {
        // Call retrievefeedback function which asynchronously fetches user data.
        const data = await retrieveFeedback(id);
        // Update 'feedback' state with the fetched data.
        setFeedback(data);
    }

    const hadleDeleteFeedback = async (id: string | undefined) => {
        const data = await deleteFeedback(id)

        window.location.assign('/')
    }

    return (
        <>
        <UpdateFeedbackForm />
        <div className="card mb-3" key={feedback.id}>
          <h4 className="card-header bg-primary text-light p-2 m-0">{feedback.email}</h4>
          <div className="card-body bg-light p-2">
            <p>{feedback.feedback}</p>
            <a onClick={() => hadleDeleteFeedback(feedback.id)}>Delete this feedback</a>
          </div>
        </div>
        </>
        
    );
};

export default SingleFeedback;
