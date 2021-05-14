import React, { useState, createContext, useEffect } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {
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

  return (
    <Context.Provider
      value={{ isOpen, setIsOpen, cart, setCart, addToCart, clearCart }}
    >
      {children}
    </Context.Provider>
  );
};
