import { Link } from "react-router-dom";
import home from "../icons/home.png";
import archive from "../icons/folder-archive.png";
import "../styles/navigation.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <img src={home} className="nav__icon" alt="home icon" />
          Home
        </li>
        <li>
          <img src={archive} className="nav__icon" alt="home icon" />
          Archive
        </li>
      </ul>
      <p>Made by Fabian, Kunga</p>
    </nav>
  );
}
