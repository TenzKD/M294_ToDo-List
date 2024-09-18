import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "../styles/layout.css";

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
