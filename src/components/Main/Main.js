import React from "react";
import "./style.css";

import MainIcon from "../../assets/Main/mainBgr.png";
import ArrowIcon from "../../assets/Main/arrow.svg";
const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main-content">
          <img className="main-image" src={MainIcon} />
          <h3 className="main-title">Приветствуем на </h3>
          <span className="main-subtitle">В каталог табаков </span>
          <img className="main-arrow" src={ArrowIcon} />
        </div>
      </div>
    </div>
  );
};

export default Main;
