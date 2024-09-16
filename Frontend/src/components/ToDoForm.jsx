import { useState } from "react";
import "../styles/todo.css";
import closeBtn from "../icons/cross.png";

function ToDoForm({ closeForm, setCloseForm, addTask }) {
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
        setCloseForm(true); // Close the form after submission is successful
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
            value={entries.title || ""}
            onChange={store}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Task description"
            name="description"
            value={entries.description || ""}
            onChange={store}
            required
          />
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
        <button type="submit" onClick={() => setCloseForm(true)}>
          Create Task
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
