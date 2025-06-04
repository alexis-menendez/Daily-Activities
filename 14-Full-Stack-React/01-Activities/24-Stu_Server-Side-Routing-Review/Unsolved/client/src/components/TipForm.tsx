import { useState, FormEvent, ChangeEvent } from "react";

import { addTip } from "../api/tipAPI";


const TipForm = () => {
  const [tipData, setTipData] = useState({
    username: '',
    tip: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTipData({
      ...tipData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await addTip(tipData);

      window.location.reload();
    } catch (err) {
      console.error('Failed to add tip', err);
    }
  };

  return (
    <section className="tip-form">
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        id="tip-form"
        onSubmit={handleSubmit}
      >
        <div className="col-12">
          <textarea
            name="tip"
            placeholder="Here's a new UI tip..."
            value={tipData.tip}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="username"
            id="tipUsername"
            placeholder="Add your name to get credit for the thought..."
            value={tipData.username}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Tip
          </button>
        </div>
      </form>
    </section>
    
  )
};

export default TipForm;
