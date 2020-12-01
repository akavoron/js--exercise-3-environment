import {log, askFor} from './render';
import {
    TypeException, 
    NumOfVariablesException
} from './exceptions';

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

const contEl = document.querySelector('.content');
const formEl = document.querySelector('form');
const inpTextEl = document.querySelector('input[type=text]');
const btnEl = document.querySelector('button');

/**
 * Adds new paragraph
 * 
 * @return {undefined}
 */
export function addNewParagraph(text) {
    const newP = document.createElement('p');
    newP.innerText = text;
    contEl.appendChild(newP);
}

/**
 * Clear unnecessary paragraphs
 * 
 * @return {undefined}
 */
export function clearUnnecessaryPar(num = 5) {
    if (document.querySelectorAll('.content p') > num) {
        document.querySelectorAll('.content p:last-child').remove();
    }
}

/**
 * Initialization
 * 
 * @return {undefined}
 */
export function init() {
    formEl.addEventListener('submit', () => {
        addNewParagraph(inpTextEl.value);
        clearUnnecessaryPar(5);

        inpTextEl.value = '';
        btnEl.hidden = true;
    });

    inpTextEl.addEventListener('change', () => {
        btnEl.hidden = inpTextEl.value !== '';
    });
}




