import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      <h2>Available Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
