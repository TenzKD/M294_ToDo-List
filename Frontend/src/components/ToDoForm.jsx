import { useState } from "react";
import "../styles/todo.css";
import closeBtn from "../icons/cross.png";
import PropTypes from "prop-types";

function ToDoForm({ closeForm, setCloseForm }) {
  const [entries, setEntries] = useState({});
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
        dueDate: entries.dueDate,
        completed: "false",
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
      .then(() => {
        setEntries({});
      });
  };

  return (
    <div className="forms" style={{ display: closeForm ? "none" : "block" }}>
      <img
        className="forms__close"
        src={closeBtn}
        alt=""
        onClick={() => setCloseForm(true)}
      />
      <form onSubmit={submit}>
        <div>
          <input
            type="text"
            placeholder="Task title"
            name="title"
            onChange={store}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Task description"
            name="description"
            onChange={store}
            required
          />
        </div>
        <div>
          <input type="date" name="dueDate" onChange={store} required />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default ToDoForm;
