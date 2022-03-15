const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => {
  return arr.reduce((sum, item) => sum + item.price, 0);
};

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
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

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case "PLUS_CART_ITEM": {
      const newObjectItems = [
        ...state.items[action.data].items,
        state.items[action.data].items[0],
      ];

      const newItems = {
        ...state.items,
        [action.data]: {
          items: newObjectItems,
          totalPrice: getTotalPrice(newObjectItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.data].items;
      const newObjectItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.data]: {
          items: newObjectItems,
          totalPrice: getTotalPrice(newObjectItems),
        },
      };
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
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
