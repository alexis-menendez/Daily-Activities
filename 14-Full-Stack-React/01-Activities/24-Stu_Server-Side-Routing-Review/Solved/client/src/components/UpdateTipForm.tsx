import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { updateTip } from '../api/tipAPI';

const UpdateTipForm = () => {
  const { id } = useParams();

  const [tipData, setTipData] = useState({
    username: '',
    tip: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTipData({
      ...tipData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await updateTip(id, tipData);

      window.location.reload();
    } catch (err) {
      console.error('Failed to add tip', err);
    }
  };

  return (
    <section className='tip-form'>
      <form
        className='flex-row justify-center justify-space-between-md align-center'
        id='tip-form'
        onSubmit={handleSubmit}
      >
        <div className='col-12'>
          <textarea
            name='tip'
            placeholder='Update the tip below!'
            value={tipData.tip}
            className='form-input w-100'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='col-12 col-lg-9'>
          <input
            name='username'
            id='tipUsername'
            placeholder='Update your name to get credit for the thought...'
            value={tipData.username}
            className='form-input w-100'
            onChange={handleChange}
          />
        </div>

        <div className='col-12 col-lg-3'>
          <button className='btn btn-primary btn-block py-3' type='submit'>
            Update Tip
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateTipForm;
