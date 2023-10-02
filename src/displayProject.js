const {
  projects,
  createProject,
  addProjectToArray,
  delProjectFromArray,
} = require("./createProject");

let createProjectForm = document.getElementById("createProjectForm");

export function startListenerAddProjectMenu() {
  let addProject = document.getElementById("addProject");
  addProject.addEventListener("click", function () {
    createProjectForm.classList.toggle("hidden");
  });
}

export function startListenersProjectButtons() {
  let inputProject = document.getElementById("addNameProject");
  let addProjectButton = document.getElementById("addProjectButton");
  addProjectButton.addEventListener("click", function () {
    if (inputProject.value === "") {
      alert("Project name not entered");
    } else {
      let project = createProject(inputProject.value);
      addProjectToArray(project);
      createProjectForm.classList.toggle("hidden");
      inputProject.value = "";
    }
    console.log(projects);
  });
}
