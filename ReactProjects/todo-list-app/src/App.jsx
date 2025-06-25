import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log("Todo list updated:", todos);
  }, [todos]);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Todo List</h1>
        <div style={styles.box}>
          <TodoList todos={todos} onAdd={addTodo} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: '#f1f1f1',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '60px',
  },
  wrapper: {
    width: '100%',
    maxWidth: '600px',
    padding: '0 20px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#f1f1f1'
  },
  box: {
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #333'
  }
};

export default App;
