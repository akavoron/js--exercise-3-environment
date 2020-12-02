import {log} from './render';
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
    if (arguments.length !== 3) {
        throw new NumOfVariablesException();
    }
    if (typeof min !== 'number' 
        || typeof max !== 'number' 
        || typeof count !== 'number') {
        throw new TypeException('number');
    }

    const arr = [];

    for (let i; i < count; i++) {
        arr.push( (max - min) * Math.random() + min );
    }
    return arr;
}

const numArr = createArray(-5, 5, 10);
log(`Создали массив со случайными значениями: ${numArr}`);


/**
 * 1. Выведите в консоль сумму всех элементов массива.
 */ 

/**
 * Возвращает сумму всех чисел в числовом массиве
 * 
 * @param {[]} arr
 * @return {number}
 */
export function getSumInsideArray(arr) {
    if (arguments.length !== 1) {
        throw new NumOfVariablesException();
    }
    if (!Array.isArray(arr)) {
        throw new TypeException('[]');
    }

    let accumulator = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new TypeException('[]');
        }
        
        accumulator += arr[i];
    }

    return accumulator;
}

log(`Сумма всех чисел в массиве: ${getSumInsideArray(numArr)}`);


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
export function increaseArray2Times(oldArr) {
    if (arguments.length !== 1) {
        throw new NumOfVariablesException();
    }
    if (!Array.isArray(oldArr)) {
        throw new TypeException('[]');
    }

    let newArr;
    
    for (let i = 0; i < oldArr.length; i++) {
        if (typeof oldArr[i] !== 'number') {
            throw new TypeException('[]');
        }

        newArr.push(oldArr[i] * 2);
    }

    return newArr;
}

log(`Увеличили значения массива в 2 раза: ${increaseArray2Times(numArr)}`);


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
export function getGreatest(arr) {
    if (arguments.length !== 1) {
        throw new NumOfVariablesException();
    }
    if (!Array.isArray(arr)) {
        throw new TypeException('[]');
    }

    let greatest;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new TypeException('[]');
        }
        if (typeof greatest === 'undefined' || arr[i] > greatest) {
            greatest = arr[i];
        }
    }

    return greatest;
}

log(`Наибольшее число в исходном массиве: ${getGreatest(numArr)}`);


/** 
 * Возвращает наименьшее число в массиве 
 * 
 * @param {[]} arr
 * @return {number}
 */
export function getSmallest(arr) {
    if (arguments.length !== 1) {
        throw new NumOfVariablesException();
    }
    if (!Array.isArray(arr)) {
        throw new TypeException('[]');
    }

    let smallest;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new TypeException('[]');
        }
        if (typeof smallest === 'undefined' || arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

log(`Наименьшее число в исходном массиве: ${getSmallest(numArr)}`);
