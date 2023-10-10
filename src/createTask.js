import { map } from "./createNotebook";
import { main, taskCurrent } from "./listenersTask.js";

export function currentDate() {
  var dateTask = document.getElementById("dateTask");
  var today = new Date();
  var minDate = today.toISOString().split("T")[0];
  dateTask.setAttribute("min", minDate);
  dateTask.value = minDate;
  return minDate;
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

//функция для удаления и переименования задач
export function deleteRenameTask() {
  main.addEventListener("click", function (e) {
    let element = e.target;
    if (element.id === "taskDelete") {
      let notebook = document.querySelector(".selected");
      let tasks = map.get(notebook.firstChild.textContent);
      let index = tasks.findIndex((el) => el.name === taskCurrent.textContent);
      tasks.splice(index, 1);
      taskCurrent.parentNode.remove();
    }

    if (element.id == "taskRename") {
      let oldName = taskCurrent.textContent;
      let newName = prompt(
        "Enter new name for the notebook:",
        taskCurrent.textContent
      );
      while (newName && newName.length > 40) {
        alert(
          "The name is too long or the same as another notebook. Must be no more than 40 characters."
        );
        newName = prompt("Enter new name for the notebook:", newName);
      }
      if (newName) {
        taskCurrent.textContent = newName;

        let notebook = document.querySelector(".selected");
        let tasks = map.get(notebook.firstChild.textContent);
        let index = tasks.findIndex((el) => el.name === oldName);
        tasks[index].name = taskCurrent.textContent;
      }
    }
  });
  console.log(map);
}

//поменять дату у задачи
export function changeDate() {
  main.addEventListener("click", function (e) {
    let element = e.target;
    let changeDateInput = document.createElement("input");
    if (element.classList.contains("dueDate")) {
      let minDate = currentDate();
      changeDateInput.setAttribute("type", "date");
      changeDateInput.setAttribute("min", minDate);
      changeDateInput.style.backgroundColor = "var(--third-color-color)";
      element.after(changeDateInput);
      element.classList.add("active");

      changeDateInput.addEventListener("change", function () {
        const formattedDate = new Date(
          changeDateInput.value
        ).toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        element.textContent = formattedDate;
        changeDateInput.remove();
        element.classList.remove("active");
      });
    }
  });
}

createTask("Show Peter something", "2023-10-15", "Show him my code", false);
createTask("Iron the cat", "2023-10-25", "Iron with your hand!", false);
createTask("Buy new cat", "2023-10-08", "I hope this is a joke", false);
