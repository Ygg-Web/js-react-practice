export const setLoaded = (data) => ({
  type: "SET_LOADED",
  data,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  const fetchJson = async () => {
    try {
      const response = await fetch(
        `/pizzas?${category !== null ? `category=${category}` : " "}&_sort=${
          sortBy.type
        }&_order=${sortBy.order}`
      );

      const json = await response.json();
      dispatch(setPizzas(json));
    } catch (error) {
      alert("Ошибка не удалось получить данные от сервера");
    }
  };
  dispatch(setLoaded(false));
  fetchJson();
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  data: items,
});
