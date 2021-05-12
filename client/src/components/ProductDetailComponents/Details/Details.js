import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Image from "../../../assets/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";

const Details = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();

  return (
    <div className="container">
      <a onClick={history.goBack} className="go-back">
        Go Back
      </a>
      <div className="details">
        <div className="image">
          <img src={product.image} alt="product" />
        </div>
        <div className="content">
          <div className="content-container">
            <h3>New product</h3>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
            <div className="add-to-cart">
              <div className="quantity">
                <span
                  onClick={() => setQuantity(quantity - 1)}
                  className="minus"
                >
                  -
                </span>
                <span className="amount">{quantity}</span>
                <span
                  onClick={() => setQuantity(quantity + 1)}
                  className="plus"
                >
                  +
                </span>
              </div>
              <button onClick={() => addToCart(quantity)} className="add">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
