import {log} from './render';

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
function mul(a, b) {}

log(mul(2,3));

/*
 * Сумма двух чисел
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function sum(a, b) {}

log(sum(2,3));

/**
 * 2. В двух переменных хранятся строки 
 * символов. Написать программу, которая 
 * выведет в консоль суммарное количество 
 * символов в обоих строках.
 * 
 * @param {string} firstString
 * @param {string} secondString
 * @return {number}
 */
function stringsLength(firstString, secondString) {}

log(stringsLength('some', 'text here'));

/**
 * 3. Написать программу, которая запрашивает
 * у пользователя ввод трёхзначного числа
 * , а потом выводит в консоль сумму цифр
 * введённого числа.
 * 
 * @param {number} number
 * @return {number}
 */

function sumOfInlineDigits(number) {}

let num = prompt('Type a number with 3 digits:')
log(sumOfInlineDigits(num));
