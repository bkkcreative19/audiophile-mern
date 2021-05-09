import React from "react";
import Product from "../Product/Product";

const ProductList = ({ products }) => {
  return (
    <div className="product-list container">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
