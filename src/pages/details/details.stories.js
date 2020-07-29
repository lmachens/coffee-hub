import { createDetailsPage } from "./details";

export default { title: "Pages/Details" };

export const basic = () => {
  const detailsPage = createDetailsPage();
  return detailsPage;
};
