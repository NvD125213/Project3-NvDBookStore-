import { selector } from "recoil";
import { categories, filterCategoriesValue } from ".";

export const filterCategories = selector({
  key: "filterProducts",
  get: ({ get }) => {
    const categoryState = get(categories);
    const filterCategoriesValueState = get(filterCategoriesValue);

    if (filterCategoriesValueState.length) {
      return categoryState.filter(
        (item) => item.name.includes(filterCategoriesValueState.trim()) && item
      );
    }
    return categories;
  },
});