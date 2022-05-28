import React from "react";
import Items from "./Items";

import "./style.css";

import DarkSideIcon from "../../assets/popolarTabacco/darkside.png";
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
            <h3 className="popularTabacco-h3">Популярные табаки</h3>
            <div className="popularTabacco-container">
              <span className="popularTabacco-span">Показать все </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.875 11.625L16.5 9L13.875 6.375L13.3448 6.90525L15.0645 8.625H1.5V9.375H15.0645L13.3448 11.0948L13.875 11.625Z"
                  fill="#A1C4FD"
                />
              </svg>
            </div>
          </div>
          <Items items={items} />
        </div>
      </div>
    </div>
  );
};

export default PopularTabacco;
