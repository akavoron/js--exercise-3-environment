import {Person, copyPerson} from './ex-4';
import {TypeException, NumOfVariablesException} from './exceptions';

describe('Person object', () => {
    const person = new Person('Bob', 23, 'user');

    it('should create a correct object', () => {
        expect(person.name === 'Bob').toBe(true);
        expect(person.age === 23).toBe(true);
        expect(person.role === 'user').toBe(true);
        expect(Object.keys(person).length).toBe(3);        
    });

    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(new Person('Bob', '23', 'user')).toThrow(TypeException);
            expect(new Person(11, 23, 'user')).toThrow(TypeException);
            expect(new Person('Bob', 23, 33)).toThrow(TypeException);

            expect(new Person(['Bob'], 23, 'user').toThrow(TypeException));
            expect(new Person('Bob', [23], 'user').toThrow(TypeException));
            expect(new Person('Bob', 23, ['user']).toThrow(TypeException));
            
            expect(new Person(true, 23, 'user').toThrow(TypeException));
            expect(new Person('Bob', false, 'user').toThrow(TypeException));
            expect(new Person('Bob', 23, true).toThrow(TypeException));
            
            expect(new Person(null, 23, 'user').toThrow(TypeException));
            expect(new Person('Bob', undefined, 'user').toThrow(TypeException));
            expect(new Person('Bob', 23, null).toThrow(TypeException));
        } catch (err) {}
    });

    describe('method setAge', () => {
        it('can chage an age', () => {
            person.setAge(32);
            expect(person.age === 32).toBe(true);
        });

        it("should push a TypeException when the param's type is wrong", () => {
            try {
                expect(person.setAge('32')).toThrow(TypeException);
                expect(person.setAge([32])).toThrow(TypeException);
                expect(person.setAge(true)).toThrow(TypeException);
                expect(person.setAge(false)).toThrow(TypeException);
                expect(person.setAge(null)).toThrow(TypeException);
                expect(person.setAge(undefined)).toThrow(TypeException);
            } catch (err) {}
        });

        it(`should push a NumOfVariablesException 
            when wrong num of params`, () => {
            try {
                expect(person.setAge()).toThrow(NumOfVariablesException);
                expect(person.setAge(22, 32)).toThrow(NumOfVariablesException);
            } catch (err) {}
        });
    });

    describe('method setRole', () => {
        it('can set a role', () => {
            person.setRole('admin');
            expect(person.role === 'admin').toBe(true);
        });

        it("should push a TypeException when the param's type is wrong", () => {
            try {
                expect(person.setRole(11)).toThrow(TypeException);
                expect(person.setRole(['admin'])).toThrow(TypeException);
                expect(person.setRole(true)).toThrow(TypeException);
                expect(person.setRole(false)).toThrow(TypeException);
                expect(person.setRole(null)).toThrow(TypeException);
                expect(person.setRole(undefined)).toThrow(TypeException);
            } catch (err) {}
        });

        it(`should push a NumOfVariablesException 
            when wrong num of params`, () => {
            try {
                expect(person.setRole()).toThrow(NumOfVariablesException);
                expect(person.setRole('user', 'admin'))
                    .toThrow(NumOfVariablesException);
            } catch (err) {}
        });
    });
});

describe('Function copyPerson', () => {
    const person = new Person('Bob', 23, 'user');
    const anotherPerson = copyPerson(person);

    it('should create the same object', () => {
        let flag = true;
        const personEntries = Object.entries(person);
        const anotherPersonEntries = Object.entries(anotherPerson);

        for (let i = 0; i < personEntries.length; i++) {
            if (personEntries[i][0] !== anotherPersonEntries[i][0]
                || personEntries[i][1] !== anotherPersonEntries[i][1]) {
                    flag = false;
                    break;
            }
        }

        expect(flag).toBe(true);
    });

    it("should push a TypeException when the param's type is wrong", () => {
        try {
            expect(copyPerson({'name': 'Bob', 'age': 23, 'role': 'user'}))
                .toThrow(TypeException);

            expect(copyPerson(['Bob', 23, 'user'])).toThrow(TypeException);
            expect(copyPerson('10')).toThrow(TypeException);
            expect(copyPerson(10)).toThrow(TypeException);
            expect(copyPerson(true)).toThrow(TypeException);
            expect(copyPerson(false)).toThrow(TypeException);
            expect(copyPerson(undefined)).toThrow(TypeException);
        } catch (err) {}
    });
})