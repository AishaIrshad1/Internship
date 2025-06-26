import React from 'react';

function Cart({ cart }) {
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p><strong>Total Items:</strong> {totalItems}</p>
      <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
