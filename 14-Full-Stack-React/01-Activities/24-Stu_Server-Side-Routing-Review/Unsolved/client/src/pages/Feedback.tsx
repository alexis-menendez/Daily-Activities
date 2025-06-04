import { useState, useEffect } from "react";
import { retrieveFeedbacks } from "../api/feedbackAPI.tsx";
import type { FeedbackData } from "../interfaces/FeedbackData";
import FeedbackList from "../components/Feedbacks.tsx"
import FeedbackForm from "../components/FeedbackForm.tsx";

const Feedback = () => {

    // Initialize state for 'feedbacks' using useState, setting it to an empty array of type UserData.
    const [feedbacks, setFeedbacks] = useState<FeedbackData[]>([]);

    // useEffect hook runs once on component mount due to empty dependency array.
    // It calls fetchfeedbacks to retrieve and set user data.
    useEffect(() => {
        fetchFeedbacks();
    }, []);

    // Async function fetchfeedbacks retrieves user data from an external source.
    const fetchFeedbacks = async () => {
        // Call retrievefeedbacks function which asynchronously fetches user data.
        const data = await retrieveFeedbacks();
        // Update 'feedbacks' state with the fetched data.
        setFeedbacks(data);
    }

    return (
        <>
        <FeedbackForm />
        <FeedbackList feedbacks={feedbacks} />
        </>
        
    );
};

export default Feedback;
