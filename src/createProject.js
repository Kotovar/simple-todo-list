export { projects, createProject, addProjectToArray, delProjectFromArray };

let projects = [];

class Project {
  constructor(title) {
    this.title = title;
  }
}

// Функция для создания нового проекта
function createProject(title) {
  let project = new Project(title);
  return project;
}

// Функция для добавления проекта в массив
function addProjectToArray(project) {
  projects.push(project);
  addProjectFromDOM(project);
}

//Функция для удаления проекта из массива
function delProjectFromArray(project) {
  let index = projects.findIndex((p) => p.title === project.title);
  if (index !== -1) {
    projects.splice(index, 1);
  }
}

//Функция для добавления проекта с экрана
function addProjectFromDOM(project) {
  let divProject = document.createElement("div");
  let divProjectName = document.createElement("div");
  let spanProject = document.createElement("span");
  divProject.classList.add("project");
  divProjectName.classList.add("projectName");
  spanProject.classList.add("projectMenu", "material-symbols-outlined");
  divProjectName.textContent = project.title;
  spanProject.textContent = " close ";
  divProject.append(...[divProjectName, spanProject]);
  let previous = document.getElementById("h1Project");
  let projectColl = document.querySelectorAll(".project");

  previous =
    projectColl.length > 0 ? projectColl[projectColl.length - 1] : previous;
  previous.after(divProject);
  console.log(projects);
}

//функция для добавления меню у проектов
export function showProjectMenu() {
  let aside = document.getElementsByTagName("aside")[0];
  // let projectMenu = document.getElementsByClassName("projectMenu");
  aside.addEventListener("click", function (e) {
    if (e.target.classList.value == "projectMenu material-symbols-outlined") {
      console.log("Попал!");
    }
  });
}

//Примеры
let project1 = createProject("Project 1");
addProjectToArray(project1);
let project2 = createProject("Project 2");
addProjectToArray(project2);
let project3 = createProject("Project 3");
addProjectToArray(project3);
