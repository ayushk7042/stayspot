
// // import { Router } from "express";
// // import { requireAuth, requireRole, requireAdmin, loadUser } from "../middleware/auth.js";
// // import {
// //   homeFeed,
// //   listPosts,
// //   getBySlug,
// //   related,
// //   byCategory,
// //   upsertPost,
// //   getPostsByCategory,
// //   getAllPosts,
// //   createPost,
// //   updatePost,
// //   deletePost,
// // } from "../controllers/post.controller.js";

// // const router = Router();

// // // Public Routes
// // router.get("/home", homeFeed);                   // Public home feed
// // router.get("/", listPosts);                       // Public paged posts listing
// // router.get("/:slug", getBySlug);                  // Public single post by slug
// // router.get("/:slug/related", related);            // Public related posts by slug
// // router.get("/category/:slug", byCategory);        // Posts by category slug

// // // Protect routes below - require authentication and load user
// // router.use(requireAuth, loadUser);

// // // Admin-protected Routes
// // router.get("/posts/all", requireAdmin, getAllPosts);      // Get all posts, admin only
// // router.post("/posts", requireAdmin, createPost);          // Create a post, admin only
// // router.put("/posts/:id", requireAdmin, updatePost);       // Update a post, admin only
// // router.delete("/posts/:id", requireAdmin, deletePost);    // Delete a post, admin only

// // // Upsert post (create or update) with admin role protection
// // router.post("/", requireAdmin, upsertPost);

// // // Additional route for posts by category with authentication (optional)
// // router.get("/posts", getPostsByCategory);

// // export default router;


// import { Router } from "express";
// import { requireAuth, requireRole, requireAdmin, loadUser } from "../middleware/auth.js";
// import {
//   homeFeed,
//   listPosts,
//   getBySlug,
//   related,
//   byCategory,
//   upsertPost,
//   getPostsByCategory,
//   getAllPosts,
//   createPost,
//   updatePost,
//   deletePost,
// } from "../controllers/post.controller.js";

// const router = Router();

// // Public Routes
// router.get("/home", homeFeed);                    // Public home feed
// router.get("/", listPosts);                        // Public paged posts listing - you can update this for pagination and category filtering
// router.get("/:slug", getBySlug);                   // Public single post by slug
// router.get("/:slug/related", related);             // Public related posts by slug
// router.get("/category/:slug", byCategory);         // Posts by category slug

// // Added route: Paginated posts by category query param (e.g., /api/posts?category=tech&page=1&limit=20)
// router.get("/category", async (req, res) => {
//   try {
//     const category = req.query.category || "all";
//     const page = parseInt(req.query.page, 10) || 1;
//     const limit = parseInt(req.query.limit, 10) || 20;
//     const skip = (page - 1) * limit;

//     let filter = {};
//     if (category !== "all") {
//       filter.categorySlug = category;
//     }

//     // Assuming Post model is imported in controller or adjust here if needed
//     const totalPosts = await getPostsByCategory.countPosts(filter);
//     const posts = await getPostsByCategory.fetchPosts(filter, skip, limit);

//     return res.json({
//       page,
//       limit,
//       totalPosts,
//       totalPages: Math.ceil(totalPosts / limit),
//       posts,
//     });
//   } catch (error) {
//     console.error("Error fetching categorized posts:", error);
//     res.status(500).json({ error: "Server error fetching posts" });
//   }
// });

// // Protect routes below - require authentication and load user
// router.use(requireAuth, loadUser);

// // Admin-protected Routes
// router.get("/posts/all", requireAdmin, getAllPosts);       // Get all posts, admin only
// router.post("/posts", requireAdmin, createPost);           // Create a post, admin only
// router.put("/posts/:id", requireAdmin, updatePost);        // Update a post, admin only
// router.delete("/posts/:id", requireAdmin, deletePost);     // Delete a post, admin only

// // Upsert post (create or update) with admin role protection
// router.post("/", requireAdmin, upsertPost);

// // Additional route for posts by category with authentication (optional)
// router.get("/posts", getPostsByCategory);

// export default router;



import { Router } from "express";
import { requireAuth, requireRole, requireAdmin, loadUser } from "../middleware/auth.js";
import {
  homeFeed,
  listPosts,
  getBySlug,
  related,
  byCategory,
  upsertPost,
  getPostsByCategory,
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

const router = Router();

// Public Routes
router.get("/home", homeFeed);                    // Public home feed
router.get("/", listPosts);                        // Public paged posts listing - you can update this for pagination and category filtering
router.get("/:slug", getBySlug);                   // Public single post by slug
router.get("/:slug/related", related);             // Public related posts by slug
router.get("/category/:slug", byCategory);         // Posts by category slug

// Added route: Paginated posts by category query param (e.g., /api/posts?category=tech&page=1&limit=20)
router.get("/category", async (req, res) => {
  try {
    const category = req.query.category || "all";
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const skip = (page - 1) * limit;

    let filter = {};
    if (category !== "all") {
      filter.categorySlug = category;
    }

    // Assuming Post model is imported in controller or adjust here if needed
    const totalPosts = await getPostsByCategory.countPosts(filter);
    const posts = await getPostsByCategory.fetchPosts(filter, skip, limit);

    return res.json({
      page,
      limit,
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
      posts,
    });
  } catch (error) {
    console.error("Error fetching categorized posts:", error);
    res.status(500).json({ error: "Server error fetching posts" });
  }
});

// Protect routes below - require authentication and load user
router.use(requireAuth, loadUser);

// Admin-protected Routes
router.get("/posts/all", requireAdmin, getAllPosts);       // Get all posts, admin only
router.post("/posts", requireAdmin, createPost);           // Create a post, admin only
router.put("/posts/:id", requireAdmin, updatePost);        // Update a post, admin only
router.delete("/posts/:id", requireAdmin, deletePost);     // Delete a post, admin only

// Upsert post (create or update) with admin role protection
router.post("/", requireAdmin, upsertPost);

// Additional route for posts by category with authentication (optional)
router.get("/posts", getPostsByCategory);

export default router;
