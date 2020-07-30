import "./list.css";
import { createElement } from "../../utils/elements";
import espressoSrc from "../../assets/espresso.svg";
import cappuccinoSrc from "../../assets/cappuccino.svg";
import macchiatoSrc from "../../assets/macchiato.svg";
import mochaSrc from "../../assets/mocha.svg";
import latteSrc from "../../assets/latte.svg";
// import syntax: https://javascript.info/import-export
// "{ createElement }" syntax destructuring, noch nicht verstehen

export function createList() {
  const coffees = [
    { name: "Espresso", imgSrc: espressoSrc, imgClass: "list-item_icon" },
    { name: "Cappuchino", imgSrc: cappuccinoSrc, imgClass: "list-item_icon" },
    { name: "Macchiato", imgSrc: macchiatoSrc, imgClass: "list-item_icon" },
    { name: "Mocha", imgSrc: mochaSrc, imgClass: "list-item_icon" },
    { name: "Latte", imgSrc: latteSrc, imgClass: "list-item_icon" },
  ];

  // assign array X to variable "coffees"
  const list = createElement("ul");

  // forEach is an array method: https://javascript.info/array-methods
  // "(parameter) => {}" is a callback function
  // it gets called for each "thing" in the array
  // arrow functions: https://javascript.info/arrow-functions-basics
  coffees.forEach((coffee) => {
    const listItem = createElement("li", { innerText: coffee.name });
    const img = createElement("img", {
      src: coffee.imgSrc,
    });

    img.className = coffee.imgClass;
    listItem.prepend(img);
    list.append(listItem);
  });

  return list;
}
