import React from "react";
import "./style.css";
import MyArrow from "../UI/MyArrow/MyArrow";
import MyTitle from "../UI/MyTitle/MyTitle";

import Item from "./Item";

import ItemImage from "../../assets/popularLaunge/Image.png";
import ItemGoogle from "../../assets/popularLaunge/google.svg";
import ItemYandex from "../../assets/popularLaunge/yandex.svg";
import ItemLogo from "../../assets/popularLaunge/logo.svg";

const Popularlaunge = () => {
  const items = [
    {
      id: 1,
      image: ItemImage,
      logo: ItemLogo,
      title: "Лубянка",
      subtitle: "МЯТА LOUNGE на Лубянке",
      price: 1,
      patients: {
        patient: 4.7,
        imgGoogle: ItemGoogle,
        imgYandex: ItemYandex,
      },
    },
    {
      id: 2,
      image: ItemImage,
      logo: ItemLogo,
      title: "Лубянка",
      subtitle: "МЯТА LOUNGE на Лубянке",
      price: 1,
      patients: {
        patient: 4.7,
        imgGoogle: ItemGoogle,
        imgYandex: ItemYandex,
      },
    },
    {
      id: 3,
      image: ItemImage,
      logo: ItemLogo,
      title: "Лубянка",
      subtitle: "МЯТА LOUNGE на Лубянке",
      price: 1,
      patients: {
        patient: 4.7,
        imgGoogle: ItemGoogle,
        imgYandex: ItemYandex,
      },
    },
  ];

  return (
    <div className="popularlaunge">
      <div className="container">
        <div className="popularlaunge-content">
          <div className="popularlaunge-title">
            <div></div>
            <MyTitle>Популярные лаунджи</MyTitle>
            <MyArrow>Показать карту </MyArrow>
          </div>
          <Item items={items} />
        </div>
      </div>
    </div>
  );
};

export default Popularlaunge;
