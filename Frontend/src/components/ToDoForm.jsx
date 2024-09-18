import React from "react";
import { useState } from "react";
import "../styles/todo.css";
import closeBtn from "../icons/cross.png";

function ToDoForm({ closeForm, setCloseForm, addTask }) {
  const [entries, setEntries] = useState({});
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const store = (e) => {
    setEntries({
      ...entries,
      //...Spread Operator übernimmt entries
      // ergänzt Attribut – Wert Paar aus input
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    const submitData = {
      content: {
        title: entries.title,
        description: entries.description,
        todos: todos,
        dueDate: entries.dueDate,
        completed: false,
      },
    };

    console.log("Submitting Data:", submitData);

    fetch("http://localhost:8080/tasks/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then((savedTask) => {
        // Use the saved task from the server, including its ID
        addTask(savedTask);
        setEntries({}); // Clear the form
        setTodos([]);
        setCloseForm(true); // Close the form after submission is successful
      });
  };

  const handleTodoChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleClose = () => {
    setCloseForm(true); // Close the form
    setTodos([]); // Clear todos when closing the form
  };

  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, todoInput.trim()]);
      setTodoInput("");
    }
  };

  return (
    <div className="forms" style={{ display: closeForm ? "none" : "block" }}>
      <img
        className="forms__close"
        src={closeBtn}
        alt=""
        onClick={() => {
          handleClose();
        }}
      />
      <form onSubmit={submit}>
        <div>
          <input
            type="text"
            placeholder="Task title"
            name="title"
            value={entries.title || ""}
            onChange={store}
            required
          />
        </div>
        <div className="todos">
          <div
            className="todos__container"
            name="description"
            value={entries.description || ""}
            onChange={store}
          >
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>
          <input
            type="text"
            placeholder="ToDo's"
            value={todoInput}
            onChange={handleTodoChange}
          />
          <button type="button" onClick={addTodo}>
            Add ToDo
          </button>
        </div>
        <div>
          <input
            type="date"
            name="dueDate"
            value={entries.dueDate || ""}
            onChange={store}
            required
          />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default ToDoForm;
