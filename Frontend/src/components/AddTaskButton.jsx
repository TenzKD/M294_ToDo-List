import React from "react";
import plus from "../icons/plus.png";
import "../styles/addTaskButton.css";

export default function AddTaskButton({ setCloseForm }) {
  return (
    <div className="addTask">
      <button className="addTask__btn" onClick={() => setCloseForm(false)}>
        <img src={plus} className="addTask__icon" alt="plus icon" />
        Add Task
      </button>
    </div>
  );
}
