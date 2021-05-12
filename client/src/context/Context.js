import React, { useState, createContext } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <Context.Provider value={{ isOpen, setIsOpen, cart, setCart }}>
      {children}
    </Context.Provider>
  );
};
