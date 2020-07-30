import "./list.css";
import { createList } from "./list";

export default { title: "List" };

export const coffeeList = () => {
  const list = createList();
  return list;
};
