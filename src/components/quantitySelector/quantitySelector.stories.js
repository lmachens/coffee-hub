import "./quantitySelector.css";
import { createQuantitySelector } from "./quantitySelector";

export default { title: "Quantity Selector" };

export const coffeeSelector = () => {
  const quantitySelector = createQuantitySelector();

  return quantitySelector;
};
// export const coffeeSelector = () => {
//   useEffect(() => {
//     // Select buttons here
//     const minusButton = document.querySelector(".quantitySelector__minus");
//     const plusButton = document.querySelector(".quantitySelector__plus");
//     const resultElement = document.querySelector(".quantitySelector__result");

//     minusButton.addEventListener("click", () => {
//       const oldResult = Number(resultElement.innerHTML);
//       if (oldResult === 2) {
//         minusButton.disabled = true;
//       }
//       resultElement.innerHTML = oldResult - 1;
//     });
//     plusButton.addEventListener("click", () => {
//       const oldResult = Number(resultElement.innerHTML);
//       if (oldResult === 1) {
//         minusButton.disabled = false;
//       }
//       resultElement.innerHTML = oldResult + 1;
//     });
//   });

//   return quantitySelector;
// };
