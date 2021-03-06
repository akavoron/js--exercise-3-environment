import { sum, mul, getStringsLength, getSumOfInlineDigits } from "./ex-1";

import { askFor, log } from "./render";

import {
  TypeException,
  ParamLengthException,
  NumOfVariablesException,
} from "./exceptions";

describe("The sum function", () => {
  it("should works correctly with right param's type", () => {
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
    expect(() => {
      sum([2], 3);
    }).toThrow(TypeException);
    expect(() => {
      sum(2, [3]);
    }).toThrow(TypeException);
    expect(() => {
      sum("2", 3);
    }).toThrow(TypeException);
    expect(() => {
      sum(2, "3");
    }).toThrow(TypeException);
    expect(() => {
      sum(2, undefined);
    }).toThrow(TypeException);
    expect(() => {
      sum(null, 3);
    }).toThrow(TypeException);
    expect(() => {
      sum(true, 3);
    }).toThrow(TypeException);
    expect(() => {
      sum(2, false);
    }).toThrow(TypeException);
  });

  it("should push a NumOfVariablesException when wrong num of params", () => {
    expect(() => {
      sum(2);
    }).toThrow(NumOfVariablesException);
    expect(() => {
      sum(2, 3, 4);
    }).toThrow(NumOfVariablesException);
  });
});

describe("The mul function", () => {
  it("should works correctly with right param's type", () => {
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
    expect(() => {
      mul([2], 3);
    }).toThrow(TypeException);
    expect(() => {
      mul(2, [3]);
    }).toThrow(TypeException);
    expect(() => {
      mul("2", 3);
    }).toThrow(TypeException);
    expect(() => {
      mul(2, "3");
    }).toThrow(TypeException);
    expect(() => {
      mul(2, undefined);
    }).toThrow(TypeException);
    expect(() => {
      mul(null, 3);
    }).toThrow(TypeException);
    expect(() => {
      mul(true, 3);
    }).toThrow(TypeException);
    expect(() => {
      mul(2, false);
    }).toThrow(TypeException);
  });

  it("should push a NumOfVariablesException when wrong num of params", () => {
    expect(() => {
      mul(2);
    }).toThrow(NumOfVariablesException);
    expect(() => {
      mul(2, 3, 4);
    }).toThrow(NumOfVariablesException);
  });
});

describe("The getStringsLength function", () => {
  it("should works correctly with right param's type", () => {
    expect(getStringsLength("", "")).toBe(0);
    expect(getStringsLength(" ", "")).toBe(1);
    expect(getStringsLength("", " ")).toBe(1);
    expect(getStringsLength("some", "string")).toBe(10);
    expect(getStringsLength(" some", " text here")).toBe(15);
  });

  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      getStringsLength(2, "test");
    }).toThrow(TypeException);
    expect(() => {
      getStringsLength("test", 3);
    }).toThrow(TypeException);
    expect(() => {
      getStringsLength([2], "test");
    }).toThrow(TypeException);
    expect(() => {
      getStringsLength("test", [3]);
    }).toThrow(TypeException);
    expect(() => {
      getStringsLength("test", undefined);
    }).toThrow(TypeException);
    expect(() => {
      getStringsLength(null, "test");
    }).toThrow(TypeException);
    expect(() => {
      getStringsLength(true, "test");
    }).toThrow(TypeException);
    expect(() => {
      getStringsLength("test", false);
    }).toThrow(TypeException);
  });

  it("should push a NumOfVariablesException when wrong num of params", () => {
    expect(() => {
      getStringsLength("one");
    }).toThrow(NumOfVariablesException);
    expect(() => {
      getStringsLength("one", "two", "three");
    }).toThrow(NumOfVariablesException);
  });
});

describe("The getSumOfInlineDigits function", () => {
  it("should works correctly with right param's type", () => {
    [
      ["123", 6],
      ["321", 6],
      ["707", 14],
      ["777", 21],
    ].forEach((data) => {
      jest.spyOn(window, "prompt").mockImplementation(() => data[0]);
      jest.spyOn(console, "log");

      const num = +askFor("Type a number with 3 digits:");
      log(getSumOfInlineDigits(num));

      expect(console.log).toHaveBeenCalledWith(data[1]);
    });
  });

  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      getSumOfInlineDigits("123");
    }).toThrow(TypeException);
    expect(() => {
      getSumOfInlineDigits(undefined);
    }).toThrow(TypeException);
    expect(() => {
      getSumOfInlineDigits(null);
    }).toThrow(TypeException);
    expect(() => {
      getSumOfInlineDigits(true);
    }).toThrow(TypeException);
    expect(() => {
      getSumOfInlineDigits(false);
    }).toThrow(TypeException);
    expect(() => {
      getSumOfInlineDigits([1, 2, 3]);
    }).toThrow(TypeException);
  });

  it(`should push a ParamLengthException when the number's length is not 3`, () => {
    expect(() => {
      getSumOfInlineDigits(1);
    }).toThrow(ParamLengthException);
    expect(() => {
      getSumOfInlineDigits(12);
    }).toThrow(ParamLengthException);
    expect(() => {
      getSumOfInlineDigits(1234);
    }).toThrow(ParamLengthException);
    expect(() => {
      getSumOfInlineDigits(12345);
    }).toThrow(ParamLengthException);
  });

  it("should push a NumOfVariablesException when wrong num of params", () => {
    expect(() => {
      getSumOfInlineDigits();
    }).toThrow(NumOfVariablesException);
    expect(() => {
      getSumOfInlineDigits(1, 2);
    }).toThrow(NumOfVariablesException);
  });
});
