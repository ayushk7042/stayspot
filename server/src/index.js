


// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";
// import path from "path";
// import { fileURLToPath } from "url";
// import { connectDB } from "./config/db.js";

// import authRoutes from "./routes/auth.routes.js";
// import categoryRoutes from "./routes/category.routes.js";
// import postRoutes from "./routes/post.routes.js";
// import searchRoutes from "./routes/search.routes.js";
// import categoriesPostsRoutes from "./routes/categories.posts.routes.js";

// import adminPostsRoutes from "./routes/admin.posts.routes.js";
// import adminCategoriesRoutes from "./routes/admin.categories.routes.js";
// import heroSlidesRoutes from "./routes/heroSlides.routes.js";
// import heroSlidesAdminRoutes from "./routes/heroSlides.admin.routes.js";

// import adminUploadRouter from "./routes/adminUpload.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Global CORS middleware for APIs
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://localhost:5174"],
//     credentials: true,
//   })
// );

// app.use(helmet());
// app.use(express.json({ limit: "1mb" }));
// app.use(morgan("dev"));

// // ===== Add CORS-enabled static uploads middleware HERE =====
// // app.use(
// //   "/uploads",
// //   cors({
// //     origin: ["http://localhost:5173", "http://localhost:5174"],
// //     credentials: true,
// //   }),
// //   express.static(path.join(__dirname, "../uploads"))
// // );
// // ===========================================================
// app.use(
//   "/uploads",
//   (req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // your frontend origin
//     res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");         // allow cross-origin image loading
//     res.setHeader("Cross-Origin-Opener-Policy", "same-origin");           // helps with top-level isolation
//     next();
//   },
//   express.static(path.join(__dirname, "../uploads"))
// );



// // Public routes
// app.use("/api/auth", authRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/search", searchRoutes);
// app.use("/api/categories-posts", categoriesPostsRoutes);
// app.use("/api/hero-slides", heroSlidesRoutes);

// // Admin routes
// app.use("/api/admin/posts", adminPostsRoutes);
// app.use("/api/admin/categories", adminCategoriesRoutes);
// app.use("/api/admin/hero-slides", heroSlidesAdminRoutes);

// // Upload route
// app.use("/api/admin", adminUploadRouter);

// const port = process.env.PORT || 4000;

// connectDB(process.env.MONGODB_URI).then(() => {
//   app.listen(port, () => console.log(`API running on port :${port}`));
// });



import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import postRoutes from "./routes/post.routes.js";
import searchRoutes from "./routes/search.routes.js";
import categoriesPostsRoutes from "./routes/categories.posts.routes.js";

import adminPostsRoutes from "./routes/admin.posts.routes.js";
import adminCategoriesRoutes from "./routes/admin.categories.routes.js";
import heroSlidesRoutes from "./routes/heroSlides.routes.js";
import heroSlidesAdminRoutes from "./routes/heroSlides.admin.routes.js";

import adminUploadRouter from "./routes/adminUpload.js";

// === NEW Trending routes ===
import adminTrendingRoutes from "./routes/adminTrending.js";
import trendingPostsRoutes from "./routes/trendingPosts.js";
// ===========================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Global CORS middleware for APIs
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

// ===== CORS-enabled static uploads middleware =====
app.use(
  "/uploads",
  (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    next();
  },
  express.static(path.join(__dirname, "../uploads"))
);

// ========= Public routes =========
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/categories-posts", categoriesPostsRoutes);
app.use("/api/hero-slides", heroSlidesRoutes);

// ======= Trending POST fetch route =========
app.use("/api/posts", trendingPostsRoutes);
// (Merges with other posts public routes!)


// ========= Admin routes ==========
app.use("/api/admin/posts", adminPostsRoutes);
app.use("/api/admin/categories", adminCategoriesRoutes);
app.use("/api/admin/hero-slides", heroSlidesAdminRoutes);

// ======= Trending admin route =========
app.use("/api/admin/trending", adminTrendingRoutes);

// Upload route
app.use("/api/admin", adminUploadRouter);

const port = process.env.PORT || 4000;

connectDB(process.env.MONGODB_URI).then(() => {
  app.listen(port, () => console.log(`API running on port :${port}`));
});
