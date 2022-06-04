import React from "react";
import "./style.css";

import MyTitle from "../UI/MyTitle/MyTitle";
import CatalogList from "./CatalogList";
import Sidebar from "../Sidebar/Sidebar";
const Catalog = () => {
  return (
    <div classNmae="catalog">
      <div className="container">
        <div className="catalog-content">
          <div className="catalog-title">
            <MyTitle>Табаки - Darkside</MyTitle>
            <p className="catalog-description">
              Один из крупнейших производителей табака и аксессуаров для
              кальянов в Российской Федерации.
            </p>
          </div>
          <div className="catalog-wrapper">
            <Sidebar />
            <CatalogList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
