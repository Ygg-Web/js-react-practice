import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortPopup, PizzaBlock } from "../components";
import Placeholder from "../components/PizzaBlock/Placeholder";
import { setCategoty, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавит", type: "name", order: "asc" },
];

export default function Home() {
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoading);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  console.log(category, sortBy);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategoty(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          items={sortItems}
          activeSortType={sortBy.type}
          onClickSort={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} pizza={pizza} isLoading={true} />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <Placeholder key={index} />)}
      </div>
    </div>
  );
}
