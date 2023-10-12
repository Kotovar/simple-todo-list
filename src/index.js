import "./style.css";
import { selectNotepad } from "./interface";
import listenersNotebook from "./listenersNotebook";
import { deleteRenameNotebook } from "./createNotebook.js";
import { currentDate, deleteRenameTask, changeDate } from "./createTask";
import { listenersTask } from "./listenersTask";
import { downloadFromLocalStorage } from "./localStorage";
import {
  switchLisneter,
  checkStatusDarkTheme,
  toggleListener,
} from "./buttonsHeader";

//загрузка статуса тёмной темы

//Старт прослушивателе
downloadFromLocalStorage();
listenersNotebook();
deleteRenameNotebook();
currentDate();
listenersTask();
selectNotepad();
deleteRenameTask();
changeDate();
switchLisneter();
checkStatusDarkTheme();
toggleListener();
