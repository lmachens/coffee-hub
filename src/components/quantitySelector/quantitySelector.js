export const createQuantitySelector = () => {
  // Outer div
  const quantitySelector = document.createElement("div");
  quantitySelector.className = "quantitySelector";

  // First button (Minus)
  const minusButton = document.createElement("button");
  minusButton.className = "quantitySelector__minus";
  minusButton.innerHTML = "-";

  quantitySelector.append(minusButton);

  return quantitySelector;
};
