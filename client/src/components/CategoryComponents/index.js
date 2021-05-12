import React, { useEffect, useState } from "react";
import About from "../About/About";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import Banner from "./Banner/Banner";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import axios from "axios";

const CategoryComponents = ({ name }) => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchStuff = async () => {
      const { data } = await axios.get(`/api/products/${params.name}`);
      setProducts(data);
    };

    fetchStuff();
  }, [params.name]);
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
