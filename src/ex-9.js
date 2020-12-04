import { log, askFor } from "./render";

/**
 * 1. Даны длины трёх сторон треугольника.
 * Определить, является ли треугольник прямоугольным.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean}
 */
export function isRightTriagle(a, b, c) {
  function sortDescending(i, j) {
    return j - i;
  }

  const arr = [a, b, c].sort(sortDescending); // or arguments array, but eslint'll show an error

  return arr[0] === arr[1] ** 2 + arr[2] ** 2;
}

/**
 * 2. Пользователь вводит число R.
 * Написать программу, которая выведет в консоль
 * длину окружности и площадь круга с радиусом R.
 *
 * @param {number} r Радиус круга
 * @return {{c: number, s: number}} Длина окружности и площадь
 */
export function getParamsOfCircle(r) {
  return {
    c: 2 * Math.PI * r,
    s: Math.PI * r ** 2,
  };
}

const radius = askFor("Type R");
const circleParams = getParamsOfCircle(radius);
log(`Длина окружности: ${circleParams.c}, площадь: ${circleParams.s}`);

/**
 * Пользователь вводит числа a, b и c.
 * Написать программу, выводящую корни квадратного уравнения
 * с коэффициентами a, b и c.
 */

/**
 * Выводит корни квадратного уравнения
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {mixed}
 */
export function getRootOfQuadraticEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return null;
  }

  if (d === 0) {
    return (-b / 2) * a;
  }

  return {
    x1: ((-b + Math.sqrt(d)) / 2) * a,
    x2: ((-b - Math.sqrt(d)) / 2) * a,
  };
}
