import { aside } from "./createNotebook";
import { main } from "./listenersTask.js";

let switchMode = document.getElementById("switch");
let header = document.querySelector("header");
let textArea = document.getElementById("addDescriptionTask");
let inputTaskName = document.getElementById("addNameTask");
let inputDate = document.getElementById("dateTask");
let addNameNotebook = document.getElementById("addNameNotebook");
let hidePanel = document.getElementById("hidePanel");
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

// кнопка свернуть панель блокнотов
export function toggleListener() {
  hidePanel.addEventListener("click", toggleNotebookPanel);
}

function toggleNotebookPanel() {
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  if (mediaQuery.matches) {
    // Если да, то применяем стили для мобильной версии
    aside.style.width = aside.style.width === "0px" ? "100vw" : "0";
    aside.style.height = aside.style.height === "0px" ? "30vh" : "0";
    // main.style.width = "100vw";
    main.style.height = main.style.height === "90vh" ? "60vh" : "90vh";
  } else {
    // Если нет, то применяем стили для обычной версии
    aside.style.width = aside.style.width === "0px" ? "20vw" : "0";
    aside.style.height = aside.style.height === "0px" ? "90vh" : "0";
    main.style.width = main.style.width === "100vw" ? "80vw" : "100vw";
    // main.style.height = "90vh";
  }
}
