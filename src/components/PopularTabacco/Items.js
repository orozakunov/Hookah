import React from "react";

const Items = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
<<<<<<< HEAD
      <div className="popularTabacco-item" key={item.id}>
        <img className="popularTabacco-item-img" src={item.img} alt={item.description} />
=======
      <div key={item.id} className="popularTabacco-item">
        <img className="popularTabacco-item-img" src={item.img} />
>>>>>>> d7a6e2b946dcd14dfb33accf3e7dccf0b1c7a58b
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
