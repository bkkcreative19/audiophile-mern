import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Details = ({ product, handleCart, isDisabled }) => {
  const [quantity, setQuantity] = useState(0);
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
              <button
                disabled={isDisabled && true}
                onClick={() => handleCart(quantity)}
                className="add"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  product: PropTypes.object.isRequired,
  handleCart: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Details;
