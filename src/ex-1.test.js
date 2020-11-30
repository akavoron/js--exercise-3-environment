import {sum, mul, getStringsLength, getSumOfInlineDigits} from './ex-1';

import {
    TypeException, 
    ParamLengthException, 
    NumOfVariablesException
} from './exceptions';

describe('The sum function', () => {

    it('should works correctly with right param\'s type', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(1, 3)).toBe(4);
        expect(sum(2, 1)).toBe(3);
        expect(sum(0, 3)).toBe(3);
        expect(sum(2, 0)).toBe(2);
        expect(sum(-2, 3)).toBe(1);
        expect(sum(2, -3)).toBe(-1);
        expect(sum(-2, -3)).toBe(-5);
    });

    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(sum([2],3 )).toThrow(TypeException);
            expect(sum(2, [3])).toThrow(TypeException);
            expect(sum('2', 3)).toThrow(TypeException);
            expect(sum(2, '3')).toThrow(TypeException);
            expect(sum(2, undefined)).toThrow(TypeException);
            expect(sum(null, 3)).toThrow(TypeException);
            expect(sum(true, 3)).toThrow(TypeException);
            expect(sum(2, false)).toThrow(TypeException);
        } catch (err) {}
    });

    it("should push a NumOfVariablesException when wrong num of params", () => {
        try {
            expect(sum(2)).toThrow(NumOfVariablesException);
            expect(sum(2, 3, 4)).toThrow(NumOfVariablesException);
        } catch (err) {}
    });
});

describe('The mul function', () => {

    it('should works correctly with right param\'s type', () => {
        expect(mul(2, 3)).toBe(6);
        expect(mul(1, 3)).toBe(3);
        expect(mul(2, 1)).toBe(2);
        expect(mul(0, 3)).toBe(0);
        expect(mul(2, 0)).toBe(0);
        expect(mul(-2, 3)).toBe(-6);
        expect(mul(2, -3)).toBe(-6);
        expect(mul(-2, -3)).toBe(6);
    });

    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(mul([2],3 )).toThrow(TypeException);
            expect(mul(2, [3])).toThrow(TypeException);
            expect(mul('2', 3)).toThrow(TypeException);
            expect(mul(2, '3')).toThrow(TypeException);
            expect(mul(2, undefined)).toThrow(TypeException);
            expect(mul(null, 3)).toThrow(TypeException);
            expect(mul(true, 3)).toThrow(TypeException);
            expect(mul(2, false)).toThrow(TypeException);
        } catch (err) {}
    });

    it("should push a NumOfVariablesException when wrong num of params", () => {
        try {
            expect(mul(2)).toThrow(NumOfVariablesException);
            expect(mul(2, 3, 4)).toThrow(NumOfVariablesException);
        } catch (err) {}
    });
});

describe('The getStringsLength function', () => {

    it('should works correctly with right param\'s type', () => {
        expect(getStringsLength('', '')).toBe(0);
        expect(getStringsLength(' ', '')).toBe(1);
        expect(getStringsLength('', ' ')).toBe(1);
        expect(getStringsLength('some', 'string')).toBe(10);
        expect(getStringsLength(' some', ' text here')).toBe(15);
    });

    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(getStringsLength(2, 'test')).toThrow(TypeException);
            expect(getStringsLength('test', 3)).toThrow(TypeException);
            expect(getStringsLength([2],'test')).toThrow(TypeException);
            expect(getStringsLength('test', [3])).toThrow(TypeException);
            expect(getStringsLength('test', undefined)).toThrow(TypeException);
            expect(getStringsLength(null, 'test')).toThrow(TypeException);
            expect(getStringsLength(true, 'test')).toThrow(TypeException);
            expect(getStringsLength('test', false)).toThrow(TypeException);
        } catch (err) {}
    });

    it("should push a NumOfVariablesException when wrong num of params", () => {
        try {
            expect(getStringsLength('one')).toThrow(NumOfVariablesException);
            expect(getStringsLength('one', 'two', 'three'))
                .toThrow(NumOfVariablesException);
        } catch (err) {}
    });
});

describe('The getSumOfInlineDigits function', () => {

    it('should works correctly with right param\'s type', () => {
        expect(getSumOfInlineDigits(123)).toBe(6);
        expect(getSumOfInlineDigits(321)).toBe(6);
        expect(getSumOfInlineDigits(707)).toBe(14);
        expect(getSumOfInlineDigits(777)).toBe(21);
    });

    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(getSumOfInlineDigits('123')).toThrow(TypeException);
            expect(getSumOfInlineDigits(undefined)).toThrow(TypeException);
            expect(getSumOfInlineDigits(null)).toThrow(TypeException);
            expect(getSumOfInlineDigits(true)).toThrow(TypeException);
            expect(getSumOfInlineDigits(false)).toThrow(TypeException);
            expect(getSumOfInlineDigits([1,2,3])).toThrow(TypeException);
        } catch (err) {}
    });

    it(`should push a ParamLengthException 
        when the number's length is not 3`, () => {
        try {
            expect(getSumOfInlineDigits('1')).toThrow(ParamLengthException);
            expect(getSumOfInlineDigits('12')).toThrow(ParamLengthException);
            expect(getSumOfInlineDigits('1234')).toThrow(ParamLengthException);
            expect(getSumOfInlineDigits('12345')).toThrow(ParamLengthException);
        } catch (err) {}
    });

    it("should push a NumOfVariablesException when wrong num of params", () => {
        try {
            expect(getSumOfInlineDigits()).toThrow(NumOfVariablesException);
            expect(getSumOfInlineDigits('1', '2'))
                .toThrow(NumOfVariablesException);
        } catch (err) {}
    });
});