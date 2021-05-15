import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const Context = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const addToCart = (product) => {
    let cartCopy = [...cart];
    let existingItem = cartCopy.find((item) => item.id === product.id);
    console.log(existingItem);
    if (existingItem) {
      return;
    } else {
      cartCopy.push(product);
    }

    setCart(cartCopy);

    localStorage.setItem("cart", JSON.stringify(cartCopy));
  };

  const fetchStuff = async (name) => {
    const { data } = await axios.get(`/api/products/${name}`);
    setProducts(data);
  };

  // const fetchSuggestions = async (name) => {
  //   const { data } = await axios.get(`/api/products/suggestions/${name}`);
  //   console.log(data);
  //   // setProducts(data);
  // };

  return (
    <Context.Provider
      value={{
        isOpen,
        setIsOpen,
        cart,
        setCart,
        addToCart,
        clearCart,
        fetchStuff,
        products,
      }}
    >
      {children}
    </Context.Provider>
  );
};
