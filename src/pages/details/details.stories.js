import { createButton } from "../../components/button/button";

export default { title: "Pages/Details" };

export const basic = () => {
  const main = document.createElement("main");

  // const quantitySelector = createQuantitySelector();
  // main.append(quantitySelector);
  const button = createButton("Add to cart");
  main.append(button);

  return main;
};
