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

  return (
    <>
      <table id="listig">
        <tbody>
          {tasks.map((q) => (
            <tr key={q.id}>
              <td>{q.id}</td>
              <td>{q.title}</td>
              <td>{q.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
