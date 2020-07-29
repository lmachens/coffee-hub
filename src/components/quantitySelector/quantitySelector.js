import minusSrc from "../../assets/minus.svg";
import plusSrc from "../../assets/plus.svg";
import { createElement } from "../../utils/elements";

export const createQuantitySelector = () => {
  const quantitySelector = createElement("div", {
    className: "quantitySelector",
  });

  const minusButton = createElement("button", {
    className: "quantitySelector__minus",
    disabled: true,
    type: "button",
  });

  const minusImage = createElement("img", {
    src: minusSrc,
    alt: "Minus",
  });

  minusButton.append(minusImage);

  const resultElement = createElement("input", {
    className: "quantitySelector__input",
    value: "1",
    type: "number",
    min: 1,
    max: 9,
    name: "quantity",
  });

  const plusButton = createElement("button", {
    className: "quantitySelector__plus",
    type: "button",
  });

  const plusImage = createElement("img", {
    src: plusSrc,
    alt: "Plus",
  });

  plusButton.append(plusImage);

  quantitySelector.append(minusButton);
  quantitySelector.append(resultElement);
  quantitySelector.append(plusButton);

  minusButton.addEventListener("click", () => {
    const oldResult = Number(resultElement.value);
    if (oldResult === 2) {
      minusButton.disabled = true;
    }
    if (oldResult === 9) {
      plusButton.disabled = false;
    }
    resultElement.value = oldResult - 1;
  });

  plusButton.addEventListener("click", () => {
    const oldResult = Number(resultElement.value);
    if (oldResult === 1) {
      minusButton.disabled = false;
    }
    if (oldResult === 8) {
      plusButton.disabled = true;
    }
    resultElement.value = oldResult + 1;
  });

  return quantitySelector;
};
