import {
    config,
    createElements,
    addNewParagraph, 
    clearUnnecessaryPar, 
    init
} from './ex-7';

import {errMsg, TypeException, NumOfVariablesException} from './exceptions';

createElements();

const contEl = document.querySelector('.content');
const formEl = document.querySelector('form');
const inpTextEl = document.querySelector('input[type=text]');
const btnEl = document.querySelector('button');

describe('On the page', () => {
    it('we have all necessary elements', () => {
        expect(!!(contEl.length)).toBe(true);
        expect(!!(formEl.length)).toBe(true);
        expect(!!(inpTextEl.length)).toBe(true);
        expect(!!(btnEl.length) ).toBe(true);
    });
    it('the input text is hidden by default', () => {
        expect( btnEl.hidden ).toBe(true);
    });
    it('we have three paragraphs', () => {
        expect( document.querySelectorAll('.content p').length ).toBe(3);
    });
    it('the input[type=text] is empty', () => {
        expect( inpTextEl.value ).toBe('');
    });
});

describe('Function init', () => {
    it('attach a lintener on the form element', () => {
        expect(typeof formEl.onsubmit === 'function').toBe(true);
    });
});

describe('Function addNewParagraph', () => {
    const buff = {};

    beforeEach(() => {
        buff.contEl = document.querySelector('.content').cloneNode(true);
        buff.formEl = document.querySelector('form').cloneNode(true);
        buff.inpTextEl = document.querySelector('input[type=text]').cloneNode(true);
        buff.btnEl = document.querySelector('button').cloneNode(true);
    });

    it('adds new paragraphs at the end of a list when the form is submitted', () => {
        init();

        buff.inpTextEl.value = 'test';
        buff.formEl.submit();

        const flag = document.querySelector('.content p:last-child').innerText === 'test';
        expect(flag).toBe(true);
    });

    it('removes old paragraphs when there are too many', () => {
        for (let i = 0; i < (config.num * 2); i++) {
            addNewParagraph(`test ${i}`);
        }
        expect( document.querySelectorAll('.content p').length ).toBe(config.num);
    });

    it('has exactly 1 parameters', () => {
        try {
            expect(addNewParagraph('test')).toThrow(NumOfVariablesException);
        } catch (err) { errMsg(err); }
    });

    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(addNewParagraph(10)).toThrow(TypeException);
            expect(addNewParagraph(['10'])).toThrow(TypeException);
            expect(addNewParagraph({'value': '10'})).toThrow(TypeException);
            expect(addNewParagraph(false)).toThrow(TypeException);
            expect(addNewParagraph(true)).toThrow(TypeException);
            expect(addNewParagraph(null)).toThrow(TypeException);
            expect(addNewParagraph(undefined)).toThrow(TypeException);
        } catch (err) { errMsg(err); }
    });

    afterEach(() => {
        document.querySelector('.content').replaceWith( buff.contEl );
        document.querySelector('form').replaceWith( buff.formEl );
        document.querySelector('input[type=text]').replaceWith( inpTextEl );
        document.querySelector('button').replaceWith( btnEl );
    });    
});

describe('Function clearUnnecessaryPar', () => {
    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(clearUnnecessaryPar('10')).toThrow(TypeException);
            expect(clearUnnecessaryPar(['10'])).toThrow(TypeException);
            expect(clearUnnecessaryPar({'value': '10'})).toThrow(TypeException);
            expect(clearUnnecessaryPar(false)).toThrow(TypeException);
            expect(clearUnnecessaryPar(true)).toThrow(TypeException);
            expect(clearUnnecessaryPar(null)).toThrow(TypeException);
            expect(clearUnnecessaryPar(undefined)).toThrow(TypeException);
        } catch (err) { errMsg(err); }
    });
});
