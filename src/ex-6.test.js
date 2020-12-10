import { diff, isWord, pow } from "./ex-6";

import { TypeException, NumOfVariablesException } from "./exceptions";

describe("Function diff", () => {
  it("has exactly 2 parameters", () => {
    expect(() => {
      diff();
    }).toThrow(NumOfVariablesException);
    expect(() => {
      diff(1);
    }).toThrow(NumOfVariablesException);
    expect(() => {
      diff(1, 2, 3);
    }).toThrow(NumOfVariablesException);
  });
  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      diff("-5", 5);
    }).toThrow(TypeException);
    expect(() => {
      diff(-5, null);
    }).toThrow(TypeException);
    expect(() => {
      diff(undefined, 5);
    }).toThrow(TypeException);
    expect(() => {
      diff(true, 5);
    }).toThrow(TypeException);
    expect(() => {
      diff(-5, false);
    }).toThrow(TypeException);
  });
  it("should returns number", () => {
    expect(typeof diff(5, 2)).toBe("number");
  });
  it("should works correctly", () => {
    expect(diff(5, 2)).toBe(3);
    expect(diff(7, 20)).toBe(13);
  });
});

describe("Function isWord", () => {
  it("has exactly 1 parameter", () => {
    expect(() => {
      isWord();
    }).toThrow(NumOfVariablesException);
    expect(() => {
      isWord("some", "text");
    }).toThrow(NumOfVariablesException);
  });
  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      isWord(-5);
    }).toThrow(TypeException);
    expect(() => {
      isWord(["some", "text"]);
    }).toThrow(TypeException);
    expect(() => {
      isWord({ prop: "value" });
    }).toThrow(TypeException);
    expect(() => {
      isWord(true);
    }).toThrow(TypeException);
    expect(() => {
      isWord(false);
    }).toThrow(TypeException);
    expect(() => {
      isWord(undefined);
    }).toThrow(TypeException);
  });
  it("should returns boolean", () => {
    expect(typeof isWord("text")).toBe("boolean");
    expect(typeof isWord(" some text")).toBe("boolean");
  });
  it("should works correctly", () => {
    expect(isWord("text")).toBe(true);
    expect(isWord(" some text")).toBe(false);
    expect(isWord("  some")).toBe(true);
  });
});

describe("Function pow", () => {
  it("has exactly 2 parameters", () => {
    expect(() => {
      pow();
    }).toThrow(NumOfVariablesException);
    expect(() => {
      pow(1);
    }).toThrow(NumOfVariablesException);
    expect(() => {
      pow(1, 2, 3);
    }).toThrow(NumOfVariablesException);
  });
  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      pow("-5", 5);
    }).toThrow(TypeException);
    expect(() => {
      pow(5, []);
    }).toThrow(TypeException);
    expect(() => {
      pow([], 2);
    }).toThrow(TypeException);
    expect(() => {
      pow(null, 2);
    }).toThrow(TypeException);
    expect(() => {
      pow(5, undefined);
    }).toThrow(TypeException);
    expect(() => {
      pow(5, false);
    }).toThrow(TypeException);
    expect(() => {
      pow(true, 2);
    }).toThrow(TypeException);
  });
  it("should returns number", () => {
    expect(typeof pow(2, 3)).toBe("number");
  });
  it("should works correctly", () => {
    expect(pow(3, 2)).toBe(9);
    expect(pow(2, 3)).toBe(8);
    expect(pow(0, 0)).toBe(1);
    expect(pow(5, 0)).toBe(1);
    expect(pow(5, -2)).toBe(0.04);
    expect(pow(-5, 2)).toBe(25);
    expect(isWord(" some text")).toBe(false);
  });
});
