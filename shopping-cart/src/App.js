import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

const productsData = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 699.99 },
  { id: 3, name: "Headphones", price: 149.99 },
  { id: 4, name: "Tablet", price: 399.99 }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main>
        <ProductList products={productsData} addToCart={addToCart} />
        <Cart cart={cart} />
      </main>
    </div>
  );
}

export default App;
