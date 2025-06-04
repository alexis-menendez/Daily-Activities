import { useState, type FormEvent, type ChangeEvent } from 'react';

import { addFeedback } from '../api/feedbackAPI';

const FeedbackForm = () => {
  const [feedbackData, setFeedbackData] = useState({
    email: '',
    feedback: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFeedbackData({
      ...feedbackData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await addFeedback(feedbackData);

      window.location.reload();
    } catch (err) {
      console.error('Failed to add feedback', err);
    }
  };

  return (
    <section className='feedback-form'>
      <form
        className='flex-row justify-center justify-space-between-md align-center'
        id='feedback-form'
        onSubmit={handleSubmit}
      >
        <div className='col-12'>
          <textarea
            name='feedback'
            placeholder="Here's a new UI feedback..."
            value={feedbackData.feedback}
            className='form-input w-100'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='col-12 col-lg-9'>
          <input
            name='email'
            id='feedbackEmail'
            placeholder='Add your email to get credit for the thought...'
            value={feedbackData.email}
            className='form-input w-100'
            onChange={handleChange}
          />
        </div>

        <div className='col-12 col-lg-3'>
          <button className='btn btn-primary btn-block py-3' type='submit'>
            Add Feedback
          </button>
        </div>
      </form>
    </section>
  );
};

export default FeedbackForm;
