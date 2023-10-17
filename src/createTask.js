import { map } from "./createNotebook";
import { main, taskCurrent } from "./listenersTask";
import { updateLocalStorage } from "./localStorage";

export function currentDate() {
  const dateTask = document.getElementById("dateTask");
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  dateTask.setAttribute("min", minDate);
  dateTask.value = minDate;
  return minDate;
}

// Функция для создания задачи в Map и помещения его на страницу
export function createTask(taskName, date, descriptionTask, taskDone) {
  const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
  const formattedDate =
    date && dateRegex.test(date) // Если дата соответствует формату xx.xx.xxxx, то formattedDate равно date
      ? date
      : date && date !== "No deadline" // Если дата существует и не равна "No deadline", то formattedDate преобразуется в локальный формат
      ? new Date(date).toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : "No deadline"; // Если дата равна "No deadline", то formattedDate равно "No deadline"
  addTaskFromDOM(taskName, formattedDate);

  const taskObject = {
    name: taskName,
    description: descriptionTask,
    deadline: formattedDate,
    done: taskDone,
  };

  const selectedDiv = document.querySelector(".selected");
  const selectedText = selectedDiv.firstChild.textContent;
  pushTaskToMap(taskObject, selectedText);
}

// Функция для добавления задач в Map и localStorage
function pushTaskToMap(task, notebook) {
  const notebookFromMap = map.get(notebook);
  notebookFromMap.push(task);
  updateLocalStorage(map);
}

// Функция для создания задачи в DOM
export function addTaskFromDOM(task, date, done) {
  const radioButton = done ? "radio_button_checked" : "radio_button_unchecked";
  const divTask = document.createElement("div");
  divTask.classList.add("task");
  const elements = [
    ["span", "material-symbols-outlined", radioButton],
    ["div", "inProcess", task],
    ["div", "dueDate", date],
    ["span", "material-symbols-outlined", "stat_minus_2"],
    ["span", "material-symbols-outlined", "menu"],
  ];
  for (const [tag, className, text] of elements) {
    const el = document.createElement(tag);
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
  const taskColl = document.querySelectorAll(".task");
  previousTask =
    taskColl.length > 0 ? taskColl[taskColl.length - 1] : previousTask;
  previousTask.after(divTask);
}

// Функция для удаления и переименования задач
export function deleteRenameTask() {
  main.addEventListener("click", (e) => {
    const element = e.target;
    if (element.id === "taskDelete") {
      const notebook = document.querySelector(".selected");
      const tasks = map.get(notebook.firstChild.textContent);
      const index = tasks.findIndex(
        (el) => el.name === taskCurrent.textContent
      );
      tasks.splice(index, 1);
      updateLocalStorage(map);
      taskCurrent.parentNode.remove();
    }

    if (element.id == "taskRename") {
      const oldName = taskCurrent.textContent;
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

        const notebook = document.querySelector(".selected");
        const tasks = map.get(notebook.firstChild.textContent);
        const index = tasks.findIndex((el) => el.name === oldName);
        tasks[index].name = taskCurrent.textContent;
        updateLocalStorage(map);
      }
    }
  });
}

// Функция для создания и настройки элемента input
function createInput(element) {
  const changeDateInput = document.createElement("input");
  const minDate = currentDate();
  changeDateInput.setAttribute("type", "date");
  changeDateInput.setAttribute("min", minDate);
  changeDateInput.style.backgroundColor = "var(--third-color-color)";
  element.after(changeDateInput);
  return changeDateInput;
}

// Функция для обновления данных в map и localStorage для даты задачи
function updateData(element) {
  const taskName = element.previousElementSibling.textContent;
  const notebook = document.querySelector(".selected");
  const tasks = map.get(notebook.firstChild.textContent);
  const index = tasks.findIndex((el) => el.name === taskName);
  tasks[index].deadline = element.textContent;

  console.log(`новое время ${element.textContent}`);
  updateLocalStorage(map);
}

export function changeDate() {
  main.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("dueDate")) {
      const changeDateInput = createInput(element);
      element.classList.add("active");
      changeDateInput.addEventListener("change", () => {
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
        updateData(element);
      });
    }
  });
}
