import React, { useEffect, useState } from "react";
import "./Wrapper.css";
import { getTodos, setTodos } from "./localStorage.jsx";

export const Wrapper = () => {
  const [Todo_Arr, SetTodo_Arr] = useState(() => getTodos());
  const [newTodo, SetnewTodo] = useState("");
  const [isEditing, SetisEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setTodos(Todo_Arr);
  }, [Todo_Arr]);

  const deleteTodo = (index) => {
    SetTodo_Arr(Todo_Arr.filter((_, i) => i !== index));
    if (isEditing && editIndex === index) {
      SetisEditing(false);
      setEditIndex(null);
      SetnewTodo("");
    }
  };

  const handleChange = (value) => {
    SetnewTodo(value);
  };

  const addOrEditTodo = () => {
    if (isEditing && editIndex !== null) {
      if (newTodo.trim() === "") {
        alert("Edited~ Value Cannot Be Null");
        return;
      }
      SetTodo_Arr(Todo_Arr.map((_, i) => (i === editIndex ? newTodo : _)));
      SetisEditing(false);
      setEditIndex(null);
    } else {
      if (newTodo.trim() === "") return;
      SetTodo_Arr([...Todo_Arr, newTodo]);
    }
    SetnewTodo("");
  };

  const editTodo = (index) => {
    SetnewTodo(Todo_Arr[index]);
    SetisEditing(true);
    setEditIndex(index);
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
        <button className="add-todo-btn" onClick={addOrEditTodo}>
          {isEditing ? "Update Todo" : "Add Todo"}
        </button>
      </div>
      <ol>
        {Todo_Arr.map((todo, index) => (
          <li key={index} className="todo-box">
            <span className="todo-text">{todo}</span>
            <span className="button-group">
              <button className="delete-btn" onClick={() => editTodo(index)}>
                ✏️
              </button>
              <button className="delete-btn" onClick={() => deleteTodo(index)}>
                ❌
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
