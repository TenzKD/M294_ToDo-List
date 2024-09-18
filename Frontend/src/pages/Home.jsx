import { useState, useEffect } from "react";
import Layout from "./Layout";
import Task from "../components/Task";
import ToDoForm from "../components/ToDoForm";

export default function Home() {
  const [closeForm, setCloseForm] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    } else {
      // Fallback to fetching from API if nothing in localStorage
      fetch("http://localhost:8080/tasks/documents")
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            // If the API returns an empty array, clear localStorage
            localStorage.removeItem("tasks");
          } else {
            setTasks(data);
            localStorage.setItem("tasks", JSON.stringify(data)); // Store in localStorage
          }
        })
        .catch((error) => console.error("Error fetching tasks:", error));
    }
  }, []);

  const addTask = (newTask) => {
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

  const deleteTask = (id) => {
    fetch(`http://localhost:8080/tasks/documents/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const updatedTasks = tasks.filter((task) => task.id !== id);
          setTasks(updatedTasks);
          if (updatedTasks.length === 0) {
            // Clear localStorage if no tasks remain
            localStorage.removeItem("tasks");
          } else {
            localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Update localStorage
          }
          console.log("Task deleted successfully");
        } else {
          console.error("Error deleting task:", response.statusText);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <Task
        setCloseForm={setCloseForm}
        tasks={tasks}
        deleteTask={deleteTask}
        setTasks={setTasks}
      />
      <ToDoForm
        closeForm={closeForm}
        setCloseForm={setCloseForm}
        addTask={addTask}
      />
    </>
  );
}
