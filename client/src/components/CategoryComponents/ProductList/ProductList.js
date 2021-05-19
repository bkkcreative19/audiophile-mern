import React from "react";
import Product from "../Product/Product";
import Skeleton from 'react-loading-skeleton';
import PropTypes from "prop-types";

const ProductList = ({ products }) => {




  
  return (
    <div className="product-list container">
      {products && products.length !== 0 ?  Array.from(products).map((product, idx) => {
        return <Product key={idx} product={product} index={idx} />;
      }) : <Skeleton height={'100vh'}/>}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
