import React from 'react';
import Product from './components/Product';
import Cart from './components/Cart';

const products = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    price: 1099,
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SX679_.jpg',
  },
  {
    id: 2,
    title: 'MacBook Pro M2',
    price: 1999,
    image: 'https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_SX679_.jpg',
  },
  {
    id: 3,
    title: 'iPad Pro 11"',
    price: 899,
    image: 'https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg',
  },
  {
    id: 4,
    title: 'AirPods Pro',
    price: 249,
    image: 'https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SX679_.jpg',
  },
  {
    id: 5,
    title: 'Magic Keyboard',
    price: 99,
    image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg',
  },
];



function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Apple Store</h1>
      <Cart />
      <hr />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
