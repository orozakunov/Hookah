import React from "react";
import Catalog from "../components/Catalog/Catalog";

const CatalogPage = ({data}) => {
  return (
    <>
      <Catalog data={data} />
    </>
  );
};

export default CatalogPage;
