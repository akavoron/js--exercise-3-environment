import { TypeException, NumOfVariablesException } from "./exceptions.js";

/**
 * Возвращает массив случайных целых чисел
 *
 * @param {number} min Минимальное число
 * @param {number} max Максимальное число
 * @param {number} count Количество чисел
 * @return {[]}
 */
export function createArray(min, max, count) {
  if (arguments.length !== 3) {
    throw new NumOfVariablesException();
  }
  if (
    typeof min !== "number" ||
    typeof max !== "number" ||
    typeof count !== "number"
  ) {
    throw new TypeException("number");
  }

  const arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(Math.round((max - min) * Math.random() + min));
  }
  return arr;
}

/**
 * Возвращает сумму всех чисел в числовом массиве
 *
 * @param {[]} arr
 * @return {number}
 */
export function getSumInsideArray(arr) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (!Array.isArray(arr)) {
    throw new TypeException("[]");
  }

  let accumulator = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new TypeException("[]");
    }

    accumulator += arr[i];
  }

  return accumulator;
}

/**
 * Увеличивает значения в числовом массиве в 2 раза
 *
 * @param {[]} oldArr
 * @return {[]}
 */
export function increaseArray2Times(oldArr) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (!Array.isArray(oldArr)) {
    throw new TypeException("[]");
  }

  const newArr = [];

  for (let i = 0; i < oldArr.length; i++) {
    if (typeof oldArr[i] !== "number") {
      throw new TypeException("[]");
    }

    newArr.push(oldArr[i] * 2);
  }

  return newArr;
}

/**
 * Возвращает наибольшее число в массиве
 *
 * @param {[]} arr
 * @return {number}
 */
export function getGreatest(arr) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (!Array.isArray(arr)) {
    throw new TypeException("[]");
  }

  let greatest;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new TypeException("[]");
    }
    if (typeof greatest === "undefined" || arr[i] > greatest) {
      greatest = arr[i];
    }
  }

  return greatest;
}

/**
 * Возвращает наименьшее число в массиве
 *
 * @param {[]} arr
 * @return {number}
 */
export function getSmallest(arr) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (!Array.isArray(arr)) {
    throw new TypeException("[]");
  }

  let smallest;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new TypeException("[]");
    }
    if (typeof smallest === "undefined" || arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}
