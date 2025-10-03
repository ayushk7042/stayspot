// models/HeroSlide.js
import mongoose from "mongoose";

const HeroSlideSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  cover: { type: String, required: true },  // Image URL
  category: { type: String, required: true }, // e.g., "environment"
  icon: { type: String, required: true },     // e.g., "FaLeaf"
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("HeroSlide", HeroSlideSchema);
