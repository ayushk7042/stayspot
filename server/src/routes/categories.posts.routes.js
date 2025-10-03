// server/src/routes/categories.posts.routes.js (or fold into category.routes.js)
import { Router } from "express";
import { byCategory } from "../controllers/post.controller.js";
const r = Router();
r.get("/:slug/posts", byCategory);
export default r;
