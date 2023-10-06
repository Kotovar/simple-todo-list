// import { isFriday } from "date-fns";
import "./style.css";
import listenersNotebook from "./listenersNotebook";
import {
  map, //убрать в конце, сейчас только для проверки массива
  deleteRenameNotebook,
} from "./createNotebook.js";
import { currentDate } from "./createTask";
import { listenersTask } from "./listenersTask";

//Старт прослушивателей кнопок для: 1. Открытие формы для добавления проекта, 2-3.Добавить, удалить проект
listenersNotebook();
deleteRenameNotebook();
currentDate();
listenersTask();

//Тестовый запуск
