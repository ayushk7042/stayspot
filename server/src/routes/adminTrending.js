// // // routes/adminTrending.js
// // const express = require('express');
// // const router = express.Router();
// // const Post = require('../models/Post');

// // // Import authentication/authorization middleware
// // const { requireAuth, requireAdmin } = require('../middleware/auth');

// // router.patch(
// //   "/posts/:id/trending",
// //   requireAuth,           // Checks JWT and user
// //   requireAdmin,          // Allows ONLY if user.role === "admin"
// //   async (req, res) => {
// //     try {
// //       const { isTrending } = req.body;
// //       const post = await Post.findByIdAndUpdate(
// //         req.params.id,
// //         { isTrending },
// //         { new: true }
// //       );
// //       res.json(post);
// //     } catch (err) {
// //       res.status(500).json({ error: "Failed to update trending status" });
// //     }
// //   }
// // );

// // module.exports = router;


// import express from 'express';
// //import Post from '../models/Post.js';
// import { updateTrendingStatus } from '../controllers/adminTrendingControllerr.js';
// import { requireAuth, requireAdmin } from '../middleware/auth.js';

// const router = express.Router();

// router.patch(
//   "/posts/:id/trending",
//   requireAuth,
//   requireAdmin,
//   updateTrendingStatus, 
//   async (req, res) => {
//     try {
//       const { isTrending } = req.body;

//       if (isTrending) {
//         await Post.updateMany({ isTrending: true }, { $set: { isTrending: false } });
//       }

//       const post = await Post.findByIdAndUpdate(
//         req.params.id,
//         { isTrending },
//         { new: true }
//       );

//       if (!post) {
//         return res.status(404).json({ error: "Post not found" });
//       }

//       res.json(post);
//     } catch (err) {
//       res.status(500).json({ error: "Failed to update trending status" });
//     }
//   }
// );

// export default router;


import express from 'express';
import { updateTrendingStatus } from '../controllers/adminTrendingController.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.patch(
  "/posts/:id/trending",
  requireAuth,
  requireAdmin,
  updateTrendingStatus
);

export default router;
