import React, { useState, createContext } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </Context.Provider>
  );
};
