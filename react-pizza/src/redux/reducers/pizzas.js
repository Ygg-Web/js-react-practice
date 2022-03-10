const initialState = {
  pizzas: [],
  isLoading: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        pizzas: action.data,
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
