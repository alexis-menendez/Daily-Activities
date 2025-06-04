import { useState } from 'react';
import type MailingFormData from '../../utils/interfaces/MailingFormData';
import type {
  MailingEmail,
  MailingName,
} from '../../utils/interfaces/MailingFormData';
import './style.css';

function MailingListForm() {
  const [formData, setFormData] = useState<MailingFormData>({
    name: '',
    email: '',
  });
  const validName = (name: string): MailingName => {
    return name as MailingName;
  };

  const validEmail = (email: string): MailingEmail => {
    return email as MailingEmail;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert(`both name and email are needed to join the mailing list`);
      return;
    }
    alert(`Thanks for signing up ${formData.name}! 
We will reach out at ${formData.email}!`);
    setFormData({
      name: '',
      email: '',
    });
  };
  return (
    <form className='MailingListForm' onSubmit={handleSubmit}>
      <label htmlFor='mailing-name'>Name:</label>
      <input
        id='mailing-name'
        type='text'
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: validName(e.target.value) })
        }
      />

      <label htmlFor='mailing-email'>Email:</label>
      <input
        id='mailing-email'
        type='text'
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: validEmail(e.target.value) })
        }
      />
      <button>Join Mailing List</button>
    </form>
  );
}

export default MailingListForm;
