import {log} from './render';

function User(name, age, role){
    this.name = name ?? undefined;
    this.age = age ?? undefined;
    this.role = role ?? 'user';
}

/**
 * Создайте объект user, 
 * содержащий поле name 
 * со значением ‘John’.
 * 
 * @return {{name: 'John'}}
 */
function createUser(name) {}

/**
 * 1. Запросить у пользователя ввод числа. 
 * Записать введенное значение в поле 
 * age объекта user.
 * 
 * @param {number} age
 * @param {object} user
 * @return {object} 
 */
function setAge(age, user) {}

/**
 * 2. Создать копию объекта user с именем admin. 
 * Добавить новому объекту поле role 
 * со значением ‘admin’.
 * 
 * @param {object} user
 * @return {object}
 */
function copyUser(user) {}

function setRole(role) {}

/**
 * 3. Записать все значения полей объекта admin 
 * в отдельные переменные. Имена переменных 
 * должны совпадать с названиями полей.
 * 
 * @param {object} user
 * @return {undefined}
 */
function copyToVariables(user) {}


