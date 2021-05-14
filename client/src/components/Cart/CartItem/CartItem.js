import React, { useState, useEffect } from "react";
import Image from "../../../assets/assets/product-xx59-headphones/desktop/image-product.jpg";

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    product.quantity = quantity;
  }, [quantity]);

  return (
    <div className="cart-item">
      <div className="image">
        <img src={product.image} alt="cart-item" />
      </div>

      <div className="info">
        <h3>{product.name}</h3>
        <span>${product.price}</span>
      </div>
      <div className="quantity">
        <span onClick={() => setQuantity(quantity - 1)} className="minus">
          -
        </span>
        <span className="amount">{quantity}</span>
        <span onClick={() => setQuantity(quantity + 1)} className="plus">
          +
        </span>
      </div>
    </div>
  );
};

export default CartItem;
