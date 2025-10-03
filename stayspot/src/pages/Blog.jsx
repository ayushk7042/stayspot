import React, { useEffect, useState } from "react";
import Seo from "../components/Seo.jsx";
import PostList from "../components/PostList.jsx";
import { Loader, ErrorState } from "../components/Loader.jsx";

const POSTS_PER_PAGE = 10;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Optional: Search/filter state
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPosts = () => {
    setLoading(true);
    let url = `http://localhost:4000/api/posts?page=${page}&limit=${POSTS_PER_PAGE}`;
    if (searchTerm.trim()) {
      url += `&search=${encodeURIComponent(searchTerm.trim())}`;
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data.results || []);
        setTotalPages(data.pages || 1);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [page, searchTerm]);

  const onSearchChange = (e) => setSearchTerm(e.target.value);
  const onPageChange = (p) => setPage(p);

  return (
    <>
      <Seo title="Blog" description="Latest articles and news" />

      <main style={{ maxWidth: 960, margin: "auto", padding: 16 }}>
        <h1 style={{ marginBottom: 20 }}>Blog</h1>
        <input
          type="search"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={onSearchChange}
          style={{
            padding: "10px 14px",
            width: "100%",
            maxWidth: 400,
            marginBottom: 20,
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
          aria-label="Search blog posts"
        />

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorState msg={error} />
        ) : posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <>
            <PostList posts={posts} layout="grid" />
            <div style={{ marginTop: 24, textAlign: "center" }}>
              <button
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
                style={{ marginRight: 12, padding: "8px 16px" }}
              >
                Previous
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
                style={{ marginLeft: 12, padding: "8px 16px" }}
              >
                Next
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Blog;
