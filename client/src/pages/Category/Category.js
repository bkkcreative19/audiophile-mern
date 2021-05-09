import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryComponents from "../../components/CategoryComponents";
import data from "../../data.json";

const Category = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = data.filter(
      (item) => item.category === params.name
    );
    setProducts(filteredProducts);
  }, [params.name]);

  return (
    <>
      <CategoryComponents products={products} name={params.name} />
    </>
  );
};

export default Category;
