export function createButton(buttonText) {
  const button = document.createElement("button");
  button.className = "btn";
  const text = document.createTextNode(buttonText);
  button.append(text);

  button.addEventListener("click", () => {
    alert("Button clicked");
  });

  return button;
}

// export function createPrimaryButton(buttonText) {
//   const button = createButton(buttonText);
//   button.className = "btn btn--primary"
//   return button;
// }
