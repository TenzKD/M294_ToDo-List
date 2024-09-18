import { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import "../styles/task.css";
import searchIcon from "../icons/search.png";
import Card from "./Card";

export default function Task({ tasks, setCloseForm, deleteTask, setTasks }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const titleMatch = task?.content.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const todosMatch =
      task?.content.todos &&
      Array.isArray(task.content.todos) &&
      task.content.todos.some((todo) =>
        todo.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return titleMatch || todosMatch;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const updateTask = (updatedTask) => {
    fetch("http://localhost:8080/tasks/documents", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((updatedData) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedData : task
          )
        );
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <>
      <div className="task">
        <div className="task__controls">
          <AddTaskButton setCloseForm={setCloseForm} />
          <div className="task__search">
            <img src={searchIcon} alt="search Icon" />
            <input
              type="search"
              name="search"
              id="search"
              value={searchTerm}
              onChange={handleSearch}
            ></input>
          </div>
        </div>
        <div className="task__container">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <Card
                key={task.id}
                id={task.id}
                title={task.content.title}
                todos={task.content.todos}
                dueDate={task.content.dueDate}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))
          ) : (
            <p>No tasks found :(</p> // Nachricht, wenn keine Aufgaben gefunden wurden
          )}
        </div>
      </div>
    </>
  );
}
