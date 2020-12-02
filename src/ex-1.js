import { log, askFor } from "./render";

import {
  TypeException,
  ParamLengthException,
  NumOfVariablesException,
} from "./exceptions";

/**
 * 1. В переменных a и b хранятся числа.
 * Написать программу, которая выводит
 * в консоль произведение и сумму этих
 * чисел.
 */

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

log(mul(2, 3));

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

log(sum(2, 3));

/**
 * 2. В двух переменных хранятся строки
 * символов. Написать программу, которая
 * выведет в консоль суммарное количество
 * символов в обоих строках.
 */

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

log(getStringsLength("some", "text here"));

/**
 * 3. Написать программу, которая запрашивает
 * у пользователя ввод трёхзначного числа
 * , а потом выводит в консоль сумму цифр
 * введённого числа.
 */

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

  for (let i = 0; i < number.length; i++) {
    accumulator += numString[i];
  }

  return accumulator;
}

const num = +askFor("Type a number with 3 digits:");
log(getSumOfInlineDigits(num));
