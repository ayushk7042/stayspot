import Post from "../models/Post.js";

export async function search(req, res) {
  const q = (req.query.q || "").trim();
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(50, parseInt(req.query.limit) || 12);
  if (!q) return res.json({ results: [], page: 1, pages: 1 });

  const filter = {
    status: "published",
    $or: [
      { title: { $regex: q, $options: "i" } },
      { excerpt: { $regex: q, $options: "i" } },
      { tags: { $regex: q, $options: "i" } },
    ]
  };

  const total = await Post.countDocuments(filter);
  const results = await Post.find(filter)
    .sort({ publishedAt: -1 })
    .skip((page - 1) * limit).limit(limit)
    .populate("author category", "name slug").lean();

  const pages = Math.max(1, Math.ceil(total / limit));
  res.json({ results, page, pages });
}
