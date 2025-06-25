import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onAdd, onDelete }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.button}>Add</button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

const styles = {
  inputContainer: {
    display: 'flex',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #555',
    borderRadius: '4px',
    backgroundColor: '#1e1e1e',
    color: '#f1f1f1'
  },
  button: {
    padding: '10px 15px',
    marginLeft: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  }
};

export default TodoList;
