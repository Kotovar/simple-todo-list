import "./style.css";
import { selectNotepad } from "./interface";
import listenersNotebook from "./listenersNotebook";
import { deleteRenameNotebook } from "./createNotebook.js";
import { currentDate, deleteRenameTask, changeDate } from "./createTask";
import { listenersTask } from "./listenersTask";
import { downloadFromLocalStorage } from "./localStorage";

//Старт прослушивателе
downloadFromLocalStorage();
listenersNotebook();
deleteRenameNotebook();
currentDate();
listenersTask();
selectNotepad();
deleteRenameTask();
changeDate();
