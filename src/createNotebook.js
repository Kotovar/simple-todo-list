export { map, createNotebook, deleteNotebook, renameNotebook };
import { notebookOption } from "./displayNotebook";

let map = new Map(); // Хранилище проектов
let aside = document.querySelector("aside");

// Функция для создания блокнота в Map и помещения его на страницу
function createNotebook(notebookName) {
  map.set(notebookName, []);
  addProjectFromDOM(notebookName);
  console.log(map);
}

//Функция для создания блокнота в DOM
function addProjectFromDOM(notebook) {
  let divProject = document.createElement("div");
  let divProjectName = document.createElement("div");
  let spanProject = document.createElement("span");
  divProject.classList.add("notebook");
  divProjectName.classList.add("notebookName");
  spanProject.classList.add("notebookMenu", "material-symbols-outlined");
  divProjectName.textContent = notebook;
  spanProject.textContent = " more_vert ";
  divProject.append(...[divProjectName, spanProject]);

  let previousNotebook = document.getElementById("h1Notebook");
  let projectColl = document.querySelectorAll(".notebook");
  previousNotebook =
    projectColl.length > 0
      ? projectColl[projectColl.length - 1]
      : previousNotebook;
  previousNotebook.after(divProject);
}

//функция для удаления блокнотов
function deleteNotebook() {
  aside.addEventListener("click", function (e) {
    let element = e.target;
    if (element.id == "notebookDelete") {
      let notebook = element.closest(".notebook");
      let projectName = notebook.querySelector(".notebookName").textContent;
      map.delete(projectName);
      notebook.remove();
      aside.append(notebookOption);
    }
  });
}

//функция для переименования блокнотов
function renameNotebook() {
  aside.addEventListener("click", function (e) {
    let element = e.target;
    if (element.id == "notebookRename") {
      let notebook = element.closest(".notebook");
      let notebookName = notebook.querySelector(".notebookName");
      let oldName = notebookName.textContent;
      let newName = prompt("Enter new name for the notebook:", oldName);
      if (newName && newName != oldName) {
        notebookName.textContent = newName;
        map.set(newName, map.get(oldName));
        map.delete(oldName);
      }
    }
  });
}

//Примеры

createNotebook("Work");
createNotebook("Hobbies");
createNotebook("Studing");
