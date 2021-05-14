import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const { cart, setCart, setIsOpen, clearCart } = useContext(Context);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let priceItems = [];
  let total = 0;

  if (cart.length > 0) {
    priceItems = cart.map((item) => item.price * item.quantity);

    total = priceItems.reduce(reducer);
  }

  // onClick={() => setIsOpen(false)}
  return (
    <div className="cart-modal-wrapper">
      <div className="cart-modal">
        <div className="head">
          <h2 className="item-count">
            Cart <span>({cart.length})</span>
          </h2>
          <span onClick={() => setIsOpen(false)}>x</span>
          <a onClick={clearCart} href="#">
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
          <span>${total}</span>
        </div>
        <Link to="/checkout">
          <button onClick={() => setIsOpen(false)} className="checkout-btn">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
