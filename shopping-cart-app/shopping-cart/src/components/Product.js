import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const Product = ({ id, title, price, image }) => {
  const dispatch = useDispatch();

  return (
    <div style={{
      border: '1px solid #eee',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      backgroundColor: '#fff',
      textAlign: 'center',
      transition: 'transform 0.3s',
    }}>
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
      <h3 style={{ marginTop: '12px', fontSize: '18px' }}>{title}</h3>
      <p style={{ fontWeight: 'bold', color: '#222', fontSize: '16px' }}>${price}</p>
      <button
        onClick={() => dispatch(addItem({ id, title, price }))}
        style={{
          marginTop: '12px',
          padding: '10px 20px',
          backgroundColor: '#0f62fe',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#0043ce'}
        onMouseOut={e => e.target.style.backgroundColor = '#0f62fe'}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
