import { atom } from "recoil";

export const categories = atom({
    key: "category",
    default: [],
  });
  
export const categoryState = atom({
  key: "categoryState",
  default: [],
});
  
  export const filterCategoriesValue = atom({
    key: "filterCategoriesValue",
    default: "",
  });

  