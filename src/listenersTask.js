import { createTask } from "./createTask";
import { map } from "./createNotebook.js";
import { updateLocalStorage } from "./localStorage";

export function listenersTask() {
  startListenerAddTaskMenu();
  startListenersTaskButtonCancel();
  startListenerCheckTask();
  startListenersTaskButtonAdd();
  startListenerShowDescription();
  dropDownTask();
}

export const createTaskForm = document.getElementById("createTaskForm");
const addNameTask = document.getElementById("addNameTask");
const addDescriptionTask = document.getElementById("addDescriptionTask");
export const main = document.querySelector("main");

// Открытие выпадающего списка для блокнотов
const taskOption = document.getElementById("taskOption");
export let taskCurrent;
let element;

function dropDownTask() {
  const body = document.querySelector("body");

  body.addEventListener("click", (e) => {
    element = e.target;
    if (element.classList.contains("taskMenu")) {
      positionMenu();
      taskCurrent =
        element.previousElementSibling.previousElementSibling
          .previousElementSibling;
      taskOption.style.display =
        taskOption.style.display === "block" ? "none" : "block";
    } else if (taskOption.style.display === "block") {
      taskOption.style.display = "none";
    }
  });
}

window.addEventListener("resize", () => {
  if (taskOption.style.display === "block") {
    positionMenu();
  }
});

function positionMenu() {
  const coordinates = element.getBoundingClientRect();
  taskOption.style.left = coordinates.left + "px";
  taskOption.style.top = coordinates.top + "px";
  taskOption.style.transform = "translate(-90%, -90%)";
}

// Прослушка "Add Task" для открытия окна создания задачи
function startListenerAddTaskMenu() {
  const addTaskDiv = document.getElementById("addTaskDiv");
  addTaskDiv.addEventListener("click", () => {
    createTaskForm.classList.contains("hidden")
      ? createTaskForm.classList.remove("hidden")
      : null;
  });
}

// Прослушка "Add" для добавления задачи
function startListenersTaskButtonAdd() {
  const addTaskButton = document.getElementById("addTaskButton");
  const dateTask = document.getElementById("dateTask");
  const descriptionTask = document.getElementById("addDescriptionTask");
  addTaskButton.addEventListener("click", () => {
    if (addNameTask.value === "") {
      alert("Task name not entered");
    } else {
      createTask(
        addNameTask.value.trim(),
        dateTask.value,
        descriptionTask.value,
        false
      );
      console.log(dateTask.value);
      createTaskForm.classList.add("hidden");
      clear();
    }
  });

  addNameTask.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      addTaskButton.click();
      e.preventDefault();
    }
  });
}

// Прослушка "Cancel" для отмены ввода названия задачи
function startListenersTaskButtonCancel() {
  const cancelTaskButton = document.getElementById("cancelTaskButton");
  cancelTaskButton.addEventListener("click", () => {
    createTaskForm.classList.add("hidden");
    clear();
  });
}

function clear() {
  addNameTask.value = "";
  addDescriptionTask.value = "";
}

// Прослушка значка выполнения задачи
function startListenerCheckTask() {
  main.addEventListener("click", (e) => {
    const element = e.target;
    const selectedDiv = document.querySelector(".selected");
    if (element.textContent === "radio_button_unchecked") {
      element.textContent = "radio_button_checked";
      element.nextElementSibling.classList.add("checkbox-done");
      if (selectedDiv) {
        const notebook = map.get(selectedDiv.firstChild.textContent);
        notebook.forEach((el) => {
          if (el.name == element.nextElementSibling.textContent) {
            el.done = true;
            updateLocalStorage(map);
          }
        });
      }
    } else if (element.textContent === "radio_button_checked") {
      element.textContent = "radio_button_unchecked";
      element.nextElementSibling.classList.remove("checkbox-done");
      const notebook = map.get(selectedDiv.firstChild.textContent);
      notebook.forEach((el) => {
        if (el.name == element.nextElementSibling.textContent) {
          el.done = false;
          updateLocalStorage(map);
        }
      });
    }
  });
}

// Поиск и обновление задачи
function findAndUpdateTask(name, description) {
  const notebookDiv = document.querySelector(".selected");
  const tasks = map.get(notebookDiv.firstChild.textContent);
  const task = tasks.find((el) => el.name === name);
  if (task) {
    task.description = description;
  }
}

// Показ и скрытие описания задачи, обновление описания
function showOrHideDescription(element) {
  const descriptionDiv = document.getElementById("descriptionDiv");
  const description = document.getElementById("description");
  const notebookDiv = document.querySelector(".selected");
  const tasks = map.get(notebookDiv.firstChild.textContent);
  const task = tasks.filter(
    (el) =>
      el.name === element.parentNode.querySelector(".inProcess").textContent
  )[0];
  if (task) {
    description.value = task.description;
  }

  element.parentNode.after(descriptionDiv);
  descriptionDiv.classList.toggle("hidden");
}

function startListenerShowDescription() {
  let currentTask;
  main.addEventListener("click", (e) => {
    const element = e.target;
    if (element === main) {
      document.getElementById("descriptionDiv").classList.add("hidden");
    }

    if (element.classList.contains("showDescription")) {
      currentTask = element.parentNode.querySelector(".inProcess").textContent;
      showOrHideDescription(element);
    }
  });
  description.addEventListener("input", () => {
    findAndUpdateTask(currentTask, description.value);
    updateLocalStorage(map);
  });
}
