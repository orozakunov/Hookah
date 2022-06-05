import React from "react";
import Items from "./Items";

import "./style.css";
import LogoIcon from "../../assets/Header/Logo.svg";
import MyTabac from "./MyTabac";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <img className="logo" src={LogoIcon} />
          </Link>
          <Items headerItems={headerItems} />
          <MyTabac />
          <Login />
        </div>
      </div>
    </header>
  );
};

export default Header;
