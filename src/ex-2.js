import { log } from "./render";

import {
  TypeException,
  RangeException,
  NumOfVariablesException,
} from "./exceptions";

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
  if (arguments.length !== 2) {
    throw new NumOfVariablesException();
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeException("number");
  }

  return a > b ? a : b;
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
 * @param {number} number
 * @return {string}
 */
export function getMonthText(mNum) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (typeof mNum !== "number") {
    throw new TypeException("number");
  }
  if (mNum < 1 || mNum > 12) {
    throw new RangeException();
  }

  const namesArr = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  return namesArr[mNum];
}

// другой - более длинный вариант решения
export function getMonthText2(mNum) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (typeof mNum !== "number") {
    throw new TypeException("number");
  }

  let mName;

  switch (mNum) {
    case 1:
      mName = "январь";
      break;
    case 2:
      mName = "февраль";
      break;
    case 3:
      mName = "март";
      break;
    case 4:
      mName = "апрель";
      break;
    case 5:
      mName = "май";
      break;
    case 6:
      mName = "июнь";
      break;
    case 7:
      mName = "июль";
      break;
    case 8:
      mName = "август";
      break;
    case 9:
      mName = "сентябрь";
      break;
    case 10:
      mName = "октябрь";
      break;
    case 11:
      mName = "ноябрь";
      break;
    case 12:
      mName = "декабрь";
      break;
    default:
      throw new RangeException();
  }
  return mName;
}

const monthNumber = 7;
log(`${monthNumber} – ${getMonthText(monthNumber)}`);
// log(`${monthNumber} – ${getMonthText2(monthNumber)}`);

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
  if (arguments.length !== 2) {
    throw new NumOfVariablesException();
  }
  if (typeof circle !== "number" || typeof square !== "number") {
    throw new TypeException("number");
  }

  // D = 2 * √(S/Pi)
  const circleD = 2 * Math.sqrt(circle);

  // a = √S
  const squareA = Math.sqrt(square);

  return circleD > squareA;
}

const circle = 10;
const square = 20;
let fitStr;

if (isFitCircleToSquare(circle, square)) {
  fitStr = "сможет поместиться";
} else {
  fitStr = "не сможет поместится";
}

log(`Круг с площадью ${circle} ${fitStr} в квадрат с площадью ${square}`);
