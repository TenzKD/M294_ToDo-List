import { useState } from "react";
import closeBtn from "../icons/cross.png";
import editBtn from "../icons/edit.png";
import "../styles/card.css";

export default function Card({ id, title, todos, dueDate, deleteTask }) {
  const [completedTodos, setCompletedTodos] = useState([]);

  const toggleCompletion = (index) => {
    setCompletedTodos((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <div className="card">
        <div className="card--flex">
          <div className="card__content">
            <h3>{title}</h3>
            {/* Display the list of ToDos */}
            {todos && todos.length > 0 && (
              <>
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
          <img
            className="card__content--edit"
            src={editBtn}
            alt="edit-button"
          />
          <p>{dueDate}</p>
        </div>
      </div>
    </>
  );
}
