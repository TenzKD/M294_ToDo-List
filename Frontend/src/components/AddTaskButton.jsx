import plus from "../icons/plus.png";
import "../styles/AddTaskButton.css";

export default function AddTaskButton() {
  return (
    <div className="addTask">
      <button className="addTask__btn">
        <img src={plus} className="addTask__icon" alt="plus icon" />
        Add Task
      </button>
    </div>
  );
}
