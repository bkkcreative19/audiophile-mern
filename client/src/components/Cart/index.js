import React from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  return (
    <div className="cart-modal-wrapper">
      <div className="cart-modal">
        <div className="head">
          <h2 className="item-count">
            Cart <span>(3)</span>
          </h2>

          <a href="#">Remove all</a>
        </div>
        <div className="cart-items">
          {data.slice(0, 3).map((item) => {
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
