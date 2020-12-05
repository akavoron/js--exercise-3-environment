import { sumInRange, getMultTable, averageOfOdd } from "./ex-3";

import { askFor, log } from './render';

import {
  errMsg,
  TypeException,
  RangeException,
  NumOfVariablesException,
} from "./exceptions";

describe("The sumInRange function", () => {
  it("should works correctly with right param's type", () => {
    expect(sumInRange(1, 5)).toBe(15);
    expect(sumInRange(5, 1)).toBe(15);
    expect(sumInRange(3, 7)).toBe(25);
    expect(sumInRange(7, 3)).toBe(25);
    expect(sumInRange(10, 13)).toBe(46);
  });
  it("should push a TypeException when the param's type is wrong", () => {
    try {
      expect(sumInRange([1], 3)).toThrow(TypeException);
      expect(sumInRange(1, [3])).toThrow(TypeException);
      expect(sumInRange("1", 3)).toThrow(TypeException);
      expect(sumInRange(1, "3")).toThrow(TypeException);
      expect(sumInRange(null, 3)).toThrow(TypeException);
      expect(sumInRange(1, undefined)).toThrow(TypeException);
      expect(sumInRange(true, 3)).toThrow(TypeException);
      expect(sumInRange(1, false)).toThrow(TypeException);
    } catch (err) {
      errMsg(err);
    }
  });
  it(`should push a NumOfVariablesException 
        when wrong num of params`, () => {
    try {
      expect(sumInRange()).toThrow(NumOfVariablesException);
      expect(sumInRange(1)).toThrow(NumOfVariablesException);
      expect(sumInRange(1, 5, 10)).toThrow(NumOfVariablesException);
    } catch (err) {
      errMsg(err);
    }
  });
});

describe("The getMultTable function", () => {
  it("should works correctly with right param's type", () => {
    const arr = [
      "5 x 1 = 5",
      "5 x 2 = 10",
      "5 x 3 = 15",
      "5 x 4 = 20",
      "5 x 5 = 25",
      "5 x 6 = 30",
      "5 x 7 = 35",
      "5 x 8 = 40",
      "5 x 9 = 45",
    ];

    const arrRes = getMultTable(5);
    for (let i = 0; i < arrRes.length; i++) {
      expect(arrRes[i]).toBe(arr[i]);
    }

    expect(getMultTable(10).length).toBe(9);
  });
  it("should push a TypeException when the param's type is wrong", () => {
    try {
      expect(getMultTable(5)).toThrow(TypeException);
      expect(getMultTable("5")).toThrow(TypeException);
      expect(getMultTable(null)).toThrow(TypeException);
      expect(getMultTable(undefined)).toThrow(TypeException);
      expect(getMultTable(true)).toThrow(TypeException);
      expect(getMultTable(false)).toThrow(TypeException);
    } catch (err) {
      errMsg(err);
    }
  });
  it(`should push a RangeException when 
        the param is not in the range`, () => {
    try {
      expect(getMultTable(0)).toThrow(RangeException);
      expect(getMultTable(-5)).toThrow(RangeException);
    } catch (err) {
      errMsg(err);
    }
  });
  it(`should push a NumOfVariablesException 
        when wrong num of params`, () => {
    try {
      expect(getMultTable()).toThrow(NumOfVariablesException);
      expect(getMultTable(5, 10)).toThrow(NumOfVariablesException);
    } catch (err) {
      errMsg(err);
    }
  });
});

describe("The averageOfOdd function", () => {
  it("should works correctly with right param's type", () => {

    [
      [[1, 5], 3],
      [[5, 1], 3],
      [[4, 10], 7],
      [[-3, 5], 1],
      [[-5, -10], -7],

    ].forEach(data => {
      jest.spyOn(window, "prompt").mockImplementation(() => data[0][1]);
      jest.spyOn(console, "log");

      const n = +askFor("Введите N для подсчета ср. арифм. всех нечетных от 1 до N");
      log(averageOfOdd(data[0][0], n));

      expect(console.log).toHaveBeenCalledWith(data[1]);
    });

    // expect(averageOfOdd(1, 5)).toBe(3); // 1+3+5 = 9/3 = 3
    // expect(averageOfOdd(5, 1)).toBe(3); // 1+3+5 = 9/3 = 3
    // expect(averageOfOdd(4, 10)).toBe(7); // 5+7+9 = 21/3 = 7
    // expect(averageOfOdd(-3, 5)).toBe(1); // (-3)+(-1)+1+3+5 = 5/5 = 1
    // expect(averageOfOdd(-5, -10)).toBe(-7); // (-5)+(-7)+(-9) = -21/3 = -7
  });
  it("should push a TypeException when the param's type is wrong", () => {
    try {
      expect(averageOfOdd([1], 5)).toThrow(TypeException);
      expect(averageOfOdd(1, [5])).toThrow(TypeException);
      expect(averageOfOdd("1", 5)).toThrow(TypeException);
      expect(averageOfOdd(1, "5")).toThrow(TypeException);
      expect(averageOfOdd(null, 5)).toThrow(TypeException);
      expect(averageOfOdd(1, undefined)).toThrow(TypeException);
      expect(averageOfOdd(true, 5)).toThrow(TypeException);
      expect(averageOfOdd(1, false)).toThrow(TypeException);
    } catch (err) {
      errMsg(err);
    }
  });
  it(`should push a NumOfVariablesException 
        when wrong num of params`, () => {
    try {
      expect(averageOfOdd()).toThrow(NumOfVariablesException);
      expect(averageOfOdd(1, 5, 10)).toThrow(NumOfVariablesException);
    } catch (err) {
      errMsg(err);
    }
  });
});
