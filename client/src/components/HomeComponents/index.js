import React from "react";
import Hero from "./Hero/Hero";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import HomePromos from "./HomePromos/HomePromos";
import About from "../About/About";

const HomeComponents = () => {
  return (
    <>
      <Hero />
      <CategorieSelection />
      <HomePromos />
      <About />
    </>
  );
};

export default HomeComponents;
