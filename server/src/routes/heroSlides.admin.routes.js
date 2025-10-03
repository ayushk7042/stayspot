// routes/heroSlides.admin.routes.js
import express from "express";
const router = express.Router();
import {requireAuth, requireAdmin } from "../middleware/auth.js";
import {
  getHeroSlides,
  addHeroSlide,
  updateHeroSlide,
  removeHeroSlide,
} from "../controllers/heroSlides.controller.js";

router.get("/", getHeroSlides);                  // Public/read
router.post("/", requireAuth, requireAdmin, addHeroSlide);    // Admin/add
router.put("/:id", requireAuth, requireAdmin, updateHeroSlide); // Admin/edit
router.delete("/:id", requireAuth, requireAdmin, removeHeroSlide); // Admin/delete

export default router;
