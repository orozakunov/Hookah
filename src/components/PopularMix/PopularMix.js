import React from "react";
import MixItems from "./MixItems";

import MyArrow from "../UI/MyArrow/MyArrow";
import MyTitle from "../UI/MyTitle/MyTitle";
import DrinkImg from "../../assets/PoppularMix/Group 18 (1).png";

import "./style.css";

const PopularMix = () => {
  const items = [
    {
      id: 1,
      title: "Идеальный завтрак",
      img: DrinkImg,
      compound: [
        {
          percents: "10%",
          title: "Darkside - LEMONBLAST",
        },
        {
          percents: "20%",
          title: "Spectrum - Bacon",
        },
        {
          percents: "10%",
          title: "Darkside - BASIL BLAST",
        },
        {
          percents: "20%",
          title: "Darkside - PEAR",
        },
        {
          percents: "30%",
          title: "Darkside - CODE CHERRY",
        },
      ],
    },
    {
      id: 2,
      title: "Идеальный завтрак",
      img: DrinkImg,
      compound: [
        {
          percents: "10%",
          title: "Darkside - LEMONBLAST",
        },
        {
          percents: "20%",
          title: "Spectrum - Bacon",
        },
        {
          percents: "10%",
          title: "Darkside - BASIL BLAST",
        },
        {
          percents: "20%",
          title: "Darkside - PEAR",
        },
        {
          percents: "30%",
          title: "Darkside - CODE CHERRY",
        },
      ],
    },
    {
      id: 3,
      title: "Идеальный завтрак",
      img: DrinkImg,
      compound: [
        {
          percents: "10%",
          title: "Darkside - LEMONBLAST",
        },
        {
          percents: "20%",
          title: "Spectrum - Bacon",
        },
        {
          percents: "10%",
          title: "Darkside - BASIL BLAST",
        },
        {
          percents: "20%",
          title: "Darkside - PEAR",
        },
        {
          percents: "30%",
          title: "Darkside - CODE CHERRY",
        },
      ],
    },
  ];
  return (
    <div className="popularMix">
      <div className="container">
        <div className="popularMix-content">
          <div className="popularMix-title">
            <div></div>
            <MyTitle>Популярные миксы</MyTitle>
            <MyArrow>Показать все </MyArrow>
          </div>
          <MixItems items={items} />
        </div>
      </div>
    </div>
  );
};

export default PopularMix;
