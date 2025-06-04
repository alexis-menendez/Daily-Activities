import { useState } from 'react';
import './App.css';
import InvoiceForm from './components/InvoiceForm';
import ChargeList from './components/ChargeList';
import type Invoice from './utils/interfaces/Invoice';

function App() {
  const [invoice, setInvoice] = useState<Invoice>({});
  const addItem = (item: string, price: number) => {
    if (invoice[item]) {
      alert(`entry already exists for ${item}, please use unique keys`);
      return;
    }
    setInvoice({
      ...invoice,
      [item]: price,
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
