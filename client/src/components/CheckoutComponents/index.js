import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Nav2 from "../Nav2/Nav2";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutModal from "./CheckoutForm/CheckoutModal/CheckoutModal";

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
