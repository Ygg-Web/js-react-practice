const initialState = {
  category: null,
  sortBy: {
    type: "popular",
    order: "desc",
  },
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.data,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.data,
      };
    default:
      return state;
  }
};

export default filters;
