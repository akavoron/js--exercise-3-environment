import { createLayout } from "./ex-7";

const el = document.createElement("div");
createLayout(el);

const form = el.querySelector("form");
const inpText = el.querySelector("input[type=text]");
const button = el.querySelector("button");
const content = el.querySelector(".content");

describe("check layout", () => {
  it("we have all necessary elements", () => {
    expect(form).not.toBe(null);
    expect(inpText).not.toBe(null);
    expect(button).not.toBe(null);
    expect(content).not.toBe(null);
  });

  it("the input text is hidden by default", () => {
    expect(button.hidden).toBe(true);
  });

  it("we have three paragraphs", () => {
    expect(content.querySelectorAll("p").length).toBe(3);
  });

  it("the input[type=text] is empty", () => {
    expect(inpText.value).toBe("");
  });

  it("adds new paragraphs at the end of a list when the form is submitted", () => {
    inpText.value = "test";
    form.dispatchEvent(new Event("submit"));
    expect(content.querySelector("p:last-child").innerText).toBe("test");
  });

  it("removes old paragraphs when there are too many", () => {
    for (let i = 0; i < 10; i++) {
      form.dispatchEvent(new Event("submit"));
    }
    expect(content.querySelectorAll("p").length).toBe(5);
  });
});
