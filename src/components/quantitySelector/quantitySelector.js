import minusSrc from "../../assets/minus.svg";
import plusSrc from "../../assets/plus.svg";
import { createElement } from "../../utils/elements";

export const createQuantitySelector = () => {
  // Outer div
  //   const quantitySelector = document.createElement("div");
  //   quantitySelector.className = "quantitySelector";
  const quantitySelector = createElement("div", {
    className: "quantitySelector",
  });

  // First button (Minus)
  //   const minusButton = document.createElement("button");
  //   minusButton.className = "quantitySelector__minus";
  //   minusButton.disabled = true;
  const minusButton = createElement("button", {
    className: "quantitySelector__minus",
    disabled: true,
  });

  // Minus image
  const minusImage = createElement("img", {
    src: minusSrc,
    alt: "Minus",
  });

  minusButton.append(minusImage);

  // Result
  const resultElement = createElement("div", {
    className: "quantitySelector__result",
    innerText: "1",
  });

  // Second button (Plus)
  const plusButton = createElement("button", {
    className: "quantitySelector__plus",
  });

  // Plus image
  const plusImage = createElement("img", {
    src: plusSrc,
    alt: "Plus",
  });

  plusButton.append(plusImage);

  quantitySelector.append(minusButton);
  quantitySelector.append(resultElement);
  quantitySelector.append(plusButton);

  // Add event listeners
  minusButton.addEventListener("click", () => {
    const oldResult = Number(resultElement.innerHTML);
    if (oldResult === 2) {
      minusButton.disabled = true;
    }
    resultElement.innerHTML = oldResult - 1;
  });

  plusButton.addEventListener("click", () => {
    const oldResult = Number(resultElement.innerHTML);
    if (oldResult === 1) {
      minusButton.disabled = false;
    }
    resultElement.innerHTML = oldResult + 1;
  });

  return quantitySelector;
};
