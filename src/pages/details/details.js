import "./details.css";
import macchiatoSrc from "../../assets/macchiato.svg";
import { createButton } from "../../components/button/button";
import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";
import { createElement } from "../../utils/elements";
import { createSizeSelector } from "../../components/sizeSelector/sizeSelector";

const createForm = () => {
  const coffeeName = createElement("div", { innerText: "Macchiato" });
  const price = createElement("div", { innerText: "$2.80" });
  coffeeName.append(price);

  const coffeeSize = createElement("label", { innerText: "Size" });
  const size = createSizeSelector();
  coffeeSize.append(size);

  const coffeeSugar = createElement("label", { innerText: "Sugar" });
  const sugar = createElement("input", { name: "sugar" });
  coffeeSugar.append(sugar);

  const quantitySelector = createQuantitySelector();
  const button = createButton("Add to cart");

  const form = createElement("form", { className: "details__form" });
  form.append(coffeeName);
  form.append(quantitySelector);
  form.append(coffeeSize);
  form.append(coffeeSugar);
  form.append(button);
  return form;
};

const createHeader = () => {
  const header = createElement("header", { className: "details__header" });

  const title = createElement("h2", { innerText: "Macchiato" });
  header.append(title);
  const img = createElement("img", { src: macchiatoSrc, alt: "Macchiato cup" });
  header.append(img);
  return header;
};

export const createDetailsPage = () => {
  const main = createElement("main", { className: "details" });
  const header = createHeader();

  const form = createForm();

  main.append(header);
  main.append(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    // List key/value pairs https://javascript.info/formdata
    for (let [name, value] of formData) {
      console.log(`${name} = ${value}`); // key1=value1, then key2=value2
    }
    alert("form submitted. see console for values");
  });

  return main;
};
