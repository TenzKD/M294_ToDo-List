import AddTaskButton from "./AddTaskButton";
import "../styles/task.css";
import searchIcon from "../icons/search.png";
import Card from "./Card";

export default function Task({ tasks, setCloseForm, deleteTask }) {
  return (
    <>
      <div className="task">
        <div className="task__controls">
          <AddTaskButton setCloseForm={setCloseForm} />
          <div className="task__search">
            <img src={searchIcon} alt="search Icon" />
            <input type="search" name="search" id="search"></input>
          </div>
        </div>
        <div className="task__container">
          {tasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.content.title}
              description={task.content.description}
              dueDate={task.content.dueDate}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}
