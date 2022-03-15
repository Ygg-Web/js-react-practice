export const setSortBy = ({ type, order }) => ({
  type: "SET_SORT_BY",
  data: { type, order },
});

export const setCategoty = (index) => ({
  type: "SET_CATEGORY",
  data: index,
});
