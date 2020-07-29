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
  });

  const minusImage = createElement("img", {
    src: minusSrc,
    alt: "Minus",
  });

  minusButton.append(minusImage);

  const resultElement = createElement("div", {
    className: "quantitySelector__result",
    innerText: "1",
  });

  const plusButton = createElement("button", {
    className: "quantitySelector__plus",
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
