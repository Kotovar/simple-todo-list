import { map } from "./createNotebook";

export function test() {
  console.log("CreateTask is worked");
}

export function currentDate() {
  var dateTask = document.getElementById("dateTask");
  var today = new Date();
  var minDate = today.toISOString().split("T")[0];
  dateTask.setAttribute("min", minDate);
  dateTask.value = minDate;
}

// Функция для создания задачи в Map и помещения его на страницу
export function createTask(taskName, date, descriptionTask, taskDone) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "No deadline";
  addTaskFromDOM(taskName, formattedDate);
  let taskObject = {
    name: taskName,
    description: descriptionTask,
    deadline: formattedDate,
    done: taskDone,
  };
  let selectedDiv = document.querySelector(".selected");
  let selectedText;
  if (selectedDiv) {
    selectedText = selectedDiv.firstChild.textContent;
  } else {
    selectedText = "Studing";
  }
  pushTaskToMap(taskObject, selectedText);
}

//функция для добавления задач в Map
function pushTaskToMap(task, notebook) {
  let notebookFromMap = map.get(notebook);
  notebookFromMap.push(task);
}

//Функция для создания задачи в DOM
export function addTaskFromDOM(task, date, done) {
  let radioButton = done ? "radio_button_checked" : "radio_button_unchecked";
  let divTask = document.createElement("div");
  divTask.classList.add("task");
  let elements = [
    ["span", "material-symbols-outlined", radioButton],
    ["div", "inProcess", task],
    ["div", "dueDate", date],
    ["span", "material-symbols-outlined", "stat_minus_2"],
    ["span", "material-symbols-outlined", "menu"],
  ];
  for (let [tag, className, text] of elements) {
    let el = document.createElement(tag);
    el.classList.add(className);
    el.textContent = text;
    el.textContent === "menu" &&
    el.classList.contains("material-symbols-outlined")
      ? el.classList.add("taskMenu")
      : el.textContent === "stat_minus_2" &&
        el.classList.contains("material-symbols-outlined")
      ? el.classList.add("showDescription")
      : null;
    el.classList.contains("inProcess") && done
      ? el.classList.add("checkbox-done")
      : null;
    divTask.append(el);
  }

  let previousTask = document.getElementById("h1Task");

  let taskColl = document.querySelectorAll(".task");
  previousTask =
    taskColl.length > 0 ? taskColl[taskColl.length - 1] : previousTask;
  previousTask.after(divTask);
}

createTask("Show Peter something", "2023-10-15", "Show him my code", false);
createTask("Iron the cat", "2023-10-25", "Iron with your hand!", false);
createTask("Buy new cat", "2023-10-08", "I hope this is a joke", false);
