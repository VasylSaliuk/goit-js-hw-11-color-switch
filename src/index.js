import css from "./css/styles.css";
import colors from "./js/colors";
import refs from "./js/refs";

const { bodyRef, startBtnRef, stopBtnRef } = refs;

// Вспомогательные переменные
let isActive = false;
let intervalId = null;

// Добавление слушателей события
startBtnRef.addEventListener("click", switchBodyColor);
stopBtnRef.addEventListener("click", stopSwitchBodyColor);

// Функции
// Функция для рандомизации
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// Функция, которая вызывает функцию смены цвета для body с интервалом
function switchBodyColor() {
  if (isActive) {
    return;
  }

  changeBodyColor(colors);
  intervalId = setInterval(changeBodyColor, 1000, colors);
  isActive = true;
  addDisabled(startBtnRef);
}

// Функция, которая очищает интервал
function stopSwitchBodyColor() {
  clearInterval(intervalId);
  isActive = false;
  removeDisabled(startBtnRef);
}

// Функция, которая меняет цвет body
function changeBodyColor(colorsArr) {
  bodyRef.style.backgroundColor =
    colorsArr[randomIntegerFromInterval(0, colorsArr.length - 1)];
}

// Функции для добавления и удаления атрибута disabled на элемент
function addDisabled(element) {
  element.setAttribute("disabled", "");
}

function removeDisabled(element) {
  element.removeAttribute("disabled");
}
