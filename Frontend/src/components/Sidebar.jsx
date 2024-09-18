import React from "react";
import Title from "./Title";
import Navigation from "../pages/Navigation";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Title />
        <Navigation />
      </div>
    </>
  );
}
