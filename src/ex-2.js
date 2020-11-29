import {log} from './render';
import {TypeException, RangeException} from './exceptions';

/**
 * 1. В переменных a и b хранятся числа.
 * Вывести в консоль наибольшее из них.
 */

/**
 * Получает большее из двух чисел
 * 
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function getBiggest(a, b) {

}

const a = 10;
const b = 22;
log(`Наибольшее число между ${a} и ${b} это ${getBiggest(a, b)}`);


/**
 * 2. Запросить у пользователя ввод числа от 1 до 12. 
 * Вывести в консоль название месяца, соответствующее 
 * этому числу (1 — январь, 2 — февраль и т.д.).
 */

/**
 * Выводит текстовое представление месяца
 * 
 * @param {number} monthNum
 * @return {string}
 */
export function getMonthText(monthNum) {

}

const monthNum = 7;
log(`${monthNum} – ${getMonthText(monthNum)}`);


/**
 * 3. В переменных circle и square хранятся 
 * площади круга и квадрата соответственно. 
 * Написать программу, которая определяет, 
 * поместится ли круг в квадрат.
 */

/**
 * Проверяет поместится ли круг в квадрат
 * 
 * @param {number} circle The area of a circle
 * @param {number} square The area of a square
 * @param {boolean}
 */
export function isFitCircleToSquare(circle, square) {
    /*
    Circle:
    D = 2 * √(S/Pi) 

    Square:
    a = √S
    */
    
}

const circle = 10;
const square = 20;
let fitStr;

if (isFitCircleToSquare(circle, square)) {
    fitStr = 'сможет поместиться';
} else {
    fitStr = 'не сможет поместится';
}

log(`Круг с площадью ${circle} ${fitStr} в квадрат с площадью ${square}`);
