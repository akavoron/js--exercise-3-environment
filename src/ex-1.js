import {
  TypeException,
  ParamLengthException,
  NumOfVariablesException,
} from "./exceptions.js";

/**
 * Произведение двух чисел
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function mul(a, b) {
  if (arguments.length !== 2) {
    throw new NumOfVariablesException();
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeException("number");
  }

  return a * b;
}

/**
 * Сумма двух чисел
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function sum(a, b) {
  if (arguments.length !== 2) {
    throw new NumOfVariablesException();
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeException("number");
  }

  return a + b;
}

/**
 * Суммарное количество символов в 2 строках
 *
 * @param {string} firstString
 * @param {string} secondString
 * @return {number}
 */
export function getStringsLength(firstString, secondString) {
  if (arguments.length !== 2) {
    throw new NumOfVariablesException();
  }
  if (typeof firstString !== "string" || typeof secondString !== "string") {
    throw new TypeException("string");
  }

  return firstString.length + secondString.length;
}

/**
 * Сумма всех цифр в числе
 *
 * @param {number} number
 * @return {number}
 */
export function getSumOfInlineDigits(number) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (typeof number !== "number") {
    throw new TypeException("number");
  }
  if (String(number).length !== 3) {
    throw new ParamLengthException();
  }

  let accumulator = 0;
  const numString = String(number);

  for (let i = 0; i < numString.length; i++) {
    accumulator += Number(numString[i]);
  }

  return accumulator;
}
