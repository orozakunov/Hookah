import React from "react";
import MixItems from './MixItems';
import MyArrow from '../UI/MyArrow/MyArrow';
import MyTitle from "../UI/MyTitle/MyTitle";
import "./style.css";
const PopularMix = () => {
  
  return (
    <div className="popularMix">
      <div className="container">
        <div className="popularMix-content">
          <div className="popularMix-title">
            <div></div>
            <MyTitle>Популярные миксы</MyTitle>
            <MyArrow>Показать все </MyArrow>
          </div>
          <MixItems />
        </div>
      </div>
    </div>
  );
};

export default PopularMix;
