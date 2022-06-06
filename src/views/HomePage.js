import React from "react";
import CreateMix from "../components/CreateMix/CreateMix";
import Main from "../components/Main/Main";
import Popularlaunge from "../components/Popularlaunge/Popularlaunge";
import PopularMix from "../components/PopularMix/PopularMix";
import PopularTabacco from "../components/PopularTabacco/PopularTabacco";
const HomePage = ({ mix }) => {
  return (
    <>
      <Main />
      <PopularTabacco />
      <CreateMix />
      <PopularMix mix={mix}/>
      <Popularlaunge />
    </>
  );
};

export default HomePage;
