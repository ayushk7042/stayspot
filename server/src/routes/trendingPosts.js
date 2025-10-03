// // // routes/trendingPosts.js
// // const express = require('express');
// // const router = express.Router();
// // const Post = require('../models/Post');

// // router.get("/trending/latest", async (req, res) => {
// //   try {
// //     const trending = await Post.findOne({ isTrending: true, published: true })
// //       .sort({ publishedAt: -1 })
// //       .lean();
// //     res.json(trending || {});
// //   } catch (err) {
// //     res.status(500).json({ error: "Failed to fetch trending post" });
// //   }
// // });

// // module.exports = router;


// //const express = require('express');
// import express from "express";
// //import Post from "../models/Post.js";
// import { getLatestTrending } from "../controllers/trendingPostsController";
// const router = express.Router();
// //const Post = require('../models/Post');

// router.get("/trending/latest", async (req, res) => {
//   try {
//     const trending = await Post.findOne({ isTrending: true, published: true })
//       .sort({ publishedAt: -1 }) // Latest trending
//       .lean();

//     if (!trending) {
//       return res.json({}); // Return empty object if none
//     }

//     res.json(trending);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch trending post" });
//   }
// });

// export default router;



import express from "express";
import { getLatestTrending } from "../controllers/trendingPostsController.js";

const router = express.Router();

router.get("/trending/latest", getLatestTrending);

export default router;
