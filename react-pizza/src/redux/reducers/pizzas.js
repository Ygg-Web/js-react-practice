const initialState = {
  items: [],
  isLoading: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        items: action.data,
        isLoading: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoading: action.data,
      };
    default:
      return state;
  }
};

export default pizzas;
