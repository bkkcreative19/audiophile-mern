import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    new: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: String,
      required: true,
    },
    includes: [{ type: Object, required: true }],
    gallery: {
      type: Object,
      required: true,
    },
    others: [{ type: Object, required: true }],
  },
  {
    timestamps: true,
    collection: "Products",
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
