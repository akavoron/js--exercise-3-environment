import { advanceTo, clear } from "jest-date-mock";

import {
  checkFormatDate,
  getDateFromString,
  getDayOfWeek,
  getDayOfWeekMessage,
  getMinutes,
  getLatest,
} from "./ex-8";

import {
  TypeException,
  NumOfVariablesException,
  ParamFormatException,
} from "./exceptions";

describe("Function checkFormatDate", () => {
  it("has exactly 1 parameters", () => {
    expect(() => {
      checkFormatDate();
    }).toThrow(NumOfVariablesException);
    expect(() => {
      checkFormatDate("01.10.2020", "02.10.2020");
    }).toThrow(NumOfVariablesException);
  });

  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      checkFormatDate(10);
    }).toThrow(TypeException);
    expect(() => {
      checkFormatDate(["10"]);
    }).toThrow(TypeException);
    expect(() => {
      checkFormatDate({ value: "10" });
    }).toThrow(TypeException);
    expect(() => {
      checkFormatDate(false);
    }).toThrow(TypeException);
    expect(() => {
      checkFormatDate(true);
    }).toThrow(TypeException);
    expect(() => {
      checkFormatDate(null);
    }).toThrow(TypeException);
    expect(() => {
      checkFormatDate(undefined);
    }).toThrow(TypeException);
  });

  it("should push a ParamFormatException when the param has the wrong format", () => {
    expect(() => {
      checkFormatDate("01-10-2020");
    }).toThrow(ParamFormatException);
    expect(() => {
      checkFormatDate("01 10 2020");
    }).toThrow(ParamFormatException);
    expect(() => {
      checkFormatDate("2020.10.01");
    }).toThrow(ParamFormatException);

    expect(() => {
      checkFormatDate("1.10.2020");
    }).toThrow(ParamFormatException);
    expect(() => {
      checkFormatDate("01.1.2020");
    }).toThrow(ParamFormatException);
    expect(() => {
      checkFormatDate("01.10.20");
    }).toThrow(ParamFormatException);

    expect(() => {
      checkFormatDate("00.10.2020");
    }).toThrow(ParamFormatException);
    expect(() => {
      checkFormatDate("35.10.2020");
    }).toThrow(ParamFormatException);
    expect(() => {
      checkFormatDate("01.00.2020");
    }).toThrow(ParamFormatException);
    expect(() => {
      checkFormatDate("01.14.2020");
    }).toThrow(ParamFormatException);
  });
});

describe("Function getDateFromString", () => {
  it("has exactly 1 parameters", () => {
    expect(() => {
      getDateFromString();
    }).toThrow(NumOfVariablesException);
    expect(() => {
      getDateFromString("01.10.2020", "02.10.2020");
    }).toThrow(NumOfVariablesException);
  });

  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      getDateFromString(10);
    }).toThrow(TypeException);
    expect(() => {
      getDateFromString(["10"]);
    }).toThrow(TypeException);
    expect(() => {
      getDateFromString({ value: "10" });
    }).toThrow(TypeException);
    expect(() => {
      getDateFromString(false);
    }).toThrow(TypeException);
    expect(() => {
      getDateFromString(true);
    }).toThrow(TypeException);
    expect(() => {
      getDateFromString(null);
    }).toThrow(TypeException);
    expect(() => {
      getDateFromString(undefined);
    }).toThrow(TypeException);
  });

  it("should returns a Date object", () => {
    expect(getDateFromString("10.10.2020") instanceof Date).toBe(true);
  });

  it("should works correctly", () => {
    expect(getDateFromString("07.10.2018").getFullYear()).toBe(2018);
    expect(getDateFromString("07.10.2018").getMonth()).toBe(9);
    expect(getDateFromString("07.10.2018").getDate()).toBe(7);
  });
});

describe("Function getDayOfWeek", () => {
  it("has exactly 1 parameters", () => {
    expect(() => {
      getDayOfWeek("01.10.2020", "02.10.2020");
    }).toThrow(NumOfVariablesException);
  });

  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      getDayOfWeek(10);
    }).toThrow(TypeException);
    expect(() => {
      getDayOfWeek(["10"]);
    }).toThrow(TypeException);
    expect(() => {
      getDayOfWeek({ value: "10" });
    }).toThrow(TypeException);
    expect(() => {
      getDayOfWeek(false);
    }).toThrow(TypeException);
    expect(() => {
      getDayOfWeek(true);
    }).toThrow(TypeException);
    expect(() => {
      getDayOfWeek(null);
    }).toThrow(TypeException);
    expect(() => {
      getDayOfWeek(undefined);
    }).toThrow(TypeException);
  });

  it("should returns a number", () => {
    expect(typeof getDayOfWeek("10.10.2020")).toBe("number");
  });

  it("should works correctly", () => {
    [
      ["07.10.2018", 7],
      ["19.03.2019", 2],
      ["02.12.2020", 3],
    ].forEach((data) => {
      expect(getDayOfWeek(data[0])).toBe(data[1]);
    });
  });
});

describe("Function getDayOfWeekMessage", () => {
  it("should works correctly", () => {
    [
      ["07.10.2018", "вс"],
      ["19.03.2019", "вт"],
      ["02.12.2020", "ср"],
    ].forEach((data) => {
      jest.spyOn(window, "prompt").mockImplementation(() => data[0]);
      jest.spyOn(console, "log");

      getDayOfWeekMessage();

      expect(console.log).toHaveBeenCalledWith(data[1]);
    });
  });
});

describe("Function getMinutes", () => {
  beforeEach(() => {
    advanceTo(new Date(2018, 5, 27, 3, 10, 0));
  });

  afterEach(() => {
    clear();
  });

  it("should returns a number", () => {
    expect(typeof getMinutes()).toBe("number");
  });

  it("should works correctly", () => {
    expect(getMinutes()).toBe(190);
  });
});

describe("Function getLatest", () => {
  it("has exactly 2 parameters", () => {
    expect(() => {
      getLatest();
    }).toThrow(NumOfVariablesException);
    expect(() => {
      getLatest("01.10.2020");
    }).toThrow(NumOfVariablesException);
    expect(() => {
      getLatest("01.10.2020", "10.10.2020", "15.10.2020");
    }).toThrow(NumOfVariablesException);
  });

  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      getLatest(10, "01.10.2020");
    }).toThrow(TypeException);
    expect(() => {
      getLatest("01.10.2020", ["10"]);
    }).toThrow(TypeException);
    expect(() => {
      getLatest({ value: "10" }, "01.10.2020");
    }).toThrow(TypeException);
    expect(() => {
      getLatest(false, "01.10.2020");
    }).toThrow(TypeException);
    expect(() => {
      getLatest("01.10.2020", true);
    }).toThrow(TypeException);
    expect(() => {
      getLatest("01.10.2020", null);
    }).toThrow(TypeException);
    expect(() => {
      getLatest(undefined, "01.10.2020");
    }).toThrow(TypeException);
  });

  it("should returns a string", () => {
    expect(typeof getLatest("07.10.2020", "04.11.2020")).toBe("string");
  });

  it("should works correctly", () => {
    expect(getLatest("07.10.2020", "04.11.2020")).toBe("04.11.2020");
  });
});
