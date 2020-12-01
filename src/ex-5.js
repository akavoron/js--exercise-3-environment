import {log, askFor} from './render';
import {
    TypeException, 
    NumOfVariablesException
} from './exceptions';

/**
 * Создайте массив целых чисел из 10 элементов.
 */

/** 
 * Возвращает массив случайных целых чисел
 * 
 * @param {number} min Минимальное число
 * @param {number} max Максимальное число
 * @param {number} count Количество чисел
 * @return {[]}
 */
export function createArray(min, max, count) {
    let arr = [];

    for (let i; i < count; i++) {
        arr.push( (max - min) * Math.random() + min );
    }
    return arr;
}

/**
 * 1. Выведите в консоль сумму всех элементов массива.
 */ 

/**
 * Возвращает сумму всех чисел в числовом массиве
 * 
 * @param {[]} arr
 * @return {number}
 */
export function sumInsideArray(arr) {}

/**
 * 2. Создайте новый массив на основе исходного, 
 * в котором каждый элемент будет вдвое больше 
 * элемента исходного массива с таким же индексом. 
 * (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив).
 */

/**
 * Увеличивает значения в числовом массиве в 2 раза
 *  
 * @param {[]} oldArr
 * @return {[]}
 */
export function increaseArray2Times(oldArr) {}

/**
 * 3. Найдите и выведите в консоль 
 * наибольший и наименьший 
 * элементы исходного массива.
 */

/** 
 * Возвращает наибольшее число в массиве 
 * 
 * @param {[]} arr
 * @return {number}
 */
export function greatest(arr) {}

/** 
 * Возвращает наименьшее число в массиве 
 * 
 * @param {[]} arr
 * @return {number}
 */
export function smallest(arr) {}
