import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  return (
    <div style={{
      padding: '10px 0',
      marginBottom: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
    }}>
      <h2 style={{ paddingLeft: '10px', fontSize: '20px' }}>Cart ({total} items)</h2>
      {items.length === 0 ? (
        <p style={{ paddingLeft: '10px', color: '#888' }}>Your cart is empty</p>
      ) : (
        <div style={{ paddingLeft: '10px' }}>
          {items.map(item => (
            <div key={item.id} style={{ marginBottom: '8px' }}>
              <span>{item.title} (x{item.quantity})</span>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{
                  marginLeft: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '2px 6px',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
