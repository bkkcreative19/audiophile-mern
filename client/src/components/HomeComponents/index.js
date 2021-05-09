import React from "react";
import Hero from "./Hero/Hero";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import HomePromos from "./HomePromos/HomePromos";
import About from "../About/About";

const HomeComponents = () => {
  return (
    <div>
      <Hero />
      <CategorieSelection />
      <HomePromos />
      <About />
    </div>
  );
};

export default HomeComponents;
