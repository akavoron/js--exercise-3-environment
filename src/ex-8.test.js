import {
  checkFormatDate,
  getDateFromString,
  getDayOfWeek,
  getMinutes,
  getLatest,
} from "./ex-8";

import {
  errMsg,
  TypeException,
  NumOfVariablesException,
  ParamFormatException,
} from "./exceptions";

describe("Function checkFormatDate", () => {
  it("has exactly 1 parameters", () => {
    try {
      expect(checkFormatDate()).toThrow(NumOfVariablesException);
      expect(checkFormatDate("01.10.2020", "02.10.2020")).toThrow(
        NumOfVariablesException
      );
    } catch (err) {
      errMsg(err);
    }
  });

  it("should push a TypeException when the param's type is wrong", () => {
    try {
      expect(checkFormatDate(10)).toThrow(TypeException);
      expect(checkFormatDate(["10"])).toThrow(TypeException);
      expect(checkFormatDate({ value: "10" })).toThrow(TypeException);
      expect(checkFormatDate(false)).toThrow(TypeException);
      expect(checkFormatDate(true)).toThrow(TypeException);
      expect(checkFormatDate(null)).toThrow(TypeException);
      expect(checkFormatDate(undefined)).toThrow(TypeException);
    } catch (err) {
      errMsg(err);
    }
  });

  it("should push a ParamFormatException when the param has the wrong format", () => {
    try {
      expect(checkFormatDate("01-10-2020")).toThrow(ParamFormatException);
      expect(checkFormatDate("01 10 2020")).toThrow(ParamFormatException);
      expect(checkFormatDate("2020.10.01")).toThrow(ParamFormatException);

      expect(checkFormatDate("1.10.2020")).toThrow(ParamFormatException);
      expect(checkFormatDate("01.1.2020")).toThrow(ParamFormatException);
      expect(checkFormatDate("01.10.20")).toThrow(ParamFormatException);

      expect(checkFormatDate("00.10.2020")).toThrow(ParamFormatException);
      expect(checkFormatDate("35.10.2020")).toThrow(ParamFormatException);
      expect(checkFormatDate("01.00.2020")).toThrow(ParamFormatException);
      expect(checkFormatDate("01.14.2020")).toThrow(ParamFormatException);
    } catch (err) {
      errMsg(err);
    }
  });
});

describe("Function getDateFromString", () => {
  it("has exactly 1 parameters", () => {
    try {
      expect(getDateFromString()).toThrow(NumOfVariablesException);
      expect(getDateFromString("01.10.2020", "02.10.2020")).toThrow(
        NumOfVariablesException
      );
    } catch (err) {
      errMsg(err);
    }
  });

  it("should push a TypeException when the param's type is wrong", () => {
    try {
      expect(getDayOfWeek(10)).toThrow(TypeException);
      expect(getDayOfWeek(["10"])).toThrow(TypeException);
      expect(getDayOfWeek({ value: "10" })).toThrow(TypeException);
      expect(getDayOfWeek(false)).toThrow(TypeException);
      expect(getDayOfWeek(true)).toThrow(TypeException);
      expect(getDayOfWeek(null)).toThrow(TypeException);
      expect(getDayOfWeek(undefined)).toThrow(TypeException);
    } catch (err) {
      errMsg(err);
    }
  });

  it("should returns a number", () => {
    expect(typeof getDayOfWeek("10.10.2020")).toBe("number");
  });

  it("should works correctly", () => {
    try {
      expect(getDayOfWeek("07.10.2018")).toBe(7); // вс
      expect(getDayOfWeek("19.03.2019")).toBe(2); // вт
      expect(getDayOfWeek("02.12.2020")).toBe(3); // ср
    } catch (err) {
      errMsg(err);
    }
  });
});

describe("Function getDayOfWeek", () => {
  it("has exactly 1 parameters", () => {
    try {
      expect(getDayOfWeek("01.10.2020", "02.10.2020")).toThrow(
        NumOfVariablesException
      );
    } catch (err) {
      errMsg(err);
    }
  });

  it("should push a TypeException when the param's type is wrong", () => {
    try {
      expect(getDayOfWeek(10)).toThrow(TypeException);
      expect(getDayOfWeek(["10"])).toThrow(TypeException);
      expect(getDayOfWeek({ value: "10" })).toThrow(TypeException);
      expect(getDayOfWeek(false)).toThrow(TypeException);
      expect(getDayOfWeek(true)).toThrow(TypeException);
      expect(getDayOfWeek(null)).toThrow(TypeException);
      expect(getDayOfWeek(undefined)).toThrow(TypeException);
    } catch (err) {
      errMsg(err);
    }
  });

  it("should returns a number", () => {
    expect(typeof getDayOfWeek("10.10.2020")).toBe("number");
  });

  it("should works correctly", () => {
    try {
      expect(getDayOfWeek("07.10.2018")).toBe(7); // sunday
      expect(getDayOfWeek("19.03.2019")).toBe(2); // tuesday
      expect(getDayOfWeek("02.12.2020")).toBe(3); // wednesday
    } catch (err) {
      errMsg(err);
    }
  });
});

describe("Function getMinutes", () => {
  let OriginalDate;

  beforeEach(() => {
    OriginalDate = window.Date;
    window.Date = () => {
      const date = new OriginalDate();
      date.setFullYear(2020);
      date.setMonth(0);
      date.setDate(1);
      date.setHours(1);
      date.setMinutes(1);
      return date;
    };
  });

  it("should returns a number", () => {
    expect(getMinutes()).toBe("number");
  });

  it("should works correctly", () => {
    try {
      expect(getMinutes()).toBe(61);
    } catch (err) {
      errMsg(err);
    }
  });

  afterEach(() => {
    window.Date = OriginalDate;
  });
});

describe("Function getLatest", () => {
  it("has exactly 2 parameters", () => {
    try {
      expect(getLatest()).toThrow(NumOfVariablesException);
      expect(getLatest("01.10.2020")).toThrow(NumOfVariablesException);
      expect(getLatest("01.10.2020", "10.10.2020", "15.10.2020")).toThrow(
        NumOfVariablesException
      );
    } catch (err) {
      errMsg(err);
    }
  });

  it("should push a TypeException when the param's type is wrong", () => {
    try {
      expect(getLatest(10, "01.10.2020")).toThrow(TypeException);
      expect(getLatest("01.10.2020", ["10"])).toThrow(TypeException);
      expect(getLatest({ value: "10" }, "01.10.2020")).toThrow(TypeException);
      expect(getLatest(false, "01.10.2020")).toThrow(TypeException);
      expect(getLatest("01.10.2020", true)).toThrow(TypeException);
      expect(getLatest("01.10.2020", null)).toThrow(TypeException);
      expect(getLatest(undefined, "01.10.2020")).toThrow(TypeException);
    } catch (err) {
      errMsg(err);
    }
  });

  it("should returns a string", () => {
    expect(typeof getLatest("07.10.2020", "04.11.2020")).toBe("string");
  });

  it("should works correctly", () => {
    try {
      expect(getLatest("07.10.2020", "04.11.2020")).toBe("04.11.2020");
    } catch (err) {
      errMsg(err);
    }
  });
});
