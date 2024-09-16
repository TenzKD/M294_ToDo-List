import { useState, useEffect } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);

  //Funktion um eine Anfrage an die REST zu senden und die Rückgabe in einen Array tasks zu speichern.
  const fun = function () {
    console.log("useEffect wurde aufgerufen");
    fetch("http://localhost:8080/tasks/documents") // GET Request auf REST API
      .then((response) => response.json()) //konvertiere Response String zu JSON Objekt
      .then((tasks) => setTasks(tasks));
  };

  // Wird immer ausgeführt wenn die ToDoList Komponente geladen wird.
  useEffect(fun, []);

  
  const deleteTask = (id) => {
    fetch("http://localhost:8080/tasks/documents/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTasks(tasks.filter((task) => task.id !== id)); // Entfernt die gelöschte Aufgabe
          (response) => console.log(response);
        } else {
          console.error("Fehler beim Löschen:", response.statusText);
        }
      })
      .catch((error) => console.error("Fehler:", error));
  };


  return (
    <>
      <div id="listig">
        {tasks.map((q) => (
          <>
          <div>
            <p>{q.content.title}</p>
            <p>{q.content.description}</p>
            <p>
              <button onClick={() => deleteTask(q.id)}>Löschen</button>
              <button onClick={() => closeTask(q.id)}>Erledigt</button>
            </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
