import "./list.css";
import { createElement } from "../../utils/elements";
import espressoSrc from "../../assets/espresso.svg";
import cappuccinoSrc from "../../assets/cappuccino.svg";
import macchiatoSrc from "../../assets/macchiato.svg";
import mochaSrc from "../../assets/mocha.svg";
import latteSrc from "../../assets/latte.svg";
import arrowSrc from "../../assets/right.svg";
// import syntax: https://javascript.info/import-export
// "{ createElement }" syntax destructuring, noch nicht verstehen

export function createList() {
  // assign array X to variable "coffees"
  const coffees = [
    { name: "Espresso", imgSrc: espressoSrc, imgClass: "list-item_icon" },
    { name: "Cappuchino", imgSrc: cappuccinoSrc, imgClass: "list-item_icon" },
    { name: "Macchiato", imgSrc: macchiatoSrc, imgClass: "list-item_icon" },
    { name: "Mocha", imgSrc: mochaSrc, imgClass: "list-item_icon" },
    { name: "Latte", imgSrc: latteSrc, imgClass: "list-item_icon" },
  ];

  // create parent element "ul" with class "list"
  const list = createElement("ul");
  list.className = "list";

  // forEach is an array method: https://javascript.info/array-methods
  // "(parameter) => {}" is a callback function
  // it gets called for each "thing" in the array
  // arrow functions: https://javascript.info/arrow-functions-basics
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
