import "./sizeSelector.css";
import { createElement } from "../../utils/elements";
import macchiatoSrc from "../../assets/macchiato.svg";

export const createSizeSelector = () => {
  const sizeSelector = createElement("div", { className: "size" });
  const small = createElement("input", {
    type: "radio",
    name: "size",
    value: "S",
  });
  const medium = createElement("input", {
    type: "radio",
    name: "size",
    value: "M",
  });
  const large = createElement("input", {
    type: "radio",
    name: "size",
    value: "L",
  });
  const smallLabel = createElement("label");
  smallLabel.append(small);
  const smallImg = createElement("img", {
    src: macchiatoSrc,
    className: "size__small",
  });
  smallLabel.append(smallImg);
  const mediumLabel = createElement("label");
  mediumLabel.append(medium);
  const mediumImg = createElement("img", {
    src: macchiatoSrc,
    className: "size__medium",
  });
  mediumLabel.append(mediumImg);
  const largeLabel = createElement("label");
  largeLabel.append(large);
  const largeImg = createElement("img", {
    src: macchiatoSrc,
    className: "size__large",
  });
  largeLabel.append(largeImg);

  sizeSelector.append(smallLabel);
  sizeSelector.append(mediumLabel);
  sizeSelector.append(largeLabel);

  return sizeSelector;
};
