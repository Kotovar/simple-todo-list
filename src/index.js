// import { isFriday } from "date-fns";
import "./style.css";
import createInterface from "./interface";
import {
  startListenerAddProjectMenu,
  startListenersProjectButtons,
} from "./displayProject";

const {
  projects,
  createProject,
  addProjectToArray,
  delProjectFromArray,
} = require("./createProject");

//Старт прослушивателей кнопок для: 1. Открытие формы для добавления проекта, 2-3.Добавить, удалить проект
startListenerAddProjectMenu();
startListenersProjectButtons();

//Тестовый запуск
let project1 = createProject("Project 1");
let project2 = createProject("Project 2");
let project3 = createProject("Project 3");
addProjectToArray(project1);
addProjectToArray(project2);
addProjectToArray(project3);
delProjectFromArray(project2);
console.log(projects);
