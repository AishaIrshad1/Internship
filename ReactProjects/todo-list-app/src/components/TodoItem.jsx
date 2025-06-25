import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <li style={styles.item}>
      <span style={styles.text}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} style={styles.deleteButton}>Delete</button>
    </li>
  );
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 12px',
    backgroundColor: '#2a2a2a',
    marginBottom: '8px',
    borderRadius: '4px',
    border: '1px solid #444'
  },
  text: {
    color: '#f1f1f1',
    fontSize: '16px'
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default TodoItem;
