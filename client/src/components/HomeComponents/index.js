import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import HomePromos from "./HomePromos/HomePromos";
import About from "../About/About";

const HomeComponents = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
   
  }, )
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
