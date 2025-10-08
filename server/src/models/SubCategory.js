import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    isActive: { type: Boolean, default: true }, // optional, useful for soft deletes
  },
  { timestamps: true } // keeps track of createdAt and updatedAt
);

export default mongoose.model("SubCategory", subCategorySchema);
