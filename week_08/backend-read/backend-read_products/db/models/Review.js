import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  title: { type: String },
  text: { type: String },
  rating: { type: Number },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
