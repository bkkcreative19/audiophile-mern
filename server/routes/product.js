import express from "express";
import { getProductsByCategory, getProduct } from "../controllers/product.js";

const router = express.Router();

router.get("/products/:category", getProductsByCategory);
router.get("/product/:name", getProduct);

export default router;
