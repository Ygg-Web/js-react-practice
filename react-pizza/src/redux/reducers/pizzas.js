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
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default pizzas;
