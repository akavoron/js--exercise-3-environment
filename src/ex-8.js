import { log, askFor } from "./render.js";
import {
  TypeException,
  NumOfVariablesException,
  ParamFormatException,
} from "./exceptions.js";

/**
 * Проверяет строку c датой на формат dd.mm.yyyy
 *
 * @param {string} dateString
 * @return {undefined}
 */

export function checkFormatDate(dateString) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (typeof dateString !== "string") {
    throw new TypeException("string");
  }

  const res = dateString.match(/([0-9]{2})\.([0-9]{2})\.([0-9]{4})/);

  if (
    !res ||
    res.length !== 4 ||
    res[1] < 1 ||
    res[1] > 31 ||
    res[2] < 1 ||
    res[2] > 12
  ) {
    throw new ParamFormatException();
  }
}

/**
 * Получает дату по строке
 *
 * @param {string} dateString
 * @return {object}
 */

export function getDateFromString(dateString) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (typeof dateString !== "string") {
    throw new TypeException("string");
  }

  checkFormatDate(dateString);

  const res = dateString.match(/([0-9]{2})\.([0-9]{2})\.([0-9]{4})/);
  return new Date(res[3], res[2] - 1, res[1]);
}

/**
 * Возвращает день недели по введенной дате.
 *
 * @param {string} dateString
 * @return {number} День недели (понедельник – 1, воскресение – 7)
 */
export function getDayOfWeek(dateString) {
  if (arguments.length !== 1) {
    throw new NumOfVariablesException();
  }
  if (typeof dateString !== "string") {
    throw new TypeException("string");
  }

  const day = getDateFromString(dateString).getDay();

  return day === 0 ? 7 : day;
}

/**
 * Запрашивает у пользователя дату и выводит по ней день недели
 * в виде строки.
 *
 * @return {number}
 */
export function getDayOfWeekMessage() {
  const userDate = askFor("Enter the date in the next format: DD.MM.YYYY");
  log(["пн", "вт", "ср", "чт", "пт", "сб", "вс"][getDayOfWeek(userDate) - 1]);
}

/**
 * 2. Написать программу, которая выводит в консоль
 * количество минут, прошедшее с начала сегодняшнего дня.
 *
 * @return {undefined}
 */
export function getMinutes() {
  const now = new Date();
  const startOfTheDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  return Math.round((now - startOfTheDay) / 1000 / 60);
}

/**
 * Выводит более позднюю дату
 *
 * @param {string} dateString1
 * @param {string} dateString2
 * @return {string}
 */
export function getLatest(dateString1, dateString2) {
  if (arguments.length !== 2) {
    throw new NumOfVariablesException();
  }
  if (typeof dateString1 !== "string" || typeof dateString2 !== "string") {
    throw new TypeException("string");
  }

  const date1 = getDateFromString(dateString1);
  const date2 = getDateFromString(dateString2);

  return date1 > date2 ? dateString1 : dateString2;
}
