import React from "react";

const Item = ({ items }) => {
  const renderedItems = items.map((item) => {
    const ItemPatient = item && item.patients ? item.patients.patient : null;
    const ImageGoogle = item && item.patients ? item.patients.imgGoogle : null;
    const ItemYandex = item && item.patients ? item.patients.imgYandex : null;

    return (
      <div key={item.id} className="popularLaunge-Item">
        <img src={item.image} />
        <div className="popularLaunge-description">
          <div className="item-logo-title">
            <img style={{ margin: "0" }} src={item.logo} />
            <h5 className="item__title">{item.title}</h5>
          </div>
          <p className="item__subtitle">{item.subtitle}</p>
          <hr className="item__line" />
          <div className="item__patiets">
            <span>Цена от: {item.price} тыс. руб.</span>
            <div className="item__patiens__content">
              <div className="item__patiens__wrapper">
                <img className="item__patiens__image" src={ImageGoogle} />
                {ItemPatient}
              </div>
              <div className="item__patiens__wrapper">
                <img className="item__patiens__image" src={ItemYandex} />
                {ItemPatient}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="popularLaunge-Items">{renderedItems}</div>;
};

export default Item;
