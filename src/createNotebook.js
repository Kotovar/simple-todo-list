export { map, aside, createNotebook, deleteRenameNotebook };
import { notebookCurrent, uniqueNotebook } from "./listenersNotebook";
import {
  deleteTasksFromDom,
  addTaskDiv,
  showTasksInDom,
  hiddenAddTaskButton,
} from "./interface";
import { updateLocalStorage } from "./localStorage";

let map = new Map(); // Хранилище проектов
let aside = document.querySelector("aside");

// Функция для создания блокнота в Map и помещения его на страницу
function createNotebook(notebookName) {
  map.set(notebookName, []);
  addNotebookFromDOM(notebookName);
  updateLocalStorage(map);
}

//Функция для создания блокнота в DOM
function addNotebookFromDOM(notebook) {
  let divNotebook = document.createElement("div");
  let divNotebookName = document.createElement("div");
  let spanNotebook = document.createElement("span");
  divNotebook.classList.add("notebook");
  divNotebookName.classList.add("notebookName");
  spanNotebook.classList.add("notebookMenu", "material-symbols-outlined");
  divNotebookName.textContent = notebook;
  spanNotebook.textContent = " more_vert ";
  divNotebook.append(...[divNotebookName, spanNotebook]);

  let previousNotebook = document.getElementById("h1Notebook");
  let notebookColl = document.querySelectorAll(".notebook");
  previousNotebook =
    notebookColl.length > 0
      ? notebookColl[notebookColl.length - 1]
      : previousNotebook;
  previousNotebook.after(divNotebook);

  let selectedElement = document.querySelector(".selected");
  if (selectedElement) {
    selectedElement.classList.remove("selected");
  }
  divNotebook.classList.add("selected");
  deleteTasksFromDom();
  showTasksInDom();
  hiddenAddTaskButton();
}

//функция для удаления и переименования блокнотов
function deleteRenameNotebook() {
  aside.addEventListener("click", function (e) {
    let element = e.target;
    if (element.id === "notebookDelete") {
      notebookCurrent.parentNode.classList.contains("selected")
        ? (deleteTasksFromDom(), addTaskDiv.classList.add("hidden"))
        : null;
      map.delete(notebookCurrent.textContent);
      updateLocalStorage(map);
      notebookCurrent.parentNode.remove();
    }

    if (element.id == "notebookRename") {
      let oldName = notebookCurrent.textContent;
      let newName = prompt("Enter new name for the notebook:", oldName);
      while ((newName && newName.length > 20) || !uniqueNotebook(newName)) {
        alert(
          "The name is too long or the same as another notebook. Must be no more than 20 characters."
        );
        newName = prompt("Enter new name for the notebook:", newName);
      }
      if (newName && newName != oldName) {
        notebookCurrent.textContent = newName;
        map.set(newName, map.get(oldName));
        map.delete(oldName);
        updateLocalStorage(map);
      }
    }
  });
}
