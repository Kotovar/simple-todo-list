import { currentDate, createTask } from "./createTask";
import { map } from "./createNotebook.js";

export function listenersTask() {
  startListenerAddTaskMenu();
  startListenersTaskButtonCancel();
  startListenerCheckTask();
  startListenersTaskButtonAdd();
  startListenerShowDescription();
  dropDownTask();
}

let createTaskForm = document.getElementById("createTaskForm");
let addNameTask = document.getElementById("addNameTask");
let addDescriptionTask = document.getElementById("addDescriptionTask");
export let main = document.querySelector("main");

// Открытие выпадающего списка для блокнотов
let taskOption = document.getElementById("taskOption");
export let taskCurrent;
let element;

function dropDownTask() {
  let body = document.querySelector("body");

  body.addEventListener("click", function (e) {
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

window.addEventListener("resize", function () {
  if (taskOption.style.display === "block") {
    positionMenu();
  }
});

function positionMenu() {
  let coordinates = element.getBoundingClientRect();
  taskOption.style.left = coordinates.left + "px";
  taskOption.style.top = coordinates.top + "px";
  taskOption.style.transform = "translate(-90%, -90%)";
}

// прослушка "Add Task" для открытия окна создания задачи
function startListenerAddTaskMenu() {
  let addTaskDiv = document.getElementById("addTaskDiv");
  addTaskDiv.addEventListener("click", function () {
    createTaskForm.classList.contains("hidden")
      ? createTaskForm.classList.remove("hidden")
      : null;
  });
}

// прослушка "Add" для добавления задачи
function startListenersTaskButtonAdd() {
  let addTaskButton = document.getElementById("addTaskButton");
  let dateTask = document.getElementById("dateTask");
  let descriptionTask = document.getElementById("addDescriptionTask");
  addTaskButton.addEventListener("click", function () {
    if (addNameTask.value === "") {
      alert("Task name not entered");
    } else {
      createTask(
        addNameTask.value.trim(),
        dateTask.value,
        descriptionTask.value,
        false
      );
      createTaskForm.classList.add("hidden");
      clear();
    }
  });

  addNameTask.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
      addTaskButton.click();
      e.preventDefault();
    }
  });
}

// прослушка "Cancel" для отмены ввода названия задачи
function startListenersTaskButtonCancel() {
  let cancelTaskButton = document.getElementById("cancelTaskButton");
  cancelTaskButton.addEventListener("click", function () {
    createTaskForm.classList.add("hidden");
    clear();
  });
}

function clear() {
  addNameTask.value = "";
  addDescriptionTask.value = "";
  currentDate();
}

// прослушка значка выполнения задачи
function startListenerCheckTask() {
  main.addEventListener("click", function (e) {
    let element = e.target;
    let selectedDiv = document.querySelector(".selected");
    if (element.textContent === "radio_button_unchecked") {
      element.textContent = "radio_button_checked";
      element.nextElementSibling.classList.add("checkbox-done");
      if (selectedDiv) {
        let notebook = map.get(selectedDiv.firstChild.textContent);
        notebook.forEach((el) => {
          if (el.name == element.nextElementSibling.textContent) {
            el.done = true;
          }
        });
      }
    } else if (element.textContent === "radio_button_checked") {
      element.textContent = "radio_button_unchecked";
      element.nextElementSibling.classList.remove("checkbox-done");
      let notebook = map.get(selectedDiv.firstChild.textContent);
      notebook.forEach((el) => {
        if (el.name == element.nextElementSibling.textContent) {
          el.done = false;
        }
      });
    }
  });
}

// Поиск и обновление задачи
function findAndUpdateTask(name, description) {
  let notebookDiv = document.querySelector(".selected");
  let tasks = map.get(notebookDiv.firstChild.textContent);
  let task = tasks.find((el) => el.name === name);
  if (task) {
    task.description = description;
  }
}

// Показ и скрытие описания задачи
function showOrHideDescription(element) {
  let descriptionDiv = document.getElementById("descriptionDiv");
  let description = document.getElementById("description");
  let notebookDiv = document.querySelector(".selected");
  let tasks = map.get(notebookDiv.firstChild.textContent);
  let task = tasks.filter(
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
  main.addEventListener("click", function (e) {
    let element = e.target;
    if (element === main) {
      document.getElementById("descriptionDiv").classList.add("hidden");
    }
    if (element.classList.contains("showDescription")) {
      currentTask = element.parentNode.querySelector(".inProcess").textContent;
      showOrHideDescription(element);
    }
  });
  description.addEventListener("input", function () {
    findAndUpdateTask(currentTask, description.value);
  });
}
