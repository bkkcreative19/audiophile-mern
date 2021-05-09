import React from "react";
import Hero from "./Hero/Hero";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import HomePromos from "./HomePromos/HomePromos";

const HomeComponents = () => {
  return (
    <div>
      <Hero />
      <CategorieSelection />
      <HomePromos />
    </div>
  );
};

export default HomeComponents;
