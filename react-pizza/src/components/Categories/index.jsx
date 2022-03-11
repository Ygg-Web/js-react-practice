import { memo, useState } from "react";

const Categories = memo(function Categories({ items, onClickItems }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectedItem = (index) => {
    setActiveItem(index);
    onClickItems(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectedItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectedItem(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
