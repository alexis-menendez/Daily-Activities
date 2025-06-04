import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import type Product from './utils/interfaces/Product';
import './App.css';
import { getProducts } from './utils/API';
function App() {
  const [products, setProducts] = useState<Product[] | []>([]);
  useEffect(() => {
    getProducts().then((productData) => {
      setProducts(productData);
    });
  }, []);
  const purchaseProduct = (id: number) => {
    const updatedProducts = products.map((product: Product) => {
      if (product.id === id) {
        alert(
          `Thank you for your purchase! We hope you enjoy your new ${product.productName}`
        );
        // Create a new object with the updated quantity
        return { ...product, quantity: product.quantity - 1 };
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
