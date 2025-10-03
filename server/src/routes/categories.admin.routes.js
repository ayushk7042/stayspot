import { Router } from "express";
import { requireAuth, requireRole } from "../middleware/auth.js";
import { createCategory, updateCategory, deleteCategory } from "../controllers/admin.category.controller.js";

const r = Router();

r.post("/", requireAuth, requireRole("admin"), createCategory);
r.put("/:id", requireAuth, requireRole("admin"), updateCategory);
r.delete("/:id", requireAuth, requireRole("admin"), deleteCategory);

export default r;
