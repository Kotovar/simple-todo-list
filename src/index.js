// import { isFriday } from "date-fns";
import "./style.css";

import { selectNotepad } from "./interface";
import listenersNotebook from "./listenersNotebook";
import { deleteRenameNotebook } from "./createNotebook.js";
import { currentDate, deleteRenameTask, changeDate } from "./createTask";
import { listenersTask } from "./listenersTask";

//Старт прослушивателей кнопок для: 1. Открытие формы для добавления проекта, 2-3.Добавить, удалить проект
listenersNotebook();
deleteRenameNotebook();
currentDate();
listenersTask();
selectNotepad();
deleteRenameTask();
changeDate();

//Тестовый запуск
