import {
    createArray, 
    getSumInsideArray, 
    increaseArray2Times, 
    getGreatest,
    getSmallest
} from './ex-5';

import {TypeException, NumOfVariablesException} from './exceptions';

describe('Function createArray', () => {
    // получает 3 парамета
    // получаемые параметры – это числа
    // возвращает числовой массив
    // проверка действия функции
    const min = -5;
    const max = 5;
    const count = 10;
    const arr = createArray(min, max, count);

    it('has exactly 3 parameters', () => {
        try {
            expect(createArray())
                .toThrow(NumOfVariablesException);
            expect(createArray(-5, 5))
                .toThrow(NumOfVariablesException);
            expect(createArray(-5, 5, 10, 20))
                .toThrow(NumOfVariablesException);
        } catch (err) {}
    });
    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(createArray('-5', 5, 10)).toThrow(TypeException);
            expect(createArray(-5, [5], 10)).toThrow(TypeException);
            expect(createArray(-5, 5, true)).toThrow(TypeException);
            expect(createArray(-5, false, 10)).toThrow(TypeException);
            expect(createArray(undefined, 5, 10)).toThrow(TypeException);
            expect(createArray(-5, 5, null)).toThrow(TypeException);
        } catch (err) {}
    });
    it('should return an array', () => {
        expect(Array.isArray(arr)).toBe(true);
    });
    it('should return an array with only numbers in it', () => {
        let flag = false;
        for (let i; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                flag = true;
            }
        }
        expect(flag).toBe(false);
    });
    it('should works correctly', () => {
        expect(arr.length).toBe(10);

        let flag = false; // true if it has a wrong num in the array
        for (let i; i < arr.length; i++) {
            if (arr[i] < min || arr[i] > max) {
                flag = true;
            }
        }
        expect(flag).toBe(false);
    });
});

describe('Function getSumInsideArray', () => {
    // получает 1 параметр
    // получаемый параметр – это массив (а не объект, допустим, или строка)
    // получаемый параметр – это числовой массив
    // возвращает число
    // проверка подсчета на выборках

    it('has exactly 1 parameter', () => {
        try {
            expect(getSumInsideArray())
                .toThrow(NumOfVariablesException);
            expect(getSumInsideArray([1, 2, 3], [1, 2, 3]))
                .toThrow(NumOfVariablesException);
        } catch (err) {}
    });
    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(getSumInsideArray(['1', 2, 3])).toThrow(TypeException);
            expect(getSumInsideArray('1')).toThrow(TypeException);
            expect(getSumInsideArray(true)).toThrow(TypeException);
            expect(getSumInsideArray(false)).toThrow(TypeException);
            expect(getSumInsideArray(null)).toThrow(TypeException);
            expect(getSumInsideArray(undefined)).toThrow(TypeException);
            expect(getSumInsideArray({})).toThrow(TypeException);
        } catch (err) {}
    });
    it('should return a number', () => {
        expect(typeof getSumInsideArray([1, 0, 3])).toBe('number');
    });
    it('should works correctly', () => {
        expect(getSumInsideArray([1, 0, 3])).toBe(4);
        expect(getSumInsideArray([2, 5, 7])).toBe(14);
        expect(getSumInsideArray([2, -5, 8])).toBe(5);
    });
});

describe('Function increaseArray2Times', () => {
    // получает 1 параметр
    // получаемый параметр – это массив (а не объект, допустим, или строка)
    // получаемый параметр – это числовой массив
    // возвращает числовой массив
    // проверка действия функции

    it('has exactly 1 parameter', () => {
        try {
            expect(increaseArray2Times())
                .toThrow(NumOfVariablesException);
            expect(increaseArray2Times([1, 2, 3], [1, 2, 3]))
                .toThrow(NumOfVariablesException);
        } catch (err) {}
    });
    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(increaseArray2Times(['1', 2, 3])).toThrow(TypeException);
            expect(increaseArray2Times('1')).toThrow(TypeException);
            expect(increaseArray2Times(true)).toThrow(TypeException);
            expect(increaseArray2Times(false)).toThrow(TypeException);
            expect(increaseArray2Times(null)).toThrow(TypeException);
            expect(increaseArray2Times(undefined)).toThrow(TypeException);
            expect(increaseArray2Times({})).toThrow(TypeException);
        } catch (err) {}
    });
    it('should return an array', () => {
        expect( Array.isArray(increaseArray2Times([1, 2, 3])) ).toBe(true);
    });
    it('should return an array with only numbers in it', () => {
        const newArr = increaseArray2Times([1, 2, 3]);
        let flag = false;

        for (let i = 0; i < newArr.length; i++) {
            if (typeof newArr[i] !== 'number') {
                flag = true;
            }
        }

        expect(flag).toBe(false);
    });
    it('should works correctly', () => {
        expect().toBe();
    });
});

describe('Function getGreatest', () => {
    // получает 1 параметр
    // получаемый параметр – это массив (а не объект, допустим, или строка)
    // получаемый параметр – это числовой массив
    // возвращаемое значение – это число
    // функция верно выбирает возвращаемое значение
    
    it('has exactly 1 parameter', () => {
        try {
            expect(getGreatest())
                .toThrow(NumOfVariablesException);
            expect(getGreatest([1, 2, 3], [1, 2, 3]))
                .toThrow(NumOfVariablesException);
        } catch (err) {}
    });
    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(getGreatest(['1', 2, 3])).toThrow(TypeException);
            expect(getGreatest('1')).toThrow(TypeException);
            expect(getGreatest(true)).toThrow(TypeException);
            expect(getGreatest(false)).toThrow(TypeException);
            expect(getGreatest(null)).toThrow(TypeException);
            expect(getGreatest(undefined)).toThrow(TypeException);
            expect(getGreatest({})).toThrow(TypeException);
        } catch (err) {}
    });
    it('should return a number', () => {
        expect(typeof getGreatest([1, 2, 3])).toBe('number');
    });
    it('should works correctly', () => {
        expect(getGreatest([1, 0, 2, -4, 3])).toBe(3);
    });
});

describe('Function getSmallest', () => {
    // получает 1 параметр
    // получаемый параметр – это массив (а не объект, допустим, или строка)
    // получаемый параметр – это числовой массив
    // возвращаемое значение – это число
    // функция верно выбирает возвращаемое значение

    it('has exactly 1 parameter', () => {
        try {
            expect(getSmallest())
                .toThrow(NumOfVariablesException);
            expect(getSmallest([1, 2, 3], [1, 2, 3]))
                .toThrow(NumOfVariablesException);
        } catch (err) {}
    });
    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(getSmallest(['1', 2, 3])).toThrow(TypeException);
            expect(getSmallest('1')).toThrow(TypeException);
            expect(getSmallest(true)).toThrow(TypeException);
            expect(getSmallest(false)).toThrow(TypeException);
            expect(getSmallest(null)).toThrow(TypeException);
            expect(getSmallest(undefined)).toThrow(TypeException);
            expect(getSmallest({})).toThrow(TypeException);
        } catch (err) {}
    });
    it('should return a number', () => {
        expect(typeof getSmallest([1, 2, 3])).toBe('number');
    });
    it('should works correctly', () => {
        expect(getSmallest([1, 0, 2, -4, 3])).toBe(-4);
    });
});