import React from "react";
import Details from "./Details/Details";
import Nav2 from "../Nav2/Nav2";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
import Suggestions from "./Suggestions/Suggestions";
import About from "../About/About";
import CategorieSelection from "../CategorieSelection/CategorieSelection";

const ProductDetailComponents = ({ product }) => {
  console.log(product);
  return (
    <>
      <Nav2 />

      <Details product={product} />
      <Features product={product} />
      <Gallery />
      <Suggestions others={product.others} />
      <CategorieSelection />
      <About />
    </>
  );
};

export default ProductDetailComponents;
