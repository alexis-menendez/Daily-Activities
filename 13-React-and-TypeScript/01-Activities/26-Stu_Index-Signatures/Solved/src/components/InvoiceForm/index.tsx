import { useState } from 'react';
import './style.css';
import type Charge from '../../utils/interfaces/Charge';
type Props = {
  addItem: (title: string, charge: Charge) => void;
};

function InvoiceForm({ addItem }: Props) {
  const [formData, setFormData] = useState({
    title: '',
    charge: {
      billed: 'fixed',
      hours: '',
      rate: '',
    },
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formData.title) {
      alert('please enter a name for this charge');
      return;
    }
    //To ensure data collected from the user matches the shape of a `Charge` object, we convert user provided data to the keys and types of a `Charge` object and use a type assertion to let TypeScript know this object is a `Charge`. Note we are assuming the charge is billed at a flat rate at first.
    const chargeData = {
      billed: formData.charge.billed,
      price: parseFloat(formData.charge.rate) || 0,
    } as Charge;
    //If a charge is billed hourly, we add the optional `hours` and `hourlyRate` keys, and update the price of the charge to reflect the actual cost.
    if (chargeData.billed === 'hourly') {
      chargeData.hours = parseInt(formData.charge.hours);
      chargeData.hourlyRate = chargeData.price;
      chargeData.price = chargeData.hours * chargeData.hourlyRate;
    }
    //This function is passed in as a prop and will add our charge to the invoice.
    addItem(formData.title, chargeData);
    setFormData({
      title: '',
      charge: {
        billed: 'fixed',
        hours: '',
        rate: '',
      },
    });
  };

  return (
    <form className='InvoiceForm' onSubmit={handleSubmit}>
      <label htmlFor='item'>Item:</label>
      <input
        id='item'
        type='text'
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <label htmlFor='billed'>Billed:</label>
      <select
        id='billed'
        value={formData.charge.billed}
        onChange={(e) =>
          setFormData({
            ...formData,
            charge: {
              ...formData.charge,
              billed: e.target.value,
            },
          })
        }
      >
        <option value='fixed'>Fixed Cost</option>
        <option value='hourly'>Hourly Rate</option>
      </select>
      {formData.charge.billed === 'hourly' ? (
        <>
          <label htmlFor='hours'>Hours:</label>
          <input
            id='hours'
            type='number'
            value={formData.charge.hours}
            onChange={(e) =>
              setFormData({
                ...formData,
                charge: {
                  ...formData.charge,
                  hours: e.target.value,
                },
              })
            }
          />
        </>
      ) : null}
      <label htmlFor='rate'>Rate:</label>
      <input
        id='rate'
        type='number'
        value={formData.charge.rate}
        onChange={(e) =>
          setFormData({
            ...formData,
            charge: {
              ...formData.charge,
              rate: e.target.value,
            },
          })
        }
      />
      <button>Add Charge</button>
    </form>
  );
}

export default InvoiceForm;
