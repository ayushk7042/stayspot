// import { Router } from "express";
// import usersController from "../controllers/usersController.js";
// import { authenticateAdmin } from "../middleware/auth.js";

// const router = Router();

// router.get("/users", authenticateAdmin, usersController.getUsers);

// // You can also import and add routes for posts, categories here as needed
// // e.g. router.use("/posts", postsRoutes);

// export default router;


import express from "express";
import { getUsers, updateUser, deleteUser } from "../controllers/usersController.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// Use requireAdmin middleware to protect all admin user routes
router.get("/users", requireAdmin, getUsers);
router.patch("/users/:id", requireAdmin, updateUser);
router.delete("/users/:id", requireAdmin, deleteUser);

export default router;
