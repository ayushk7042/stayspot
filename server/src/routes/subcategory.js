import express from "express";
import SubCategory from "../models/SubCategory.js";
import Category from "../models/Category.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// ---------- Public Route: Get subcategories by category ----------
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    if (!category) return res.status(400).json({ message: "Category ID required" });

    const subcategories = await SubCategory.find({ parentCategory: category }).sort({ name: 1 });
    res.json(subcategories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch subcategories" });
  }
});

// ---------- Admin Routes ----------
router.use(requireAdmin); // All routes below require admin

// Get all subcategories (admin)
router.get("/admin", async (req, res) => {
  try {
    const subcategories = await SubCategory.find()
      .populate("parentCategory", "name slug")
      .sort({ createdAt: -1 });
    res.json(subcategories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch subcategories" });
  }
});

// Create subcategory
router.post("/admin", async (req, res) => {
  try {
    const { name, parentCategory } = req.body;
    if (!name || !parentCategory)
      return res.status(400).json({ message: "Name and parentCategory are required" });

    const parentExists = await Category.findById(parentCategory);
    if (!parentExists) return res.status(400).json({ message: "Parent category not found" });

    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const newSub = new SubCategory({ name, slug, parentCategory });
    await newSub.save();
    res.status(201).json(newSub);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create subcategory" });
  }
});

// Update subcategory
router.put("/admin/:id", async (req, res) => {
  try {
    const { name, parentCategory } = req.body;
    const updateData = {};
    if (name) {
      updateData.name = name;
      updateData.slug = name.toLowerCase().replace(/\s+/g, "-");
    }
    if (parentCategory) {
      const parentExists = await Category.findById(parentCategory);
      if (!parentExists) return res.status(400).json({ message: "Parent category not found" });
      updateData.parentCategory = parentCategory;
    }

    const updatedSub = await SubCategory.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!updatedSub) return res.status(404).json({ message: "Subcategory not found" });
    res.json(updatedSub);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update subcategory" });
  }
});

// Delete subcategory
router.delete("/admin/:id", async (req, res) => {
  try {
    const deleted = await SubCategory.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Subcategory not found" });
    res.json({ message: "Subcategory deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete subcategory" });
  }
});

export default router;
