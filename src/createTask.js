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
export function createTask(taskName, date) {
  let dateObject = new Date(date);
  let day = String(dateObject.getDate()).padStart(2, "0");
  let month = String(dateObject.getMonth() + 1).padStart(2, "0");
  let year = dateObject.getFullYear();
  let formattedDate = day + "-" + month + "-" + year;
  addTaskFromDOM(taskName, formattedDate);
  // map.set(notebookName, []);
  // console.log(map);
}

//Функция для создания задачи в DOM
function addTaskFromDOM(task, date) {
  let divTask = document.createElement("div");
  divTask.classList.add("task");
  let elements = [
    ["span", "material-symbols-outlined", "radio_button_unchecked"],
    ["div", "inProcess", task],
    ["div", "dueDate", date],
    ["span", "material-symbols-outlined", "keyboard_double_arrow_up"],
    ["span", "material-symbols-outlined", "menu"],
  ];
  for (let [tag, className, text] of elements) {
    let el = document.createElement(tag);
    el.classList.add(className);
    el.textContent = text;
    el.textContent === "menu" &&
    el.classList.contains("material-symbols-outlined")
      ? el.classList.add("taskMenu")
      : null;
    divTask.append(el);
  }

  let previousTask = document.getElementById("h1Task");
  let taskColl = document.querySelectorAll(".task");
  previousTask =
    taskColl.length > 0 ? taskColl[taskColl.length - 1] : previousTask;
  previousTask.after(divTask);
}

createTask("Show Peter something", "2023-10-15");
createTask("Iron the cat", "2023-10-25");
createTask("Buy new cat", "2023-10-08");
