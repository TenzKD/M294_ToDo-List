import { useState, useEffect } from "react";

export default function Archive() {
  const [tasks, setTasks] = useState([]);

  const fun = function () {
    console.log("useEffect wurde aufgerufen");
    fetch("http://localhost:8080/tasks/documents") // GET Request auf REST API
      .then((response) => response.json()) //konvertiere Response String zu JSON Objekt
      .then((tasks) => {
        const filteredTasks = tasks.filter((task) => task.completed === true); // Filter auf completed:true
        setTasks(filteredTasks); // Setze die gefilterten Tasks
      });
  };

  useEffect(fun, []);

  return (
    // TODO: soll ein div element pro Abgeschlossener Aufgabe ausgeben
    <>
      <div id="archive">
        {tasks.length > 0 ? (
          tasks.map((q) => (
            <div key={q.id}>
              {" "}
              {/* Key Attribut für jedes Element in einer Liste */}
              <h1>{q.id}</h1>
              <p>{q.title}</p>
              <p>{q.description}</p>
            </div>
          ))
        ) : (
          <p>Keine abgeschlossenen Aufgaben gefunden.</p> // Falls es keine Aufgaben gibt
        )}
      </div>
    </>
  );
}
