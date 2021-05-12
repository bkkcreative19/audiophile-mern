import React, { useContext, useEffect, useState } from "react";
import Details from "./Details/Details";
import Nav2 from "../Nav2/Nav2";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
import Suggestions from "./Suggestions/Suggestions";
import About from "../About/About";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import { Context } from "../../context/Context";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailComponents = () => {
  const [product, setProduct] = useState();
  const params = useParams();

  const { cart, setCart, setIsOpen, isOpen } = useContext(Context);
  const history = useHistory();

  const addToCart = (quantity) => {
    const cartProduct = {
      ...product,
      quantity: quantity,
    };
    setCart([...cart, cartProduct]);
    setIsOpen(!isOpen);

    // console.log(cartProduct);
  };

  useEffect(() => {
    const fetchStuff = async () => {
      const { data } = await axios.get(`/api/product/${params.name}`);
      setProduct(data);
    };

    fetchStuff();
  }, [params.name]);
  return (
    <>
      {product && (
        <>
          <Details product={product} addToCart={addToCart} />
          <Features product={product} />
          <Gallery />
          <Suggestions others={product.others} />
          <CategorieSelection />
          <About />
        </>
      )}
    </>
  );
};

export default ProductDetailComponents;
