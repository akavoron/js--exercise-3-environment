import { TypeException, NumOfVariablesException } from "./exceptions.js";

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
   */
  this.setAge = function setAge(newAge) {
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
   */
  this.setRole = function setRole(newRole) {
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
