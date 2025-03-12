import { useState } from "react";
import "./style.css";
type Props = {
  addItem: (item: string, price: number) => void;
};
function InvoiceForm({ addItem }: Props) {
  const [formData, setFormData] = useState({ item: "", price: "" });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formData.item) {
      alert("please enter a name for this charge");
      return;
    }
    addItem(formData.item, parseFloat(formData.price) || 0);
    setFormData({
      item: "",
      price: "",
    });
  };

  return (
    <form className="InvoiceForm" onSubmit={handleSubmit}>
      <label htmlFor="item">Item:</label>
      <input
        id="item"
        type="text"
        value={formData.item}
        onChange={(e) => setFormData({ ...formData, item: e.target.value })}
      />
      <label htmlFor="price">Price:</label>
      <input
        id="price"
        type="number"
        value={formData.price}
        onChange={(e) =>
          setFormData({
            ...formData,
            price: e.target.value,
          })
        }
      />
      <button>Add Charge</button>
    </form>
  );
}

export default InvoiceForm;
