import "./quantitySelector.css";
import { createQuantitySelector } from "./quantitySelector";

export default { title: "Quantity Selector" };

export const coffeeSelector = () => {
  const quantitySelector = createQuantitySelector();

  return quantitySelector;
};
