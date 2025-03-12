import type Charge from './Charge';

//TODO: What keys and values should we expect in this `Invoice` type?
interface Invoice {
  [key: string]: Charge;
}

export default Invoice;
