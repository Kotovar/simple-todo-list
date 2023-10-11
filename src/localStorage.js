import { map, createNotebook } from "./createNotebook";
import { createTask } from "./createTask";
import { main } from "./listenersTask.js";
import { addTaskDiv } from "./interface";

//обновление данных в localStorage
export function updateLocalStorage(map) {
  let notesJSON = JSON.stringify(Array.from(map));
  localStorage.setItem("notes", notesJSON);
}

export function downloadFromLocalStorage() {
  let localJson = localStorage.getItem("notes");
  console.log(localJson);
  let local = JSON.parse(localJson);
  if (local) {
    updateMap(local);
  }
}

// Функция для обновления данных в map
function updateMap(local) {
  for (let [notebook, tasksInLocal] of local) {
    console.log(tasksInLocal);
    map.set(notebook, tasksInLocal);
    console.log(notebook);
    createNotebook(notebook);
    tasksInLocal.forEach((el) => {
      createTask(el.name, el.deadline, el.description, el.done);
      console.log(el.deadline);
    });
  }
  let selectedElement = document.querySelector(".selected");
  if (selectedElement !== null) {
    selectedElement.classList.remove("selected");
    clearSelected();
  }
}

// очистка поля по умолчанию при запуске блокнота
function clearSelected() {
  addTaskDiv.classList.add("hidden");
  let tasks = main.querySelectorAll(".task");
  tasks.forEach(function (task) {
    task.remove();
  });
}