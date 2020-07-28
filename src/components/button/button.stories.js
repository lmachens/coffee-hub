import "./button.css";

export default { title: "Button" };

export const addToCart = () => {
  document.createElement("button");
  document.createElement("button");
  document.createElement("button");
  document.createElement("button");
  document.createElement("button");
  document.createElement("button");
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerHTML = "Add to cart";

  return button;
};
