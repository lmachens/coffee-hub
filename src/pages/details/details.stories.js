import "./details.css";
import { createButton } from "../../components/button/button";
import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";
import { createElement } from "../../utils/elements";
import macchiatoSrc from "../../assets/macchiato.svg";

export default { title: "Pages/Details" };

export const basic = () => {
  const main = createElement("main", { className: "details" });
  const header = createElement("header", { className: "details__header" });

  const title = createElement("h2", { innerText: "Macchiato" });
  header.append(title);
  const img = createElement("img", { src: macchiatoSrc, alt: "Macchiato cup" });
  header.append(img);

  const form = createElement("form", { className: "details__form" });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const coffeeName = createElement("div", { innerText: "Macchiato" });
  const price = createElement("div", { innerText: "$2.80" });
  coffeeName.append(price);

  const coffeeSize = createElement("label", { innerText: "Size" });
  const size = createElement("input");
  coffeeSize.append(size);

  const coffeeSugar = createElement("label", { innerText: "Sugar" });
  const sugar = createElement("input");
  coffeeSugar.append(sugar);

  const quantitySelector = createQuantitySelector();
  const button = createButton("Add to cart");

  main.append(header);

  form.append(coffeeName);
  form.append(quantitySelector);
  form.append(coffeeSize);
  form.append(coffeeSugar);
  form.append(button);

  main.append(form);

  return main;
};
