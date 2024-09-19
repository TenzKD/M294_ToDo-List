import React from "react";
import { useState } from "react";
import closeBtn from "../icons/cross.png";
import editBtn from "../icons/edit.png";
import saveBtn from "../icons/disk.png";
import "../styles/card.css";


export default function Card({
  id,
  title = "Untitled", // Default title in case undefined is passed
  todos = [], // Default to an empty array if undefined
  dueDate = "No due date", // Default due date if not provided
  deleteTask,
  updateTask,
}) {
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedTodos, setEditedTodos] = useState(todos);
  const [editedDueDate, setEditedDueDate] = useState(dueDate);

  const toggleCompletion = (index) => {
    setCompletedTodos((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleSave = () => {
    const updatedTask = {
      id,
      content: {
        title: editedTitle,
        todos: editedTodos,
        dueDate: editedDueDate,
        completed: false,
      },
    };

    updateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="card">
      <div className="card--flex">
        <div className="card__content">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder="Edit Title"
              />
              <ul>
                {editedTodos.map((todo, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={todo}
                      onChange={(e) =>
                        setEditedTodos((prevTodos) =>
                          prevTodos.map((td, i) =>
                            i === index ? e.target.value : td
                          )
                        )
                      }
                    />
                  </li>
                ))}
              </ul>
              <input
                type="date"
                value={editedDueDate}
                onChange={(e) => setEditedDueDate(e.target.value)}
              />
            </>
          ) : (
            <>
              <h3>{title}</h3>
              <ul>
                {todos.map((todo, index) => (
                  <li
                    key={index}
                    onClick={() => toggleCompletion(index)}
                    style={{
                      textDecorationLine: completedTodos.includes(index)
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {todo}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <img
          className="card__content--close"
          src={closeBtn}
          alt="close-button"
          onClick={() => deleteTask(id)}
        />
      </div>
      <div className="card--flex">
        {isEditing ? (
          <img
            className="card__content--save"
            src={saveBtn}
            alt="save-button"
            onClick={handleSave}
          />
        ) : (
          <img
            className="card__content--edit"
            src={editBtn}
            alt="edit-button"
            onClick={() => setIsEditing(true)}
          />
        )}
        <p>{dueDate}</p>
      </div>
    </div>
  );
}
