import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
//TODO: import the Product interface
import './App.css';
import { getProducts } from './utils/API';

function App() {
  //TODO: update this component to use the `Product` interface to ensure type safety.
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((productData) => {
      setProducts(productData);
    });
  }, []);
  const purchaseProduct = (id: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        product.quantity--;
        alert(
          `Thank you for your purchase! We hope you enjoy your new ${product.productName}`
        );
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  return (
    <div className='App'>
      <h1>Welcome to the Store!</h1>
      <main>
        {products.map((product) => (
          <>
            <ProductCard
              key={product.id}
              purchase={purchaseProduct}
              {...product}
            />
          </>
        ))}
      </main>
    </div>
  );
}

export default App;
