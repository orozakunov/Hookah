import React from "react";

const Items = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div className="popularTabacco-item">
        <img className="popularTabacco-item-img" src={item.img} />
        <h4 className="popularTabacco-item-h4">{item.description}</h4>
        <span className="popularTabacco-item-span">{item.subtitle}</span>
        <div className="popularTabacco-item-p-container">
          <p className="popularTabacco-item-p">{item.ingridients}</p>
        </div>
      </div>
    );
  });

  return <div className="popularTabacco-items">{renderedItems}</div>;
};

export default Items;
