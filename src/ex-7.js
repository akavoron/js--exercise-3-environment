import { TypeException, NumOfVariablesException } from "./exceptions";

/**
 * Сверстать страницу и подключить к ней файл со скриптом.
 *
 * На странице должны быть:
 * – три текстовых параграфа
 * – поле ввода
 * – кнопка
 *
 * Напишите скрипт, который будет выполнять следующие условия:
 * 1. Кнопка скрыта, если в поле ввода нет значения.
 *
 * 2. При клике на кнопку добавляется новый параграф,
 * содержащий текст из поля ввода.
 *
 * 3. Если параграфов становится больше 5,
 * первый из них удаляется.
 */

/**
 * Создает элементы на странице
 *
 * @return {undefined}
 */

export function createElements() {
  document.body.innerHTML = `
        <h1>Exercise 7</h1>
        <form action="">
            <input type="text" value="" placeholder="Type text here...">
            <button hidden>Add</button>
        </form>
        <div class="content">
            <p>Some text here</p>
            <p>Just another text</p>
            <p>Lorem Ipsum</p>
        </div>
    `;
}
createElements();

const contEl = document.querySelector(".content");
const formEl = document.querySelector("form");
const inpTextEl = document.querySelector("input[type=text]");
const btnEl = document.querySelector("button");

export const config = {
  num: 5,
};

/**
 * Adds new paragraph
 *
 * @return {undefined}
 */
export function addNewParagraph(text) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (typeof text !== "string") {
    throw new TypeException("string");
  }

  const newP = document.createElement("p");
  newP.innerText = text;
  contEl.appendChild(newP);
}

/**
 * Clear unnecessary paragraphs
 *
 * @return {undefined}
 */
export function clearUnnecessaryPar(num = 5) {
  if (typeof num !== "number") {
    throw new TypeException("number");
  }

  if (document.querySelectorAll(".content p").length > num) {
    document.querySelector(".content p").remove();
  }
}

/**
 * Initialization
 *
 * @return {undefined}
 */
export function init() {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    addNewParagraph(inpTextEl.value);
    clearUnnecessaryPar(config.num);

    inpTextEl.value = "";
    btnEl.hidden = true;
  });

  inpTextEl.addEventListener("keyup", () => {
    btnEl.hidden = inpTextEl.value === "";
  });
}

init();
