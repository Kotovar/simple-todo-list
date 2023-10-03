// import { isFriday } from "date-fns";
import "./style.css";
import createInterface from "./interface";
import listenersProject from "./displayProject";
import {
  projects,
  deleteProject, //убрать в конце, сейчас только для проверки массива
} from "./createProject.js";

//Старт прослушивателей кнопок для: 1. Открытие формы для добавления проекта, 2-3.Добавить, удалить проект
listenersProject();
deleteProject();

//Тестовый запуск
// console.log(projects);
