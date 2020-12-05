import {
  getParamsOfCircle,
  isRightTriagle,
  getRootOfQuadraticEquation,
} from "./ex-9";

import { askFor, log } from './render';

describe("Function isRightTriagle", () => {
  it("works correctly", () => {
    expect(isRightTriagle(2, 3, 13)).toBe(true);
    expect(isRightTriagle(3, 2, 15)).toBe(false);
  });
});

describe("Function getParamsOfCircle", () => {
  const originalPrompt = window.prompt;

  beforeEach(() => {
    window.prompt = () => {
      return "20";
    };
  });
  afterEach(() => {
    window.prompt = originalPrompt;
  });

  it("works correctly", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => '20');
    jest.spyOn(console, "log");

    const radius = +askFor("Type R");
    const circleParams = getParamsOfCircle(radius);
    const c = +circleParams.c.toFixed(1);
    const s = +circleParams.s.toFixed(1);
    log(`Длина окружности: ${c}, площадь: ${s}`);

    // c: 2 * pi * r,
    // s: pi * r ** 2,
    expect(console.log)
      .toHaveBeenCalledWith(`Длина окружности: 125.7, площадь: 1256.6`);
  });
});

describe("Function getRootOfQuadraticEquation", () => {
  it("works correctly", () => {
    // a=1, b=-5, c=9  result: null
    // a=1, b=-4, c=4  result: x=2
    // a=1, b=3, c=-4  result: x1=1, x2=-4

    expect(getRootOfQuadraticEquation(1, -5, 9)).toBe(null);
    expect(getRootOfQuadraticEquation(1, -4, 4)).toBe(2);

    const obj = getRootOfQuadraticEquation(1, 3, -4);
    expect(obj.x1).toBe(1);
    expect(obj.x2).toBe(-4);
  });
});
