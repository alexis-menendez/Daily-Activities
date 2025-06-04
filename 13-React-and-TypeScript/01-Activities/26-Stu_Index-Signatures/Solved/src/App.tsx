import { useState } from 'react';
import './App.css';
import InvoiceForm from './components/InvoiceForm';
import ChargeList from './components/ChargeList';
import type Invoice from './utils/interfaces/Invoice';
import type Charge from './utils/interfaces/Charge';

function App() {
  //By expressly typing state here to `Invoice`, we ensure only `Charge` objects can be added to it.
  const [invoice, setInvoice] = useState<Invoice>({});

  const addItem = (title: string, charge: Charge) => {
    //To ensure all charges are properly invoiced, they must have unique titles.  This if statement makes sure of that.
    if (invoice[title]) {
      alert(`entry already exists for ${title}, please use unique keys`);
      return;
    }
    setInvoice({
      ...invoice,
      [title]: charge,
    });
  };
  return (
    <>
      <h1>Invoice Generator</h1>
      <InvoiceForm addItem={addItem} />
      <ChargeList invoice={invoice} />
    </>
  );
}

export default App;
