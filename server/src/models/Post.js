// import mongoose from "mongoose";

// const PostSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true, trim: true },
//     slug: { type: String, required: true, unique: true, index: true },
//     excerpt: { type: String, default: "" },
//     content: { type: String, default: "" },
//     cover: { type: String },        // featured image
//     thumbnail: { type: String },
//     category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true, index: true },
//     author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
//     tags: { type: [String], default: [], index: true },
//     status: {
//       type: String,
//       enum: ["draft", "review", "scheduled", "published", "archived"],
//       default: "published",
//       index: true,
//     },
//     publishedAt: { type: Date, default: Date.now, index: true },
//     views: { type: Number, default: 0, index: true },
//     likes: { type: Number, default: 0 },
//   },
//   { timestamps: true }
// );

// // Indexes for optimized queries
// PostSchema.index({ status: 1, publishedAt: -1 });
// PostSchema.index({ category: 1, status: 1, publishedAt: -1 });
// PostSchema.index(
//   { title: "text", excerpt: "text", tags: "text" },
//   { weights: { title: 5, excerpt: 2, tags: 3 }, name: "PostTextIndex" }
// );

// export default mongoose.model("Post", PostSchema);




// models/Post.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    excerpt: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    cover: {
      type: String, // Featured image URL
    },
    thumbnail: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    tags: {
      type: [String],
      default: [],
      index: true,
    },
    status: {
      type: String,
      enum: ["draft", "review", "scheduled", "published", "archived"],
      default: "published",
      index: true,
    },
    publishedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
    views: {
      type: Number,
      default: 0,
      index: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
     // ... other fields ...
  isTrending: { type: Boolean, default: false },
  // ... other fields ...
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Compound indexes for query optimization
PostSchema.index({ status: 1, publishedAt: -1 });
PostSchema.index({ category: 1, status: 1, publishedAt: -1 });

// Text index for search on title, excerpt, and tags with weights
PostSchema.index(
  { title: "text", excerpt: "text", tags: "text" },
  { weights: { title: 5, excerpt: 2, tags: 3 }, name: "PostTextIndex" }
);

export default mongoose.model("Post", PostSchema);
