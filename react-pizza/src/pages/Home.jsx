import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { setCategoty } from "../redux/actions/filters";

const categoryNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавит", type: "alphabet" },
];

export default function Home() {
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategoty(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItems={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza) => (
          <PizzaBlock key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}
