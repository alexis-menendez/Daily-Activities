import { useState, FormEvent, ChangeEvent } from "react";
import { addTip } from "../api/tipAPI";  // Import the function to add a tip from the API

// Define the TipForm component
const TipForm = () => {
  // State to manage the tip form data
  const [tipData, setTipData] = useState({
    username: '',
    tip: ''
  });

  // Handle changes in the input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTipData({
      ...tipData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Send the tip data to the server
      const data = await addTip(tipData);
      // Reload the page to reflect the new tip
      window.location.reload();
    } catch (err) {
      console.error('Failed to add tip', err);  // Log any errors that occur
    }
  };

  return (
    <section className="tip-form">
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        id="tip-form"
        onSubmit={handleSubmit}  // Attach the submit handler
      >
        <div className="col-12">
          {/* Textarea for user tip */}
          <textarea
            name="tip"
            placeholder="Here's a new UI tip..."
            value={tipData.tip}
            className="form-input w-100"
            onChange={handleChange}  // Attach the change handler
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          {/* Input field for username */}
          <input
            name="username"
            id="tipUsername"
            placeholder="Add your name to get credit for the thought..."
            value={tipData.username}
            className="form-input w-100"
            onChange={handleChange}  // Attach the change handler
          />
        </div>

        <div className="col-12 col-lg-3">
          {/* Submit button for the tip form */}
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Tip
          </button>
        </div>
      </form>
    </section>
  )
};

export default TipForm;
