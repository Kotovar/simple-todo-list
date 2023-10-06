import { createNotebook } from "./createNotebook.js";

export default function listenersNotebook() {
  startListenerAddNotebookMenu();
  startListenersNotebookButtonAdd();
  startListenersNotebookButtonCancel();
  dropDownNotebook();
}

let createNotebookForm = document.getElementById("createNotebookForm");
let addNameNotebook = document.getElementById("addNameNotebook");

//Проверка что все блокноты уникальные
export function uniqueNotebook(name) {
  let allNotebooks = document.getElementsByClassName("notebookName");
  for (let notebook of allNotebooks) {
    if (notebook.textContent === name) {
      return false;
    }
  }
  return true;
}

// прослушка "Add notebook" для открытия окна создания блокнота
function startListenerAddNotebookMenu() {
  let addNotebookDiv = document.getElementById("addNotebookDiv");
  addNotebookDiv.addEventListener("click", function () {
    createNotebookForm.classList.contains("hidden")
      ? createNotebookForm.classList.remove("hidden")
      : null;
  });
}

// прослушка "Add" для добавления блокнота
function startListenersNotebookButtonAdd() {
  let addNotebookButton = document.getElementById("addNotebookButton");
  addNotebookButton.addEventListener("click", function () {
    if (addNameNotebook.value === "") {
      alert("Notebook name not entered");
    } else if (!uniqueNotebook(addNameNotebook.value.trim())) {
      alert("There is already a notepad with the same name");
    } else {
      createNotebook(addNameNotebook.value.trim());
      createNotebookForm.classList.add("hidden");
      clear();
    }
  });

  addNameNotebook.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
      addNotebookButton.click();
      e.preventDefault();
    }
  });
}

// прослушка "Cancel" для отмены ввода названия блокнота
function startListenersNotebookButtonCancel() {
  let cancelNotebookButton = document.getElementById("cancelNotebookButton");
  cancelNotebookButton.addEventListener("click", function () {
    createNotebookForm.classList.add("hidden");
    clear();
  });
}

function clear() {
  addNameNotebook.value = "";
}

// Открытие выпадающего списка для блокнотов
let notebookOption = document.getElementById("notebookOption");
export let notebookCurrent;
let element;

function dropDownNotebook() {
  let body = document.querySelector("body");
  body.addEventListener("click", function (e) {
    element = e.target;
    if (element.classList.contains("notebookMenu")) {
      positionMenu();
      notebookCurrent = element.previousElementSibling;
      notebookOption.style.display =
        notebookOption.style.display === "block" ? "none" : "block";
    } else if (notebookOption.style.display === "block") {
      notebookOption.style.display = "none";
    }
  });
}

window.addEventListener("resize", function () {
  if (notebookOption.style.display === "block") {
    positionMenu();
  }
});

function positionMenu() {
  let coordinates = element.getBoundingClientRect();
  notebookOption.style.left = coordinates.left + "px";
  notebookOption.style.top = coordinates.top + "px";
  notebookOption.style.transform = "translate(-90%, -90%)";
}
