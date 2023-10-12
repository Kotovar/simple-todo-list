import { aside } from "./createNotebook";
import { main } from "./listenersTask.js";

let switchMode = document.getElementById("switch");
let header = document.querySelector("header");
let textArea = document.getElementById("addDescriptionTask");
let inputTaskName = document.getElementById("addNameTask");
let inputDate = document.getElementById("dateTask");
let addNameNotebook = document.getElementById("addNameNotebook");
let darkThemeOn;

export function checkStatusDarkTheme() {
  darkThemeOn = JSON.parse(localStorage.getItem("darkTheme"));
  darkThemeOn
    ? (toggleDarkTheme(),
      (darkThemeOn = !darkThemeOn),
      localStorage.setItem("darkTheme", darkThemeOn))
    : console.log("Тёмна тема выключена");
}

export function switchLisneter() {
  switchMode.addEventListener("click", toggleDarkTheme);
}

// функция переключения тёмной темы
export function toggleDarkTheme() {
  darkThemeOn = !darkThemeOn;
  localStorage.setItem("darkTheme", darkThemeOn);
  let elementsDarkTheme = [aside, header, main, inputDate];
  elementsDarkTheme.forEach((element) => element.classList.toggle("darkTheme"));
  let elementsBackground = [
    textArea,
    inputTaskName,
    inputDate,
    addNameNotebook,
  ];
  elementsBackground.forEach((element) => toggleBackgroundAndText(element));
  switchMode.textContent =
    switchMode.textContent === "toggle_off" ? "toggle_on" : "toggle_off";
}

// Функция для переключения фона и текста элемента
function toggleBackgroundAndText(element) {
  element.style.background =
    element.style.background === "rgb(65, 43, 37)"
      ? "white"
      : "rgb(65, 43, 37)";
}
