import React from "react";
import Items from "./Items";

import "./style.css";
import LogoIcon from "../../assets/Header/Logo.svg";
import MyTabac from "./MyTabac";
import Login from "../Login/Login";
const Header = () => {
  const headerItems = [
    {
      id: 1,
      description: "Табаки",
    },
    {
      id: 2,
      description: "Миксы",
    },
    {
      id: 3,
      description: "Лаунжи",
    },
    {
      id: 4,
      description: "Магазин",
    },
    {
      id: 5,
      description: "Карта",
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <>
            <a href="/" />
            <img className="logo" src={LogoIcon} alt="logo"/>
          </>
          <Items headerItems={headerItems} />
          <MyTabac />
          <Login />
        </div>
      </div>
    </header>
  );
};

export default Header;
