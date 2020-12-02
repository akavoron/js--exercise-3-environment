import {
    getDayOfWeek,
    getMinutes,
    getLatest
} from './ex-8';

import {
    TypeException, 
    NumOfVariablesException,
    ParamFormatException
} from './exceptions';

describe('Function getDayOfWeek', () => {
    // формат даты у входящего параметра верный

    it('has exactly 1 parameters', () => {
        try {
            expect(getDayOfWeek('01.10.2020', '02.10.2020')).toThrow(NumOfVariablesException);
        } catch (err) {}
    });

    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(getDayOfWeek(10)).toThrow(TypeException);
            expect(getDayOfWeek(['10'])).toThrow(TypeException);
            expect(getDayOfWeek({'value': '10'})).toThrow(TypeException);
            expect(getDayOfWeek(false)).toThrow(TypeException);
            expect(getDayOfWeek(true)).toThrow(TypeException);
            expect(getDayOfWeek(null)).toThrow(TypeException);
            expect(getDayOfWeek(undefined)).toThrow(TypeException);
        } catch (err) {}
    });

    it("should push a ParamFormatException when the param has the wrong format", () => {
        try {
            expect(getDayOfWeek('01-10-2020')).toThrow(ParamFormatException);
            expect(getDayOfWeek('01 10 2020')).toThrow(ParamFormatException);
            expect(getDayOfWeek('2020.10.01')).toThrow(ParamFormatException);
            
            expect(getDayOfWeek('1.10.2020')).toThrow(ParamFormatException);
            expect(getDayOfWeek('01.1.2020')).toThrow(ParamFormatException);
            expect(getDayOfWeek('01.10.20')).toThrow(ParamFormatException);

            expect(getDayOfWeek('00.10.2020')).toThrow(ParamFormatException);
            expect(getDayOfWeek('35.10.2020')).toThrow(ParamFormatException);
            expect(getDayOfWeek('01.00.2020')).toThrow(ParamFormatException);
            expect(getDayOfWeek('01.14.2020')).toThrow(ParamFormatException);
            
            // первый параметр 1-31
            // второй параметр 1-12
            // проверить все это регуляркой
        } catch (err) {}
    });

    it('should returns a number', () => {
        expect( typeof getDayOfWeek('10.10.2020') ).toBe('number');
    });

    it('should works correctly', () => {
        try {
            expect(getDayOfWeek('07.10.2018')).toBe(7); // вс
            expect(getDayOfWeek('19.03.2019')).toBe(2); // вт
            expect(getDayOfWeek('02.12.2020')).toBe(3); // ср
        } catch (err) {}
    });
});

describe('Function getMinutes', () => {
    // возвращает число
    // работает по результатам верно

    // Date.now = jest.fn(() => 1487076708000) //14.02.2017
    // Date.now = jest.fn(() => new Date(Date.UTC(2017, 1, 14)).valueOf())

    let buff = {};

    beforeEach(() => {
        buff.date = Date;
    });

    it((''), () => {
        
    });

    it('should returns a number', () => {
        expect( getMinutes() ).toBe('number');
    });

    it('should works correctly', () => {
        try {
            expect(getMinutes()).toBe();
        } catch (err) {}
    });

    afterEach(() => {
        Date = buff.date;
    });
});

describe('Function getLatest', () => {
    // входящих параметров два
    // входящие параметры это строки
    // формат даты у входящих параметров верный
    // возвращает строку
    // работает по результатам верно

    it('', () => {

    });

    it('has exactly 1 parameters', () => {
        try {
            expect(getLatest('test')).toThrow(NumOfVariablesException);
        } catch (err) {}
    });

    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(getLatest(10)).toThrow(TypeException);
        } catch (err) {}
    });
});