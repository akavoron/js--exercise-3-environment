import { log, askFor } from "./render";
import { TypeException, NumOfVariablesException } from "./exceptions";

/**
 * Конструктор персоны
 *
 * @param {string} name
 * @param {number} age
 * @param {string} role
 */

export function Person(name, age, role) {
  if (
    (typeof name !== "string" && typeof name !== "undefined") ||
    (typeof age !== "number" && typeof age !== "undefined") ||
    (typeof role !== "string" && typeof role !== "undefined")
  ) {
    throw new TypeException();
  }

  this.name = name;
  this.age = age;
  this.role = role ?? "user";

  /**
   * Изменяет возраст пользователя
   *
   * @param {number} age
   * @return {object}
   */
  this.setAge = function (newAge) {
    if (arguments.length !== 1) {
      throw new NumOfVariablesException();
    }
    if (typeof newAge !== "number") {
      throw new TypeException("number");
    }
    this.age = newAge;
  };

  /**
   * Изменяет роль пользователя
   *
   * @param {string} role
   * @return {object}
   */
  this.setRole = function (newRole) {
    if (arguments.length !== 1) {
      throw new NumOfVariablesException();
    }
    if (typeof newRole !== "string") {
      throw new TypeException("string");
    }
    this.role = newRole;
  };
}

/**
 * Создайте объект user,
 * содержащий поле name
 * со значением ‘John’.
 */
const user = new Person("John");

/**
 * 1. Запросить у пользователя ввод числа.
 * Записать введенное значение в поле
 * age объекта user.
 */
const userAge = +askFor("Введите возраст пользователя");
user.setAge(userAge);

/**
 * 2. Создать копию объекта user с именем admin.
 * Добавить новому объекту поле role
 * со значением ‘admin’.
 */

/**
 * Создает копию пользователя
 *
 * @param {object} person
 * @return {object}
 */
export function copyPerson(person) {
  if (!(person instanceof Person)) {
    throw new TypeException();
  }

  return { ...person };
}

const admin = copyPerson(user);
admin.setRole("admin");

/**
 * 3. Записать все значения полей объекта admin
 * в отдельные переменные. Имена переменных
 * должны совпадать с названиями полей.
 */

const { name, age, role } = admin;
log(`Значения переменных: name=${name}, age=${age}, role=${role}`);
