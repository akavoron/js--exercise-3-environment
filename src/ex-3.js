import {log, askFor} from './render';
import {
    TypeException, 
    NumOfVariablesException
} from './exceptions';


/**
 * 1. Вывести в консоль сумму 
 * всех целых чисел от 50 до 100.
 */

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
    if (typeof from !== 'number' || typeof to !== 'number') {
        throw new TypeException('number');
    }

    if (from > to) {
        const buff = from;
        from = to;
        to = buff;
    }

    let accumulator = 0;
    for (let i = from; i <= to; i++) {
        accumulator += i;
    }
    return accumulator;
}

log(sumInRange(50, 100));

/**
 * 2. Вывести в консоль таблицу умножения на 7. 
 * 7 x 1 = 7
 * 7 x 2 = 14
 * ...
 * 7 x 9 = 63
 */

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
    if (typeof num !== 'number') {
        throw new TypeException('number');
    }

    const accumulator = [];
    let i;

    while (i <= 9) {
        accumulator.push(`${num} x ${i} = ${num * i}`);
    }

    return accumulator;
}

const mulArr = getMultTable(7);

for(let i = 0; i < mulArr.length; i++) {
    log(mulArr[i]);
}


/**
 * 3. Запросить у пользователя ввод числа N. 
 * Вывести в консоль среднее арифметическое 
 * всех нечётных чисел от 1 до N.
 */

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
    if (typeof from !== 'number' || typeof to !== 'number') {
        throw new TypeException('number');
    }

    if (from > to) {
        const buff = from;
        from = to;
        to = buff;
    }

    let accumulator = 0;
    let count = 0;

    for (let i = from; i <= to; i++) {
        if (i % 2 !== 0) {
            accumulator += i;
            count++;
        }
    }

    return Number((accumulator/count).toFixed(3));
}

const n = askFor('Введите N для подсчета ср. арифм. всех нечетных от 1 до N');
log(averageOfOdd(1, n));
