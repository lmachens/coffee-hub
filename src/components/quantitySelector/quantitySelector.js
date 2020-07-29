export const createQuantitySelector = () => {
  // Outer div
  const quantitySelector = document.createElement("div");
  quantitySelector.className = "quantitySelector";

  // First button (Minus)
  const minusButton = document.createElement("button");
  minusButton.className = "quantitySelector__minus";
  minusButton.innerHTML = "-";
  minusButton.disabled = true;

  // Result
  const resultElement = document.createElement("div");
  resultElement.className = "quantitySelector__result";
  resultElement.innerText = "1";

  // Second button (Plus)
  const plusButton = document.createElement("button");
  plusButton.className = "quantitySelector__plus";
  plusButton.innerHTML = "+";

  quantitySelector.append(minusButton);
  quantitySelector.append(resultElement);
  quantitySelector.append(plusButton);

  return quantitySelector;
};
