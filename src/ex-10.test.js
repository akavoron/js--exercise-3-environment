import {isDate, isEmail, isTel} from './ex-10'

describe('Function isDate', () => {
    it('should search correctly', () => {
        expect(isDate('05.12.2020')).toBe(true);
        expect(isDate('05 12 2020')).toBe(true);
        expect(isDate('05/12/2020')).toBe(true);

        expect(isDate('5.12.2020')).toBe(true);
        expect(isDate('5 12 2020')).toBe(true);
        expect(isDate('5/12/2020')).toBe(true);

        expect(isDate('12.31.2020')).toBe(true);
        expect(isDate('12 31 2020')).toBe(true);
        expect(isDate('12/31/2020')).toBe(true);

        expect(isDate('2020.05.12')).toBe(true);
        expect(isDate('2020 05 12')).toBe(true);
        expect(isDate('2020/05/12')).toBe(true);
        
        expect(isDate('2020.5.12')).toBe(true);
        expect(isDate('2020 5 12')).toBe(true);
        expect(isDate('2020/5/12')).toBe(true);

        expect(isDate('2020.12.31')).toBe(true);
        expect(isDate('2020 12 31')).toBe(true);
        expect(isDate('2020/12/31')).toBe(true);

        expect(isDate('test')).toBe(false);
        expect(isDate('12.2020.10')).toBe(false);
        expect(isDate('122020.10')).toBe(false);
        expect(isDate('12.202010')).toBe(false);
        expect(isDate('12.202010')).toBe(false);
    });
});

describe('Function isEmail', () => {
    it('should search correctly', () => {
        expect(isEmail('test@some-domain.ru')).toBe(true);
        expect(isEmail('test@somedomain.ru')).toBe(true);
        expect(isEmail('test-string@somedomain.info')).toBe(true);
        expect(isEmail('test-string@somedomain.com')).toBe(true);
        expect(isEmail('t@somedomain.com')).toBe(true);

        expect(isEmail('test@s.ru')).toBe(false);
        expect(isEmail('test@string.r')).toBe(false);
        expect(isEmail('test_some@string.ru')).toBe(false);
        expect(isEmail('test@some@string.ru')).toBe(false);
    });
});

describe('Function isTel', () => {
    it('should search correctly', () => {
        expect(isTel('+79106278707')).toBe(true);
        expect(isTel('+7 910 6278707')).toBe(true);
        expect(isTel('+7 910 627 87 07')).toBe(true);
        expect(isTel('+7 910 627-87-07')).toBe(true);

        expect(isTel('89106278707')).toBe(true);
        expect(isTel('8 910 6278707')).toBe(true);
        expect(isTel('8 910 627 87 07')).toBe(true);
        expect(isTel('8 910 627-87-07')).toBe(true);

        expect(isTel(' 89106278707')).toBe(false);
        expect(isTel('89106278707 ')).toBe(false);
        expect(isTel('tel89106278707')).toBe(false);
        expect(isTel('123456789123456789')).toBe(false);
    });
});