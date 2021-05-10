import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";

const Details = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="details container">
      <div className="image">
        <img src={Image} alt="product" />
      </div>
      <div className="content">
        <div className="content-container">
          <h3>New product</h3>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span className="price">${product.price}</span>
          <div className="add-to-cart">
            <div className="quantity">
              <span className="minus">-</span>
              <span className="amount">{quantity}</span>
              <span className="plus">+</span>
            </div>
            <button className="add">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
