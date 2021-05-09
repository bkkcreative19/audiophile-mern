import React from "react";
import About from "../About/About";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import Banner from "./Banner/Banner";
import ProductList from "./ProductList/ProductList";

const CategoryComponents = ({ name, products }) => {
  return (
    <>
      <Banner name={name} />
      <ProductList products={products} />
      <CategorieSelection />
      <About />
    </>
  );
};

export default CategoryComponents;
