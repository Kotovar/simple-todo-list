// import { isFriday } from "date-fns";
import "./style.css";
import listenersProject from "./displayProject";
import {
  map, //убрать в конце, сейчас только для проверки массива
  deleteProject,
} from "./createProject.js";

//Старт прослушивателей кнопок для: 1. Открытие формы для добавления проекта, 2-3.Добавить, удалить проект
listenersProject();
deleteProject();

//Тестовый запуск
