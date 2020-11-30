import {log} from './render';

/**
 * Конструктор персоны
 * 
 * @param {string} name 
 * @param {number} age 
 * @param {string} role
 */

export function Person(name, age, role){
    this.name = name ?? undefined;
    this.age = age ?? undefined;
    this.role = role ?? 'user';

    /**
     * Изменяет возраст пользователя
     * 
     * @param {number} age
     * @return {object} 
     */
    this.setAge = function(age) {}

    /** 
     * Изменяет роль пользователя
     * 
     * @param {string} role
     * @return {object}
     */
    this.setRole = function(role) {}
}

/**
 * Создайте объект user, 
 * содержащий поле name 
 * со значением ‘John’.
 */
const user = new Person('John');

/**
 * 1. Запросить у пользователя ввод числа. 
 * Записать введенное значение в поле 
 * age объекта user.
 */
let userAge = +askFor('Введите возраст пользователя');
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
    return Object.assign({}, person);
}

const admin = copyPerson(user);
admin.setRole('admin');


/**
 * 3. Записать все значения полей объекта admin 
 * в отдельные переменные. Имена переменных 
 * должны совпадать с названиями полей.
 */

const {name, age, role} = admin; 
log(`Значения переменных: name=${name}, age=${age}, role=${role}`);

