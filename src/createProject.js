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
}

//Функция для удаления проекта из массива
function delProjectFromArray(project) {
  let index = projects.findIndex((p) => p.title === project.title);
  if (index !== -1) {
    projects.splice(index, 1);
  }
}

module.exports = {
  projects,
  createProject,
  addProjectToArray,
  delProjectFromArray,
};
