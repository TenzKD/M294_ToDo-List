import AddTaskButton from "./AddTaskButton";
import "../styles/task.css";
import searchIcon from "../icons/search.png";
import Card from "./Card";

export default function Task({ setCloseForm }) {
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
        <div className="task__container"></div>
      </div>
    </>
  );
}
