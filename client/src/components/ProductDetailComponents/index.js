import React, { useContext, useEffect, useState } from "react";
import Details from "./Details/Details";
import Skeleton from 'react-loading-skeleton';
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
import Suggestions from "./Suggestions/Suggestions";
import About from "../About/About";
import CategorieSelection from "../CategorieSelection/CategorieSelection";
import { Context } from "../../context/Context";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailComponents = () => {
  const [product, setProduct] = useState({});
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
      setProduct()
      const { data } = await axios.get(`https://audiophile-server.herokuapp.com/api/product/${params.name}`);
      const suggestions = await axios.get(
        `https://audiophile-server.herokuapp.com/api/product/suggestions/${params.name}`
      );

      setProduct(data);
      setSuggestions(suggestions.data);
      // console.log(data.gallery)
      // setGallery(data.gallery)
    };

    fetchProduct();
  }, [params.name]);

  useEffect(() => {
    window.scrollTo(0, 0)
   
  }, )

  return (
    <>
      {product ? (
        <>
          <Details
            isDisabled={checkIfDisabled()}
            product={product}
            handleCart={handleCart}
          />
          <Features product={product} />
          <Gallery product={product} />
          <Suggestions others={suggestions} />
          <CategorieSelection />
          <About />
        </>
      ) : <Skeleton height={'100vh'}/>}
    </>
  );
};

export default ProductDetailComponents;
