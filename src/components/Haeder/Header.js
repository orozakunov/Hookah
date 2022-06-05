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
<<<<<<< HEAD
          <>
            <a href="/" />
            <img className="logo" src={LogoIcon} alt="logo"/>
          </>
=======
          <Link to="/">
            <img className="logo" src={LogoIcon} />
          </Link>
>>>>>>> d7a6e2b946dcd14dfb33accf3e7dccf0b1c7a58b
          <Items headerItems={headerItems} />
          <MyTabac />
          <Login />
        </div>
      </div>
    </header>
  );
};

export default Header;
