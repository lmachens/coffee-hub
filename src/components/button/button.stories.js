import "./button.css";
import { createButton } from "./button";

export default { title: "Button" };

export const addToCart = () => {
  const button = createButton("Add to cart");
  return button;
};

export const emojis = () => {
  const button = createButton("🌗");
  return button;
};
