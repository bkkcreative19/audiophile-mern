import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ product, index }) => {
  return (
    <div
      style={
        index % 2 !== 0
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "row" }
      }
      className="product"
    >
      <div className="product__image">
        <img src={product.image} alt="product" />
      </div>
      <div
        style={
          index % 2 !== 0
            ? { alignItems: "flex-start" }
            : { alignItems: "flex-end" }
        }
        className="product__content"
      >
        <div>
          <h3>New product</h3>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <Link to={`/product/${product.name}`}>
            <button>See Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
