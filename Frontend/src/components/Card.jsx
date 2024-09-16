import closeBtn from "../icons/cross.png";
import editBtn from "../icons/edit.png";
import "../styles/card.css";

export default function Card({ id, title, description, dueDate, deleteTask }) {
  return (
    <>
      <div className="card">
        <div className="card--flex">
          <div className="card__content">
            <h3>{title}</h3>
            <ul>
              <li>{description}</li>
            </ul>
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
