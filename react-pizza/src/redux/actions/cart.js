export const addPizzaToCart = (pizza) => ({
  type: "ADD_PIZZA_CART",
  data: pizza,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  data: id,
});

export const plustItemCart = (id) => ({
  type: "PLUS_CART_ITEM",
  data: id,
});

export const minustItemCart = (id) => ({
  type: "MINUS_CART_ITEM",
  data: id,
});
