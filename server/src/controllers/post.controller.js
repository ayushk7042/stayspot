


// // import Post from "../models/Post.js";
// // import Category from "../models/Category.js";
// // import slugify from "slugify";

// // function pageMeta(total, page, limit) {
// //   const pages = Math.max(1, Math.ceil(total / limit));
// //   const current = Math.min(page, pages);
// //   return { total, page: current, pages };
// // }

// // export async function homeFeed(_req, res) {
// //   const latest = await Post.find({ status: "published" })
// //     .sort({ publishedAt: -1 })
// //     .limit(12)
// //     .populate("author category", "name slug")
// //     .lean();

// //   const trending = await Post.find({ status: "published" })
// //     .sort({ createdAt: -1 })
// //     .limit(9)
// //     .populate("author category", "name slug")
// //     .lean();

// //   const hero = await Post.find({ status: "published" })
// //     .sort({ publishedAt: -1 })
// //     .limit(5)
// //     .select("title slug cover category")
// //     .populate("category", "name slug")
// //     .lean();

// //   const cats = await Category.find().limit(4).lean();

// //   const sections = await Promise.all(
// //     cats.map(async (c) => {
// //       const posts = await Post.find({ status: "published", category: c._id })
// //         .sort({ publishedAt: -1 })
// //         .limit(6)
// //         .populate("author category", "name slug")
// //         .lean();
// //       return { slug: c.slug, name: c.name, posts };
// //     })
// //   );

// //   res.json({ hero, trending, latest, sections });
// // }

// // export async function listPosts(req, res) {
// //   const page = Math.max(1, parseInt(req.query.page) || 1);
// //   const limit = Math.min(50, parseInt(req.query.limit) || 12);
// //   const filter = { status: "published" };

// //   const total = await Post.countDocuments(filter);
// //   const posts = await Post.find(filter)
// //     .sort({ publishedAt: -1 })
// //     .skip((page - 1) * limit)
// //     .limit(limit)
// //     .populate("author category", "name slug")
// //     .lean();

// //   res.json({ results: posts, ...pageMeta(total, page, limit) });
// // }

// // export async function getBySlug(req, res) {
// //   const post = await Post.findOne({ slug: req.params.slug, status: "published" })
// //     .populate("author category", "name slug")
// //     .lean();

// //   if (!post) return res.status(404).json({ message: "Not found" });

// //   res.json(post);
// // }

// // export async function related(req, res) {
// //   const base = await Post.findOne({ slug: req.params.slug }).lean();
// //   if (!base) return res.json([]);

// //   const rel = await Post.find({
// //     _id: { $ne: base._id },
// //     status: "published",
// //     category: base.category,
// //   })
// //     .sort({ publishedAt: -1 })
// //     .limit(6)
// //     .populate("author category", "name slug")
// //     .lean();

// //   res.json(rel);
// // }

// // export async function byCategory(req, res) {
// //   const { slug } = req.params;
// //   const page = Math.max(1, parseInt(req.query.page) || 1);
// //   const limit = Math.min(50, parseInt(req.query.limit) || 12);

// //   const category = await Category.findOne({ slug }).lean();
// //   if (!category) return res.status(404).json({ message: "Category not found" });

// //   const filter = { status: "published", category: category._id };
// //   const total = await Post.countDocuments(filter);

// //   const posts = await Post.find(filter)
// //     .sort({ publishedAt: -1 })
// //     .skip((page - 1) * limit)
// //     .limit(limit)
// //     .populate("author category", "name slug")
// //     .lean();

// //   res.json({ category, posts, ...pageMeta(total, page, limit) });
// // }

// // /**
// //  * Create or update a post (admin only)
// //  * Expected fields in req.body: 
// //  *  title, content, excerpt, categorySlug, authorId, cover, thumbnail, tags, status, publishedAt
// //  */
// // export async function upsertPost(req, res) {
// //   const {
// //     title,
// //     content,
// //     excerpt,
// //     categorySlug,
// //     authorId,
// //     cover,
// //     thumbnail,
// //     tags,
// //     status,
// //     publishedAt,
// //   } = req.body;

// //   // Validate category slug and get category _id
// //   const category = await Category.findOne({ slug: categorySlug });
// //   if (!category) return res.status(400).json({ message: "Invalid category" });

// //   // Slugify title for URL slug
// //   const slug = slugify(title, { lower: true, strict: true });

// //   // Prepare post object payload
// //   const payload = {
// //     title,
// //     slug,
// //     content,
// //     excerpt,
// //     cover,
// //     thumbnail,
// //     category: category._id,
// //     author: authorId,
// //     tags: tags || [],
// //     status: status || "published",
// //     publishedAt: publishedAt || new Date(),
// //   };

// //   // Check if post with same slug exists, update if yes, else create
// //   const existing = await Post.findOne({ slug });
// //   const post = existing
// //     ? await Post.findByIdAndUpdate(existing._id, payload, { new: true })
// //     : await Post.create(payload);

// //   res.status(existing ? 200 : 201).json(post);
// // }

// // /**
// //  * List posts filtered by category slug passed as query param ?category=slug
// //  */
// // export const getPostsByCategory = async (req, res) => {
// //   try {
// //     const categorySlug = req.query.category;

// //     let filter = { status: "published" };

// //     if (categorySlug && categorySlug !== "all") {
// //       const categoryDoc = await Category.findOne({ slug: categorySlug }).lean();
// //       if (!categoryDoc) {
// //         return res.status(404).json({ message: "Category not found" });
// //       }
// //       filter.category = categoryDoc._id;
// //     }

// //     const posts = await Post.find(filter)
// //       .sort({ publishedAt: -1 })
// //       .populate("author category", "name slug")
// //       .lean();

// //     res.json(posts);
// //   } catch (error) {
// //     console.error("Error fetching posts by category:", error);
// //     res.status(500).json({ message: "Server error fetching posts" });
// //   }
// // };
// // export const getAllPosts = async (req, res) => {
// //   try {
// //     // Fetch all posts sorted latest first
// //     const posts = await Post.find().sort({ createdAt: -1 }).lean();
// //     res.json(posts);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching posts' });
// //   }
// // };

// // export const createPost = async (req, res) => {
// //   try {
// //     const postData = { ...req.body, author: req.user._id };
// //     const post = new Post(postData);
// //     await post.save();
// //     res.status(201).json(post);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error creating post' });
// //   }
// // };

// // export const updatePost = async (req, res) => {
// //   try {
// //     const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
// //     if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
// //     res.json(updatedPost);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error updating post' });
// //   }
// // };

// // export const deletePost = async (req, res) => {
// //   try {
// //     const deletedPost = await Post.findByIdAndDelete(req.params.id);
// //     if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
// //     res.json({ message: 'Post deleted' });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error deleting post' });
// //   }
// // };



// import Post from "../models/Post.js";
// import Category from "../models/Category.js";
// import slugify from "slugify";

// function pageMeta(total, page, limit) {
//   const pages = Math.max(1, Math.ceil(total / limit));
//   const current = Math.min(page, pages);
//   return { total, page: current, pages };
// }

// export async function homeFeed(_req, res) {
//   const latest = await Post.find({ status: "published" })
//     .sort({ publishedAt: -1 })
//     .limit(12)
//     .populate("author category", "name slug")
//     .lean();

//   const trending = await Post.find({ status: "published" })
//     .sort({ createdAt: -1 })
//     .limit(9)
//     .populate("author category", "name slug")
//     .lean();

//   const hero = await Post.find({ status: "published" })
//     .sort({ publishedAt: -1 })
//     .limit(5)
//     .select("title slug cover category")
//     .populate("category", "name slug")
//     .lean();

//   const cats = await Category.find().limit(4).lean();

//   const sections = await Promise.all(
//     cats.map(async (c) => {
//       const posts = await Post.find({ status: "published", category: c._id })
//         .sort({ publishedAt: -1 })
//         .limit(6)
//         .populate("author category", "name slug")
//         .lean();
//       return { slug: c.slug, name: c.name, posts };
//     })
//   );

//   res.json({ hero, trending, latest, sections });
// }

// export async function listPosts(req, res) {
//   const page = Math.max(1, parseInt(req.query.page) || 1);
//   const limit = Math.min(50, parseInt(req.query.limit) || 12);
//   const filter = { status: "published" };

//   const total = await Post.countDocuments(filter);
//   const posts = await Post.find(filter)
//     .sort({ publishedAt: -1 })
//     .skip((page - 1) * limit)
//     .limit(limit)
//     .populate("author category", "name slug")
//     .lean();

//   res.json({ results: posts, ...pageMeta(total, page, limit) });
// }

// export async function getBySlug(req, res) {
//   const post = await Post.findOne({ slug: req.params.slug, status: "published" })
//     .populate("author category", "name slug")
//     .lean();

//   if (!post) return res.status(404).json({ message: "Not found" });

//   res.json(post);
// }

// export async function related(req, res) {
//   const base = await Post.findOne({ slug: req.params.slug }).lean();
//   if (!base) return res.json([]);

//   const rel = await Post.find({
//     _id: { $ne: base._id },
//     status: "published",
//     category: base.category,
//   })
//     .sort({ publishedAt: -1 })
//     .limit(6)
//     .populate("author category", "name slug")
//     .lean();

//   res.json(rel);
// }               

// export async function byCategory(req, res) {
//   const { slug } = req.params;
//   const page = Math.max(1, parseInt(req.query.page) || 1);
//   const limit = Math.min(50, parseInt(req.query.limit) || 12);

//   const category = await Category.findOne({ slug }).lean();
//   if (!category) return res.status(404).json({ message: "Category not found" });

//   const filter = { status: "published", category: category._id };
//   const total = await Post.countDocuments(filter);

//   const posts = await Post.find(filter)
//     .sort({ publishedAt: -1 })
//     .skip((page - 1) * limit)
//     .limit(limit)
//     .populate("author category", "name slug")
//     .lean();

//   res.json({ category, posts, ...pageMeta(total, page, limit) });
// }

// /**
//  * Create or update a post (admin only)
//  * Expected fields in req.body:
//  *  title, content, excerpt, categorySlug, authorId, cover, thumbnail, tags, status, publishedAt
//  */
// export async function upsertPost(req, res) {
//   const {
//     title,
//     content,
//     excerpt,
//     categorySlug,
//     authorId,
//     cover,
//     thumbnail,
//     tags,
//     status,
//     publishedAt,
//   } = req.body;

//   // Validate category slug and get category _id
//   const category = await Category.findOne({ slug: categorySlug });
//   if (!category) return res.status(400).json({ message: "Invalid category" });

//   // Slugify title for URL slug
//   const slug = slugify(title, { lower: true, strict: true });

//   // Prepare post object payload
//   const payload = {
//     title,
//     slug,
//     content,
//     excerpt,
//     cover,
//     thumbnail,
//     category: category._id,
//     author: authorId,
//     tags: tags || [],
//     status: status || "published",
//     publishedAt: publishedAt || new Date(),
//   };

//   // Check if post with same slug exists, update if yes, else create
//   const existing = await Post.findOne({ slug });
//   const post = existing
//     ? await Post.findByIdAndUpdate(existing._id, payload, { new: true })
//     : await Post.create(payload);

//   res.status(existing ? 200 : 201).json(post);
// }

// /**
//  * List posts filtered by category slug passed as query param ?category=slug
//  * Supports pagination: ?page=1&limit=20
//  */
// export const getPostsByCategory = async (req, res) => {
//   try {
//     const categorySlug = req.query.category || "all";
//     const page = Math.max(1, parseInt(req.query.page) || 1);
//     const limit = Math.min(50, parseInt(req.query.limit) || 20);
//     const skip = (page - 1) * limit;

//     let filter = { status: "published" };

//     if (categorySlug !== "all") {
//       const categoryDoc = await Category.findOne({ slug: categorySlug }).lean();
//       if (!categoryDoc) {
//         return res.status(404).json({ message: "Category not found" });
//       }
//       filter.category = categoryDoc._id;
//     }

//     const totalPosts = await Post.countDocuments(filter);
//     const posts = await Post.find(filter)
//       .sort({ publishedAt: -1 })
//       .skip(skip)
//       .limit(limit)
//       .populate("author category", "name slug")
//       .lean();

//     res.json({
//       page,
//       limit,
//       totalPosts,
//       totalPages: Math.ceil(totalPosts / limit),
//       posts,
//     });
//   } catch (error) {
//     console.error("Error fetching posts by category:", error);
//     res.status(500).json({ message: "Server error fetching posts" });
//   }
// };

// export const getAllPosts = async (req, res) => {
//   try {
//     // Fetch all posts sorted latest first
//     const posts = await Post.find().sort({ createdAt: -1 }).lean();
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching posts" });
//   }
// };

// export const createPost = async (req, res) => {
//   try {
//     const postData = { ...req.body, author: req.user._id };
//     const post = new Post(postData);
//     await post.save();
//     res.status(201).json(post);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating post" });
//   }
// };

// export const updatePost = async (req, res) => {
//   try {
//     const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedPost) return res.status(404).json({ message: "Post not found" });
//     res.json(updatedPost);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating post" });
//   }
// };

// export const deletePost = async (req, res) => {
//   try {
//     const deletedPost = await Post.findByIdAndDelete(req.params.id);
//     if (!deletedPost) return res.status(404).json({ message: "Post not found" });
//     res.json({ message: "Post deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting post" });
//   }
// };



import Post from "../models/Post.js";
import Category from "../models/Category.js";
import slugify from "slugify";

function pageMeta(total, page, limit) {
  const pages = Math.max(1, Math.ceil(total / limit));
  const current = Math.min(page, pages);
  return { total, page: current, pages };
}

export async function homeFeed(_req, res) {
  const latest = await Post.find({ status: "published" })
    .sort({ publishedAt: -1 })
    .limit(12)
    .populate("author category", "name slug")
    .lean();

  const trending = await Post.find({ status: "published" })
    .sort({ createdAt: -1 })
    .limit(9)
    .populate("author category", "name slug")
    .lean();

  const hero = await Post.find({ status: "published" })
    .sort({ publishedAt: -1 })
    .limit(5)
    .select("title slug cover category")
    .populate("category", "name slug")
    .lean();

  const cats = await Category.find().limit(4).lean();

  const sections = await Promise.all(
    cats.map(async (c) => {
      const posts = await Post.find({ status: "published", category: c._id })
        .sort({ publishedAt: -1 })
        .limit(6)
        .populate("author category", "name slug")
        .lean();
      return { slug: c.slug, name: c.name, posts };
    })
  );

  res.json({ hero, trending, latest, sections });
}

export async function listPosts(req, res) {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(50, parseInt(req.query.limit) || 12);
  const filter = { status: "published" };

  const total = await Post.countDocuments(filter);
  const posts = await Post.find(filter)
    .sort({ publishedAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate("author category", "name slug")
    .lean();

  res.json({ results: posts, ...pageMeta(total, page, limit) });
}

export async function getBySlug(req, res) {
  const post = await Post.findOne({ slug: req.params.slug, status: "published" })
    .populate("author category", "name slug")
    .lean();

  if (!post) return res.status(404).json({ message: "Not found" });

  res.json(post);
}

export async function related(req, res) {
  const base = await Post.findOne({ slug: req.params.slug }).lean();
  if (!base) return res.json([]);

  const rel = await Post.find({
    _id: { $ne: base._id },
    status: "published",
    category: base.category,
  })
    .sort({ publishedAt: -1 })
    .limit(6)
    .populate("author category", "name slug")
    .lean();

  res.json(rel);
}

export async function byCategory(req, res) {
  const { slug } = req.params;
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(50, parseInt(req.query.limit) || 12);

  const category = await Category.findOne({ slug }).lean();
  if (!category) return res.status(404).json({ message: "Category not found" });

  const filter = { status: "published", category: category._id };
  const total = await Post.countDocuments(filter);

  const posts = await Post.find(filter)
    .sort({ publishedAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate("author category", "name slug")
    .lean();

  res.json({ category, posts, ...pageMeta(total, page, limit) });
}

/**
 * Create or update a post (admin only)
 * Expected fields in req.body:
 *  title, content, excerpt, categorySlug, authorId, cover, thumbnail, tags, status, publishedAt
 */
export async function upsertPost(req, res) {
  const {
    title,
    content,
    excerpt,
    categorySlug,
    authorId,
    cover,
    thumbnail,
    tags,
    status,
    publishedAt,
  } = req.body;

  // Validate category slug and get category _id
  const category = await Category.findOne({ slug: categorySlug });
  if (!category) return res.status(400).json({ message: "Invalid category" });

  // Slugify title for URL slug
  const slug = slugify(title, { lower: true, strict: true });

  // Prepare post object payload
  const payload = {
    title,
    slug,
    content,
    excerpt,
    cover,
    thumbnail,
    category: category._id,
    author: authorId,
    tags: tags || [],
    status: status || "published",
    publishedAt: publishedAt || new Date(),
  };

  // Check if post with same slug exists, update if yes, else create
  const existing = await Post.findOne({ slug });
  const post = existing
    ? await Post.findByIdAndUpdate(existing._id, payload, { new: true })
    : await Post.create(payload);

  res.status(existing ? 200 : 201).json(post);
}

/**
 * List posts filtered by category slug passed as query param ?category=slug
 * Supports pagination: ?page=1&limit=20
 */
export const getPostsByCategory = async (req, res) => {
  try {
    const categorySlug = req.query.category || "all";
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const skip = (page - 1) * limit;

    let filter = { status: "published" };

    if (categorySlug !== "all") {
      const categoryDoc = await Category.findOne({ slug: categorySlug }).lean();
      if (!categoryDoc) {
        return res.status(404).json({ message: "Category not found" });
      }
      filter.category = categoryDoc._id;
    }

    const totalPosts = await Post.countDocuments(filter);
    const posts = await Post.find(filter)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("author category", "name slug")
      .lean();

    res.json({
      page,
      limit,
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
      posts,
    });
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    res.status(500).json({ message: "Server error fetching posts" });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    // Fetch all posts sorted latest first
    const posts = await Post.find().sort({ createdAt: -1 }).lean();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

export const createPost = async (req, res) => {
  try {
    const postData = { ...req.body, author: req.user._id };
    const post = new Post(postData);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) return res.status(404).json({ message: "Post not found" });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
};
