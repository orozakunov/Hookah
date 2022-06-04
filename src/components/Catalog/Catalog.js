import React from "react";
import "./style.css";

import MyTitle from "../UI/MyTitle/MyTitle";
import CatalogList from "./CatalogList";
import Sidebar from "../Sidebar/Sidebar";
const Catalog = ({ data }) => {
  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog-content">
          <div className="catalog-title">
            <MyTitle>Табаки - Darkside</MyTitle>
            <p>
              Один из крупнейших производителей табака и аксессуаров для
              кальянов в Российской Федерации.
            </p>
          </div>
          <CatalogList data={data} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
