import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { listAllPosts } from "../api/client.js";
import { FaEdit, FaStar } from "react-icons/fa";

const AdminAllPosts = () => {
  const { token, user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all posts (published, same as shown on your home)
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await listAllPosts(1, 1000);
      setPosts(Array.isArray(res.posts) ? res.posts : res);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Toggle Trending
  const toggleTrending = async (post) => {
    await fetch(`/api/admin/trending/posts/${post._id}/trending`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ isTrending: !post.isTrending }),
    });
    fetchPosts();
  };

  // Edit (redirect or open modal/dialog)
  const handleEdit = (post) => {
    // Example: redirect to /admin/edit/:id, or open modal, or call your existing edit logic
    // window.location.href = `/admin/edit/${post._id}`;
    alert("Edit logic for '" + post.title + "' (implement as needed)");
  };

  return (
    <div style={{ maxWidth: 900, margin: "auto" }}>
      <h2>All Posts (Admin Control)</h2>
      {loading && <p>Loading posts...</p>}
      {!loading && posts.length === 0 && <p>No posts found.</p>}
      {!loading && posts.length > 0 && (
        <div style={{ display: "grid", gap: "14px" }}>
          {posts.map((post) => (
            <div key={post._id} style={{
              padding: 16, 
              border: "1px solid #e0e0e0", 
              borderRadius: 10, 
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <div>
                <div style={{ fontWeight: "bold", fontSize: 17 }}>
                  {post.title}
                </div>
                <div>
                  <span style={{
                    background: post.isTrending ? "#ffd600" : "#f2f2f2",
                    color: post.isTrending ? "#000" : "#888",
                    borderRadius: 5,
                    padding: "1px 10px",
                    marginRight: 6,
                    fontWeight: 600
                  }}>
                    {post.isTrending ? "Trending" : "Normal"}
                  </span>
                  <span>{post.status}</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  style={{
                    border: "none",
                    padding: "7px 12px",
                    background: "#4054b2",
                    color: "white",
                    borderRadius: 5,
                    cursor: "pointer"
                  }}
                  onClick={() => handleEdit(post)}
                  title="Edit"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  style={{
                    border: "none",
                    padding: "7px 12px",
                    background: post.isTrending ? "#ffd600" : "#888",
                    color: post.isTrending ? "#000" : "white",
                    borderRadius: 5,
                    cursor: "pointer"
                  }}
                  onClick={() => toggleTrending(post)}
                  title={post.isTrending ? "Unmark Trending" : "Mark as Trending"}
                >
                  <FaStar />
                  {post.isTrending ? "Unmark Trending" : "Mark Trending"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminAllPosts;
