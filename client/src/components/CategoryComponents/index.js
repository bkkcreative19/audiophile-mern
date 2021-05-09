import React from "react";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import Banner from "./Banner/Banner";
import ProductList from "./ProductList/ProductList";

const CategoryComponents = ({ name, products }) => {
  return (
    <>
      <Banner name={name} />
      <ProductList products={products} />
      <CategorieSelection />
    </>
  );
};

export default CategoryComponents;
