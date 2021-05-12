import Product from "../models/product.js";

const getProductsByCategory = async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  //   console.log(products);
  //   res.send("hi");
  res.json(products);
};
const getProduct = async (req, res) => {
  const product = await Product.findOne({ name: req.params.name });
  //   console.log(products);
  //   res.send("hi");
  res.json(product);
};

export { getProductsByCategory, getProduct };
