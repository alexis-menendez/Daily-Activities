import type Invoice from '../../utils/interfaces/Invoice';
import './style.css';
const ChargeList = ({ invoice }: { invoice: Invoice }) => {
  return (
    <div className='ChargeList'>
      {/* `Object.keys()` takes an object as a parameter and returns an array of all the keys in that object.  We can then map over the resulting array to create a line item for each charge in our invoice. */}
      {Object.keys(invoice).map((key) => (
        <div className='charge-div' key={key}>
          <span>
            {key}{' '}
            {/* This ternary operator will add details about hours charged and hourly rate only if the charge was billed hourly */}
            {invoice[key].billed === 'hourly' ? (
              <em>
                ({invoice[key].hours} hours @{' '}
                {invoice[key].hourlyRate?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                /hr)
              </em>
            ) : null}
          </span>
          <span>
            {invoice[key].price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
        </div>
      ))}
      {/* `Object.values` accepts an object as an argument and returns an array of all the values of that object.  In this example, we first make sure the invoice has any charges, and if it does, we sum up the total cost. */}
      {Object.values(invoice).length ? (
        <h2>
          <span>Total:</span>
          <span>
            {Object.values(invoice)
              // The `.reduce()` method can be called on an array. It takes in two arguments:  a callback function and a starting value. The callback function takes in two arguments: the accumulator (or running total) and the current value. The value returned from the callback becomes the accumulator in the next execution. In this example, we start with a value of 0 and add the `price` value from each key to get the total cost.
              .reduce((accumulated, currentCharge) => {
                return accumulated + currentCharge.price;
              }, 0)
              .toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
          </span>
        </h2>
      ) : null}
    </div>
  );
};

export default ChargeList;
