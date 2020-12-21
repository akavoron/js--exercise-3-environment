export function createLayout(el) {
  const h1 = document.createElement("h1");
  const form = document.createElement("form");
  const inpText = document.createElement("input");
  const button = document.createElement("button");
  const content = document.createElement("div");

  // create header
  h1.innerText = "Exercise 7";
  el.appendChild(h1);

  // create form
  inpText.setAttribute("type", "text");
  inpText.setAttribute("value", "");
  inpText.setAttribute("placeholder", "Type text here...");

  button.setAttribute("hidden", "");
  button.innerText = "Add";

  form.appendChild(inpText);
  form.appendChild(button);

  el.appendChild(form);

  // create content
  content.className = "content";
  content.innerHTML = `
    <p>Some text here</p>
    <p>Just another text</p>
    <p>Lorem Ipsum</p>
  `;
  el.appendChild(content);

  function addNewParagraph(text) {
    const newP = document.createElement("p");
    newP.innerText = text;
    content.appendChild(newP);
  }

  function clearUnnecessaryPar(num = 5) {
    if (content.querySelectorAll("p").length > num) {
      content.querySelector("p").remove();
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    addNewParagraph(inpText.value);
    clearUnnecessaryPar();

    inpText.value = "";
    button.hidden = true;
  });

  inpText.addEventListener("keyup", () => {
    button.hidden = inpText.value === "";
  });
}
