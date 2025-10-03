import Category from "../models/Category.js";
import slugify from "slugify";

export async function listCategories(_req, res) {
  const cats = await Category.find().sort({ name: 1 }).lean();
  res.json(cats);
}

export async function createCategory(req, res) {
  const { name } = req.body;
  const slug = slugify(name, { lower: true, strict: true });
  const exists = await Category.findOne({ slug });
  if (exists) return res.status(409).json({ message: "Category exists" });
  const cat = await Category.create({ name, slug });
  res.status(201).json(cat);
}

export async function getCategoryBySlug(req, res) {
  try {
    const { slug } = req.params;
    const category = await Category.findOne({ slug }).lean();
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    console.error("Error fetching category by slug:", error);
    res.status(500).json({ message: "Server error fetching category" });
  }
}
