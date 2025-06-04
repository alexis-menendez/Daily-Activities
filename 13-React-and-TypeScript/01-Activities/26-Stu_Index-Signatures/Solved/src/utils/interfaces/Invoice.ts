import type Charge from './Charge';

//Our invoice is going to contain a series of charges.  Each charge will be identified by its title and include all the information about the Charge.  We use an index signature here because we don't know how many charges will be included in an invoice nor what they will be called.
interface Invoice {
  [key: string]: Charge;
}

export default Invoice;
