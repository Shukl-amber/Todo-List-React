import React, { useEffect, useState } from "react";
import "./Wrapper.css";
import { getTodos, setTodos } from "./localStorage.jsx";

export const Wrapper = () => {
  const [Todo_Arr, SetTodo_Arr] = useState(() => getTodos());

  const [newTodo, SetnewTodo] = useState("");

  useEffect(() => {
    setTodos(Todo_Arr);
  }, [Todo_Arr]);

  const deleteTodo = (index) => {
    SetTodo_Arr(Todo_Arr.filter((_, i) => i !== index));
  };

  const handleChange = (value) => {
    SetnewTodo(value);
  };

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    SetTodo_Arr([...Todo_Arr, newTodo]);
    SetnewTodo("");
  };

  return (
    <div className="main-card">
      <h1>Todo List</h1>
      <div className="input-row">
        <input
          className="todo-search"
          type="text"
          placeholder="Add a new Todo"
          value={newTodo}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="add-todo-btn" onClick={addTodo}>
          Add-Todo
        </button>
      </div>
      <ol>
        {Todo_Arr.map((todo, index) => (
          <li key={index} className="todo-box">
            {todo}
            <button className="delete-btn" onClick={() => deleteTodo(index)}>
              ❌
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
