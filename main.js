/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Общие настройки */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--main-font-famile);
}

h1 {
  cursor: default;
}

:root {
  --main-font-size: 1rem;
  --main-font-famile: "Cinzel", "Georgia", "Times New Roman", serif;
  --main-font-color: rgb(101, 67, 58);
  --second-font-color: beige;
  --third-color-color: rgb(248, 227, 202);
  --top-color-hover: rgb(144, 120, 113);
  --aside-color-hover: rgb(219, 219, 191);
  --main-color-hover: rgb(202, 185, 164);
  --selected-color: rgb(224, 207, 186);
  --main-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* темная тема */
.darkTheme {
  --second-font-color: rgb(101, 67, 58);
  --main-font-color: beige;
  --third-color-color: rgb(65, 43, 37);
  --aside-color-hover: rgb(83, 56, 48);
  --selected-color: rgb(75, 51, 44);
  --main-color-hover: rgb(83, 57, 48);
}

/* убрать выделение элементов  */
.noselect {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#root {
  display: grid;
  grid-template-areas:
    "header header"
    "aside main";
}

/* Иконки */
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
  font-size: calc(var(--main-font-size) * 3);
  line-height: normal;
  cursor: pointer;
}

/* Настройка скрытия форм  */
.hidden {
  display: none !important;
}

.block {
  display: block;
}

/* Настройка наведения курсора мыши */
aside > div:hover {
  background-color: var(--aside-color-hover);
  cursor: pointer;
}

main > .task:hover,
main > #addTaskDiv:hover {
  background-color: var(--main-color-hover);
  cursor: pointer;
}
#addTaskDiv:hover {
  border-radius: 5px;
}

.task:hover,
.notebook:hover {
  transform: scale(1.01, 1.01);
  box-shadow: var(--main-shadow);
}

#createNotebookForm:hover {
  background-color: var(--second-font-color);
}

.icon-click:hover {
  color: var(--top-color-hover);
}

#addNotebookButton,
#addTaskButton {
  background-color: rgb(140, 192, 140);
  cursor: pointer;
}

#addNotebookButton:hover,
#addTaskButton:hover {
  background-color: rgb(165, 194, 165);
}

#cancelNotebookButton,
#cancelTaskButton {
  cursor: pointer;
  background-color: rgb(229, 108, 108);
}

#cancelNotebookButton:hover,
#cancelTaskButton:hover {
  background-color: rgb(224, 136, 136);
}

/* flex */

header,
.notebook,
#addNotebookDiv,
#addTaskDiv,
#addNameNotebook + div,
.optionMenu,
.priority,
#createTaskForm form {
  display: flex;
}

/* Настройка верхней части страницы */
header {
  grid-area: header;
  height: 10vh;
  width: 100vw;
  background-color: var(--main-font-color);
  justify-content: space-between;
  align-items: center;
  color: var(--second-font-color);
}

header div {
  padding: 0 1rem;
}

header h1 {
  font-family: "Courier New", Courier, monospace;
  font-style: italic;
}

/* Настройка левой панели */
aside {
  grid-area: aside;
  height: 90vh;
  width: 20vw;
  background-color: var(--second-font-color);
  overflow-y: auto;
  color: var(--main-font-color);
}

aside::-webkit-scrollbar {
  width: 0;
}

aside h1,
main h1 {
  text-align: center;
  margin-top: 1rem;
  color: var(--main-font-color);
}

aside div {
  padding: 0 0.6rem;
  align-items: center;
}

/* Настройки раздела с добавлением блокнота */
#addNotebookDiv div,
.notebookName {
  font-size: calc(var(--main-font-size) * 1.1);
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
}

#addNotebookDiv span,
.notebookMenu {
  font-size: calc(var(--main-font-size) * 2);
}

.notebook {
  justify-content: space-between;
}

.notebookMenu {
  align-self: flex-end;
}

#addNameNotebook,
#addNameTask,
#addDescriptionTask {
  border: 3px solid var(--main-font-color);
  margin: 0.5rem 0;
  width: 100%;
}

.selected {
  background-color: var(--selected-color);
  box-shadow: var(--main-shadow);
}

/* кнопки Добавить и Отмена для проектов */
#addNameNotebook + div {
  justify-content: center;
  gap: 1rem;
}

#addNameNotebook + div button,
#dateTask + div button {
  border-radius: 10px;
  padding: 0.2rem;
  width: 5rem;
}

#addNameNotebook {
  font-weight: 600;
  color: var(--main-font-color);
}

/* настройка окна с опциями и кнопок для блокнотов и задач */
.optionMenu {
  flex-direction: column;
  width: max-content;
  padding: 0;
  display: none;
  position: absolute;
  border: 1px solid gray;
  border-radius: 3px;
  background-color: white;
  z-index: 1;
}

.optionMenu:hover {
  background-color: white;
}

.optionButton {
  display: block;
  width: 100%;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.optionButton:hover {
  background-color: lightgray;
}

/* Настройка правой панели */
main {
  grid-area: main;
  height: 90vh;
  width: 80vw;
  background-color: var(--third-color-color);
  overflow-y: auto;
}

main::-webkit-scrollbar {
  width: 0;
}

/* Настройки задач */
.task {
  display: grid;
  grid-template-columns: 1fr 15fr 2fr 1fr 1fr;
  align-items: center;
  border: 3px solid var(--main-font-color);
  margin: 0.5rem;
  border-radius: 5px;
  height: 5vh;
}

.task span {
  color: var(--main-font-color);
  font-size: calc(var(--main-font-size) * 1.4);
  place-self: center;
}

.inProcess {
  font-size: calc(var(--main-font-size) * 0.8);
  font-weight: 600;
  color: var(--main-font-color);
}

.dueDate {
  border-left: 1px solid var(--main-font-color);
  border-right: 1px solid var(--main-font-color);
  border-radius: 5px;
  text-align: center;
  font-size: calc(var(--main-font-size) * 0.8);
  color: var(--main-font-color);
}

.dueDate.active {
  display: none;
}

/* Кнопка создания задач */
#addTaskDiv {
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem;
  font-weight: 600;
  color: var(--main-font-color);
}

#addTaskDiv span {
  font-size: calc(var(--main-font-size) * 2);
}

/* окно создания задачи */
#createTaskForm {
  margin: 0.5rem;
}

#createTaskForm input,
#createTaskForm,
#addDescriptionTask {
  font-weight: 600;
  color: var(--main-font-color);
}

#createTaskForm form {
  flex-direction: column;
}

#addDescriptionTask {
  resize: vertical;
}

#dateTask {
  margin: 0.5rem 0;
  border: 3px solid var(--main-font-color);
}

#dateTask + div {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

/* форма для отображения описания у задачи */
#descriptionDiv {
  border: 3px solid var(--main-font-color);
  margin: 0.5rem;
  border-radius: 5px;
  height: 15vh;
}

#description {
  width: 100%;
  height: 100%;
  resize: none;
  background-color: var(--third-color-color);
  outline: none;
  padding: 0.5rem;
  color: var(--main-font-color);
}
/* выполненная и задача в процессе */

.checkbox-done {
  text-decoration: line-through;
}

/* настройки для мобильной версии */
@media (max-width: 768px) {
  #root {
    grid-template-areas:
      "header"
      "aside"
      "main";
  }

  aside {
    height: 30vh;
    width: 100vw;
  }

  main {
    height: 60vh;
    width: 100vw;
  }

  header h1 {
    font-size: calc(var(--main-font-size) * 1.5);
  }

  .notebookName {
    font-size: var(--main-font-size);
  }
  .dueDate {
    border: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Общие настройки */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: var(--main-font-famile);\n}\n\nh1 {\n  cursor: default;\n}\n\n:root {\n  --main-font-size: 1rem;\n  --main-font-famile: \"Cinzel\", \"Georgia\", \"Times New Roman\", serif;\n  --main-font-color: rgb(101, 67, 58);\n  --second-font-color: beige;\n  --third-color-color: rgb(248, 227, 202);\n  --top-color-hover: rgb(144, 120, 113);\n  --aside-color-hover: rgb(219, 219, 191);\n  --main-color-hover: rgb(202, 185, 164);\n  --selected-color: rgb(224, 207, 186);\n  --main-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),\n    0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n/* темная тема */\n.darkTheme {\n  --second-font-color: rgb(101, 67, 58);\n  --main-font-color: beige;\n  --third-color-color: rgb(65, 43, 37);\n  --aside-color-hover: rgb(83, 56, 48);\n  --selected-color: rgb(75, 51, 44);\n  --main-color-hover: rgb(83, 57, 48);\n}\n\n/* убрать выделение элементов  */\n.noselect {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n#root {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"aside main\";\n}\n\n/* Иконки */\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n  font-size: calc(var(--main-font-size) * 3);\n  line-height: normal;\n  cursor: pointer;\n}\n\n/* Настройка скрытия форм  */\n.hidden {\n  display: none !important;\n}\n\n.block {\n  display: block;\n}\n\n/* Настройка наведения курсора мыши */\naside > div:hover {\n  background-color: var(--aside-color-hover);\n  cursor: pointer;\n}\n\nmain > .task:hover,\nmain > #addTaskDiv:hover {\n  background-color: var(--main-color-hover);\n  cursor: pointer;\n}\n#addTaskDiv:hover {\n  border-radius: 5px;\n}\n\n.task:hover,\n.notebook:hover {\n  transform: scale(1.01, 1.01);\n  box-shadow: var(--main-shadow);\n}\n\n#createNotebookForm:hover {\n  background-color: var(--second-font-color);\n}\n\n.icon-click:hover {\n  color: var(--top-color-hover);\n}\n\n#addNotebookButton,\n#addTaskButton {\n  background-color: rgb(140, 192, 140);\n  cursor: pointer;\n}\n\n#addNotebookButton:hover,\n#addTaskButton:hover {\n  background-color: rgb(165, 194, 165);\n}\n\n#cancelNotebookButton,\n#cancelTaskButton {\n  cursor: pointer;\n  background-color: rgb(229, 108, 108);\n}\n\n#cancelNotebookButton:hover,\n#cancelTaskButton:hover {\n  background-color: rgb(224, 136, 136);\n}\n\n/* flex */\n\nheader,\n.notebook,\n#addNotebookDiv,\n#addTaskDiv,\n#addNameNotebook + div,\n.optionMenu,\n.priority,\n#createTaskForm form {\n  display: flex;\n}\n\n/* Настройка верхней части страницы */\nheader {\n  grid-area: header;\n  height: 10vh;\n  width: 100vw;\n  background-color: var(--main-font-color);\n  justify-content: space-between;\n  align-items: center;\n  color: var(--second-font-color);\n}\n\nheader div {\n  padding: 0 1rem;\n}\n\nheader h1 {\n  font-family: \"Courier New\", Courier, monospace;\n  font-style: italic;\n}\n\n/* Настройка левой панели */\naside {\n  grid-area: aside;\n  height: 90vh;\n  width: 20vw;\n  background-color: var(--second-font-color);\n  overflow-y: auto;\n  color: var(--main-font-color);\n}\n\naside::-webkit-scrollbar {\n  width: 0;\n}\n\naside h1,\nmain h1 {\n  text-align: center;\n  margin-top: 1rem;\n  color: var(--main-font-color);\n}\n\naside div {\n  padding: 0 0.6rem;\n  align-items: center;\n}\n\n/* Настройки раздела с добавлением блокнота */\n#addNotebookDiv div,\n.notebookName {\n  font-size: calc(var(--main-font-size) * 1.1);\n  font-weight: 600;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n#addNotebookDiv span,\n.notebookMenu {\n  font-size: calc(var(--main-font-size) * 2);\n}\n\n.notebook {\n  justify-content: space-between;\n}\n\n.notebookMenu {\n  align-self: flex-end;\n}\n\n#addNameNotebook,\n#addNameTask,\n#addDescriptionTask {\n  border: 3px solid var(--main-font-color);\n  margin: 0.5rem 0;\n  width: 100%;\n}\n\n.selected {\n  background-color: var(--selected-color);\n  box-shadow: var(--main-shadow);\n}\n\n/* кнопки Добавить и Отмена для проектов */\n#addNameNotebook + div {\n  justify-content: center;\n  gap: 1rem;\n}\n\n#addNameNotebook + div button,\n#dateTask + div button {\n  border-radius: 10px;\n  padding: 0.2rem;\n  width: 5rem;\n}\n\n#addNameNotebook {\n  font-weight: 600;\n  color: var(--main-font-color);\n}\n\n/* настройка окна с опциями и кнопок для блокнотов и задач */\n.optionMenu {\n  flex-direction: column;\n  width: max-content;\n  padding: 0;\n  display: none;\n  position: absolute;\n  border: 1px solid gray;\n  border-radius: 3px;\n  background-color: white;\n  z-index: 1;\n}\n\n.optionMenu:hover {\n  background-color: white;\n}\n\n.optionButton {\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.optionButton:hover {\n  background-color: lightgray;\n}\n\n/* Настройка правой панели */\nmain {\n  grid-area: main;\n  height: 90vh;\n  width: 80vw;\n  background-color: var(--third-color-color);\n  overflow-y: auto;\n}\n\nmain::-webkit-scrollbar {\n  width: 0;\n}\n\n/* Настройки задач */\n.task {\n  display: grid;\n  grid-template-columns: 1fr 15fr 2fr 1fr 1fr;\n  align-items: center;\n  border: 3px solid var(--main-font-color);\n  margin: 0.5rem;\n  border-radius: 5px;\n  height: 5vh;\n}\n\n.task span {\n  color: var(--main-font-color);\n  font-size: calc(var(--main-font-size) * 1.4);\n  place-self: center;\n}\n\n.inProcess {\n  font-size: calc(var(--main-font-size) * 0.8);\n  font-weight: 600;\n  color: var(--main-font-color);\n}\n\n.dueDate {\n  border-left: 1px solid var(--main-font-color);\n  border-right: 1px solid var(--main-font-color);\n  border-radius: 5px;\n  text-align: center;\n  font-size: calc(var(--main-font-size) * 0.8);\n  color: var(--main-font-color);\n}\n\n.dueDate.active {\n  display: none;\n}\n\n/* Кнопка создания задач */\n#addTaskDiv {\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0.5rem;\n  font-weight: 600;\n  color: var(--main-font-color);\n}\n\n#addTaskDiv span {\n  font-size: calc(var(--main-font-size) * 2);\n}\n\n/* окно создания задачи */\n#createTaskForm {\n  margin: 0.5rem;\n}\n\n#createTaskForm input,\n#createTaskForm,\n#addDescriptionTask {\n  font-weight: 600;\n  color: var(--main-font-color);\n}\n\n#createTaskForm form {\n  flex-direction: column;\n}\n\n#addDescriptionTask {\n  resize: vertical;\n}\n\n#dateTask {\n  margin: 0.5rem 0;\n  border: 3px solid var(--main-font-color);\n}\n\n#dateTask + div {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n\n/* форма для отображения описания у задачи */\n#descriptionDiv {\n  border: 3px solid var(--main-font-color);\n  margin: 0.5rem;\n  border-radius: 5px;\n  height: 15vh;\n}\n\n#description {\n  width: 100%;\n  height: 100%;\n  resize: none;\n  background-color: var(--third-color-color);\n  outline: none;\n  padding: 0.5rem;\n  color: var(--main-font-color);\n}\n/* выполненная и задача в процессе */\n\n.checkbox-done {\n  text-decoration: line-through;\n}\n\n/* настройки для мобильной версии */\n@media (max-width: 768px) {\n  #root {\n    grid-template-areas:\n      \"header\"\n      \"aside\"\n      \"main\";\n  }\n\n  aside {\n    height: 30vh;\n    width: 100vw;\n  }\n\n  main {\n    height: 60vh;\n    width: 100vw;\n  }\n\n  header h1 {\n    font-size: calc(var(--main-font-size) * 1.5);\n  }\n\n  .notebookName {\n    font-size: var(--main-font-size);\n  }\n  .dueDate {\n    border: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buttonsHeader.js":
/*!******************************!*\
  !*** ./src/buttonsHeader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkStatusDarkTheme: () => (/* binding */ checkStatusDarkTheme),
/* harmony export */   switchLisneter: () => (/* binding */ switchLisneter),
/* harmony export */   toggleDarkTheme: () => (/* binding */ toggleDarkTheme),
/* harmony export */   toggleListener: () => (/* binding */ toggleListener)
/* harmony export */ });
/* harmony import */ var _createNotebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNotebook */ "./src/createNotebook.js");
/* harmony import */ var _listenersTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listenersTask.js */ "./src/listenersTask.js");



const switchMode = document.getElementById("switch");
const header = document.querySelector("header");
const textArea = document.getElementById("addDescriptionTask");
const inputTaskName = document.getElementById("addNameTask");
const inputDate = document.getElementById("dateTask");
const addNameNotebook = document.getElementById("addNameNotebook");
const hidePanel = document.getElementById("hidePanel");
let darkThemeOn;

function checkStatusDarkTheme() {
  darkThemeOn = JSON.parse(localStorage.getItem("darkTheme"));
  darkThemeOn
    ? (toggleDarkTheme(),
      (darkThemeOn = !darkThemeOn),
      localStorage.setItem("darkTheme", darkThemeOn))
    : console.log("Тёмна тема выключена");
}

function switchLisneter() {
  switchMode.addEventListener("click", toggleDarkTheme);
}

// Функция переключения тёмной темы
function toggleDarkTheme() {
  darkThemeOn = !darkThemeOn;
  localStorage.setItem("darkTheme", darkThemeOn);
  const elementsDarkTheme = [_createNotebook__WEBPACK_IMPORTED_MODULE_0__.aside, header, _listenersTask_js__WEBPACK_IMPORTED_MODULE_1__.main, inputDate];
  elementsDarkTheme.forEach((element) => element.classList.toggle("darkTheme"));
  const elementsBackground = [
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

// Кнопка свернуть панель блокнотов
function toggleListener() {
  hidePanel.addEventListener("click", toggleNotebookPanel);
}

function toggleNotebookPanel() {
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  if (mediaQuery.matches) {
    // Если да, то применяем стили для мобильной версии
    _createNotebook__WEBPACK_IMPORTED_MODULE_0__.aside.style.width = _createNotebook__WEBPACK_IMPORTED_MODULE_0__.aside.style.width === "0px" ? "100vw" : "0";
    _createNotebook__WEBPACK_IMPORTED_MODULE_0__.aside.style.height = _createNotebook__WEBPACK_IMPORTED_MODULE_0__.aside.style.height === "0px" ? "30vh" : "0";
    // Main.style.width = "100vw";
    _listenersTask_js__WEBPACK_IMPORTED_MODULE_1__.main.style.height = _listenersTask_js__WEBPACK_IMPORTED_MODULE_1__.main.style.height === "90vh" ? "60vh" : "90vh";
  } else {
    // Если нет, то применяем стили для обычной версии
    _createNotebook__WEBPACK_IMPORTED_MODULE_0__.aside.style.width = _createNotebook__WEBPACK_IMPORTED_MODULE_0__.aside.style.width === "0px" ? "20vw" : "0";
    _createNotebook__WEBPACK_IMPORTED_MODULE_0__.aside.style.height = _createNotebook__WEBPACK_IMPORTED_MODULE_0__.aside.style.height === "0px" ? "90vh" : "0";
    _listenersTask_js__WEBPACK_IMPORTED_MODULE_1__.main.style.width = _listenersTask_js__WEBPACK_IMPORTED_MODULE_1__.main.style.width === "100vw" ? "80vw" : "100vw";
    // Main.style.height = "90vh";
  }
}


/***/ }),

/***/ "./src/createNotebook.js":
/*!*******************************!*\
  !*** ./src/createNotebook.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aside: () => (/* binding */ aside),
/* harmony export */   createNotebook: () => (/* binding */ createNotebook),
/* harmony export */   deleteRenameNotebook: () => (/* binding */ deleteRenameNotebook),
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _listenersNotebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listenersNotebook */ "./src/listenersNotebook.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");





let map = new Map(); // Хранилище проектов
let aside = document.querySelector("aside");

// Функция для создания блокнота в Map и помещения его на страницу
function createNotebook(notebookName) {
  map.set(notebookName, []);
  addNotebookFromDOM(notebookName);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(map);
}

//Функция для создания блокнота в DOM
function addNotebookFromDOM(notebook) {
  let divNotebook = document.createElement("div");
  let divNotebookName = document.createElement("div");
  let spanNotebook = document.createElement("span");
  divNotebook.classList.add("notebook");
  divNotebookName.classList.add("notebookName");
  spanNotebook.classList.add("notebookMenu", "material-symbols-outlined");
  divNotebookName.textContent = notebook;
  spanNotebook.textContent = " more_vert ";
  divNotebook.append(...[divNotebookName, spanNotebook]);

  let previousNotebook = document.getElementById("h1Notebook");
  let notebookColl = document.querySelectorAll(".notebook");
  previousNotebook =
    notebookColl.length > 0
      ? notebookColl[notebookColl.length - 1]
      : previousNotebook;
  previousNotebook.after(divNotebook);

  let selectedElement = document.querySelector(".selected");
  if (selectedElement) {
    selectedElement.classList.remove("selected");
  }
  divNotebook.classList.add("selected");
  (0,_interface__WEBPACK_IMPORTED_MODULE_1__.deleteTasksFromDom)();
  (0,_interface__WEBPACK_IMPORTED_MODULE_1__.showTasksInDom)();
  (0,_interface__WEBPACK_IMPORTED_MODULE_1__.hiddenAddTaskButton)();
}

//функция для удаления и переименования блокнотов
function deleteRenameNotebook() {
  aside.addEventListener("click", function (e) {
    let element = e.target;
    if (element.id === "notebookDelete") {
      _listenersNotebook__WEBPACK_IMPORTED_MODULE_0__.notebookCurrent.parentNode.classList.contains("selected")
        ? ((0,_interface__WEBPACK_IMPORTED_MODULE_1__.deleteTasksFromDom)(), _interface__WEBPACK_IMPORTED_MODULE_1__.addTaskDiv.classList.add("hidden"))
        : null;
      map.delete(_listenersNotebook__WEBPACK_IMPORTED_MODULE_0__.notebookCurrent.textContent);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(map);
      _listenersNotebook__WEBPACK_IMPORTED_MODULE_0__.notebookCurrent.parentNode.remove();
    }

    if (element.id == "notebookRename") {
      let oldName = _listenersNotebook__WEBPACK_IMPORTED_MODULE_0__.notebookCurrent.textContent;
      let newName = prompt("Enter new name for the notebook:", oldName);
      while ((newName && newName.length > 20) || !(0,_listenersNotebook__WEBPACK_IMPORTED_MODULE_0__.uniqueNotebook)(newName)) {
        alert(
          "The name is too long or the same as another notebook. Must be no more than 20 characters."
        );
        newName = prompt("Enter new name for the notebook:", newName);
      }
      if (newName && newName != oldName) {
        _listenersNotebook__WEBPACK_IMPORTED_MODULE_0__.notebookCurrent.textContent = newName;
        map.set(newName, map.get(oldName));
        map.delete(oldName);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(map);
      }
    }
  });
}


/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskFromDOM: () => (/* binding */ addTaskFromDOM),
/* harmony export */   changeDate: () => (/* binding */ changeDate),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   currentDate: () => (/* binding */ currentDate),
/* harmony export */   deleteRenameTask: () => (/* binding */ deleteRenameTask)
/* harmony export */ });
/* harmony import */ var _createNotebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNotebook */ "./src/createNotebook.js");
/* harmony import */ var _listenersTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listenersTask */ "./src/listenersTask.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");




function currentDate() {
  const dateTask = document.getElementById("dateTask");
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  dateTask.setAttribute("min", minDate);
  dateTask.value = minDate;
  return minDate;
}

// Функция для создания задачи в Map и помещения его на страницу
function createTask(taskName, date, descriptionTask, taskDone) {
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
  const notebookFromMap = _createNotebook__WEBPACK_IMPORTED_MODULE_0__.map.get(notebook);
  notebookFromMap.push(task);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(_createNotebook__WEBPACK_IMPORTED_MODULE_0__.map);
}

// Функция для создания задачи в DOM
function addTaskFromDOM(task, date, done) {
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
function deleteRenameTask() {
  _listenersTask__WEBPACK_IMPORTED_MODULE_1__.main.addEventListener("click", (e) => {
    const element = e.target;
    if (element.id === "taskDelete") {
      const notebook = document.querySelector(".selected");
      const tasks = _createNotebook__WEBPACK_IMPORTED_MODULE_0__.map.get(notebook.firstChild.textContent);
      const index = tasks.findIndex(
        (el) => el.name === _listenersTask__WEBPACK_IMPORTED_MODULE_1__.taskCurrent.textContent
      );
      tasks.splice(index, 1);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(_createNotebook__WEBPACK_IMPORTED_MODULE_0__.map);
      _listenersTask__WEBPACK_IMPORTED_MODULE_1__.taskCurrent.parentNode.remove();
    }

    if (element.id == "taskRename") {
      const oldName = _listenersTask__WEBPACK_IMPORTED_MODULE_1__.taskCurrent.textContent;
      let newName = prompt(
        "Enter new name for the notebook:",
        _listenersTask__WEBPACK_IMPORTED_MODULE_1__.taskCurrent.textContent
      );
      while (newName && newName.length > 40) {
        alert(
          "The name is too long or the same as another notebook. Must be no more than 40 characters."
        );
        newName = prompt("Enter new name for the notebook:", newName);
      }

      if (newName) {
        _listenersTask__WEBPACK_IMPORTED_MODULE_1__.taskCurrent.textContent = newName;

        const notebook = document.querySelector(".selected");
        const tasks = _createNotebook__WEBPACK_IMPORTED_MODULE_0__.map.get(notebook.firstChild.textContent);
        const index = tasks.findIndex((el) => el.name === oldName);
        tasks[index].name = _listenersTask__WEBPACK_IMPORTED_MODULE_1__.taskCurrent.textContent;
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(_createNotebook__WEBPACK_IMPORTED_MODULE_0__.map);
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
  const tasks = _createNotebook__WEBPACK_IMPORTED_MODULE_0__.map.get(notebook.firstChild.textContent);
  const index = tasks.findIndex((el) => el.name === taskName);
  tasks[index].deadline = element.textContent;

  console.log(`новое время ${element.textContent}`);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(_createNotebook__WEBPACK_IMPORTED_MODULE_0__.map);
}

function changeDate() {
  _listenersTask__WEBPACK_IMPORTED_MODULE_1__.main.addEventListener("click", (e) => {
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


/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskDiv: () => (/* binding */ addTaskDiv),
/* harmony export */   deleteTasksFromDom: () => (/* binding */ deleteTasksFromDom),
/* harmony export */   hiddenAddTaskButton: () => (/* binding */ hiddenAddTaskButton),
/* harmony export */   selectNotepad: () => (/* binding */ selectNotepad),
/* harmony export */   showTasksInDom: () => (/* binding */ showTasksInDom)
/* harmony export */ });
/* harmony import */ var _createNotebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNotebook */ "./src/createNotebook.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _listenersTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listenersTask */ "./src/listenersTask.js");




const addTaskDiv = document.getElementById("addTaskDiv");

// Определить какой блокнот выбран, показать задачи из блокнота
function selectNotepad() {
  _createNotebook__WEBPACK_IMPORTED_MODULE_0__.aside.addEventListener("click", (e) => {
    let element = e.target;
    element = element.classList.contains("notebook")
      ? element
      : element.classList.contains("notebookName")
      ? element.parentElement
      : null;
    if (element) {
      const notebooks = document.querySelectorAll(".notebook");
      for (const div of notebooks) {
        if (div.classList.contains("selected")) {
          div.classList.remove("selected");
        }
      }

      element.classList.add("selected");
      deleteTasksFromDom();
      showTasksInDom();
      hiddenAddTaskButton();
      _listenersTask__WEBPACK_IMPORTED_MODULE_2__.createTaskForm.classList.add("hidden");
    }
  });
}

function hiddenAddTaskButton() {
  addTaskDiv.classList.remove("hidden");
}

// Отобразить задачи в выбранном блокноте
function showTasksInDom() {
  const notebook = document.querySelector(".selected");
  const tasks = _createNotebook__WEBPACK_IMPORTED_MODULE_0__.map.get(notebook.firstChild.textContent);
  tasks.forEach((el) => (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.addTaskFromDOM)(el.name, el.deadline, el.done));
}

// Очистить поле от задач
function deleteTasksFromDom() {
  const tasksInDom = document.querySelectorAll(".task");
  const descriptionDiv = document.getElementById("descriptionDiv");
  descriptionDiv.classList.add("hidden");
  for (const task of tasksInDom) {
    task.remove();
  }
}


/***/ }),

/***/ "./src/listenersNotebook.js":
/*!**********************************!*\
  !*** ./src/listenersNotebook.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listenersNotebook),
/* harmony export */   notebookCurrent: () => (/* binding */ notebookCurrent),
/* harmony export */   uniqueNotebook: () => (/* binding */ uniqueNotebook)
/* harmony export */ });
/* harmony import */ var _createNotebook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNotebook.js */ "./src/createNotebook.js");


function listenersNotebook() {
  startListenerAddNotebookMenu();
  startListenersNotebookButtonAdd();
  startListenersNotebookButtonCancel();
  dropDownNotebook();
}

const createNotebookForm = document.getElementById("createNotebookForm");
const addNameNotebook = document.getElementById("addNameNotebook");

// Проверка что все блокноты уникальные
function uniqueNotebook(name) {
  const allNotebooks = document.getElementsByClassName("notebookName");
  for (const notebook of allNotebooks) {
    if (notebook.textContent === name) {
      return false;
    }
  }

  return true;
}

// Прослушка "Add notebook" для открытия окна создания блокнота
function startListenerAddNotebookMenu() {
  const addNotebookDiv = document.getElementById("addNotebookDiv");
  addNotebookDiv.addEventListener("click", () => {
    createNotebookForm.classList.contains("hidden")
      ? createNotebookForm.classList.remove("hidden")
      : null;
  });
}

// Прослушка "Add" для добавления блокнота
function startListenersNotebookButtonAdd() {
  const addNotebookButton = document.getElementById("addNotebookButton");
  addNotebookButton.addEventListener("click", () => {
    if (addNameNotebook.value === "") {
      alert("Notebook name not entered");
    } else if (!uniqueNotebook(addNameNotebook.value.trim())) {
      alert("There is already a notepad with the same name");
    } else {
      (0,_createNotebook_js__WEBPACK_IMPORTED_MODULE_0__.createNotebook)(addNameNotebook.value.trim());
      createNotebookForm.classList.add("hidden");
      clear();
    }
  });

  addNameNotebook.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      addNotebookButton.click();
      e.preventDefault();
    }
  });
}

// Прослушка "Cancel" для отмены ввода названия блокнота
function startListenersNotebookButtonCancel() {
  const cancelNotebookButton = document.getElementById("cancelNotebookButton");
  cancelNotebookButton.addEventListener("click", () => {
    createNotebookForm.classList.add("hidden");
    clear();
  });
}

function clear() {
  addNameNotebook.value = "";
}

// Открытие выпадающего списка для блокнотов
const notebookOption = document.getElementById("notebookOption");
let notebookCurrent;
let element;

function dropDownNotebook() {
  const body = document.querySelector("body");
  body.addEventListener("click", (e) => {
    element = e.target;
    if (element.classList.contains("notebookMenu")) {
      positionMenu();
      notebookCurrent = element.previousElementSibling;
      notebookOption.style.display =
        notebookOption.style.display === "block" ? "none" : "block";
    } else if (notebookOption.style.display === "block") {
      notebookOption.style.display = "none";
    }
  });
}

window.addEventListener("resize", () => {
  if (notebookOption.style.display === "block") {
    positionMenu();
  }
});

function positionMenu() {
  const coordinates = element.getBoundingClientRect();
  notebookOption.style.left = coordinates.left + "px";
  notebookOption.style.top = coordinates.top + "px";
  notebookOption.style.transform = "translate(-90%, -90%)";
}


/***/ }),

/***/ "./src/listenersTask.js":
/*!******************************!*\
  !*** ./src/listenersTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskForm: () => (/* binding */ createTaskForm),
/* harmony export */   listenersTask: () => (/* binding */ listenersTask),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   taskCurrent: () => (/* binding */ taskCurrent)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _createNotebook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNotebook.js */ "./src/createNotebook.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");




function listenersTask() {
  startListenerAddTaskMenu();
  startListenersTaskButtonCancel();
  startListenerCheckTask();
  startListenersTaskButtonAdd();
  startListenerShowDescription();
  dropDownTask();
}

const createTaskForm = document.getElementById("createTaskForm");
const addNameTask = document.getElementById("addNameTask");
const addDescriptionTask = document.getElementById("addDescriptionTask");
const main = document.querySelector("main");

// Открытие выпадающего списка для блокнотов
const taskOption = document.getElementById("taskOption");
let taskCurrent;
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
      (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(
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
        const notebook = _createNotebook_js__WEBPACK_IMPORTED_MODULE_1__.map.get(selectedDiv.firstChild.textContent);
        notebook.forEach((el) => {
          if (el.name == element.nextElementSibling.textContent) {
            el.done = true;
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(_createNotebook_js__WEBPACK_IMPORTED_MODULE_1__.map);
          }
        });
      }
    } else if (element.textContent === "radio_button_checked") {
      element.textContent = "radio_button_unchecked";
      element.nextElementSibling.classList.remove("checkbox-done");
      const notebook = _createNotebook_js__WEBPACK_IMPORTED_MODULE_1__.map.get(selectedDiv.firstChild.textContent);
      notebook.forEach((el) => {
        if (el.name == element.nextElementSibling.textContent) {
          el.done = false;
          (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(_createNotebook_js__WEBPACK_IMPORTED_MODULE_1__.map);
        }
      });
    }
  });
}

// Поиск и обновление задачи
function findAndUpdateTask(name, description) {
  const notebookDiv = document.querySelector(".selected");
  const tasks = _createNotebook_js__WEBPACK_IMPORTED_MODULE_1__.map.get(notebookDiv.firstChild.textContent);
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
  const tasks = _createNotebook_js__WEBPACK_IMPORTED_MODULE_1__.map.get(notebookDiv.firstChild.textContent);
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
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(_createNotebook_js__WEBPACK_IMPORTED_MODULE_1__.map);
  });
}


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadFromLocalStorage: () => (/* binding */ downloadFromLocalStorage),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _createNotebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNotebook */ "./src/createNotebook.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _listenersTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listenersTask */ "./src/listenersTask.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface */ "./src/interface.js");





// Обновление данных в localStorage
function updateLocalStorage(currentMap) {
  const notesJSON = JSON.stringify(Array.from(currentMap));
  localStorage.setItem("notes", notesJSON);
}

function downloadFromLocalStorage() {
  const localJson = localStorage.getItem("notes");
  const local = JSON.parse(localJson);
  if (local) {
    updateMap(local);
  }
}

// Функция для обновления данных в map
function updateMap(local) {
  for (const [notebook, tasksInLocal] of local) {
    _createNotebook__WEBPACK_IMPORTED_MODULE_0__.map.set(notebook, tasksInLocal);
    (0,_createNotebook__WEBPACK_IMPORTED_MODULE_0__.createNotebook)(notebook);
    tasksInLocal.forEach((el) => {
      (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(el.name, el.deadline, el.description, el.done);
    });
  }

  const selectedElement = document.querySelector(".selected");
  if (selectedElement !== null) {
    selectedElement.classList.remove("selected");
    clearSelected();
  }
}

// Очистка поля по умолчанию при запуске блокнота
function clearSelected() {
  _interface__WEBPACK_IMPORTED_MODULE_3__.addTaskDiv.classList.add("hidden");
  const tasks = _listenersTask__WEBPACK_IMPORTED_MODULE_2__.main.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
  });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _listenersNotebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listenersNotebook */ "./src/listenersNotebook.js");
/* harmony import */ var _createNotebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createNotebook */ "./src/createNotebook.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _listenersTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listenersTask */ "./src/listenersTask.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _buttonsHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttonsHeader */ "./src/buttonsHeader.js");









// Старт прослушивателе
(0,_localStorage__WEBPACK_IMPORTED_MODULE_6__.downloadFromLocalStorage)();
(0,_listenersNotebook__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_createNotebook__WEBPACK_IMPORTED_MODULE_3__.deleteRenameNotebook)();
(0,_createTask__WEBPACK_IMPORTED_MODULE_4__.currentDate)();
(0,_listenersTask__WEBPACK_IMPORTED_MODULE_5__.listenersTask)();
(0,_interface__WEBPACK_IMPORTED_MODULE_1__.selectNotepad)();
(0,_createTask__WEBPACK_IMPORTED_MODULE_4__.deleteRenameTask)();
(0,_createTask__WEBPACK_IMPORTED_MODULE_4__.changeDate)();
(0,_buttonsHeader__WEBPACK_IMPORTED_MODULE_7__.switchLisneter)();
(0,_buttonsHeader__WEBPACK_IMPORTED_MODULE_7__.checkStatusDarkTheme)();
(0,_buttonsHeader__WEBPACK_IMPORTED_MODULE_7__.toggleListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVyxZQUFZLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxX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aUI7QUFDakIscUVBQW9CO0FBQ3BCLHdEQUFXO0FBQ1gsNkRBQWE7QUFDYix5REFBYTtBQUNiLDZEQUFnQjtBQUNoQix1REFBVTtBQUNWLDhEQUFjO0FBQ2Qsb0VBQW9CO0FBQ3BCLDhEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0Ly4vc3JjL2J1dHRvbnNIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC8uL3NyYy9jcmVhdGVOb3RlYm9vay5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC8uL3NyYy9saXN0ZW5lcnNOb3RlYm9vay5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0Ly4vc3JjL2xpc3RlbmVyc1Rhc2suanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyog0J7QsdGJ0LjQtSDQvdCw0YHRgtGA0L7QudC60LggKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQtZmFtaWxlKTtcbn1cblxuaDEge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbjpyb290IHtcbiAgLS1tYWluLWZvbnQtc2l6ZTogMXJlbTtcbiAgLS1tYWluLWZvbnQtZmFtaWxlOiBcIkNpbnplbFwiLCBcIkdlb3JnaWFcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG4gIC0tbWFpbi1mb250LWNvbG9yOiByZ2IoMTAxLCA2NywgNTgpO1xuICAtLXNlY29uZC1mb250LWNvbG9yOiBiZWlnZTtcbiAgLS10aGlyZC1jb2xvci1jb2xvcjogcmdiKDI0OCwgMjI3LCAyMDIpO1xuICAtLXRvcC1jb2xvci1ob3ZlcjogcmdiKDE0NCwgMTIwLCAxMTMpO1xuICAtLWFzaWRlLWNvbG9yLWhvdmVyOiByZ2IoMjE5LCAyMTksIDE5MSk7XG4gIC0tbWFpbi1jb2xvci1ob3ZlcjogcmdiKDIwMiwgMTg1LCAxNjQpO1xuICAtLXNlbGVjdGVkLWNvbG9yOiByZ2IoMjI0LCAyMDcsIDE4Nik7XG4gIC0tbWFpbi1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLyog0YLQtdC80L3QsNGPINGC0LXQvNCwICovXG4uZGFya1RoZW1lIHtcbiAgLS1zZWNvbmQtZm9udC1jb2xvcjogcmdiKDEwMSwgNjcsIDU4KTtcbiAgLS1tYWluLWZvbnQtY29sb3I6IGJlaWdlO1xuICAtLXRoaXJkLWNvbG9yLWNvbG9yOiByZ2IoNjUsIDQzLCAzNyk7XG4gIC0tYXNpZGUtY29sb3ItaG92ZXI6IHJnYig4MywgNTYsIDQ4KTtcbiAgLS1zZWxlY3RlZC1jb2xvcjogcmdiKDc1LCA1MSwgNDQpO1xuICAtLW1haW4tY29sb3ItaG92ZXI6IHJnYig4MywgNTcsIDQ4KTtcbn1cblxuLyog0YPQsdGA0LDRgtGMINCy0YvQtNC10LvQtdC90LjQtSDRjdC70LXQvNC10L3RgtC+0LIgICovXG4ubm9zZWxlY3Qge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiNyb290IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImhlYWRlciBoZWFkZXJcIlxuICAgIFwiYXNpZGUgbWFpblwiO1xufVxuXG4vKiDQmNC60L7QvdC60LggKi9cbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwiRklMTFwiIDAsIFwid2dodFwiIDQwMCwgXCJHUkFEXCIgMCwgXCJvcHN6XCIgMjQ7XG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1tYWluLWZvbnQtc2l6ZSkgKiAzKTtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiDQndCw0YHRgtGA0L7QudC60LAg0YHQutGA0YvRgtC40Y8g0YTQvtGA0LwgICovXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyog0J3QsNGB0YLRgNC+0LnQutCwINC90LDQstC10LTQtdC90LjRjyDQutGD0YDRgdC+0YDQsCDQvNGL0YjQuCAqL1xuYXNpZGUgPiBkaXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2lkZS1jb2xvci1ob3Zlcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWFpbiA+IC50YXNrOmhvdmVyLFxubWFpbiA+ICNhZGRUYXNrRGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci1ob3Zlcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNhZGRUYXNrRGl2OmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGFzazpob3Zlcixcbi5ub3RlYm9vazpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSwgMS4wMSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tc2hhZG93KTtcbn1cblxuI2NyZWF0ZU5vdGVib29rRm9ybTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1mb250LWNvbG9yKTtcbn1cblxuLmljb24tY2xpY2s6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdG9wLWNvbG9yLWhvdmVyKTtcbn1cblxuI2FkZE5vdGVib29rQnV0dG9uLFxuI2FkZFRhc2tCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAxOTIsIDE0MCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2FkZE5vdGVib29rQnV0dG9uOmhvdmVyLFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxOTQsIDE2NSk7XG59XG5cbiNjYW5jZWxOb3RlYm9va0J1dHRvbixcbiNjYW5jZWxUYXNrQnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAxMDgsIDEwOCk7XG59XG5cbiNjYW5jZWxOb3RlYm9va0J1dHRvbjpob3ZlcixcbiNjYW5jZWxUYXNrQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMTM2LCAxMzYpO1xufVxuXG4vKiBmbGV4ICovXG5cbmhlYWRlcixcbi5ub3RlYm9vayxcbiNhZGROb3RlYm9va0RpdixcbiNhZGRUYXNrRGl2LFxuI2FkZE5hbWVOb3RlYm9vayArIGRpdixcbi5vcHRpb25NZW51LFxuLnByaW9yaXR5LFxuI2NyZWF0ZVRhc2tGb3JtIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vKiDQndCw0YHRgtGA0L7QudC60LAg0LLQtdGA0YXQvdC10Lkg0YfQsNGB0YLQuCDRgdGC0YDQsNC90LjRhtGLICovXG5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgaGVpZ2h0OiAxMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXNlY29uZC1mb250LWNvbG9yKTtcbn1cblxuaGVhZGVyIGRpdiB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuaGVhZGVyIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8qINCd0LDRgdGC0YDQvtC50LrQsCDQu9C10LLQvtC5INC/0LDQvdC10LvQuCAqL1xuYXNpZGUge1xuICBncmlkLWFyZWE6IGFzaWRlO1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiAyMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtZm9udC1jb2xvcik7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xufVxuXG5hc2lkZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuYXNpZGUgaDEsXG5tYWluIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuYXNpZGUgZGl2IHtcbiAgcGFkZGluZzogMCAwLjZyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qINCd0LDRgdGC0YDQvtC50LrQuCDRgNCw0LfQtNC10LvQsCDRgSDQtNC+0LHQsNCy0LvQtdC90LjQtdC8INCx0LvQvtC60L3QvtGC0LAgKi9cbiNhZGROb3RlYm9va0RpdiBkaXYsXG4ubm90ZWJvb2tOYW1lIHtcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLW1haW4tZm9udC1zaXplKSAqIDEuMSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbiNhZGROb3RlYm9va0RpdiBzcGFuLFxuLm5vdGVib29rTWVudSB7XG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1tYWluLWZvbnQtc2l6ZSkgKiAyKTtcbn1cblxuLm5vdGVib29rIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubm90ZWJvb2tNZW51IHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbiNhZGROYW1lTm90ZWJvb2ssXG4jYWRkTmFtZVRhc2ssXG4jYWRkRGVzY3JpcHRpb25UYXNrIHtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGVkLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1zaGFkb3cpO1xufVxuXG4vKiDQutC90L7Qv9C60Lgg0JTQvtCx0LDQstC40YLRjCDQuCDQntGC0LzQtdC90LAg0LTQu9GPINC/0YDQvtC10LrRgtC+0LIgKi9cbiNhZGROYW1lTm90ZWJvb2sgKyBkaXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4jYWRkTmFtZU5vdGVib29rICsgZGl2IGJ1dHRvbixcbiNkYXRlVGFzayArIGRpdiBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIHdpZHRoOiA1cmVtO1xufVxuXG4jYWRkTmFtZU5vdGVib29rIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG59XG5cbi8qINC90LDRgdGC0YDQvtC50LrQsCDQvtC60L3QsCDRgSDQvtC/0YbQuNGP0LzQuCDQuCDQutC90L7Qv9C+0Log0LTQu9GPINCx0LvQvtC60L3QvtGC0L7QsiDQuCDQt9Cw0LTQsNGHICovXG4ub3B0aW9uTWVudSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ub3B0aW9uTWVudTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ub3B0aW9uQnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9wdGlvbkJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLyog0J3QsNGB0YLRgNC+0LnQutCwINC/0YDQsNCy0L7QuSDQv9Cw0L3QtdC70LggKi9cbm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGhlaWdodDogOTB2aDtcbiAgd2lkdGg6IDgwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yLWNvbG9yKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLyog0J3QsNGB0YLRgNC+0LnQutC4INC30LDQtNCw0YcgKi9cbi50YXNrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTVmciAyZnIgMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA1dmg7XG59XG5cbi50YXNrIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLW1haW4tZm9udC1zaXplKSAqIDEuNCk7XG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcbn1cblxuLmluUHJvY2VzcyB7XG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1tYWluLWZvbnQtc2l6ZSkgKiAwLjgpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuLmR1ZURhdGUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGNhbGModmFyKC0tbWFpbi1mb250LXNpemUpICogMC44KTtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG59XG5cbi5kdWVEYXRlLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qINCa0L3QvtC/0LrQsCDRgdC+0LfQtNCw0L3QuNGPINC30LDQtNCw0YcgKi9cbiNhZGRUYXNrRGl2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuI2FkZFRhc2tEaXYgc3BhbiB7XG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1tYWluLWZvbnQtc2l6ZSkgKiAyKTtcbn1cblxuLyog0L7QutC90L4g0YHQvtC30LTQsNC90LjRjyDQt9Cw0LTQsNGH0LggKi9cbiNjcmVhdGVUYXNrRm9ybSB7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuXG4jY3JlYXRlVGFza0Zvcm0gaW5wdXQsXG4jY3JlYXRlVGFza0Zvcm0sXG4jYWRkRGVzY3JpcHRpb25UYXNrIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG59XG5cbiNjcmVhdGVUYXNrRm9ybSBmb3JtIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2FkZERlc2NyaXB0aW9uVGFzayB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbiNkYXRlVGFzayB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XG59XG5cbiNkYXRlVGFzayArIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLyog0YTQvtGA0LzQsCDQtNC70Y8g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQvtC/0LjRgdCw0L3QuNGPINGDINC30LDQtNCw0YfQuCAqL1xuI2Rlc2NyaXB0aW9uRGl2IHtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAxNXZoO1xufVxuXG4jZGVzY3JpcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yLWNvbG9yKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cbi8qINCy0YvQv9C+0LvQvdC10L3QvdCw0Y8g0Lgg0LfQsNC00LDRh9CwINCyINC/0YDQvtGG0LXRgdGB0LUgKi9cblxuLmNoZWNrYm94LWRvbmUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLyog0L3QsNGB0YLRgNC+0LnQutC4INC00LvRjyDQvNC+0LHQuNC70YzQvdC+0Lkg0LLQtdGA0YHQuNC4ICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3Jvb3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICBcImhlYWRlclwiXG4gICAgICBcImFzaWRlXCJcbiAgICAgIFwibWFpblwiO1xuICB9XG5cbiAgYXNpZGUge1xuICAgIGhlaWdodDogMzB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuICBtYWluIHtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG5cbiAgaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tbWFpbi1mb250LXNpemUpICogMS41KTtcbiAgfVxuXG4gIC5ub3RlYm9va05hbWUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi1mb250LXNpemUpO1xuICB9XG4gIC5kdWVEYXRlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7QUFDcEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlFQUFpRTtFQUNqRSxtQ0FBbUM7RUFDbkMsMEJBQTBCO0VBQzFCLHVDQUF1QztFQUN2QyxxQ0FBcUM7RUFDckMsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QyxvQ0FBb0M7RUFDcEM7b0NBQ2tDO0FBQ3BDOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxpQ0FBaUM7RUFDakMsbUNBQW1DO0FBQ3JDOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7O2dCQUVjO0FBQ2hCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGtFQUFrRTtFQUNsRSwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSwwQ0FBMEM7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Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHlCQUF5QjtBQUMzQjs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSx3Q0FBd0M7RUFDeEMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQSxvQ0FBb0M7O0FBRXBDO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBLG1DQUFtQztBQUNuQztFQUNFO0lBQ0U7OztZQUdRO0VBQ1Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog0J7QsdGJ0LjQtSDQvdCw0YHRgtGA0L7QudC60LggKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udC1mYW1pbGUpO1xcbn1cXG5cXG5oMSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1mb250LXNpemU6IDFyZW07XFxuICAtLW1haW4tZm9udC1mYW1pbGU6IFxcXCJDaW56ZWxcXFwiLCBcXFwiR2VvcmdpYVxcXCIsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG4gIC0tbWFpbi1mb250LWNvbG9yOiByZ2IoMTAxLCA2NywgNTgpO1xcbiAgLS1zZWNvbmQtZm9udC1jb2xvcjogYmVpZ2U7XFxuICAtLXRoaXJkLWNvbG9yLWNvbG9yOiByZ2IoMjQ4LCAyMjcsIDIwMik7XFxuICAtLXRvcC1jb2xvci1ob3ZlcjogcmdiKDE0NCwgMTIwLCAxMTMpO1xcbiAgLS1hc2lkZS1jb2xvci1ob3ZlcjogcmdiKDIxOSwgMjE5LCAxOTEpO1xcbiAgLS1tYWluLWNvbG9yLWhvdmVyOiByZ2IoMjAyLCAxODUsIDE2NCk7XFxuICAtLXNlbGVjdGVkLWNvbG9yOiByZ2IoMjI0LCAyMDcsIDE4Nik7XFxuICAtLW1haW4tc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuICAgIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4vKiDRgtC10LzQvdCw0Y8g0YLQtdC80LAgKi9cXG4uZGFya1RoZW1lIHtcXG4gIC0tc2Vjb25kLWZvbnQtY29sb3I6IHJnYigxMDEsIDY3LCA1OCk7XFxuICAtLW1haW4tZm9udC1jb2xvcjogYmVpZ2U7XFxuICAtLXRoaXJkLWNvbG9yLWNvbG9yOiByZ2IoNjUsIDQzLCAzNyk7XFxuICAtLWFzaWRlLWNvbG9yLWhvdmVyOiByZ2IoODMsIDU2LCA0OCk7XFxuICAtLXNlbGVjdGVkLWNvbG9yOiByZ2IoNzUsIDUxLCA0NCk7XFxuICAtLW1haW4tY29sb3ItaG92ZXI6IHJnYig4MywgNTcsIDQ4KTtcXG59XFxuXFxuLyog0YPQsdGA0LDRgtGMINCy0YvQtNC10LvQtdC90LjQtSDRjdC70LXQvNC10L3RgtC+0LIgICovXFxuLm5vc2VsZWN0IHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNyb290IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcImFzaWRlIG1haW5cXFwiO1xcbn1cXG5cXG4vKiDQmNC60L7QvdC60LggKi9cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkZJTExcXFwiIDAsIFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJHUkFEXFxcIiAwLCBcXFwib3BzelxcXCIgMjQ7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tbWFpbi1mb250LXNpemUpICogMyk7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiDQndCw0YHRgtGA0L7QudC60LAg0YHQutGA0YvRgtC40Y8g0YTQvtGA0LwgICovXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyog0J3QsNGB0YLRgNC+0LnQutCwINC90LDQstC10LTQtdC90LjRjyDQutGD0YDRgdC+0YDQsCDQvNGL0YjQuCAqL1xcbmFzaWRlID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFzaWRlLWNvbG9yLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiA+IC50YXNrOmhvdmVyLFxcbm1haW4gPiAjYWRkVGFza0Rpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FkZFRhc2tEaXY6aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlcixcXG4ubm90ZWJvb2s6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxLCAxLjAxKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tc2hhZG93KTtcXG59XFxuXFxuI2NyZWF0ZU5vdGVib29rRm9ybTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtZm9udC1jb2xvcik7XFxufVxcblxcbi5pY29uLWNsaWNrOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10b3AtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4jYWRkTm90ZWJvb2tCdXR0b24sXFxuI2FkZFRhc2tCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMTkyLCAxNDApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkTm90ZWJvb2tCdXR0b246aG92ZXIsXFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTk0LCAxNjUpO1xcbn1cXG5cXG4jY2FuY2VsTm90ZWJvb2tCdXR0b24sXFxuI2NhbmNlbFRhc2tCdXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMTA4LCAxMDgpO1xcbn1cXG5cXG4jY2FuY2VsTm90ZWJvb2tCdXR0b246aG92ZXIsXFxuI2NhbmNlbFRhc2tCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMTM2LCAxMzYpO1xcbn1cXG5cXG4vKiBmbGV4ICovXFxuXFxuaGVhZGVyLFxcbi5ub3RlYm9vayxcXG4jYWRkTm90ZWJvb2tEaXYsXFxuI2FkZFRhc2tEaXYsXFxuI2FkZE5hbWVOb3RlYm9vayArIGRpdixcXG4ub3B0aW9uTWVudSxcXG4ucHJpb3JpdHksXFxuI2NyZWF0ZVRhc2tGb3JtIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyog0J3QsNGB0YLRgNC+0LnQutCwINCy0LXRgNGF0L3QtdC5INGH0LDRgdGC0Lgg0YHRgtGA0LDQvdC40YbRiyAqL1xcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZC1mb250LWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyIGRpdiB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKiDQndCw0YHRgtGA0L7QudC60LAg0LvQtdCy0L7QuSDQv9Cw0L3QtdC70LggKi9cXG5hc2lkZSB7XFxuICBncmlkLWFyZWE6IGFzaWRlO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDIwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtZm9udC1jb2xvcik7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbmFzaWRlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuYXNpZGUgaDEsXFxubWFpbiBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbmFzaWRlIGRpdiB7XFxuICBwYWRkaW5nOiAwIDAuNnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qINCd0LDRgdGC0YDQvtC50LrQuCDRgNCw0LfQtNC10LvQsCDRgSDQtNC+0LHQsNCy0LvQtdC90LjQtdC8INCx0LvQvtC60L3QvtGC0LAgKi9cXG4jYWRkTm90ZWJvb2tEaXYgZGl2LFxcbi5ub3RlYm9va05hbWUge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLW1haW4tZm9udC1zaXplKSAqIDEuMSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbiNhZGROb3RlYm9va0RpdiBzcGFuLFxcbi5ub3RlYm9va01lbnUge1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLW1haW4tZm9udC1zaXplKSAqIDIpO1xcbn1cXG5cXG4ubm90ZWJvb2sge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubm90ZWJvb2tNZW51IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4jYWRkTmFtZU5vdGVib29rLFxcbiNhZGROYW1lVGFzayxcXG4jYWRkRGVzY3JpcHRpb25UYXNrIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RlZC1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS1tYWluLXNoYWRvdyk7XFxufVxcblxcbi8qINC60L3QvtC/0LrQuCDQlNC+0LHQsNCy0LjRgtGMINC4INCe0YLQvNC10L3QsCDQtNC70Y8g0L/RgNC+0LXQutGC0L7QsiAqL1xcbiNhZGROYW1lTm90ZWJvb2sgKyBkaXYge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNhZGROYW1lTm90ZWJvb2sgKyBkaXYgYnV0dG9uLFxcbiNkYXRlVGFzayArIGRpdiBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIHdpZHRoOiA1cmVtO1xcbn1cXG5cXG4jYWRkTmFtZU5vdGVib29rIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLyog0L3QsNGB0YLRgNC+0LnQutCwINC+0LrQvdCwINGBINC+0L/RhtC40Y/QvNC4INC4INC60L3QvtC/0L7QuiDQtNC70Y8g0LHQu9C+0LrQvdC+0YLQvtCyINC4INC30LDQtNCw0YcgKi9cXG4ub3B0aW9uTWVudSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ub3B0aW9uTWVudTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm9wdGlvbkJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcHRpb25CdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4vKiDQndCw0YHRgtGA0L7QudC60LAg0L/RgNCw0LLQvtC5INC/0LDQvdC10LvQuCAqL1xcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvci1jb2xvcik7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5tYWluOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLyog0J3QsNGB0YLRgNC+0LnQutC4INC30LDQtNCw0YcgKi9cXG4udGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTVmciAyZnIgMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuLnRhc2sgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1tYWluLWZvbnQtc2l6ZSkgKiAxLjQpO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW5Qcm9jZXNzIHtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1tYWluLWZvbnQtc2l6ZSkgKiAwLjgpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLW1haW4tZm9udC1zaXplKSAqIDAuOCk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmR1ZURhdGUuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qINCa0L3QvtC/0LrQsCDRgdC+0LfQtNCw0L3QuNGPINC30LDQtNCw0YcgKi9cXG4jYWRkVGFza0RpdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuI2FkZFRhc2tEaXYgc3BhbiB7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tbWFpbi1mb250LXNpemUpICogMik7XFxufVxcblxcbi8qINC+0LrQvdC+INGB0L7Qt9C00LDQvdC40Y8g0LfQsNC00LDRh9C4ICovXFxuI2NyZWF0ZVRhc2tGb3JtIHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4jY3JlYXRlVGFza0Zvcm0gaW5wdXQsXFxuI2NyZWF0ZVRhc2tGb3JtLFxcbiNhZGREZXNjcmlwdGlvblRhc2sge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4jY3JlYXRlVGFza0Zvcm0gZm9ybSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jYWRkRGVzY3JpcHRpb25UYXNrIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbiNkYXRlVGFzayB7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuI2RhdGVUYXNrICsgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKiDRhNC+0YDQvNCwINC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC+0L/QuNGB0LDQvdC40Y8g0YMg0LfQsNC00LDRh9C4ICovXFxuI2Rlc2NyaXB0aW9uRGl2IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmVzaXplOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3ItY29sb3IpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG4vKiDQstGL0L/QvtC70L3QtdC90L3QsNGPINC4INC30LDQtNCw0YfQsCDQsiDQv9GA0L7RhtC10YHRgdC1ICovXFxuXFxuLmNoZWNrYm94LWRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi8qINC90LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0LzQvtCx0LjQu9GM0L3QvtC5INCy0LXRgNGB0LjQuCAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgI3Jvb3Qge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgXFxcImFzaWRlXFxcIlxcbiAgICAgIFxcXCJtYWluXFxcIjtcXG4gIH1cXG5cXG4gIGFzaWRlIHtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuXFxuICBoZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tbWFpbi1mb250LXNpemUpICogMS41KTtcXG4gIH1cXG5cXG4gIC5ub3RlYm9va05hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcXG4gIH1cXG4gIC5kdWVEYXRlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYXNpZGUgfSBmcm9tIFwiLi9jcmVhdGVOb3RlYm9va1wiO1xuaW1wb3J0IHsgbWFpbiB9IGZyb20gXCIuL2xpc3RlbmVyc1Rhc2suanNcIjtcblxuY29uc3Qgc3dpdGNoTW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoXCIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbmNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGREZXNjcmlwdGlvblRhc2tcIik7XG5jb25zdCBpbnB1dFRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGROYW1lVGFza1wiKTtcbmNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVRhc2tcIik7XG5jb25zdCBhZGROYW1lTm90ZWJvb2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZE5hbWVOb3RlYm9va1wiKTtcbmNvbnN0IGhpZGVQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZVBhbmVsXCIpO1xubGV0IGRhcmtUaGVtZU9uO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdGF0dXNEYXJrVGhlbWUoKSB7XG4gIGRhcmtUaGVtZU9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhcmtUaGVtZVwiKSk7XG4gIGRhcmtUaGVtZU9uXG4gICAgPyAodG9nZ2xlRGFya1RoZW1lKCksXG4gICAgICAoZGFya1RoZW1lT24gPSAhZGFya1RoZW1lT24pLFxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXJrVGhlbWVcIiwgZGFya1RoZW1lT24pKVxuICAgIDogY29uc29sZS5sb2coXCLQotGR0LzQvdCwINGC0LXQvNCwINCy0YvQutC70Y7Rh9C10L3QsFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaExpc25ldGVyKCkge1xuICBzd2l0Y2hNb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEYXJrVGhlbWUpO1xufVxuXG4vLyDQpNGD0L3QutGG0LjRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0YLRkdC80L3QvtC5INGC0LXQvNGLXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRGFya1RoZW1lKCkge1xuICBkYXJrVGhlbWVPbiA9ICFkYXJrVGhlbWVPbjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXJrVGhlbWVcIiwgZGFya1RoZW1lT24pO1xuICBjb25zdCBlbGVtZW50c0RhcmtUaGVtZSA9IFthc2lkZSwgaGVhZGVyLCBtYWluLCBpbnB1dERhdGVdO1xuICBlbGVtZW50c0RhcmtUaGVtZS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrVGhlbWVcIikpO1xuICBjb25zdCBlbGVtZW50c0JhY2tncm91bmQgPSBbXG4gICAgdGV4dEFyZWEsXG4gICAgaW5wdXRUYXNrTmFtZSxcbiAgICBpbnB1dERhdGUsXG4gICAgYWRkTmFtZU5vdGVib29rLFxuICBdO1xuICBlbGVtZW50c0JhY2tncm91bmQuZm9yRWFjaCgoZWxlbWVudCkgPT4gdG9nZ2xlQmFja2dyb3VuZEFuZFRleHQoZWxlbWVudCkpO1xuICBzd2l0Y2hNb2RlLnRleHRDb250ZW50ID1cbiAgICBzd2l0Y2hNb2RlLnRleHRDb250ZW50ID09PSBcInRvZ2dsZV9vZmZcIiA/IFwidG9nZ2xlX29uXCIgOiBcInRvZ2dsZV9vZmZcIjtcbn1cblxuLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC/0LXRgNC10LrQu9GO0YfQtdC90LjRjyDRhNC+0L3QsCDQuCDRgtC10LrRgdGC0LAg0Y3Qu9C10LzQtdC90YLQsFxuZnVuY3Rpb24gdG9nZ2xlQmFja2dyb3VuZEFuZFRleHQoZWxlbWVudCkge1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPVxuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9PT0gXCJyZ2IoNjUsIDQzLCAzNylcIlxuICAgICAgPyBcIndoaXRlXCJcbiAgICAgIDogXCJyZ2IoNjUsIDQzLCAzNylcIjtcbn1cblxuLy8g0JrQvdC+0L/QutCwINGB0LLQtdGA0L3Rg9GC0Ywg0L/QsNC90LXQu9GMINCx0LvQvtC60L3QvtGC0L7QslxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxpc3RlbmVyKCkge1xuICBoaWRlUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5vdGVib29rUGFuZWwpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVOb3RlYm9va1BhbmVsKCkge1xuICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjhweClcIik7XG5cbiAgaWYgKG1lZGlhUXVlcnkubWF0Y2hlcykge1xuICAgIC8vINCV0YHQu9C4INC00LAsINGC0L4g0L/RgNC40LzQtdC90Y/QtdC8INGB0YLQuNC70Lgg0LTQu9GPINC80L7QsdC40LvRjNC90L7QuSDQstC10YDRgdC40LhcbiAgICBhc2lkZS5zdHlsZS53aWR0aCA9IGFzaWRlLnN0eWxlLndpZHRoID09PSBcIjBweFwiID8gXCIxMDB2d1wiIDogXCIwXCI7XG4gICAgYXNpZGUuc3R5bGUuaGVpZ2h0ID0gYXNpZGUuc3R5bGUuaGVpZ2h0ID09PSBcIjBweFwiID8gXCIzMHZoXCIgOiBcIjBcIjtcbiAgICAvLyBNYWluLnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xuICAgIG1haW4uc3R5bGUuaGVpZ2h0ID0gbWFpbi5zdHlsZS5oZWlnaHQgPT09IFwiOTB2aFwiID8gXCI2MHZoXCIgOiBcIjkwdmhcIjtcbiAgfSBlbHNlIHtcbiAgICAvLyDQldGB0LvQuCDQvdC10YIsINGC0L4g0L/RgNC40LzQtdC90Y/QtdC8INGB0YLQuNC70Lgg0LTQu9GPINC+0LHRi9GH0L3QvtC5INCy0LXRgNGB0LjQuFxuICAgIGFzaWRlLnN0eWxlLndpZHRoID0gYXNpZGUuc3R5bGUud2lkdGggPT09IFwiMHB4XCIgPyBcIjIwdndcIiA6IFwiMFwiO1xuICAgIGFzaWRlLnN0eWxlLmhlaWdodCA9IGFzaWRlLnN0eWxlLmhlaWdodCA9PT0gXCIwcHhcIiA/IFwiOTB2aFwiIDogXCIwXCI7XG4gICAgbWFpbi5zdHlsZS53aWR0aCA9IG1haW4uc3R5bGUud2lkdGggPT09IFwiMTAwdndcIiA/IFwiODB2d1wiIDogXCIxMDB2d1wiO1xuICAgIC8vIE1haW4uc3R5bGUuaGVpZ2h0ID0gXCI5MHZoXCI7XG4gIH1cbn1cbiIsImV4cG9ydCB7IG1hcCwgYXNpZGUsIGNyZWF0ZU5vdGVib29rLCBkZWxldGVSZW5hbWVOb3RlYm9vayB9O1xuaW1wb3J0IHsgbm90ZWJvb2tDdXJyZW50LCB1bmlxdWVOb3RlYm9vayB9IGZyb20gXCIuL2xpc3RlbmVyc05vdGVib29rXCI7XG5pbXBvcnQge1xuICBkZWxldGVUYXNrc0Zyb21Eb20sXG4gIGFkZFRhc2tEaXYsXG4gIHNob3dUYXNrc0luRG9tLFxuICBoaWRkZW5BZGRUYXNrQnV0dG9uLFxufSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5sZXQgbWFwID0gbmV3IE1hcCgpOyAvLyDQpdGA0LDQvdC40LvQuNGJ0LUg0L/RgNC+0LXQutGC0L7QslxubGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpO1xuXG4vLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDQsdC70L7QutC90L7RgtCwINCyIE1hcCDQuCDQv9C+0LzQtdGJ0LXQvdC40Y8g0LXQs9C+INC90LAg0YHRgtGA0LDQvdC40YbRg1xuZnVuY3Rpb24gY3JlYXRlTm90ZWJvb2sobm90ZWJvb2tOYW1lKSB7XG4gIG1hcC5zZXQobm90ZWJvb2tOYW1lLCBbXSk7XG4gIGFkZE5vdGVib29rRnJvbURPTShub3RlYm9va05hbWUpO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UobWFwKTtcbn1cblxuLy/QpNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDQsdC70L7QutC90L7RgtCwINCyIERPTVxuZnVuY3Rpb24gYWRkTm90ZWJvb2tGcm9tRE9NKG5vdGVib29rKSB7XG4gIGxldCBkaXZOb3RlYm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBkaXZOb3RlYm9va05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgc3Bhbk5vdGVib29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRpdk5vdGVib29rLmNsYXNzTGlzdC5hZGQoXCJub3RlYm9va1wiKTtcbiAgZGl2Tm90ZWJvb2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJub3RlYm9va05hbWVcIik7XG4gIHNwYW5Ob3RlYm9vay5jbGFzc0xpc3QuYWRkKFwibm90ZWJvb2tNZW51XCIsIFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgZGl2Tm90ZWJvb2tOYW1lLnRleHRDb250ZW50ID0gbm90ZWJvb2s7XG4gIHNwYW5Ob3RlYm9vay50ZXh0Q29udGVudCA9IFwiIG1vcmVfdmVydCBcIjtcbiAgZGl2Tm90ZWJvb2suYXBwZW5kKC4uLltkaXZOb3RlYm9va05hbWUsIHNwYW5Ob3RlYm9va10pO1xuXG4gIGxldCBwcmV2aW91c05vdGVib29rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoMU5vdGVib29rXCIpO1xuICBsZXQgbm90ZWJvb2tDb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RlYm9va1wiKTtcbiAgcHJldmlvdXNOb3RlYm9vayA9XG4gICAgbm90ZWJvb2tDb2xsLmxlbmd0aCA+IDBcbiAgICAgID8gbm90ZWJvb2tDb2xsW25vdGVib29rQ29sbC5sZW5ndGggLSAxXVxuICAgICAgOiBwcmV2aW91c05vdGVib29rO1xuICBwcmV2aW91c05vdGVib29rLmFmdGVyKGRpdk5vdGVib29rKTtcblxuICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcbiAgaWYgKHNlbGVjdGVkRWxlbWVudCkge1xuICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIH1cbiAgZGl2Tm90ZWJvb2suY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBkZWxldGVUYXNrc0Zyb21Eb20oKTtcbiAgc2hvd1Rhc2tzSW5Eb20oKTtcbiAgaGlkZGVuQWRkVGFza0J1dHRvbigpO1xufVxuXG4vL9GE0YPQvdC60YbQuNGPINC00LvRjyDRg9C00LDQu9C10L3QuNGPINC4INC/0LXRgNC10LjQvNC10L3QvtCy0LDQvdC40Y8g0LHQu9C+0LrQvdC+0YLQvtCyXG5mdW5jdGlvbiBkZWxldGVSZW5hbWVOb3RlYm9vaygpIHtcbiAgYXNpZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBpZiAoZWxlbWVudC5pZCA9PT0gXCJub3RlYm9va0RlbGV0ZVwiKSB7XG4gICAgICBub3RlYm9va0N1cnJlbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKVxuICAgICAgICA/IChkZWxldGVUYXNrc0Zyb21Eb20oKSwgYWRkVGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpKVxuICAgICAgICA6IG51bGw7XG4gICAgICBtYXAuZGVsZXRlKG5vdGVib29rQ3VycmVudC50ZXh0Q29udGVudCk7XG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UobWFwKTtcbiAgICAgIG5vdGVib29rQ3VycmVudC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmlkID09IFwibm90ZWJvb2tSZW5hbWVcIikge1xuICAgICAgbGV0IG9sZE5hbWUgPSBub3RlYm9va0N1cnJlbnQudGV4dENvbnRlbnQ7XG4gICAgICBsZXQgbmV3TmFtZSA9IHByb21wdChcIkVudGVyIG5ldyBuYW1lIGZvciB0aGUgbm90ZWJvb2s6XCIsIG9sZE5hbWUpO1xuICAgICAgd2hpbGUgKChuZXdOYW1lICYmIG5ld05hbWUubGVuZ3RoID4gMjApIHx8ICF1bmlxdWVOb3RlYm9vayhuZXdOYW1lKSkge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICBcIlRoZSBuYW1lIGlzIHRvbyBsb25nIG9yIHRoZSBzYW1lIGFzIGFub3RoZXIgbm90ZWJvb2suIE11c3QgYmUgbm8gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMuXCJcbiAgICAgICAgKTtcbiAgICAgICAgbmV3TmFtZSA9IHByb21wdChcIkVudGVyIG5ldyBuYW1lIGZvciB0aGUgbm90ZWJvb2s6XCIsIG5ld05hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld05hbWUgJiYgbmV3TmFtZSAhPSBvbGROYW1lKSB7XG4gICAgICAgIG5vdGVib29rQ3VycmVudC50ZXh0Q29udGVudCA9IG5ld05hbWU7XG4gICAgICAgIG1hcC5zZXQobmV3TmFtZSwgbWFwLmdldChvbGROYW1lKSk7XG4gICAgICAgIG1hcC5kZWxldGUob2xkTmFtZSk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShtYXApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBtYXAgfSBmcm9tIFwiLi9jcmVhdGVOb3RlYm9va1wiO1xuaW1wb3J0IHsgbWFpbiwgdGFza0N1cnJlbnQgfSBmcm9tIFwiLi9saXN0ZW5lcnNUYXNrXCI7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnREYXRlKCkge1xuICBjb25zdCBkYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVRhc2tcIik7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbWluRGF0ZSA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICBkYXRlVGFzay5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgbWluRGF0ZSk7XG4gIGRhdGVUYXNrLnZhbHVlID0gbWluRGF0ZTtcbiAgcmV0dXJuIG1pbkRhdGU7XG59XG5cbi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC30LDQtNCw0YfQuCDQsiBNYXAg0Lgg0L/QvtC80LXRidC10L3QuNGPINC10LPQviDQvdCwINGB0YLRgNCw0L3QuNGG0YNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tOYW1lLCBkYXRlLCBkZXNjcmlwdGlvblRhc2ssIHRhc2tEb25lKSB7XG4gIGNvbnN0IGRhdGVSZWdleCA9IC9eXFxkezJ9XFwuXFxkezJ9XFwuXFxkezR9JC87XG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPVxuICAgIGRhdGUgJiYgZGF0ZVJlZ2V4LnRlc3QoZGF0ZSkgLy8g0JXRgdC70Lgg0LTQsNGC0LAg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0YTQvtGA0LzQsNGC0YMgeHgueHgueHh4eCwg0YLQviBmb3JtYXR0ZWREYXRlINGA0LDQstC90L4gZGF0ZVxuICAgICAgPyBkYXRlXG4gICAgICA6IGRhdGUgJiYgZGF0ZSAhPT0gXCJObyBkZWFkbGluZVwiIC8vINCV0YHQu9C4INC00LDRgtCwINGB0YPRidC10YHRgtCy0YPQtdGCINC4INC90LUg0YDQsNCy0L3QsCBcIk5vIGRlYWRsaW5lXCIsINGC0L4gZm9ybWF0dGVkRGF0ZSDQv9GA0LXQvtCx0YDQsNC30YPQtdGC0YHRjyDQsiDQu9C+0LrQsNC70YzQvdGL0Lkg0YTQvtGA0LzQsNGCXG4gICAgICA/IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcInJ1LVJVXCIsIHtcbiAgICAgICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgfSlcbiAgICAgIDogXCJObyBkZWFkbGluZVwiOyAvLyDQldGB0LvQuCDQtNCw0YLQsCDRgNCw0LLQvdCwIFwiTm8gZGVhZGxpbmVcIiwg0YLQviBmb3JtYXR0ZWREYXRlINGA0LDQstC90L4gXCJObyBkZWFkbGluZVwiXG4gIGFkZFRhc2tGcm9tRE9NKHRhc2tOYW1lLCBmb3JtYXR0ZWREYXRlKTtcblxuICBjb25zdCB0YXNrT2JqZWN0ID0ge1xuICAgIG5hbWU6IHRhc2tOYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblRhc2ssXG4gICAgZGVhZGxpbmU6IGZvcm1hdHRlZERhdGUsXG4gICAgZG9uZTogdGFza0RvbmUsXG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0ZWREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuICBjb25zdCBzZWxlY3RlZFRleHQgPSBzZWxlY3RlZERpdi5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICBwdXNoVGFza1RvTWFwKHRhc2tPYmplY3QsIHNlbGVjdGVkVGV4dCk7XG59XG5cbi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQt9Cw0LTQsNGHINCyIE1hcCDQuCBsb2NhbFN0b3JhZ2VcbmZ1bmN0aW9uIHB1c2hUYXNrVG9NYXAodGFzaywgbm90ZWJvb2spIHtcbiAgY29uc3Qgbm90ZWJvb2tGcm9tTWFwID0gbWFwLmdldChub3RlYm9vayk7XG4gIG5vdGVib29rRnJvbU1hcC5wdXNoKHRhc2spO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UobWFwKTtcbn1cblxuLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0LfQsNC00LDRh9C4INCyIERPTVxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tGcm9tRE9NKHRhc2ssIGRhdGUsIGRvbmUpIHtcbiAgY29uc3QgcmFkaW9CdXR0b24gPSBkb25lID8gXCJyYWRpb19idXR0b25fY2hlY2tlZFwiIDogXCJyYWRpb19idXR0b25fdW5jaGVja2VkXCI7XG4gIGNvbnN0IGRpdlRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBjb25zdCBlbGVtZW50cyA9IFtcbiAgICBbXCJzcGFuXCIsIFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiLCByYWRpb0J1dHRvbl0sXG4gICAgW1wiZGl2XCIsIFwiaW5Qcm9jZXNzXCIsIHRhc2tdLFxuICAgIFtcImRpdlwiLCBcImR1ZURhdGVcIiwgZGF0ZV0sXG4gICAgW1wic3BhblwiLCBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiwgXCJzdGF0X21pbnVzXzJcIl0sXG4gICAgW1wic3BhblwiLCBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiwgXCJtZW51XCJdLFxuICBdO1xuICBmb3IgKGNvbnN0IFt0YWcsIGNsYXNzTmFtZSwgdGV4dF0gb2YgZWxlbWVudHMpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGVsLnRleHRDb250ZW50ID09PSBcIm1lbnVcIiAmJlxuICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIilcbiAgICAgID8gZWwuY2xhc3NMaXN0LmFkZChcInRhc2tNZW51XCIpXG4gICAgICA6IGVsLnRleHRDb250ZW50ID09PSBcInN0YXRfbWludXNfMlwiICYmXG4gICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIilcbiAgICAgID8gZWwuY2xhc3NMaXN0LmFkZChcInNob3dEZXNjcmlwdGlvblwiKVxuICAgICAgOiBudWxsO1xuICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhcImluUHJvY2Vzc1wiKSAmJiBkb25lXG4gICAgICA/IGVsLmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1kb25lXCIpXG4gICAgICA6IG51bGw7XG4gICAgZGl2VGFzay5hcHBlbmQoZWwpO1xuICB9XG5cbiAgbGV0IHByZXZpb3VzVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaDFUYXNrXCIpO1xuICBjb25zdCB0YXNrQ29sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgcHJldmlvdXNUYXNrID1cbiAgICB0YXNrQ29sbC5sZW5ndGggPiAwID8gdGFza0NvbGxbdGFza0NvbGwubGVuZ3RoIC0gMV0gOiBwcmV2aW91c1Rhc2s7XG4gIHByZXZpb3VzVGFzay5hZnRlcihkaXZUYXNrKTtcbn1cblxuLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINGD0LTQsNC70LXQvdC40Y8g0Lgg0L/QtdGA0LXQuNC80LXQvdC+0LLQsNC90LjRjyDQt9Cw0LTQsNGHXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUmVuYW1lVGFzaygpIHtcbiAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQuaWQgPT09IFwidGFza0RlbGV0ZVwiKSB7XG4gICAgICBjb25zdCBub3RlYm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XG4gICAgICBjb25zdCB0YXNrcyA9IG1hcC5nZXQobm90ZWJvb2suZmlyc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICBjb25zdCBpbmRleCA9IHRhc2tzLmZpbmRJbmRleChcbiAgICAgICAgKGVsKSA9PiBlbC5uYW1lID09PSB0YXNrQ3VycmVudC50ZXh0Q29udGVudFxuICAgICAgKTtcbiAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UobWFwKTtcbiAgICAgIHRhc2tDdXJyZW50LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJ0YXNrUmVuYW1lXCIpIHtcbiAgICAgIGNvbnN0IG9sZE5hbWUgPSB0YXNrQ3VycmVudC50ZXh0Q29udGVudDtcbiAgICAgIGxldCBuZXdOYW1lID0gcHJvbXB0KFxuICAgICAgICBcIkVudGVyIG5ldyBuYW1lIGZvciB0aGUgbm90ZWJvb2s6XCIsXG4gICAgICAgIHRhc2tDdXJyZW50LnRleHRDb250ZW50XG4gICAgICApO1xuICAgICAgd2hpbGUgKG5ld05hbWUgJiYgbmV3TmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICBcIlRoZSBuYW1lIGlzIHRvbyBsb25nIG9yIHRoZSBzYW1lIGFzIGFub3RoZXIgbm90ZWJvb2suIE11c3QgYmUgbm8gbW9yZSB0aGFuIDQwIGNoYXJhY3RlcnMuXCJcbiAgICAgICAgKTtcbiAgICAgICAgbmV3TmFtZSA9IHByb21wdChcIkVudGVyIG5ldyBuYW1lIGZvciB0aGUgbm90ZWJvb2s6XCIsIG5ld05hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3TmFtZSkge1xuICAgICAgICB0YXNrQ3VycmVudC50ZXh0Q29udGVudCA9IG5ld05hbWU7XG5cbiAgICAgICAgY29uc3Qgbm90ZWJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICBjb25zdCB0YXNrcyA9IG1hcC5nZXQobm90ZWJvb2suZmlyc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFza3MuZmluZEluZGV4KChlbCkgPT4gZWwubmFtZSA9PT0gb2xkTmFtZSk7XG4gICAgICAgIHRhc2tzW2luZGV4XS5uYW1lID0gdGFza0N1cnJlbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShtYXApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC4INC90LDRgdGC0YDQvtC50LrQuCDRjdC70LXQvNC10L3RgtCwIGlucHV0XG5mdW5jdGlvbiBjcmVhdGVJbnB1dChlbGVtZW50KSB7XG4gIGNvbnN0IGNoYW5nZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgbWluRGF0ZSA9IGN1cnJlbnREYXRlKCk7XG4gIGNoYW5nZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgY2hhbmdlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCBtaW5EYXRlKTtcbiAgY2hhbmdlRGF0ZUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGhpcmQtY29sb3ItY29sb3IpXCI7XG4gIGVsZW1lbnQuYWZ0ZXIoY2hhbmdlRGF0ZUlucHV0KTtcbiAgcmV0dXJuIGNoYW5nZURhdGVJbnB1dDtcbn1cblxuLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC+0LHQvdC+0LLQu9C10L3QuNGPINC00LDQvdC90YvRhSDQsiBtYXAg0LggbG9jYWxTdG9yYWdlINC00LvRjyDQtNCw0YLRiyDQt9Cw0LTQsNGH0LhcbmZ1bmN0aW9uIHVwZGF0ZURhdGEoZWxlbWVudCkge1xuICBjb25zdCB0YXNrTmFtZSA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgY29uc3Qgbm90ZWJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuICBjb25zdCB0YXNrcyA9IG1hcC5nZXQobm90ZWJvb2suZmlyc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gIGNvbnN0IGluZGV4ID0gdGFza3MuZmluZEluZGV4KChlbCkgPT4gZWwubmFtZSA9PT0gdGFza05hbWUpO1xuICB0YXNrc1tpbmRleF0uZGVhZGxpbmUgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXG4gIGNvbnNvbGUubG9nKGDQvdC+0LLQvtC1INCy0YDQtdC80Y8gJHtlbGVtZW50LnRleHRDb250ZW50fWApO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UobWFwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURhdGUoKSB7XG4gIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImR1ZURhdGVcIikpIHtcbiAgICAgIGNvbnN0IGNoYW5nZURhdGVJbnB1dCA9IGNyZWF0ZUlucHV0KGVsZW1lbnQpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgY2hhbmdlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgY2hhbmdlRGF0ZUlucHV0LnZhbHVlXG4gICAgICAgICkudG9Mb2NhbGVEYXRlU3RyaW5nKFwicnUtUlVcIiwge1xuICAgICAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZERhdGU7XG4gICAgICAgIGNoYW5nZURhdGVJbnB1dC5yZW1vdmUoKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB1cGRhdGVEYXRhKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7IGFzaWRlLCBtYXAgfSBmcm9tIFwiLi9jcmVhdGVOb3RlYm9va1wiO1xuaW1wb3J0IHsgYWRkVGFza0Zyb21ET00gfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrRm9ybSB9IGZyb20gXCIuL2xpc3RlbmVyc1Rhc2tcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tEaXZcIik7XG5cbi8vINCe0L/RgNC10LTQtdC70LjRgtGMINC60LDQutC+0Lkg0LHQu9C+0LrQvdC+0YIg0LLRi9Cx0YDQsNC9LCDQv9C+0LrQsNC30LDRgtGMINC30LDQtNCw0YfQuCDQuNC3INCx0LvQvtC60L3QvtGC0LBcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3ROb3RlcGFkKCkge1xuICBhc2lkZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdGVib29rXCIpXG4gICAgICA/IGVsZW1lbnRcbiAgICAgIDogZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RlYm9va05hbWVcIilcbiAgICAgID8gZWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICA6IG51bGw7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IG5vdGVib29rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90ZWJvb2tcIik7XG4gICAgICBmb3IgKGNvbnN0IGRpdiBvZiBub3RlYm9va3MpIHtcbiAgICAgICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBkZWxldGVUYXNrc0Zyb21Eb20oKTtcbiAgICAgIHNob3dUYXNrc0luRG9tKCk7XG4gICAgICBoaWRkZW5BZGRUYXNrQnV0dG9uKCk7XG4gICAgICBjcmVhdGVUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5BZGRUYXNrQnV0dG9uKCkge1xuICBhZGRUYXNrRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbi8vINCe0YLQvtCx0YDQsNC30LjRgtGMINC30LDQtNCw0YfQuCDQsiDQstGL0LHRgNCw0L3QvdC+0Lwg0LHQu9C+0LrQvdC+0YLQtVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrc0luRG9tKCkge1xuICBjb25zdCBub3RlYm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XG4gIGNvbnN0IHRhc2tzID0gbWFwLmdldChub3RlYm9vay5maXJzdENoaWxkLnRleHRDb250ZW50KTtcbiAgdGFza3MuZm9yRWFjaCgoZWwpID0+IGFkZFRhc2tGcm9tRE9NKGVsLm5hbWUsIGVsLmRlYWRsaW5lLCBlbC5kb25lKSk7XG59XG5cbi8vINCe0YfQuNGB0YLQuNGC0Ywg0L/QvtC70LUg0L7RgiDQt9Cw0LTQsNGHXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza3NGcm9tRG9tKCkge1xuICBjb25zdCB0YXNrc0luRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25EaXZcIik7XG4gIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrc0luRG9tKSB7XG4gICAgdGFzay5yZW1vdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlTm90ZWJvb2sgfSBmcm9tIFwiLi9jcmVhdGVOb3RlYm9vay5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0ZW5lcnNOb3RlYm9vaygpIHtcbiAgc3RhcnRMaXN0ZW5lckFkZE5vdGVib29rTWVudSgpO1xuICBzdGFydExpc3RlbmVyc05vdGVib29rQnV0dG9uQWRkKCk7XG4gIHN0YXJ0TGlzdGVuZXJzTm90ZWJvb2tCdXR0b25DYW5jZWwoKTtcbiAgZHJvcERvd25Ob3RlYm9vaygpO1xufVxuXG5jb25zdCBjcmVhdGVOb3RlYm9va0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZU5vdGVib29rRm9ybVwiKTtcbmNvbnN0IGFkZE5hbWVOb3RlYm9vayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTmFtZU5vdGVib29rXCIpO1xuXG4vLyDQn9GA0L7QstC10YDQutCwINGH0YLQviDQstGB0LUg0LHQu9C+0LrQvdC+0YLRiyDRg9C90LjQutCw0LvRjNC90YvQtVxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZU5vdGVib29rKG5hbWUpIHtcbiAgY29uc3QgYWxsTm90ZWJvb2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5vdGVib29rTmFtZVwiKTtcbiAgZm9yIChjb25zdCBub3RlYm9vayBvZiBhbGxOb3RlYm9va3MpIHtcbiAgICBpZiAobm90ZWJvb2sudGV4dENvbnRlbnQgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8g0J/RgNC+0YHQu9GD0YjQutCwIFwiQWRkIG5vdGVib29rXCIg0LTQu9GPINC+0YLQutGA0YvRgtC40Y8g0L7QutC90LAg0YHQvtC30LTQsNC90LjRjyDQsdC70L7QutC90L7RgtCwXG5mdW5jdGlvbiBzdGFydExpc3RlbmVyQWRkTm90ZWJvb2tNZW51KCkge1xuICBjb25zdCBhZGROb3RlYm9va0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTm90ZWJvb2tEaXZcIik7XG4gIGFkZE5vdGVib29rRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlTm90ZWJvb2tGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKVxuICAgICAgPyBjcmVhdGVOb3RlYm9va0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgICAgOiBudWxsO1xuICB9KTtcbn1cblxuLy8g0J/RgNC+0YHQu9GD0YjQutCwIFwiQWRkXCIg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINCx0LvQvtC60L3QvtGC0LBcbmZ1bmN0aW9uIHN0YXJ0TGlzdGVuZXJzTm90ZWJvb2tCdXR0b25BZGQoKSB7XG4gIGNvbnN0IGFkZE5vdGVib29rQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGROb3RlYm9va0J1dHRvblwiKTtcbiAgYWRkTm90ZWJvb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoYWRkTmFtZU5vdGVib29rLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIk5vdGVib29rIG5hbWUgbm90IGVudGVyZWRcIik7XG4gICAgfSBlbHNlIGlmICghdW5pcXVlTm90ZWJvb2soYWRkTmFtZU5vdGVib29rLnZhbHVlLnRyaW0oKSkpIHtcbiAgICAgIGFsZXJ0KFwiVGhlcmUgaXMgYWxyZWFkeSBhIG5vdGVwYWQgd2l0aCB0aGUgc2FtZSBuYW1lXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVOb3RlYm9vayhhZGROYW1lTm90ZWJvb2sudmFsdWUudHJpbSgpKTtcbiAgICAgIGNyZWF0ZU5vdGVib29rRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgY2xlYXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGFkZE5hbWVOb3RlYm9vay5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGFkZE5vdGVib29rQnV0dG9uLmNsaWNrKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8g0J/RgNC+0YHQu9GD0YjQutCwIFwiQ2FuY2VsXCIg0LTQu9GPINC+0YLQvNC10L3RiyDQstCy0L7QtNCwINC90LDQt9Cy0LDQvdC40Y8g0LHQu9C+0LrQvdC+0YLQsFxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5lcnNOb3RlYm9va0J1dHRvbkNhbmNlbCgpIHtcbiAgY29uc3QgY2FuY2VsTm90ZWJvb2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbE5vdGVib29rQnV0dG9uXCIpO1xuICBjYW5jZWxOb3RlYm9va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNyZWF0ZU5vdGVib29rRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGNsZWFyKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgYWRkTmFtZU5vdGVib29rLnZhbHVlID0gXCJcIjtcbn1cblxuLy8g0J7RgtC60YDRi9GC0LjQtSDQstGL0L/QsNC00LDRjtGJ0LXQs9C+INGB0L/QuNGB0LrQsCDQtNC70Y8g0LHQu9C+0LrQvdC+0YLQvtCyXG5jb25zdCBub3RlYm9va09wdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZWJvb2tPcHRpb25cIik7XG5leHBvcnQgbGV0IG5vdGVib29rQ3VycmVudDtcbmxldCBlbGVtZW50O1xuXG5mdW5jdGlvbiBkcm9wRG93bk5vdGVib29rKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdGVib29rTWVudVwiKSkge1xuICAgICAgcG9zaXRpb25NZW51KCk7XG4gICAgICBub3RlYm9va0N1cnJlbnQgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICBub3RlYm9va09wdGlvbi5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgbm90ZWJvb2tPcHRpb24uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gICAgfSBlbHNlIGlmIChub3RlYm9va09wdGlvbi5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgIG5vdGVib29rT3B0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGlmIChub3RlYm9va09wdGlvbi5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICBwb3NpdGlvbk1lbnUoKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTWVudSgpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBub3RlYm9va09wdGlvbi5zdHlsZS5sZWZ0ID0gY29vcmRpbmF0ZXMubGVmdCArIFwicHhcIjtcbiAgbm90ZWJvb2tPcHRpb24uc3R5bGUudG9wID0gY29vcmRpbmF0ZXMudG9wICsgXCJweFwiO1xuICBub3RlYm9va09wdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtOTAlLCAtOTAlKVwiO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCIuL2NyZWF0ZU5vdGVib29rLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbmVyc1Rhc2soKSB7XG4gIHN0YXJ0TGlzdGVuZXJBZGRUYXNrTWVudSgpO1xuICBzdGFydExpc3RlbmVyc1Rhc2tCdXR0b25DYW5jZWwoKTtcbiAgc3RhcnRMaXN0ZW5lckNoZWNrVGFzaygpO1xuICBzdGFydExpc3RlbmVyc1Rhc2tCdXR0b25BZGQoKTtcbiAgc3RhcnRMaXN0ZW5lclNob3dEZXNjcmlwdGlvbigpO1xuICBkcm9wRG93blRhc2soKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUYXNrRm9ybVwiKTtcbmNvbnN0IGFkZE5hbWVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGROYW1lVGFza1wiKTtcbmNvbnN0IGFkZERlc2NyaXB0aW9uVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRGVzY3JpcHRpb25UYXNrXCIpO1xuZXhwb3J0IGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuLy8g0J7RgtC60YDRi9GC0LjQtSDQstGL0L/QsNC00LDRjtGJ0LXQs9C+INGB0L/QuNGB0LrQsCDQtNC70Y8g0LHQu9C+0LrQvdC+0YLQvtCyXG5jb25zdCB0YXNrT3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrT3B0aW9uXCIpO1xuZXhwb3J0IGxldCB0YXNrQ3VycmVudDtcbmxldCBlbGVtZW50O1xuXG5mdW5jdGlvbiBkcm9wRG93blRhc2soKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrTWVudVwiKSkge1xuICAgICAgcG9zaXRpb25NZW51KCk7XG4gICAgICB0YXNrQ3VycmVudCA9XG4gICAgICAgIGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB0YXNrT3B0aW9uLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICB0YXNrT3B0aW9uLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIiA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgIH0gZWxzZSBpZiAodGFza09wdGlvbi5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgIHRhc2tPcHRpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgaWYgKHRhc2tPcHRpb24uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgcG9zaXRpb25NZW51KCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwb3NpdGlvbk1lbnUoKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdGFza09wdGlvbi5zdHlsZS5sZWZ0ID0gY29vcmRpbmF0ZXMubGVmdCArIFwicHhcIjtcbiAgdGFza09wdGlvbi5zdHlsZS50b3AgPSBjb29yZGluYXRlcy50b3AgKyBcInB4XCI7XG4gIHRhc2tPcHRpb24uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTkwJSwgLTkwJSlcIjtcbn1cblxuLy8g0J/RgNC+0YHQu9GD0YjQutCwIFwiQWRkIFRhc2tcIiDQtNC70Y8g0L7RgtC60YDRi9GC0LjRjyDQvtC60L3QsCDRgdC+0LfQtNCw0L3QuNGPINC30LDQtNCw0YfQuFxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5lckFkZFRhc2tNZW51KCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRGl2XCIpO1xuICBhZGRUYXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlVGFza0Zvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpXG4gICAgICA/IGNyZWF0ZVRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgIDogbnVsbDtcbiAgfSk7XG59XG5cbi8vINCf0YDQvtGB0LvRg9GI0LrQsCBcIkFkZFwiINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQt9Cw0LTQsNGH0LhcbmZ1bmN0aW9uIHN0YXJ0TGlzdGVuZXJzVGFza0J1dHRvbkFkZCgpIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0J1dHRvblwiKTtcbiAgY29uc3QgZGF0ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVUYXNrXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvblRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZERlc2NyaXB0aW9uVGFza1wiKTtcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChhZGROYW1lVGFzay52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJUYXNrIG5hbWUgbm90IGVudGVyZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVRhc2soXG4gICAgICAgIGFkZE5hbWVUYXNrLnZhbHVlLnRyaW0oKSxcbiAgICAgICAgZGF0ZVRhc2sudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uVGFzay52YWx1ZSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRlVGFzay52YWx1ZSk7XG4gICAgICBjcmVhdGVUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgY2xlYXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGFkZE5hbWVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgYWRkVGFza0J1dHRvbi5jbGljaygpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vINCf0YDQvtGB0LvRg9GI0LrQsCBcIkNhbmNlbFwiINC00LvRjyDQvtGC0LzQtdC90Ysg0LLQstC+0LTQsCDQvdCw0LfQstCw0L3QuNGPINC30LDQtNCw0YfQuFxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5lcnNUYXNrQnV0dG9uQ2FuY2VsKCkge1xuICBjb25zdCBjYW5jZWxUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxUYXNrQnV0dG9uXCIpO1xuICBjYW5jZWxUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlVGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBjbGVhcigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGFkZE5hbWVUYXNrLnZhbHVlID0gXCJcIjtcbiAgYWRkRGVzY3JpcHRpb25UYXNrLnZhbHVlID0gXCJcIjtcbn1cblxuLy8g0J/RgNC+0YHQu9GD0YjQutCwINC30L3QsNGH0LrQsCDQstGL0L/QvtC70L3QtdC90LjRjyDQt9Cw0LTQsNGH0LhcbmZ1bmN0aW9uIHN0YXJ0TGlzdGVuZXJDaGVja1Rhc2soKSB7XG4gIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHNlbGVjdGVkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcbiAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gXCJyYWRpb19idXR0b25fdW5jaGVja2VkXCIpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcInJhZGlvX2J1dHRvbl9jaGVja2VkXCI7XG4gICAgICBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtZG9uZVwiKTtcbiAgICAgIGlmIChzZWxlY3RlZERpdikge1xuICAgICAgICBjb25zdCBub3RlYm9vayA9IG1hcC5nZXQoc2VsZWN0ZWREaXYuZmlyc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICAgIG5vdGVib29rLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgaWYgKGVsLm5hbWUgPT0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgIGVsLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKG1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09IFwicmFkaW9fYnV0dG9uX2NoZWNrZWRcIikge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFwiO1xuICAgICAgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrYm94LWRvbmVcIik7XG4gICAgICBjb25zdCBub3RlYm9vayA9IG1hcC5nZXQoc2VsZWN0ZWREaXYuZmlyc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICBub3RlYm9vay5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwubmFtZSA9PSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCkge1xuICAgICAgICAgIGVsLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UobWFwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8g0J/QvtC40YHQuiDQuCDQvtCx0L3QvtCy0LvQtdC90LjQtSDQt9Cw0LTQsNGH0LhcbmZ1bmN0aW9uIGZpbmRBbmRVcGRhdGVUYXNrKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IG5vdGVib29rRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcbiAgY29uc3QgdGFza3MgPSBtYXAuZ2V0KG5vdGVib29rRGl2LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICBjb25zdCB0YXNrID0gdGFza3MuZmluZCgoZWwpID0+IGVsLm5hbWUgPT09IG5hbWUpO1xuICBpZiAodGFzaykge1xuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxufVxuXG4vLyDQn9C+0LrQsNC3INC4INGB0LrRgNGL0YLQuNC1INC+0L/QuNGB0LDQvdC40Y8g0LfQsNC00LDRh9C4LCDQvtCx0L3QvtCy0LvQtdC90LjQtSDQvtC/0LjRgdCw0L3QuNGPXG5mdW5jdGlvbiBzaG93T3JIaWRlRGVzY3JpcHRpb24oZWxlbWVudCkge1xuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25EaXZcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3Qgbm90ZWJvb2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuICBjb25zdCB0YXNrcyA9IG1hcC5nZXQobm90ZWJvb2tEaXYuZmlyc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gIGNvbnN0IHRhc2sgPSB0YXNrcy5maWx0ZXIoXG4gICAgKGVsKSA9PlxuICAgICAgZWwubmFtZSA9PT0gZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuaW5Qcm9jZXNzXCIpLnRleHRDb250ZW50XG4gIClbMF07XG4gIGlmICh0YXNrKSB7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZWxlbWVudC5wYXJlbnROb2RlLmFmdGVyKGRlc2NyaXB0aW9uRGl2KTtcbiAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5lclNob3dEZXNjcmlwdGlvbigpIHtcbiAgbGV0IGN1cnJlbnRUYXNrO1xuICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBpZiAoZWxlbWVudCA9PT0gbWFpbikge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbkRpdlwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNob3dEZXNjcmlwdGlvblwiKSkge1xuICAgICAgY3VycmVudFRhc2sgPSBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5pblByb2Nlc3NcIikudGV4dENvbnRlbnQ7XG4gICAgICBzaG93T3JIaWRlRGVzY3JpcHRpb24oZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbiAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBmaW5kQW5kVXBkYXRlVGFzayhjdXJyZW50VGFzaywgZGVzY3JpcHRpb24udmFsdWUpO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShtYXApO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IG1hcCwgY3JlYXRlTm90ZWJvb2sgfSBmcm9tIFwiLi9jcmVhdGVOb3RlYm9va1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCB7IG1haW4gfSBmcm9tIFwiLi9saXN0ZW5lcnNUYXNrXCI7XG5pbXBvcnQgeyBhZGRUYXNrRGl2IH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbi8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC00LDQvdC90YvRhSDQsiBsb2NhbFN0b3JhZ2VcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoY3VycmVudE1hcCkge1xuICBjb25zdCBub3Rlc0pTT04gPSBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGN1cnJlbnRNYXApKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJub3Rlc1wiLCBub3Rlc0pTT04pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICBjb25zdCBsb2NhbEpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVzXCIpO1xuICBjb25zdCBsb2NhbCA9IEpTT04ucGFyc2UobG9jYWxKc29uKTtcbiAgaWYgKGxvY2FsKSB7XG4gICAgdXBkYXRlTWFwKGxvY2FsKTtcbiAgfVxufVxuXG4vLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L7QsdC90L7QstC70LXQvdC40Y8g0LTQsNC90L3Ri9GFINCyIG1hcFxuZnVuY3Rpb24gdXBkYXRlTWFwKGxvY2FsKSB7XG4gIGZvciAoY29uc3QgW25vdGVib29rLCB0YXNrc0luTG9jYWxdIG9mIGxvY2FsKSB7XG4gICAgbWFwLnNldChub3RlYm9vaywgdGFza3NJbkxvY2FsKTtcbiAgICBjcmVhdGVOb3RlYm9vayhub3RlYm9vayk7XG4gICAgdGFza3NJbkxvY2FsLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjcmVhdGVUYXNrKGVsLm5hbWUsIGVsLmRlYWRsaW5lLCBlbC5kZXNjcmlwdGlvbiwgZWwuZG9uZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuICBpZiAoc2VsZWN0ZWRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICBjbGVhclNlbGVjdGVkKCk7XG4gIH1cbn1cblxuLy8g0J7Rh9C40YHRgtC60LAg0L/QvtC70Y8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L/RgNC4INC30LDQv9GD0YHQutC1INCx0LvQvtC60L3QvtGC0LBcbmZ1bmN0aW9uIGNsZWFyU2VsZWN0ZWQoKSB7XG4gIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgY29uc3QgdGFza3MgPSBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2sucmVtb3ZlKCk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNlbGVjdE5vdGVwYWQgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCBsaXN0ZW5lcnNOb3RlYm9vayBmcm9tIFwiLi9saXN0ZW5lcnNOb3RlYm9va1wiO1xuaW1wb3J0IHsgZGVsZXRlUmVuYW1lTm90ZWJvb2sgfSBmcm9tIFwiLi9jcmVhdGVOb3RlYm9va1wiO1xuaW1wb3J0IHsgY3VycmVudERhdGUsIGRlbGV0ZVJlbmFtZVRhc2ssIGNoYW5nZURhdGUgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgeyBsaXN0ZW5lcnNUYXNrIH0gZnJvbSBcIi4vbGlzdGVuZXJzVGFza1wiO1xuaW1wb3J0IHsgZG93bmxvYWRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQge1xuICBzd2l0Y2hMaXNuZXRlcixcbiAgY2hlY2tTdGF0dXNEYXJrVGhlbWUsXG4gIHRvZ2dsZUxpc3RlbmVyLFxufSBmcm9tIFwiLi9idXR0b25zSGVhZGVyXCI7XG5cbi8vINCh0YLQsNGA0YIg0L/RgNC+0YHQu9GD0YjQuNCy0LDRgtC10LvQtVxuZG93bmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XG5saXN0ZW5lcnNOb3RlYm9vaygpO1xuZGVsZXRlUmVuYW1lTm90ZWJvb2soKTtcbmN1cnJlbnREYXRlKCk7XG5saXN0ZW5lcnNUYXNrKCk7XG5zZWxlY3ROb3RlcGFkKCk7XG5kZWxldGVSZW5hbWVUYXNrKCk7XG5jaGFuZ2VEYXRlKCk7XG5zd2l0Y2hMaXNuZXRlcigpO1xuY2hlY2tTdGF0dXNEYXJrVGhlbWUoKTtcbnRvZ2dsZUxpc3RlbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=