const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART":
      const newItems = {
        ...state.items,
        [action.data.id]: !state.items[action.data.id]
          ? [action.data]
          : [...state.items[action.data.id], action.data],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce(
        (sum, item) => sum + Number(item.price),
        0
      );

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    default:
      return state;
  }
};

export default cart;
