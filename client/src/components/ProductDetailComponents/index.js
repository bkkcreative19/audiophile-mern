import React, { useContext, useEffect, useState } from "react";
import Details from "./Details/Details";

import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
import Suggestions from "./Suggestions/Suggestions";
import About from "../About/About";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import { Context } from "../../context/Context";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailComponents = () => {
  const [product, setProduct] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const params = useParams();

  const { setIsOpen, isOpen, addToCart, cart } = useContext(Context);

  const checkIfDisabled = () => {
    return cart.some((test) => test.name === params.name);
  };

  const handleCart = (quantity) => {
    const cartProduct = {
      ...product,
      quantity: quantity,
    };

    if (quantity === 0) {
      alert("no");
      return;
    }
    addToCart(cartProduct);

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/${params.name}`);
      const suggestions = await axios.get(
        `/api/product/suggestions/${params.name}`
      );

      setProduct(data);
      setSuggestions(suggestions.data);
    };

    fetchProduct();
  }, [params.name]);

  return (
    <>
      {product && (
        <>
          <Details
            isDisabled={checkIfDisabled()}
            product={product}
            handleCart={handleCart}
          />
          <Features product={product} />
          <Gallery />
          <Suggestions others={suggestions} />
          <CategorieSelection />
          <About />
        </>
      )}
    </>
  );
};

export default ProductDetailComponents;
