import { map, createNotebook } from "./createNotebook";
import { createTask } from "./createTask";
import { main } from "./listenersTask";
import { addTaskDiv } from "./interface";

// Обновление данных в localStorage
export function updateLocalStorage(currentMap) {
  const notesJSON = JSON.stringify(Array.from(currentMap));
  localStorage.setItem("notes", notesJSON);
}

export function downloadFromLocalStorage() {
  const localJson = localStorage.getItem("notes");
  const local = JSON.parse(localJson);
  if (local) {
    updateMap(local);
  }
}

// Функция для обновления данных в map
function updateMap(local) {
  for (const [notebook, tasksInLocal] of local) {
    map.set(notebook, tasksInLocal);
    createNotebook(notebook);
    tasksInLocal.forEach((el) => {
      createTask(el.name, el.deadline, el.description, el.done);
    });
  }

  const selectedElement = document.querySelector(".selected");
  if (selectedElement !== null) {
    selectedElement.classList.remove("selected");
    clearSelected();
  }
}

// Очистка поля по умолчанию при запуске блокнота
function clearSelected() {
  addTaskDiv.classList.add("hidden");
  const tasks = main.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
  });
}
