import mongoose from "mongoose";
import Review from "./Review";

const productSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  currency: { type: String },
  reviews: { type: [mongoose.Schema.Types.ObjectId], ref: "Review" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
