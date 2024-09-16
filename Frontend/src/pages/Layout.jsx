import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Task from "../components/Task";
import ToDoForm from "../components/ToDoForm";

export default function Layout() {
  const [closeForm, setCloseForm] = useState(true);
  return (
    <>
      <Header />
      <Sidebar />
      <Task setCloseForm={setCloseForm} />
      <ToDoForm closeForm={closeForm} setCloseForm={setCloseForm} />
    </>
  );
}
