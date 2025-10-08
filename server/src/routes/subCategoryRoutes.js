import express from "express";
import SubCategory from "../models/SubCategory.js";

const router = express.Router();

// ✅ Create Subcategory
router.post("/", async (req, res) => {
  try {
    const { name, slug, parentCategory } = req.body;
    const subCat = new SubCategory({ name, slug, parentCategory });
    await subCat.save();
    res.status(201).json(subCat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get All Subcategories (with Parent info)
router.get("/", async (req, res) => {
  try {
    const subs = await SubCategory.find().populate("parentCategory");
    res.json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get Subcategories of a Specific Category
router.get("/category/:id", async (req, res) => {
  try {
    const subs = await SubCategory.find({ parentCategory: req.params.id });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
