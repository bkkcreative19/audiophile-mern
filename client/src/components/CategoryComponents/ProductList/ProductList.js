import React from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="product-list container">
      {products.map((product, idx) => {
        return <Product key={idx} product={product} index={idx} />;
      })}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
