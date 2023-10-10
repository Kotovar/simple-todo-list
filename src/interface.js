import { aside, map } from "./createNotebook.js";
import { addTaskFromDOM } from "./createTask.js";
import { main } from "./listenersTask.js";

let previous;
export let addTaskDiv = document.getElementById("addTaskDiv");

//определить какой блокнот выбран, показать задачи из блокнота
export function selectNotepad() {
  aside.addEventListener("click", function (e) {
    let element = e.target;
    element = element.classList.contains("notebook")
      ? element
      : element.classList.contains("notebookName")
      ? element.parentElement
      : null;
    if (element) {
      if (previous) {
        previous.classList.remove("selected");
      }
      element.classList.add("selected");
      previous = element;
      deleteTasksFromDom();
      showTasksInDom();
      hiddenAddTaskButton();
    }
  });
}

function hiddenAddTaskButton() {
  addTaskDiv.classList.remove("hidden");
}

// Отобразить задачи в выбранном блокноте
function showTasksInDom() {
  let notebook = document.querySelector(".selected");
  let tasks = map.get(notebook.firstChild.textContent);
  tasks.forEach((el) => addTaskFromDOM(el.name, el.deadline, el.done));
}

// Очистить поле от задач
export function deleteTasksFromDom() {
  let tasksInDom = document.querySelectorAll(".task");
  let descriptionDiv = document.getElementById("descriptionDiv");
  descriptionDiv.classList.add("hidden");
  for (let task of tasksInDom) {
    task.remove();
  }
}
