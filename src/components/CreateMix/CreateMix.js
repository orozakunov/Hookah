import React from "react";
import "./style.css";
import MyButton from "../UI/MyButton/MyButton";

import CreateMixImage from "../../assets/CreateMix/Background.png";
const CreateMix = () => {
  return (
    <div className="createMix">
      <div className="container">
        <div className="createMix-content">
          <img className="createMix-image" src={CreateMixImage} />
          <div className="crecreateMix-wrapper">
            {/* <div className="createMix-aa"></div> */}
            <h1 className="createMix-title">Создай свой микс</h1>
            <p className="createMix-description">
              Мы рады тому, что способны удовлетворить даже самые притязательные
              требования наших Клиентов, а в ближайших планах нашей компании,
              еще больше расширить ассортимент товаров и услуг.
            </p>
            <MyButton>Создать микс</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMix;
