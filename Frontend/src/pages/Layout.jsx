import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Task from "../components/Task";
import ToDoForm from "../components/ToDoForm";

export default function Layout() {
  const [closeForm, setCloseForm] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    } else {
      // Fallback to fetching from API if nothing in localStorage
      fetch("http://localhost:8080/tasks/documents")
        .then((response) => response.json())
        .then((data) => {
          setTasks(data);
          localStorage.setItem("tasks", JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching tasks:", error));
    }
  }, []);

  const addTask = (newTask) => {
    // Make POST request to backend to persist the task
    fetch("http://localhost:8080/tasks/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((savedTask) => {
        const updatedTasks = [...tasks, savedTask]; // Use the savedTask from the server
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to localStorage
        setCloseForm(true);
      });
  };

  return (
    <>
      <Header />
      <Sidebar />
      <Task setCloseForm={setCloseForm} tasks={tasks} />
      <ToDoForm
        closeForm={closeForm}
        setCloseForm={setCloseForm}
        addTask={addTask}
      />
    </>
  );
}
