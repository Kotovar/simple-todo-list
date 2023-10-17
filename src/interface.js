import { aside, map } from "./createNotebook";
import { addTaskFromDOM } from "./createTask";
import { createTaskForm } from "./listenersTask";

export const addTaskDiv = document.getElementById("addTaskDiv");

// Определить какой блокнот выбран, показать задачи из блокнота
export function selectNotepad() {
  aside.addEventListener("click", (e) => {
    let element = e.target;
    element = element.classList.contains("notebook")
      ? element
      : element.classList.contains("notebookName")
      ? element.parentElement
      : null;
    if (element) {
      const notebooks = document.querySelectorAll(".notebook");
      for (const div of notebooks) {
        if (div.classList.contains("selected")) {
          div.classList.remove("selected");
        }
      }

      element.classList.add("selected");
      deleteTasksFromDom();
      showTasksInDom();
      hiddenAddTaskButton();
      createTaskForm.classList.add("hidden");
    }
  });
}

export function hiddenAddTaskButton() {
  addTaskDiv.classList.remove("hidden");
}

// Отобразить задачи в выбранном блокноте
export function showTasksInDom() {
  const notebook = document.querySelector(".selected");
  const tasks = map.get(notebook.firstChild.textContent);
  tasks.forEach((el) => addTaskFromDOM(el.name, el.deadline, el.done));
}

// Очистить поле от задач
export function deleteTasksFromDom() {
  const tasksInDom = document.querySelectorAll(".task");
  const descriptionDiv = document.getElementById("descriptionDiv");
  descriptionDiv.classList.add("hidden");
  for (const task of tasksInDom) {
    task.remove();
  }
}
