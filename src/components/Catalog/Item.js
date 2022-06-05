import React, { useEffect, useState } from "react";

const Item = ({ data }) => {
  const [ingridient, setIngridient] = useState(false);

  useEffect(() => {
    setIngridient(true);
  }, []);

  const renderedItems = data.map((item) => {
    const Mango = item && item.ingridients ? item.ingridients.mango : null;
    const Pear = item && item.ingridients ? item.ingridients.pear : null;
    const Apple = item && item.ingridients ? item.ingridients.apple : null;
    const Icecreame =
      item && item.ingridients ? item.ingridients.icecreame : null;

    return (
      <div key={item.id} className="catalog__item">
        <img className="catalog__img" src={item.imageURL} />
        <div className="catalog__description">
          <h4 className="catalog__title">{item.title}</h4>
          <p className="catalog__subtitle">{item.subtitle}</p>
          <hr className="catalog__hr" />
          {ingridient ? (
            <span className="catalog__ingridients">{Mango}</span>
          ) : null}
          {ingridient ? (
            <span className="catalog__ingridients">{Pear}</span>
          ) : null}
          {ingridient ? (
            <span className="catalog__ingridients">{Apple}</span>
          ) : null}
          {ingridient ? (
            <span className="catalog__ingridients">{Icecreame}</span>
          ) : null}
        </div>
      </div>
    );
  });

  return <div className="catalog__items">{renderedItems}</div>;
};

export default Item;
