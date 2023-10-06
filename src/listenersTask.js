import { currentDate, createTask } from "./createTask";

export function listenersTask() {
  startListenerAddTaskMenu();
  startListenersTaskButtonCancel();
  startListenerCheckTask();
  startListenersTaskButtonAdd();
}

let createTaskForm = document.getElementById("createTaskForm");
let addNameTask = document.getElementById("addNameTask");
let addDescriptionTask = document.getElementById("addDescriptionTask");
let main = document.querySelector("main");

// прослушка "Add Task" для открытия окна создания блокнота
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
  addTaskButton.addEventListener("click", function () {
    if (addNameTask.value === "") {
      alert("Task name not entered");
    } else {
      createTask(addNameTask.value.trim(), dateTask.value);
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
  let sibling;
  main.addEventListener("click", function (e) {
    let element = e.target;
    if (element.textContent === "radio_button_unchecked") {
      element.textContent = "radio_button_checked";
      element.nextElementSibling.classList.add("checkbox-done");
    } else if (element.textContent === "radio_button_checked") {
      element.textContent = "radio_button_unchecked";
      element.nextElementSibling.classList.remove("checkbox-done");
    }
  });
}
