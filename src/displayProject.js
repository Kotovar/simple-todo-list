import {
  projects,
  createProject,
  addProjectToArray,
  delProjectFromArray,
} from "./createProject.js";

export default function listenersProject() {
  startListenerAddProjectMenu();
  startListenersProjectButtonAdd();
  startListenersProjectButtonCancel();
}

let createProjectForm = document.getElementById("createProjectForm");
let inputProject = document.getElementById("addNameProject");

function startListenerAddProjectMenu() {
  let addProject = document.getElementById("addProject");
  addProject.addEventListener("click", function () {
    createProjectForm.classList.contains("hidden")
      ? createProjectForm.classList.remove("hidden")
      : null;
  });
}

function startListenersProjectButtonAdd() {
  let addProjectButton = document.getElementById("addProjectButton");
  addProjectButton.addEventListener("click", function () {
    if (inputProject.value === "") {
      alert("Project name not entered");
    } else {
      let project = createProject(inputProject.value);
      addProjectToArray(project);
      createProjectForm.classList.add("hidden");
      clear();
    }
  });

  inputProject.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
      addProjectButton.click();
      e.preventDefault();
    }
  });
}

function startListenersProjectButtonCancel() {
  let cancelProjectButton = document.getElementById("cancelProjectButton");
  cancelProjectButton.addEventListener("click", function () {
    createProjectForm.classList.add("hidden");
    clear();
  });
}

function clear() {
  inputProject.value = "";
}
