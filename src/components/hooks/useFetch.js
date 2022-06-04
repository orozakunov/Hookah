import { useEffect } from "react";

export const useFetch = () => {
  const getProducts = "http://localhost:3000/products";

  useEffect(() => {
    getProducts();
  }, []);
  console.log(getProducts);

  return {};
};
