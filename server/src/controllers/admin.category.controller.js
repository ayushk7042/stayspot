import slugify from "slugify";
import Category from "../models/Category.js";

export async function createCategory(req, res) {
  const { name } = req.body;
  if (!name?.trim()) return res.status(400).json({ message: "Name required" });
  const slug = slugify(name, { lower: true, strict: true });
  const exists = await Category.findOne({ slug });
  if (exists) return res.status(409).json({ message: "Category exists" });
  const cat = await Category.create({ name, slug });
  res.status(201).json(cat);
}

export async function updateCategory(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const slug = name ? slugify(name, { lower: true, strict: true }) : undefined;
  const updated = await Category.findByIdAndUpdate(id, { name, ...(slug && { slug }) }, { new: true });
  if (!updated) return res.status(404).json({ message: "Category not found" });
  res.json(updated);
}

export async function deleteCategory(req, res) {
  const { id } = req.params;
  await Category.findByIdAndDelete(id);
  res.json({ message: "Category deleted" });
}
