// controllers/admin.post.controller.js
import slugify from "slugify";
import Post from "../models/Post.js";
import Category from "../models/Category.js";
import User from "../models/User.js";

export async function adminListPosts(req, res) {
  const {
    q = "",
    status,
    category,
    author,
    page = 1,
    limit = 12,
    sort = "-publishedAt"
  } = req.query;

  const filter = {};
  if (status) filter.status = status;
  if (category) filter.category = category;
  if (author) filter.author = author;
  if (q) {
    filter.$or = [
      { title: { $regex: q, $options: "i" } },
      { excerpt: { $regex: q, $options: "i" } },
      { tags: { $regex: q, $options: "i" } }
    ];
  }

  const skip = (Math.max(1, parseInt(page)) - 1) * Math.min(50, parseInt(limit));
  const total = await Post.countDocuments(filter);
  const results = await Post.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(Math.min(50, parseInt(limit)))
    .populate("author", "name")
    .populate("category", "name slug")
    .lean();

  res.json({
    results,
    page: Math.max(1, parseInt(page)),
    pages: Math.max(1, Math.ceil(total / Math.min(50, parseInt(limit)))),
    total
  });
}

export async function createPost(req, res) {
  const {
    title, excerpt, content, cover, thumbnail,
    categorySlug, authorId, tags = [],
    status = "published", publishedAt
  } = req.body;

  if (!title || !categorySlug || !authorId) {
    return res.status(400).json({ message: "title, categorySlug, authorId required" });
  }

  const slug = slugify(title, { lower: true, strict: true });
  const exists = await Post.findOne({ slug });
  if (exists) return res.status(409).json({ message: "Post with this title already exists" });

  const categoryDoc = await Category.findOne({ slug: categorySlug });
  if (!categoryDoc) return res.status(400).json({ message: "Invalid category" });

  const authorDoc = await User.findById(authorId);
  if (!authorDoc) return res.status(400).json({ message: "Invalid author" });

  const post = await Post.create({
    title, slug, excerpt, content, cover, thumbnail,
    category: categoryDoc._id, author: authorDoc._id,
    tags, status, publishedAt: publishedAt || new Date()
  });

  res.status(201).json(post);
}

export async function updatePost(req, res) {
  const { id } = req.params;
  const {
    title, excerpt, content, cover, thumbnail,
    categorySlug, authorId, tags, status, publishedAt
  } = req.body;

  const payload = { excerpt, content, cover, thumbnail, tags, status, publishedAt };
  if (title) {
    payload.title = title;
    payload.slug = slugify(title, { lower: true, strict: true });
  }
  if (categorySlug) {
    const categoryDoc = await Category.findOne({ slug: categorySlug });
    if (!categoryDoc) return res.status(400).json({ message: "Invalid category" });
    payload.category = categoryDoc._id;
  }
  if (authorId) {
    const authorDoc = await User.findById(authorId);
    if (!authorDoc) return res.status(400).json({ message: "Invalid author" });
    payload.author = authorDoc._id;
  }

  const updated = await Post.findByIdAndUpdate(id, payload, { new: true });
  if (!updated) return res.status(404).json({ message: "Post not found" });
  res.json(updated);
}

export async function updatePostStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;
  if (!["draft", "review", "scheduled", "published", "archived"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }
  const updated = await Post.findByIdAndUpdate(id, { status }, { new: true });
  if (!updated) return res.status(404).json({ message: "Post not found" });
  res.json(updated);
}

export async function deletePost(req, res) {
  const { id } = req.params;
  const deleted = await Post.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ message: "Post not found" });
  res.json({ message: "Post deleted" });
}
