import type Invoice from '../../utils/interfaces/Invoice';
import './style.css';
const ChargeList = ({ invoice }: { invoice: Invoice }) => {
  return (
    <div className='ChargeList'>
      {Object.keys(invoice).map((key) => (
        <div className='charge-div' key={key}>
          <span>{key}</span>
          <span>
            {invoice[key].toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
        </div>
      ))}
      {Object.values(invoice).length ? (
        <h2>
          Total:
          {Object.values(invoice)
            .reduce((a, b) => a + b, 0)
            .toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
        </h2>
      ) : null}
    </div>
  );
};

export default ChargeList;
