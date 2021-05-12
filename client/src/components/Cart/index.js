import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import data from "../../data.json";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const { cart, setCart, setIsOpen } = useContext(Context);

  // onClick={() => setIsOpen(false)}
  return (
    <div className="cart-modal-wrapper">
      <div className="cart-modal">
        <div className="head">
          <h2 className="item-count">
            Cart <span>({cart.length})</span>
          </h2>
          <span onClick={() => setIsOpen(false)}>x</span>
          <a onClick={() => setCart([])} href="#">
            Remove all
          </a>
        </div>
        <div className="cart-items">
          {cart.map((item) => {
            return <CartItem key={item.id} product={item} />;
          })}
        </div>
        <div className="total">
          <span>Total</span>
          <span>$5345</span>
        </div>
        <Link to="/checkout">
          <button className="checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
