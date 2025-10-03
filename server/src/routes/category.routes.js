import { Router } from "express";
import { requireAuth, requireRole } from "../middleware/auth.js";
import { listCategories, createCategory , getCategoryBySlug} from "../controllers/category.controller.js";

const r = Router();

r.get("/:slug", getCategoryBySlug);
r.get("/", listCategories);
r.post("/", requireAuth, requireRole("admin"), createCategory);

export default r;
