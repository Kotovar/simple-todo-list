export { map, createNotebook, deleteProject };

let map = new Map(); // Хранилище проектов

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
  divProjectName.classList.add("projectName");
  spanProject.classList.add("projectMenu", "material-symbols-outlined");
  divProjectName.textContent = notebook;
  spanProject.textContent = " menu ";
  divProject.append(...[divProjectName, spanProject]);

  let previousNotebook = document.getElementById("h1Notebook");
  let projectColl = document.querySelectorAll(".notebook");
  previousNotebook =
    projectColl.length > 0
      ? projectColl[projectColl.length - 1]
      : previousNotebook;
  previousNotebook.after(divProject);
}

//функция для удаления проектов
function deleteProject() {
  let aside = document.getElementsByTagName("aside")[0];
  aside.addEventListener("click", function (e) {
    let element = e.target;
    if (element.classList.value == "projectMenu material-symbols-outlined") {
      element.parentElement.remove();
      map.delete(element.previousElementSibling.textContent);
    }
  });
}

//Примеры

createNotebook("Work");
createNotebook("Hobbies");
createNotebook("Studing");
