export { map, createNotebook, deleteRenameNotebook };
import { notebookCurrent, uniqueNotebook } from "./displayNotebook";

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
function deleteRenameNotebook() {
  aside.addEventListener("click", function (e) {
    let element = e.target;
    if (element.id == "notebookDelete") {
      map.delete(notebookCurrent.textContent);
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
      }
    }
  });
}

//Примеры

createNotebook("Work");
createNotebook("Hobbies");
createNotebook("Studing");
