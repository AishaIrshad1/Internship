import React, { useReducer, useState, useCallback, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import "./AppTodo.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

function AppTodo() {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const handleToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }, []);

  const handleRemove = useCallback((id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  }, []);

  return (
    <div className="todo-container">
      <h2>Task Manager</h2>

      <form className="todo-form" onSubmit={handleAdd}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task..."
        />
        <button>Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        ))}
      </ul>
    </div>
  );
}

export default AppTodo;
