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

const getSuggestions = async (req, res) => {
  const suggestions = await Product.find({ name: { $ne: req.params.name } });
  res.json(suggestions.splice(0, 3));
};

export { getProductsByCategory, getProduct, getSuggestions };
