


// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext.jsx";
// import { fetchAllPostsAdmin, createPostAdmin, updatePostAdmin, deletePostAdmin } from "../api/client.js";

// const PostManager = () => {
//   const { token } = useAuth();
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newPostTitle, setNewPostTitle] = useState("");

//   useEffect(() => {
//     if (!token) return;
//     fetchAllPostsAdmin(token)
//       .then(setPosts)
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [token]);

//   const handleCreate = async () => {
//     if (!newPostTitle.trim()) return;
//     try {
//       const newPost = await createPostAdmin(token, { title: newPostTitle, status: "draft" });
//       setPosts([newPost, ...posts]);
//       setNewPostTitle("");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete post?")) return;
//     try {
//       await deletePostAdmin(token, id);
//       setPosts(posts.filter((p) => p._id !== id));
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   if (loading) return <p>Loading posts...</p>;
//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Post Manager</h2>
//       <input
//         type="text"
//         value={newPostTitle}
//         onChange={(e) => setNewPostTitle(e.target.value)}
//         placeholder="New post title"
//       />
//       <button onClick={handleCreate}>Add Post</button>

//       <ul>
//         {posts.map((post) => (
//           <li key={post._id}>
//             {post.title} ({post.status})
//             <button onClick={() => handleDelete(post._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostManager;




import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { 
  fetchAllPostsAdmin, 
  createPostAdmin, 
  updatePostAdmin, 
  deletePostAdmin 
} from "../api/client.js";

const PostManager = () => {
  const { token } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPostTitle, setNewPostTitle] = useState("");

  const fetchPosts = async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllPostsAdmin(token);
      setPosts(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [token]);

  const handleCreate = async () => {
    if (!newPostTitle.trim()) return;
    try {
      const newPost = await createPostAdmin(token, { title: newPostTitle, status: "draft" });
      setPosts((prev) => [newPost, ...prev]);
      setNewPostTitle("");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete post?")) return;
    try {
      await deletePostAdmin(token, id);
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const toggleTrending = async (id, isCurrentlyTrending) => {
    try {
      // Update trending status: flip boolean, backend ensures only one trending post
      await updatePostAdmin(token, id, { isTrending: !isCurrentlyTrending });
      await fetchPosts(); // Reload to reflect changes
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Post Manager</h2>
      <input
        type="text"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
        placeholder="New post title"
      />
      <button onClick={handleCreate}>Add Post</button>

      <ul>
        {posts.map((post) => (
          <li key={post._id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong> ({post.status})
            <button 
              onClick={() => handleDelete(post._id)} 
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
            <button
              onClick={() => toggleTrending(post._id, post.isTrending)}
              style={{ marginLeft: "10px", backgroundColor: post.isTrending ? "#facc15" : "#4ade80" }}
              aria-pressed={post.isTrending}
              aria-label={post.isTrending ? "Unmark as Trending" : "Mark as Trending"}
            >
              {post.isTrending ? "Unmark Trending" : "Mark as Trending"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostManager;
