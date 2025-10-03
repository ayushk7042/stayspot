import React, { useEffect, useState } from "react";

function CategoryPosts({ categorySlug }) {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:4000/api/categories/${categorySlug}/posts?page=${page}&limit=${limit}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data.posts || []);
        setCategory(data.category || null);
        setPages(data.pages || 1);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Error fetching posts");
        setLoading(false);
      }
    };
    fetchCategoryPosts();
  }, [categorySlug, page]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Posts in Category: {category?.name || categorySlug}</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <a href={`/article/${post.slug}`}>{post.title}</a>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </li>
          ))}
        </ul>
      )}
      <div>
        {/* Simple pagination controls */}
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {pages}
        </span>
        <button onClick={() => setPage((p) => Math.min(p + 1, pages))} disabled={page === pages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CategoryPosts;
