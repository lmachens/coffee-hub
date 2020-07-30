import "./list.css";
import { createElement } from "../../utils/elements";
import espressoSrc from "../../assets/espresso.svg";
import cappuccinoSrc from "../../assets/cappuccino.svg";
import macchiatoSrc from "../../assets/macchiato.svg";
import mochaSrc from "../../assets/mocha.svg";
import latteSrc from "../../assets/latte.svg";
import arrowSrc from "../../assets/right.svg";

export function createList() {
  const coffees = [
    { name: "Espresso", imgSrc: espressoSrc, imgClass: "list-item_icon" },
    { name: "Cappuchino", imgSrc: cappuccinoSrc, imgClass: "list-item_icon" },
    { name: "Macchiato", imgSrc: macchiatoSrc, imgClass: "list-item_icon" },
    { name: "Mocha", imgSrc: mochaSrc, imgClass: "list-item_icon" },
    { name: "Latte", imgSrc: latteSrc, imgClass: "list-item_icon" },
  ];

  const list = createElement("ul");
  list.className = "list";

  coffees.forEach((coffee) => {
    const listItem = createElement("li");
    const coffeeImg = createElement("img", {
      src: coffee.imgSrc,
    });
    listItem.append(coffeeImg);
    coffeeImg.className = coffee.imgClass;

    const span = createElement("span", { innerText: coffee.name });
    listItem.append(span);

    const arrowIcon = createElement("img", {
      src: arrowSrc,
    });
    listItem.append(arrowIcon);

    list.append(listItem);
  });

  return list;
}
