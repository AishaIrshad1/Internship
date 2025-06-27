import React from "react";

const TodoItem = React.memo(({ todo, onToggle, onRemove }) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>✕</button>
    </li>
  );
});

export default TodoItem;
