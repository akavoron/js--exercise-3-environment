import {sum, mul, stringsLength, sumOfInlineDigits} from './ex-1';
import {TypeException, ParamLengthException} from './exceptions';

describe('The sum function', () => {

    it('works correctly with right param\'s type', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(1, 3)).toBe(4);
        expect(sum(2, 1)).toBe(3);
        expect(sum(0, 3)).toBe(3);
        expect(sum(2, 0)).toBe(2);
        expect(sum(-2, 3)).toBe(1);
        expect(sum(2, -3)).toBe(-1);
        expect(sum(-2, -3)).toBe(-5);
    });

    it("push a TypeException when the param type is wrong", () => {
        try {
            expect(sum([2],3 )).toThrow(TypeException);
            expect(sum(2, [3])).toThrow(TypeException);
            expect(sum('2', 3)).toThrow(TypeException);
            expect(sum(2, '3')).toThrow(TypeException);
            expect(sum(2, undefined)).toThrow(TypeException);
            expect(sum(null, 3)).toThrow(TypeException);
        } catch (err) {}
      });
});

describe('The mul function', () => {

    it('works correctly with right param\'s type', () => {
        expect(mul(2, 3)).toBe(6);
        expect(mul(1, 3)).toBe(3);
        expect(mul(2, 1)).toBe(2);
        expect(mul(0, 3)).toBe(0);
        expect(mul(2, 0)).toBe(0);
        expect(mul(-2, 3)).toBe(-6);
        expect(mul(2, -3)).toBe(-6);
        expect(mul(-2, -3)).toBe(6);
    });

    it("push a TypeException when the param type is wrong", () => {
        try {
            expect(mul([2],3 )).toThrow(TypeException);
            expect(mul(2, [3])).toThrow(TypeException);
            expect(mul('2', 3)).toThrow(TypeException);
            expect(mul(2, '3')).toThrow(TypeException);
            expect(mul(2, undefined)).toThrow(TypeException);
            expect(mul(null, 3)).toThrow(TypeException);
        } catch (err) {}
      });
});

describe('The stringsLength function', () => {

    it('works correctly with right param\'s type', () => {
        const s1 = 'love';
        const s2 = 'April';
        const s3 = 'sun';
        const s4 = 'a few words';
        const s5 = ' ';

        expect(stringsLength('some', 'text here')).toBe(13);
        expect(stringsLength(s1, s2)).toBe(s1.length + s2.length);
        expect(stringsLength(s2, s1)).toBe(s2.length + s1.length);
        expect(stringsLength(s3, s4)).toBe(s3.length + s4.length);
        expect(stringsLength(s4, s3)).toBe(s4.length + s3.length);
        expect(stringsLength(s4, s5)).toBe(s4.length + s5.length);
        expect(stringsLength(s5, s4)).toBe(s5.length + s4.length);
    });

    it("push a TypeException when the param type is wrong", () => {
        try {
            expect(stringsLength(2, 'test')).toThrow(TypeException);
            expect(stringsLength('test', 3)).toThrow(TypeException);
            expect(stringsLength([2],'test')).toThrow(TypeException);
            expect(stringsLength('test', [3])).toThrow(TypeException);
            expect(stringsLength('test', undefined)).toThrow(TypeException);
            expect(stringsLength(null, 'test')).toThrow(TypeException);
        } catch (err) {}
      });
});

describe('The sumOfInlineDigits function', () => {

    it('works correctly with right param\'s type', () => {
        expect(sumOfInlineDigits(123)).toBe(6);
        expect(sumOfInlineDigits(321)).toBe(6);
        expect(sumOfInlineDigits(707)).toBe(14);
        expect(sumOfInlineDigits(777)).toBe(21);
    });

    it("push a TypeException when the param type is wrong", () => {
        try {
            expect(sumOfInlineDigits('123')).toThrow(TypeException);
            expect(sumOfInlineDigits(undefined)).toThrow(TypeException);
            expect(sumOfInlineDigits(null)).toThrow(TypeException);
            expect(sumOfInlineDigits([1,2,3])).toThrow(TypeException);
        } catch (err) {}
    });

    it("push a ParamLengthException when the number's length is not 3", () => {
        try {
            expect(sumOfInlineDigits('1')).toThrow(ParamLengthException);
            expect(sumOfInlineDigits('12')).toThrow(ParamLengthException);
            expect(sumOfInlineDigits('1234')).toThrow(ParamLengthException);
            expect(sumOfInlineDigits('12345')).toThrow(ParamLengthException);
        } catch (err) {}
    });
});