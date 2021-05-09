import React from "react";
import image from "./product-yx1-earphones/desktop/image-product.jpg";

const Product = ({ product }) => {
  return (
    <div
      style={
        product.id % 2 !== 0
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "row" }
      }
      className="product"
    >
      <div className="product__image">
        <img src={image} alt="product" />
      </div>
      <div
        style={
          product.id % 2 !== 0
            ? { alignItems: "flex-start" }
            : { alignItems: "flex-end" }
        }
        className="product__content"
      >
        <div>
          <h3>New product</h3>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <button>See Product</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
