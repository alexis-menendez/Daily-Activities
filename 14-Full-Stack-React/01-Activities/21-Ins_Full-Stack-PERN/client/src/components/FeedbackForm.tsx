import { useState, FormEvent, ChangeEvent } from "react";
import { addFeedback } from "../api/feedbackAPI";  // Import the function to add feedback from the API

// Define the FeedbackForm component
const FeedbackForm = () => {
  // State to manage the feedback form data
  const [feedbackData, setFeedbackData] = useState({
    email: '',
    feedback: ''
  });

  // Handle changes in the input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFeedbackData({
      ...feedbackData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Send the feedback data to the server
      const data = await addFeedback(feedbackData);
      // Reload the page to reflect the new feedback
      window.location.reload();
    } catch (err) {
      console.error('Failed to add feedback', err);  // Log any errors that occur
    }
  };

  return (
    <section className="feedback-form">
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        id="feedback-form"
        onSubmit={handleSubmit}  // Attach the submit handler
      >
        <div className="col-12">
          {/* Textarea for user feedback */}
          <textarea
            name="feedback"
            placeholder="Here's a new UI feedback..."
            value={feedbackData.feedback}
            className="form-input w-100"
            onChange={handleChange}  // Attach the change handler
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          {/* Input field for user email */}
          <input
            name="email"
            id="feedbackEmail"
            placeholder="Add your email to get credit for the thought..."
            value={feedbackData.email}
            className="form-input w-100"
            onChange={handleChange}  // Attach the change handler
          />
        </div>
        <div className="col-12 col-lg-3">
          {/* Submit button for the feedback form */}
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Feedback
          </button>
        </div>
      </form>
    </section>
  )
};

export default FeedbackForm;
