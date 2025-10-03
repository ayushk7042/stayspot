// routes/admin.categories.routes.js
import { Router } from "express";
import { createCategory, updateCategory, deleteCategory } from "../controllers/admin.category.controller.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

const router = Router();

router.post("/", requireAuth, requireRole("admin"), createCategory);
router.put("/:id", requireAuth, requireRole("admin"), updateCategory);
router.delete("/:id", requireAuth, requireRole("admin"), deleteCategory);

export default router;
