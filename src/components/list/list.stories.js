import "./list.css";
import { createList } from "./list";
import { createElement } from "../../utils/elements";

export default { title: "List" };

export const coffeeList = () => {
  const fullWidthContainer = createElement("div", { className: "fullWidth" });
  const list = createList();
  fullWidthContainer.append(list);

  return fullWidthContainer;
};
