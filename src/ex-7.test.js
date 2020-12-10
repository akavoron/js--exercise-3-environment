import {
  config,
  inpText,
  btn,
  form,
  content,
  createElements,
  addNewParagraph,
  clearUnnecessaryPar,
  init,
} from "./ex-7";

import { TypeException, NumOfVariablesException } from "./exceptions";

createElements();

describe("On the page", () => {
  it("we have all necessary elements", () => {
    expect(content !== null).toBe(true);
    expect(form !== null).toBe(true);
    expect(inpText !== null).toBe(true);
    expect(btn !== null).toBe(true);
  });
  it("the input text is hidden by default", () => {
    expect(btn.hidden).toBe(true);
  });
  it("we have three paragraphs", () => {
    expect(document.querySelectorAll(".content p").length).toBe(3);
  });
  it("the input[type=text] is empty", () => {
    expect(inpText.value).toBe("");
  });
});

describe("Function init", () => {
  it("attach a listener on the form element", () => {
    init();
    expect(typeof form.onsubmit === "function").toBe(true);
  });
});

describe("Function addNewParagraph", () => {
  const buff = {};

  beforeEach(() => {
    buff.content = content.cloneNode(true);
    buff.form = form.cloneNode(true);
    buff.inpText = inpText.cloneNode(true);
    buff.btn = btn.cloneNode(true);
  });

  afterEach(() => {
    content.replaceWith(buff.content);
    form.replaceWith(buff.form);
    inpText.replaceWith(buff.inpText);
    btn.replaceWith(buff.btn);
  });

  it("adds new paragraphs at the end of a list when the form is submitted", () => {
    init();

    inpText.value = "test";
    form.submit();

    const flag = content.querySelector("p:last-child").innerText === "test";
    expect(flag).toBe(true);
  });

  it("removes old paragraphs when there are too many", () => {
    for (let i = 0; i < config.num * 2; i++) {
      addNewParagraph(`test ${i}`);
      clearUnnecessaryPar(config.num);
    }
    expect(content.querySelectorAll("p").length).toBe(config.num);
  });

  it("has exactly 1 parameters", () => {
    expect(() => {
      addNewParagraph("test", "test2");
    }).toThrow(NumOfVariablesException);
  });
  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      addNewParagraph(10);
    }).toThrow(TypeException);
    expect(() => {
      addNewParagraph(["10"]);
    }).toThrow(TypeException);
    expect(() => {
      addNewParagraph({ value: "10" });
    }).toThrow(TypeException);
    expect(() => {
      addNewParagraph(false);
    }).toThrow(TypeException);
    expect(() => {
      addNewParagraph(true);
    }).toThrow(TypeException);
    expect(() => {
      addNewParagraph(null);
    }).toThrow(TypeException);
    expect(() => {
      addNewParagraph(undefined);
    }).toThrow(TypeException);
  });
});

describe("Function clearUnnecessaryPar", () => {
  it("should push a TypeException when the param's type is wrong", () => {
    expect(() => {
      clearUnnecessaryPar("10");
    }).toThrow(TypeException);
    expect(() => {
      clearUnnecessaryPar(["10"]);
    }).toThrow(TypeException);
    expect(() => {
      clearUnnecessaryPar({ value: "10" });
    }).toThrow(TypeException);
    expect(() => {
      clearUnnecessaryPar(false);
    }).toThrow(TypeException);
    expect(() => {
      clearUnnecessaryPar(true);
    }).toThrow(TypeException);
    expect(() => {
      clearUnnecessaryPar(null);
    }).toThrow(TypeException);
  });
});
