import React from "react";
import Image from "../../../assets/assets/product-xx59-headphones/desktop/image-product.jpg";

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="image">
        <img src={Image} alt="cart-item" />
      </div>

      <div className="info">
        <h3>XX99 MK II</h3>
        <span>${product.price}</span>
      </div>
      <div className="quantity">
        <span className="minus">-</span>
        <span className="amount">1</span>
        <span className="plus">+</span>
      </div>
    </div>
  );
};

export default CartItem;
