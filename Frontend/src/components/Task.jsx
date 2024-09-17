import { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import "../styles/task.css";
import searchIcon from "../icons/search.png";
import Card from "./Card";

export default function Task({ tasks, setCloseForm, deleteTask }) {
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
