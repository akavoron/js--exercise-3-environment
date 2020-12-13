import {
  TypeException,
  RangeException,
  NumOfVariablesException,
} from "./exceptions.js";

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

  return namesArr[mNum - 1];
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
  const circleD = 2 * Math.sqrt(circle / Math.PI);

  // a = √S
  const squareA = Math.sqrt(square);

  return circleD <= squareA;
}
