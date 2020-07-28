import "./button.css";

export default { title: "Button" };

function createButton(buttonText) {
  const button = document.createElement("button");
  button.className = "btn";
  const text = document.createTextNode(buttonText);
  button.append(text);

  button.addEventListener("click", () => {
    alert("Button clicked");
  });

  return button;
}

export const addToCart = () => {
  const button = createButton("Add to cart");
  return button;
};
