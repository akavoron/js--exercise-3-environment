import { TypeException, NumOfVariablesException } from "./exceptions";

/**
 * 1. Напишите функцию diff,
 * которая получает в качестве параметров 2 числа
 * и возвращает разницу между наибольшим и наименьшим.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function diff(a, b) {
  if (arguments.length !== 2) {
    throw new NumOfVariablesException();
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeException("number");
  }

  return a > b ? a - b : b - a;
}

/**
 * 2. Напишите функцию isWord,
 * которая принимает на вход текстовую строку.
 * Функция возвращает true, если строка состоит из одного слова
 * и false, если из нескольких.
 *
 * @param {string} string
 * @return {boolean}
 */
export function isWord(string) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (typeof string !== "string") {
    throw new TypeException("string");
  }

  return string.trim().split(" ") === 1;
}

/**
 * 3. Напишите функцию pow(a, x),
 * которая вернёт значение числа a, возведённого в степень x.
 *
 * @param {number} a
 * @param {number} x
 * @return {number}
 */
export function pow(a, x) {
  if (arguments.length !== 2) {
    throw new NumOfVariablesException();
  }
  if (typeof a !== "number" || typeof x !== "number") {
    throw new TypeException("number");
  }

  return a ** x;
}
