import React from "react";
import Items from "./Items";

import "./style.css";

import DarkSideIcon from "../../assets/popolarTabacco/darkside.png";
<<<<<<< HEAD
import MyArrow from '../UI/MyArrow/MyArrow';
import MyTitle from "../UI/MyTitle/MyTitle";

=======
import MyTitle from "../UI/MyTitle/MyTitle";
import MyArrow from "../UI/MyArrow/MyArrow";
>>>>>>> d7a6e2b946dcd14dfb33accf3e7dccf0b1c7a58b
const PopularTabacco = () => {
  const items = [
    {
      id: 1,
      description: "Darkside",
      subtitle: "Южный вайб",
      ingridients: ["Манго", " Груша"],
      img: DarkSideIcon,
    },
    {
      id: 2,
      description: "duft",
      subtitle: "Pomegranate",
      ingridients: ["Груша", " Манго", " Лед", " Вкус табака", " Выпечка"],
      img: DarkSideIcon,
    },
    {
      id: 3,
      description: "Tangiers Special",
      subtitle: "ILT One Breakfast Cereal ",
      ingridients: ["Манго", " Груша"],
      img: DarkSideIcon,
    },
    {
      id: 4,
      description: "Darkside",
      subtitle: "Южный вайб",
      ingridients: ["Манго", " Груша"],
      img: DarkSideIcon,
    },
  ];

  return (
    <div className="popularTabacco">
      <div className="container">
        <div className="popularTabacco-content">
          <div className="popularTabacco-title">
            <div></div>
            <MyTitle>Популярные табаки</MyTitle>
            <MyArrow>Показать все</MyArrow>
          </div>
          <Items items={items} />
        </div>
      </div>
    </div>
  );
};

export default PopularTabacco;
