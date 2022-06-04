import React from "react";
import Item from "./Item";

const CatalogList = ({ data }) => {
  return (
    <div className="catalog-list">
      <Item data={data} />
    </div>
  );
};

export default CatalogList;
