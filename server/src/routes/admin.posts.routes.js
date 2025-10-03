// routes/admin.posts.routes.js
import { Router } from "express";
import {
  createPost,
  updatePost,
  updatePostStatus,
  deletePost,
  adminListPosts
} from "../controllers/admin.post.controller.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

const router = Router();

// List posts with admin/editor role
router.get("/", requireAuth, requireRole("admin", "editor"), adminListPosts);

// Create new post (admin/editor)
router.post("/", requireAuth, requireRole("admin", "editor"), createPost);

// Update existing post (admin/editor)
router.put("/:id", requireAuth, requireRole("admin", "editor"), updatePost);

// Change post status (publish/draft) (admin/editor)
router.patch("/:id/status", requireAuth, requireRole("admin", "editor"), updatePostStatus);

// Delete post (admin only)
router.delete("/:id", requireAuth, requireRole("admin"), deletePost);

export default router;
