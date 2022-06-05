import { useEffect } from "react";
import axios from "axios";
export const useFetch = () => {
  const getProducts = "http://localhost:3500/products";

  useEffect(() => {
    axios.get(getProducts).then((res) => {
      console.log(res.data);
    });
  }, []);

  return {};
};
