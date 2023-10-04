import { map, createNotebook, deleteProject } from "./createProject.js";

export default function listenersProject() {
  startListenerAddProjectMenu();
  startListenersProjectButtonAdd();
  startListenersProjectButtonCancel();
}

let createNotebookForm = document.getElementById("createNotebookForm");
let addNameNotebook = document.getElementById("addNameNotebook");

// прослушка "Add notebook" для открытия окна создания блокнота
function startListenerAddProjectMenu() {
  let addNotebookDiv = document.getElementById("addNotebookDiv");
  addNotebookDiv.addEventListener("click", function () {
    createNotebookForm.classList.contains("hidden")
      ? createNotebookForm.classList.remove("hidden")
      : null;
  });
}

// прослушка "Add" для добавления блокнота
function startListenersProjectButtonAdd() {
  let addNotebookButton = document.getElementById("addNotebookButton");
  addNotebookButton.addEventListener("click", function () {
    if (addNameNotebook.value === "") {
      alert("Project name not entered");
    } else {
      createNotebook(addNameNotebook.value);
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
function startListenersProjectButtonCancel() {
  let cancelNotebookButton = document.getElementById("cancelNotebookButton");
  cancelNotebookButton.addEventListener("click", function () {
    createNotebookForm.classList.add("hidden");
    clear();
  });
}

function clear() {
  addNameNotebook.value = "";
}
