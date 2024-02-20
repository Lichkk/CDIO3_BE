const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    color: { type: String },
    price: { type: Number, required: true },
    des: { type: String },
    countInStock: { type: Number },
    rating: { type: Number },
    badge: { type: Boolean, default: false },
    discount: { type: Number },
    selled: { type: Number },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
