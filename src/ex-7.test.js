import {
    diff, 
    isWord, 
    pow
} from './ex-6';

import {TypeException, NumOfVariablesException} from './exceptions';

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
const parEls = document.querySelectorAll('.content p');
const formEl = document.querySelector('form');
const inpTextEl = document.querySelector('input[type=text]');
const btnEl = document.querySelector('button');

describe('On the page', () => {
    it('we have all necessary elements', () => {
        expect(!!(contEl.length)).toBe(true);
        expect(!!(formEl.length)).toBe(true);
        expect(!!(inpTextEl.length)).toBe(true);
        expect(!!(btnEl.length) ).toBe(true);
    });
    it('the input text is hidden by default', () => {
        expect( btnEl.hidden ).toBe(true);
    });
    it('we have three paragraphs', () => {
        expect( parEls.length ).toBe(3);
    });
    it('the input[type=text] is empty', () => {
        expect( inpTextEl.value ).toBe('');
    });
});

describe('Function init', () => {
    it('attach a lintener on the form element', () => {
        expect(typeof formEl.onsubmit === 'function').toBe(true);
    });
});

describe('Function onChangeListener', () => {
    // событие запускается

    
});

describe('Function onFormSubmitListener', () => {
    // отправка формы происходит

    it('', () => {
        
    });
});

describe('Function addNewParagraph', () => {
    // новый параграф действительно добавляется
    // старый параграф действительно удаляется (если становится больше 5 шт.)

    it('', () => {
        
    });
});