const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => {
  return arr.reduce((sum, item) => sum + item.price, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItems = !state.items[action.data.id]
        ? [action.data]
        : [...state.items[action.data.id].items, action.data];

      const newItems = {
        ...state.items,
        [action.data.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
    case "PLUS_CART_ITEM": {
      const newItems = [
        ...state.items[action.data].items,
        state.items[action.data].items[0],
      ];
      return {
        ...state,
        items: {
          ...state.items,
          [action.data]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
      };
    }
    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.data].items;
      const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;
      return {
        ...state,
        items: {
          ...state.items,
          [action.data]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
      };
    }
    case "CLEAR_CART":
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    case "REMOVE_CART_ITEM": {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.data].totalPrice;
      const currentTotalCount = newItems[action.data].items.length;
      delete newItems[action.data];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    default:
      return state;
  }
};

export default cart;
