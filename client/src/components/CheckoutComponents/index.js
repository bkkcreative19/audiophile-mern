import React, { useContext } from "react";
import { Context } from "../../context/Context";

import CheckoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutComponents = () => {
  const { cart } = useContext(Context);
  return (
    <div className="checkout">
      {/* <Nav2 /> */}
      <CheckoutForm cart={cart} />
    </div>
  );
};

export default CheckoutComponents;
