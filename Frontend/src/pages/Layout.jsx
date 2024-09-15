import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Task from "../components/Task";
import ToDoForm from "../components/ToDoForm";

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Task />
      <ToDoForm />
    </>
  );
}
