import { Router } from "express";
import { requireAuth, requireRole } from "../middleware/auth.js";
import {
  createPost,
  updatePost,
  updatePostStatus,
  deletePost,
} from "../controllers/admin.post.controller.js";

const r = Router();

r.post("/", requireAuth, requireRole("admin"), createPost);               // create article     
r.put("/:id", requireAuth, requireRole("admin"), updatePost);           // full update
r.patch("/:id/status", requireAuth, requireRole("admin"), updatePostStatus); // publish/draft toggle
r.delete("/:id", requireAuth, requireRole("admin"), deletePost);         // delete article

export default r;
