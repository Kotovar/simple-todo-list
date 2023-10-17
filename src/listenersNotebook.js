import { createNotebook } from "./createNotebook.js";

export default function listenersNotebook() {
  startListenerAddNotebookMenu();
  startListenersNotebookButtonAdd();
  startListenersNotebookButtonCancel();
  dropDownNotebook();
}

const createNotebookForm = document.getElementById("createNotebookForm");
const addNameNotebook = document.getElementById("addNameNotebook");

// Проверка что все блокноты уникальные
export function uniqueNotebook(name) {
  const allNotebooks = document.getElementsByClassName("notebookName");
  for (const notebook of allNotebooks) {
    if (notebook.textContent === name) {
      return false;
    }
  }

  return true;
}

// Прослушка "Add notebook" для открытия окна создания блокнота
function startListenerAddNotebookMenu() {
  const addNotebookDiv = document.getElementById("addNotebookDiv");
  addNotebookDiv.addEventListener("click", () => {
    createNotebookForm.classList.contains("hidden")
      ? createNotebookForm.classList.remove("hidden")
      : null;
  });
}

// Прослушка "Add" для добавления блокнота
function startListenersNotebookButtonAdd() {
  const addNotebookButton = document.getElementById("addNotebookButton");
  addNotebookButton.addEventListener("click", () => {
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

  addNameNotebook.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      addNotebookButton.click();
      e.preventDefault();
    }
  });
}

// Прослушка "Cancel" для отмены ввода названия блокнота
function startListenersNotebookButtonCancel() {
  const cancelNotebookButton = document.getElementById("cancelNotebookButton");
  cancelNotebookButton.addEventListener("click", () => {
    createNotebookForm.classList.add("hidden");
    clear();
  });
}

function clear() {
  addNameNotebook.value = "";
}

// Открытие выпадающего списка для блокнотов
const notebookOption = document.getElementById("notebookOption");
export let notebookCurrent;
let element;

function dropDownNotebook() {
  const body = document.querySelector("body");
  body.addEventListener("click", (e) => {
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

window.addEventListener("resize", () => {
  if (notebookOption.style.display === "block") {
    positionMenu();
  }
});

function positionMenu() {
  const coordinates = element.getBoundingClientRect();
  notebookOption.style.left = coordinates.left + "px";
  notebookOption.style.top = coordinates.top + "px";
  notebookOption.style.transform = "translate(-90%, -90%)";
}
