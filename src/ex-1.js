import {log} from './render';
import {TypeException, ParamLengthException} from './exceptions';


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
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeException('number');
    }

    return a * b;
}

log(mul(2,3));


/*
 * Сумма двух чисел
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeException('number');
    }

    return a + b;
}

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
export function stringsLength(firstString, secondString) {
    if (typeof firstString !== 'string' || typeof secondString !== 'string') {
        throw new TypeException('string');
    }
    
    return firstString.length + secondString.length;
}

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
export function sumOfInlineDigits(number) {
    if (typeof number !== 'number') {
        throw new TypeException('number');
    }
    if (String(number).length !== 3) {
        throw new ParamLengthException();
    }
    
    let accumulator = 0;
    const numString = String(number);
    
    for(let i = 0; i < number.length; i++) {
        accumulator += numString[i];
    }

    return accumulator;
}

const num = +prompt('Type a number with 3 digits:')
log(sumOfInlineDigits(num));
