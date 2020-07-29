import minusSrc from "../../assets/minus.svg";
import plusSrc from "../../assets/plus.svg";

export const createQuantitySelector = () => {
  // Outer div
  const quantitySelector = document.createElement("div");
  quantitySelector.className = "quantitySelector";

  // First button (Minus)
  const minusButton = document.createElement("button");
  minusButton.className = "quantitySelector__minus";
  minusButton.disabled = true;

  // Minus image
  const minusImage = document.createElement("img");
  minusImage.src = minusSrc;
  minusImage.alt = "Minus";

  minusButton.append(minusImage);

  // Result
  const resultElement = document.createElement("div");
  resultElement.className = "quantitySelector__result";
  resultElement.innerText = "1";

  // Second button (Plus)
  const plusButton = document.createElement("button");
  plusButton.className = "quantitySelector__plus";

  // Plus image
  const plusImage = document.createElement("img");
  plusImage.src = plusSrc;
  plusImage.alt = "Plus";

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
