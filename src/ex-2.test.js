import {getBiggest, getMonthText, isFitCircleToSquare} from './ex-2';
import {TypeException, RangeException} from './exceptions';

describe('The getBiggest function', () => {

    it('works correctly with right param\'s type', () => {
        expect(getBiggest(0, 0)).toBe(0);
        expect(getBiggest(5, 5)).toBe(5);
        expect(getBiggest(0, 1)).toBe(1);
        expect(getBiggest(0, -1)).toBe(0);
        expect(getBiggest(22, 30)).toBe(30);
        expect(getBiggest(-22, 30)).toBe(30);
        expect(getBiggest(22, -30)).toBe(22);
        expect(getBiggest(-22, -30)).toBe(-22);
    });

    it("push a TypeException when the param type is wrong", () => {
        try {
            expect(getBiggest([22],30)).toThrow(TypeException);
            expect(getBiggest(22, [30])).toThrow(TypeException);
            expect(getBiggest('22', 30)).toThrow(TypeException);
            expect(getBiggest(22, '30')).toThrow(TypeException);
            expect(getBiggest(undefined, 30)).toThrow(TypeException);
            expect(getBiggest(22, null)).toThrow(TypeException);
            expect(getBiggest(true, 30)).toThrow(TypeException);
            expect(getBiggest(22, false)).toThrow(TypeException);
        } catch (err) {}
      });
});

describe('The getMonthText function', () => {

    it('works correctly with right param', () => {
        expect(getMonthText(1)).toBe('январь');
        expect(getMonthText(2)).toBe('февраль');
        expect(getMonthText(3)).toBe('март');
        expect(getMonthText(4)).toBe('апрель');
        expect(getMonthText(5)).toBe('май');
        expect(getMonthText(6)).toBe('июнь');
        expect(getMonthText(7)).toBe('июль');
        expect(getMonthText(8)).toBe('август');
        expect(getMonthText(9)).toBe('сентябрь');
        expect(getMonthText(10)).toBe('октябрь');
        expect(getMonthText(11)).toBe('ноябрь');
        expect(getMonthText(12)).toBe('декабрь');
    });

    it('push a RangeException when the param is not in the range', () => {
        try {
            expect(getMonthText(0)).toThrow(RangeException);
            expect(getMonthText(15)).toThrow(RangeException);
            expect(getMonthText(-3)).toThrow(RangeException);
        } catch (err) {}
    });

    it("push a TypeException when the param type is wrong", () => {
        try {
            expect(getMonthText([2])).toThrow(TypeException);
            expect(getMonthText(null)).toThrow(TypeException);
            expect(getMonthText(undefined)).toThrow(TypeException);
            expect(getMonthText('2')).toThrow(TypeException);
            expect(getMonthText(true)).toThrow(TypeException);
            expect(getMonthText(false)).toThrow(TypeException);
        } catch (err) {}
      });
});

describe('The isFitCircleToSquare function', () => {

    /*
    Circle:
    S = Pi * R * R
    R * R = S/Pi
    R = √(S/Pi) 
    D = 2 * R
    D = 2 * √(S/Pi) 

    when S = 20
    D = 2 * √(20/3.14)
    D = 2 * √6.37
    D = 2 * 2.52
    D = 5.04

    when S = 30
    D = 2 * √(30/3.14)
    D = 6.18

    when S = 40
    D = 2 * √(40/3.14)
    D = 7.14

    Square:
    S = a*a
    a = √S

    when S = 20
    a = 4.47

    when S = 30
    a = 5.48

    when S = 40
    a = 6.32
    */

    it('works correctly with right param\'s type', () => {
        expect(isFitCircleToSquare(0, 0)).toBe(true);
        expect(isFitCircleToSquare(20, 30)).toBe(true);
        expect(isFitCircleToSquare(40, 40)).toBe(false);
    });

    it("push a TypeException when the param type is wrong", () => {
        try {
            expect(isFitCircleToSquare([20], 30)).toThrow(TypeException);
            expect(isFitCircleToSquare(20, [30])).toThrow(TypeException);
            expect(isFitCircleToSquare(20, '30')).toThrow(TypeException);
            expect(isFitCircleToSquare('20', 30)).toThrow(TypeException);
            expect(isFitCircleToSquare(null, 30)).toThrow(TypeException);
            expect(isFitCircleToSquare(20, undefined)).toThrow(TypeException);
            expect(isFitCircleToSquare(true, 30)).toThrow(TypeException);
            expect(isFitCircleToSquare(20, false)).toThrow(TypeException);
        } catch (err) {}
      });
});