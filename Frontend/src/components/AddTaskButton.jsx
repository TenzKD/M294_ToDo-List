import plus from "../icons/plus.png";

export default function AddTaskButton() {
  return (
    <button className="addTask__btn">
      <img src={plus} className="addTask__icon" alt="plus icon" />
      Add Task
    </button>
  );
}
