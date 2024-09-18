import React from "react";
import { Link } from "react-router-dom";
import home from "../icons/home.png";
import archive from "../icons/folder-archive.png";
import "../styles/navigation.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/home">
            <img src={home} className="nav__icon" alt="home icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/impressum">
            <img src={archive} className="nav__icon" alt="home icon" />
            Impressum
          </Link>
        </li>
      </ul>
      <p>Made by Fabian, Kunga</p>
    </nav>
  );
}
