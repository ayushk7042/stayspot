import Post from "../models/Post.js";

export const getLatestTrending = async (req, res) => {
  try {
    const trending = await Post.findOne({ isTrending: true, published: true })
      .sort({ publishedAt: -1 })
      .lean();

    if (!trending) return res.json({});

    return res.json(trending);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch trending post" });
  }
};
