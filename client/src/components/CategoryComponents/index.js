import React, { useContext, useEffect } from "react";
import About from "../About/About";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import Banner from "./Banner/Banner";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import { Context } from "../../context/Context";

const CategoryComponents = () => {
  const { fetchStuff, products } = useContext(Context);
  const params = useParams();
  useEffect(() => {
   
    fetchStuff(params.name);
  }, [params.name]);
  return (
    <>
      <Banner name={params.name} />
      <ProductList products={products} />
      <CategorieSelection />
      <About />
    </>
  );
};

export default CategoryComponents;
