import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailComponents from "../../components/ProductDetailComponents";
import data from "../../data.json";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = data.find((item) => item.name === params.name);
    console.log(product);
    setProduct(product);
  }, [params.name]);

  return (
    <>
      <ProductDetailComponents product={product} />
    </>
  );
};

export default ProductDetail;
