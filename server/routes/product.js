import express from "express";
import {
  getProductsByCategory,
  getProduct,
  getSuggestions,
} from "../controllers/product.js";

const router = express.Router();

router.get("/products/:category", getProductsByCategory);
router.get("/product/:name", getProduct);
router.get("/product/suggestions/:name", getSuggestions);

export default router;
