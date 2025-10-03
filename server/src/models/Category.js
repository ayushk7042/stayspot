// models/Category.js
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    // optional: parent for subcategories
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "Category", default: null }
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
