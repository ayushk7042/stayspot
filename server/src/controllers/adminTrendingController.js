import Post from "../models/Post.js";

export const updateTrendingStatus = async (req, res) => {
  try {
    const { isTrending } = req.body;

    if (isTrending) {
      // Unset existing trending posts
      await Post.updateMany({ isTrending: true }, { $set: { isTrending: false } });
    }

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { isTrending },
      { new: true }
    );

    if (!post) return res.status(404).json({ error: "Post not found" });

    return res.json(post);
  } catch (err) {
    return res.status(500).json({ error: "Failed to update trending status" });
  }
};
