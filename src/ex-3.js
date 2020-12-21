import {
  TypeException,
  NumOfVariablesException,
  RangeException,
} from "./exceptions.js";

/**
 * Получает сумму всех целых чисел из диапазона
 *
 * @param {number} from
 * @param {number} to
 * @return {undefined}
 */
export function sumInRange(from, to) {
  if (arguments.length !== 2) {
    throw new NumOfVariablesException();
  }
  if (typeof from !== "number" || typeof to !== "number") {
    throw new TypeException("number");
  }

  let fromVariable;
  let toVariable;

  if (from > to) {
    fromVariable = to;
    toVariable = from;
  } else {
    fromVariable = from;
    toVariable = to;
  }

  let accumulator = 0;
  for (let i = fromVariable; i <= toVariable; i++) {
    accumulator += i;
  }
  return accumulator;
}

/**
 * Получает таблицу умножения на число
 *
 * @param {number} num
 * @return {array}
 */
export function getMultTable(num) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (typeof num !== "number") {
    throw new TypeException("number");
  }
  if (num < 1) {
    throw new RangeException();
  }

  const accumulator = [];

  for (let i = 1; i <= 9; i++) {
    accumulator.push(`${num} x ${i} = ${num * i}`);
  }

  return accumulator;
}

/**
 * Находит среднее арифметическое всех нечетных чисел в диапазоне
 *
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
export function averageOfOdd(from, to) {
  if (arguments.length !== 2) {
    throw new NumOfVariablesException();
  }
  if (typeof from !== "number" || typeof to !== "number") {
    throw new TypeException("number");
  }

  let fromVariable;
  let toVariable;

  if (from > to) {
    fromVariable = to;
    toVariable = from;
  } else {
    fromVariable = from;
    toVariable = to;
  }

  let accumulator = 0;
  let count = 0;

  for (let i = fromVariable; i <= toVariable; i++) {
    if (i % 2 !== 0) {
      accumulator += i;
      count += 1;
    }
  }

  return Number((accumulator / count).toFixed(3));
}
