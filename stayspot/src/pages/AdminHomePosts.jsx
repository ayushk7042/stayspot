// // import React, { useEffect, useState } from "react";
// // import { useAuth } from "../context/AuthContext.jsx";
// // import { listAllPosts } from "../api/client.js";
// // import { FaEdit, FaStar } from "react-icons/fa";

// // const AdminHomePosts = () => {
// //   const { token } = useAuth();
// //   const [posts, setPosts] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const fetchPosts = async () => {
// //     setLoading(true);
// //     try {
// //       const res = await listAllPosts(1, 1000); // adjust to your API
// //       setPosts(Array.isArray(res.posts) ? res.posts : res);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => { fetchPosts(); }, []);

// //   // Trending toggle
// //   const toggleTrending = async post => {
// //     await fetch(`/api/admin/trending/posts/${post._id}/trending`, {
// //       method: "PATCH",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${token}`
// //       },
// //       body: JSON.stringify({ isTrending: !post.isTrending }),
// //     });
// //     fetchPosts();
// //   };

// //   return (
// //     <div style={{ maxWidth: 900, margin: "auto" }}>
// //       <h2>Home Page Posts (Admin Control)</h2>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         posts.map(post => (
// //           <div key={post._id} style={{ borderBottom: "1px solid #ddd", padding: 15, display: "flex", alignItems: "center" }}>
// //             <div style={{ flex: 1 }}>
// //               <div style={{ fontWeight: 700 }}>{post.title}</div>
// //               <div>Status: {post.status} {post.isTrending && <span style={{ background: "#FFD700", padding: "0 8px", borderRadius: 3 }}>Trending</span>}</div>
// //             </div>
// //             <button style={{ marginRight: 10 }} onClick={() => alert("Implement edit logic for post: " + post._id)}>
// //               <FaEdit /> Edit
// //             </button>
// //             <button
// //               onClick={() => toggleTrending(post)}
// //               style={{
// //                 backgroundColor: post.isTrending ? "#ffd600" : "#444",
// //                 color: post.isTrending ? "#111" : "#fff",
// //                 border: "none",
// //                 borderRadius: 5,
// //                 padding: "7px 12px",
// //                 cursor: "pointer"
// //               }}>
// //               <FaStar />
// //               {post.isTrending ? "Unmark Trending" : "Mark Trending"}
// //             </button>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminHomePosts;


// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext.jsx";
// import { listAllPosts } from "../api/client.js";
// import { FaEdit, FaStar } from "react-icons/fa";
// import { MdDelete, MdNewReleases } from "react-icons/md";
// import "./admin-posts.css"; // <- CSS file include

// const AdminHomePosts = () => {
//   const { token } = useAuth();
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // ✅ Fetch all posts
//   const fetchPosts = async () => {
//     setLoading(true);
//     try {
//       const res = await listAllPosts(1, 1000);
//       console.log("API response:", res);

//       // Ab ham results ka use karenge
//       const data = Array.isArray(res.results) ? res.results : [];
//       setPosts(data);
//     } catch (err) {
//       console.error("Error fetching posts:", err);
//       setPosts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   // ✅ Toggle Trending
//   const toggleTrending = async (post) => {
//     try {
//       await fetch(`/api/admin/trending/posts/${post._id}/trending`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ isTrending: !post.isTrending }),
//       });
//       fetchPosts();
//     } catch (err) {
//       console.error("Error toggling trending:", err);
//     }
//   };

//   // ✅ Toggle Latest
//   const toggleLatest = async (post) => {
//     try {
//       await fetch(`/api/admin/latest/posts/${post._id}/latest`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ isLatest: !post.isLatest }),
//       });
//       fetchPosts();
//     } catch (err) {
//       console.error("Error toggling latest:", err);
//     }
//   };

//   // ✅ Delete Post
//   const deletePost = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       await fetch(`/api/admin/posts/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchPosts();
//     } catch (err) {
//       console.error("Error deleting post:", err);
//     }
//   };

//   // ✅ Edit Post (placeholder)
//   const editPost = (id) => {
//     alert("Implement edit logic for post: " + id);
//   };

//   return (
//     <div className="admin-posts">
//       <h2>📢 All Posts (Admin Panel)</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : posts.length === 0 ? (
//         <p>No posts found</p>
//       ) : (
//         posts.map((post) => (
//           <div key={post._id} className="admin-post-card">
//             <div className="admin-post-info">
//               <h3>{post.title}</h3>
//               <p>
//                 Status: {post.status || "N/A"}
//                 {post.isTrending && (
//                   <span className="badge trending">🔥 Trending</span>
//                 )}
//                 {post.isLatest && (
//                   <span className="badge latest">⭐ Latest</span>
//                 )}
//               </p>
//             </div>

//             <div className="admin-actions">
//               <button className="btn-edit" onClick={() => editPost(post._id)}>
//                 <FaEdit /> Edit
//               </button>

//               <button
//                 className="btn-delete"
//                 onClick={() => deletePost(post._id)}
//               >
//                 <MdDelete /> Delete
//               </button>

//               <button
//                 className={`btn-trending ${post.isTrending ? "active" : ""}`}
//                 onClick={() => toggleTrending(post)}
//               >
//                 <FaStar />
//                 {post.isTrending ? " Unmark" : " Trending"}
//               </button>

//               <button
//                 className={`btn-latest ${post.isLatest ? "active" : ""}`}
//                 onClick={() => toggleLatest(post)}
//               >
//                 <MdNewReleases />
//                 {post.isLatest ? " Unmark" : " Latest"}
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default AdminHomePosts;




import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { listAllPosts } from "../api/client.js";
import { FaEdit, FaStar } from "react-icons/fa";
import { MdDelete, MdNewReleases } from "react-icons/md";
import "./admin-posts.css";

const AdminHomePosts = () => {
  const { token } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all posts
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await listAllPosts(1, 1000);
      const data = Array.isArray(res.results) ? res.results : [];
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Toggle Trending (multi-trending allowed)
  const toggleTrending = async (post) => {
    try {
      await fetch(`/api/admin/trending/posts/${post._id}/trending`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isTrending: !post.isTrending }),
      });
      // Refresh posts after toggling
      fetchPosts();
    } catch (err) {
      console.error("Error toggling trending:", err);
    }
  };

  // Toggle Latest (single or multi as before)
  const toggleLatest = async (post) => {
    try {
      await fetch(`/api/admin/latest/posts/${post._id}/latest`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isLatest: !post.isLatest }),
      });
      fetchPosts();
    } catch (err) {
      console.error("Error toggling latest:", err);
    }
  };

  const deletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await fetch(`/api/admin/posts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  const editPost = (id) => {
    alert("Implement edit logic for post: " + id);
  };

  return (
    <div className="admin-posts">
      <h2>📢 All Posts (Admin Panel)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="admin-post-card">
            <div className="admin-post-info">
              <h3>{post.title}</h3>
              <p>
                Status: {post.status || "N/A"}
                {post.isTrending && (
                  <span className="badge trending">🔥 Trending</span>
                )}
                {post.isLatest && (
                  <span className="badge latest">⭐ Latest</span>
                )}
              </p>
            </div>

            <div className="admin-actions">
              <button className="btn-edit" onClick={() => editPost(post._id)}>
                <FaEdit /> Edit
              </button>

              <button
                className="btn-delete"
                onClick={() => deletePost(post._id)}
              >
                <MdDelete /> Delete
              </button>

              <button
                className={`btn-trending ${post.isTrending ? "active" : ""}`}
                onClick={() => toggleTrending(post)}
              >
                <FaStar />
                {post.isTrending ? " Unmark" : " Trending"}
              </button>

              <button
                className={`btn-latest ${post.isLatest ? "active" : ""}`}
                onClick={() => toggleLatest(post)}
              >
                <MdNewReleases />
                {post.isLatest ? " Unmark" : " Latest"}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminHomePosts;
