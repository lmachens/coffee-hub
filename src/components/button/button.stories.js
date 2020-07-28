import "./button.css";

export default { title: "Button" };

export const addToCart = () => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerHTML = "Add to cart";

  return button;
};
