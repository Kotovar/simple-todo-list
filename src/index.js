// import { isFriday } from "date-fns";
import "./style.css";
import listenersProject from "./displayNotebook";
import {
  map, //убрать в конце, сейчас только для проверки массива
  deleteNotebook,
  renameNotebook,
} from "./createNotebook.js";

//Старт прослушивателей кнопок для: 1. Открытие формы для добавления проекта, 2-3.Добавить, удалить проект
listenersProject();
deleteNotebook();
renameNotebook();

//Тестовый запуск
