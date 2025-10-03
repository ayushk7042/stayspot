

// // // // import React, { useEffect, useState } from "react";
// // // // import { useAuth } from "../context/AuthContext.jsx";
// // // // import {
// // // //   listAllPosts,
// // // //   getCategories,
// // // //   createPostAdmin,
// // // //   updatePostAdmin,
// // // //   deletePostAdmin,
// // // //   uploadImageAPI,
// // // // } from "../api/client.js";
// // // // import { Loader, ErrorState } from "../components/Loader.jsx";

// // // // import { FaEdit, FaTrash, FaTimes, FaUpload } from "react-icons/fa";

// // // // const ManagePosts = () => {
// // // //   const { token, user } = useAuth();

// // // //   const [posts, setPosts] = useState([]);
// // // //   const [categories, setCategories] = useState([]);

// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);

// // // //   // Form state
// // // //   const [editingPost, setEditingPost] = useState(null);
// // // //   const [title, setTitle] = useState("");
// // // //   const [content, setContent] = useState("");
// // // //   const [categoryId, setCategoryId] = useState("");
// // // //   const [status, setStatus] = useState("published");
// // // //   const [coverUrl, setCoverUrl] = useState(null);
// // // //   const [uploadingImage, setUploadingImage] = useState(false);

// // // //   const [formLoading, setFormLoading] = useState(false);

// // // //   // Filter and pagination state
// // // //   const [filterCategory, setFilterCategory] = useState("");
// // // //   const [filterStatus, setFilterStatus] = useState("");
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const postsPerPage = 10;

// // // //   // Delete confirmation modal state
// // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);

// // // //   // Fetch posts from backend
// // // //   const fetchPosts = async () => {
// // // //     setLoading(true);
// // // //     setError(null);
// // // //     try {
// // // //       const data = await listAllPosts(1, 1000);
// // // //       const postsData = Array.isArray(data.posts)
// // // //         ? data.posts
// // // //         : Array.isArray(data)
// // // //         ? data
// // // //         : [];
// // // //       setPosts(postsData);
// // // //     } catch (err) {
// // // //       setError(err.message || "Failed to load posts.");
// // // //       setPosts([]);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // Fetch categories
// // // //   const fetchCategories = async () => {
// // // //     try {
// // // //       const data = await getCategories();
// // // //       setCategories(Array.isArray(data) ? data : []);
// // // //     } catch {
// // // //       setCategories([]);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchPosts();
// // // //     fetchCategories();
// // // //   }, []);

// // // //   // Reset form on filters change or editor close
// // // //   const resetForm = () => {
// // // //     setEditingPost(null);
// // // //     setTitle("");
// // // //     setContent("");
// // // //     setCategoryId("");
// // // //     setStatus("published");
// // // //     setCoverUrl(null);
// // // //   };

// // // //   useEffect(() => {
// // // //     setCurrentPage(1);
// // // //   }, [filterCategory, filterStatus]);

// // // //   // Image upload handler
// // // //   const handleFileChange = async (e) => {
// // // //     const file = e.target.files[0];
// // // //     if (!file) return;

// // // //     setUploadingImage(true);
// // // //     try {
// // // //       const imageUrl = await uploadImageAPI(token, file);
// // // //       setCoverUrl(imageUrl);
// // // //     } catch (err) {
// // // //       alert("Image upload failed: " + err.message);
// // // //     } finally {
// // // //       setUploadingImage(false);
// // // //     }
// // // //   };

// // // //   // Submit form to create or update post
// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     if (!title.trim() || !content.trim() || !categoryId) {
// // // //       alert("Please fill all required fields.");
// // // //       return;
// // // //     }

// // // //     const selectedCategory = categories.find((cat) => cat._id === categoryId);
// // // //     if (!selectedCategory) {
// // // //       alert("Selected category not found.");
// // // //       return;
// // // //     }

// // // //     if (!user || !user._id) {
// // // //       alert("Author information missing. Please login again.");
// // // //       return;
// // // //     }

// // // //     const postData = {
// // // //       title,
// // // //       content,
// // // //       categorySlug: selectedCategory.slug,
// // // //       authorId: user._id,
// // // //       status,
// // // //       cover: coverUrl,
// // // //       isTrending: editingPost?.isTrending || false, // keep existing trending if editing;  New field not editable here, toggle via list
// // // //     };

// // // //     setFormLoading(true);
// // // //     try {
// // // //       if (editingPost) {
// // // //         await updatePostAdmin(token, editingPost._id, postData);
// // // //         alert("Post updated successfully!");
// // // //       } else {
// // // //         await createPostAdmin(token, postData);
// // // //         alert("Post created successfully!");
// // // //       }
// // // //       resetForm();
// // // //       fetchPosts();
// // // //     } catch (err) {
// // // //       alert("Failed to save post: " + err.message);
// // // //     } finally {
// // // //       setFormLoading(false);
// // // //     }
// // // //   };

// // // //   const handleEdit = (post) => {
// // // //     setEditingPost(post);
// // // //     setTitle(post.title);
// // // //     setContent(post.content);
// // // //     setCategoryId(post.category);
// // // //     setStatus(post.status);
// // // //     setCoverUrl(post.cover || null);
// // // //   };

// // // //   const handleDelete = async (id) => {
// // // //     if (!window.confirm("Are you sure you want to delete this post?")) return;
// // // //     try {
// // // //       await deletePostAdmin(token, id);
// // // //       alert("Post deleted successfully!");
// // // //       fetchPosts();
// // // //     } catch (err) {
// // // //       alert("Failed to delete post: " + err.message);
// // // //     }
// // // //   };

// // // //   // Toggle the trending status of a post
// // // //   // const toggleTrending = async (post) => {
// // // //   //   try {
// // // //   //     await updatePostAdmin(token, post._id, { isTrending: !post.isTrending });
// // // //   //     fetchPosts();
// // // //   //   } catch (err) {
// // // //   //     alert("Failed to update trending status: " + err.message);
// // // //   //   }
// // // //   // };
// // // // const toggleTrending = async (post) => {
// // // //   try {
// // // //     await fetch(`/api/admin/trending/posts/${post._id}/trending`, {
// // // //       method: "PATCH",
// // // //       headers: {
// // // //         "Content-Type": "application/json",
// // // //         Authorization: `Bearer ${token}`, // your auth token
// // // //       },
// // // //       body: JSON.stringify({ isTrending: !post.isTrending }),
// // // //     });
// // // //     fetchPosts(); // Refresh all posts with updated trending status
// // // //   } catch (error) {
// // // //     alert("Failed to update trending status: " + error.message);
// // // //   }
// // // // };

// // // //   // Client-side filter posts
// // // //   const filteredPosts = posts.filter((post) => {
// // // //     return (
// // // //       (filterCategory === "" || post.category === filterCategory) &&
// // // //       (filterStatus === "" || post.status === filterStatus)
// // // //     );
// // // //   });

// // // //   // Pagination calculations
// // // //   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
// // // //   const paginatedPosts = filteredPosts.slice(
// // // //     (currentPage - 1) * postsPerPage,
// // // //     currentPage * postsPerPage
// // // //   );

// // // //   return (
// // // //     <div style={{ maxWidth: 900, margin: "auto" }}>
// // // //       <h2 style={{ marginBottom: 24 }}>{editingPost ? "Edit Post" : "Create Post"}</h2>

// // // //       <form
// // // //         onSubmit={handleSubmit}
// // // //         style={{
// // // //           maxWidth: 600,
// // // //           marginBottom: 40,
// // // //           backgroundColor: "#f4f6f8",
// // // //           padding: 16,
// // // //           borderRadius: 12,
// // // //           boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
// // // //         }}
// // // //       >
// // // //         <div style={{ marginBottom: 12 }}>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Title"
// // // //             value={title}
// // // //             onChange={(e) => setTitle(e.target.value)}
// // // //             disabled={formLoading}
// // // //             required
// // // //             style={{
// // // //               width: "100%",
// // // //               padding: 12,
// // // //               borderRadius: 6,
// // // //               border: "1px solid #ccc",
// // // //               fontSize: 16,
// // // //               boxSizing: "border-box",
// // // //             }}
// // // //           />
// // // //         </div>

// // // //         <div style={{ marginBottom: 12 }}>
// // // //           <textarea
// // // //             placeholder="Content (HTML accepted)"
// // // //             value={content}
// // // //             onChange={(e) => setContent(e.target.value)}
// // // //             rows={6}
// // // //             disabled={formLoading}
// // // //             required
// // // //             style={{
// // // //               width: "100%",
// // // //               padding: 12,
// // // //               borderRadius: 6,
// // // //               border: "1px solid #ccc",
// // // //               fontSize: 16,
// // // //               boxSizing: "border-box",
// // // //               resize: "vertical",
// // // //               fontFamily: "inherit",
// // // //             }}
// // // //           />
// // // //         </div>

// // // //         <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
// // // //           <select
// // // //             value={categoryId}
// // // //             onChange={(e) => setCategoryId(e.target.value)}
// // // //             disabled={formLoading}
// // // //             required
// // // //             style={{ flex: 1, padding: "10px", borderRadius: 6, fontSize: 16 }}
// // // //           >
// // // //             <option value="">Select Category</option>
// // // //             {categories.map((cat) => (
// // // //               <option key={cat._id} value={cat._id}>
// // // //                 {cat.name}
// // // //               </option>
// // // //             ))}
// // // //           </select>

// // // //           <select
// // // //             value={status}
// // // //             onChange={(e) => setStatus(e.target.value)}
// // // //             disabled={formLoading}
// // // //             style={{ width: 140, padding: "10px", borderRadius: 6, fontSize: 16 }}
// // // //           >
// // // //             <option value="published">Published</option>
// // // //             <option value="draft">Draft</option>
// // // //           </select>
// // // //         </div>

// // // //         <div style={{ marginBottom: 12 }}>
// // // //           <label
// // // //             htmlFor="cover-upload"
// // // //             style={{
// // // //               display: "inline-flex",
// // // //               alignItems: "center",
// // // //               gap: 8,
// // // //               cursor: uploadingImage || formLoading ? "not-allowed" : "pointer",
// // // //               fontWeight: 600,
// // // //               color: "#4054b2",
// // // //             }}
// // // //           >
// // // //             <input
// // // //               id="cover-upload"
// // // //               type="file"
// // // //               accept="image/*"
// // // //               onChange={handleFileChange}
// // // //               disabled={uploadingImage || formLoading}
// // // //               style={{ display: "none" }}
// // // //             />
// // // //             Upload Cover Image
// // // //           </label>
// // // //           {uploadingImage ? "Uploading..." : null}
// // // //           {coverUrl && (
// // // //             <div style={{ marginTop: 10, position: "relative" }}>
// // // //               <img
// // // //                 src={coverUrl}
// // // //                 alt="Cover Preview"
// // // //                 style={{
// // // //                   maxWidth: "100%",
// // // //                   borderRadius: 10,
// // // //                   boxShadow: "0 0 15px rgba(0,0,0,0.15)",
// // // //                 }}
// // // //               />
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={() => setCoverUrl(null)}
// // // //                 style={{
// // // //                   position: "absolute",
// // // //                   top: 10,
// // // //                   right: 10,
// // // //                   background: "rgba(0,0,0,0.6)",
// // // //                   color: "white",
// // // //                   border: "none",
// // // //                   borderRadius: "50%",
// // // //                   width: 28,
// // // //                   height: 28,
// // // //                   cursor: "pointer",
// // // //                   fontSize: 16,
// // // //                   display: "flex",
// // // //                   justifyContent: "center",
// // // //                   alignItems: "center",
// // // //                 }}
// // // //                 aria-label="Remove cover image"
// // // //               >
// // // //                 <FaTimes />
// // // //               </button>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <button
// // // //           type="submit"
// // // //           disabled={formLoading}
// // // //           style={{
// // // //             backgroundColor: "#4054b2",
// // // //             color: "white",
// // // //             padding: "12px 24px",
// // // //             border: "none",
// // // //             borderRadius: 6,
// // // //             fontWeight: 700,
// // // //             fontSize: 16,
// // // //             cursor: formLoading ? "not-allowed" : "pointer",
// // // //             transition: "background-color 0.2s ease",
// // // //           }}
// // // //           onMouseEnter={(e) => !formLoading && (e.currentTarget.style.backgroundColor = "#6278f7")}
// // // //           onMouseLeave={(e) => !formLoading && (e.currentTarget.style.backgroundColor = "#4054b2")}
// // // //         >
// // // //           {formLoading ? (editingPost ? "Updating..." : "Posting...") : editingPost ? "Update Post" : "Create Post"}
// // // //         </button>
// // // //         {editingPost && (
// // // //           <button
// // // //             type="button"
// // // //             onClick={resetForm}
// // // //             disabled={formLoading}
// // // //             style={{
// // // //               marginLeft: 12,
// // // //               backgroundColor: "#e53e3e",
// // // //               color: "white",
// // // //               padding: "12px 18px",
// // // //               borderRadius: 6,
// // // //               border: "none",
// // // //               fontWeight: 600,
// // // //               cursor: "pointer",
// // // //               transition: "background-color 0.2s ease",
// // // //             }}
// // // //             onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c53030")}
// // // //             onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e53e3e")}
// // // //           >
// // // //             Cancel
// // // //           </button>
// // // //         )}
// // // //       </form>

// // // //       {/* Filters */}
// // // //       <div
// // // //         style={{
// // // //           marginBottom: 20,
// // // //           display: "flex",
// // // //           gap: 20,
// // // //           maxWidth: 600,
// // // //           flexWrap: "wrap",
// // // //         }}
// // // //       >
// // // //         <label style={{ flex: "1 1 150px" }}>
// // // //           Filter by category:
// // // //           <select
// // // //             value={filterCategory}
// // // //             onChange={(e) => setFilterCategory(e.target.value)}
// // // //             disabled={loading}
// // // //             style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 6 }}
// // // //           >
// // // //             <option value="">All Categories</option>
// // // //             {categories.map((cat) => (
// // // //               <option key={cat._id} value={cat._id}>
// // // //                 {cat.name}
// // // //               </option>
// // // //             ))}
// // // //           </select>
// // // //         </label>

// // // //         <label style={{ flex: "1 1 150px" }}>
// // // //           Filter by status:
// // // //           <select
// // // //             value={filterStatus}
// // // //             onChange={(e) => setFilterStatus(e.target.value)}
// // // //             disabled={loading}
// // // //             style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 6 }}
// // // //           >
// // // //             <option value="">All Statuses</option>
// // // //             <option value="published">Published</option>
// // // //             <option value="draft">Draft</option>
// // // //           </select>
// // // //         </label>
// // // //       </div>

// // // //       {/* Posts List */}
// // // //       <h3 style={{ marginBottom: 12 }}>Posts</h3>
// // // //       {loading ? (
// // // //         <Loader />
// // // //       ) : error ? (
// // // //         <p style={{ color: "red" }}>{error}</p>
// // // //       ) : paginatedPosts.length === 0 ? (
// // // //         <p>No posts found.</p>
// // // //       ) : (
// // // //         <div style={{ display: "grid", gap: 12 }}>
// // // //           {paginatedPosts.map((post) => (
// // // //             <div
// // // //               key={post._id}
// // // //               style={{
// // // //                 border: "1px solid #ddd",
// // // //                 borderRadius: 10,
// // // //                 padding: 14,
// // // //                 backgroundColor: "white",
// // // //                 boxShadow: "0 3px 8px rgb(0 0 0 / 0.05)",
// // // //                 display: "flex",
// // // //                 flexDirection: "column",
// // // //                 gap: 6,
// // // //               }}
// // // //             >
// // // //               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // //                 <h4 style={{ margin: 0 }}>{post.title}</h4>
// // // //                 <small
// // // //                   style={{
// // // //                     padding: "4px 10px",
// // // //                     borderRadius: 20,
// // // //                     fontWeight: 600,
// // // //                     backgroundColor: post.status === "published" ? "#38a169" : "#dd6b20",
// // // //                     color: "white",
// // // //                     textTransform: "capitalize",
// // // //                   }}
// // // //                 >
// // // //                   {post.status}
// // // //                 </small>
// // // //               </div>
// // // //               <div style={{ fontSize: 14, color: "#555" }}>
// // // //                 Category: {categories.find((cat) => cat._id === post.category)?.name || "N/A"}
// // // //               </div>

// // // //               {/* Show Trending label */}
// // // //               {post.isTrending && (
// // // //                 <div
// // // //                   style={{
// // // //                     marginTop: 6,
// // // //                     backgroundColor: "#fbbf24",
// // // //                     color: "black",
// // // //                     padding: "3px 8px",
// // // //                     borderRadius: 6,
// // // //                     fontWeight: "700",
// // // //                     width: 110,
// // // //                     textAlign: "center"
// // // //                   }}
// // // //                 >
// // // //                   Trending Post
// // // //                 </div>
// // // //               )}

// // // //               <div style={{ marginTop: 10 }}>
// // // //                 <button
// // // //                   onClick={() => handleEdit(post)}
// // // //                   style={{ marginRight: 14, cursor: "pointer" }}
// // // //                   title="Edit post"
// // // //                   aria-label={`Edit post ${post.title}`}
// // // //                 >
// // // //                   <FaEdit size={18} color="#2b6cb0" />
// // // //                 </button>

// // // //                 {/* Trending toggle button */}
// // // //                 <button
// // // //                   onClick={() => toggleTrending(post)}
// // // //                   style={{ marginRight: 14, cursor: "pointer" }}
// // // //                   title={post.isTrending ? "Unmark Trending" : "Mark as Trending"}
// // // //                   aria-label={post.isTrending ? `Unmark post '${post.title}' as trending` : `Mark post '${post.title}' as trending`}
// // // //                 >
// // // //                   {post.isTrending ? "Unmark Trending" : "Mark Trending"}
// // // //                 </button>

// // // //                 <button
// // // //                   onClick={() => setDeleteConfirmId(post._id)}
// // // //                   style={{ cursor: "pointer" }}
// // // //                   title="Delete post"
// // // //                   aria-label={`Delete post ${post.title}`}
// // // //                 >
// // // //                   <FaTrash size={18} color="#e53e3e" />
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}

// // // //       {/* Pagination */}
// // // //       {totalPages > 1 && (
// // // //         <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 14 }}>
// // // //           <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
// // // //             Previous
// // // //           </button>
// // // //           <span>
// // // //             Page {currentPage} of {totalPages}
// // // //           </span>
// // // //           <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
// // // //             Next
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       {/* Delete confirmation modal */}
// // // //       {deleteConfirmId && (
// // // //         <div
// // // //           aria-modal="true"
// // // //           role="dialog"
// // // //           style={{
// // // //             position: "fixed",
// // // //             top: 0,
// // // //             left: 0,
// // // //             right: 0,
// // // //             bottom: 0,
// // // //             backgroundColor: "rgba(0,0,0,0.3)",
// // // //             display: "flex",
// // // //             justifyContent: "center",
// // // //             alignItems: "center",
// // // //             zIndex: 9999,
// // // //           }}
// // // //           onClick={() => setDeleteConfirmId(null)}
// // // //         >
// // // //           <div
// // // //             onClick={(e) => e.stopPropagation()}
// // // //             style={{
// // // //               backgroundColor: "white",
// // // //               padding: 24,
// // // //               borderRadius: 12,
// // // //               maxWidth: 400,
// // // //               width: "90%",
// // // //               textAlign: "center",
// // // //               boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
// // // //             }}
// // // //           >
// // // //             <h3>Confirm Delete</h3>
// // // //             <p>Are you sure you want to delete this post? This action cannot be undone.</p>
// // // //             <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 10 }}>
// // // //               <button
// // // //                 onClick={() => {
// // // //                   handleDelete(deleteConfirmId);
// // // //                   setDeleteConfirmId(null);
// // // //                 }}
// // // //                 style={{
// // // //                   backgroundColor: "#e53e3e",
// // // //                   color: "white",
// // // //                   border: "none",
// // // //                   padding: "10px 18px",
// // // //                   borderRadius: 8,
// // // //                   cursor: "pointer",
// // // //                 }}
// // // //               >
// // // //                 Delete
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => setDeleteConfirmId(null)}
// // // //                 style={{
// // // //                   backgroundColor: "#edf2f7",
// // // //                   border: "none",
// // // //                   padding: "10px 18px",
// // // //                   borderRadius: 8,
// // // //                   cursor: "pointer",
// // // //                 }}
// // // //               >
// // // //                 Cancel
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManagePosts;


// // // import React, { useEffect, useState, useRef } from "react";
// // // import { useAuth } from "../context/AuthContext.jsx";
// // // import {
// // //   listAllPosts,
// // //   getCategories,
// // //   createPostAdmin,
// // //   updatePostAdmin,
// // //   deletePostAdmin,
// // //   uploadImageAPI,
// // // } from "../api/client.js";
// // // import { FaEdit, FaTrash, FaTimes, FaUpload } from "react-icons/fa";

// // // const ManagePosts = () => {
// // //   const { token, user } = useAuth();

// // //   const [posts, setPosts] = useState([]);
// // //   const [categories, setCategories] = useState([]);

// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   // Form state
// // //   const [editingPost, setEditingPost] = useState(null);
// // //   const [title, setTitle] = useState("");
// // //   const [content, setContent] = useState("");
// // //   const [categoryId, setCategoryId] = useState("");
// // //   const [status, setStatus] = useState("published");
// // //   const [coverUrl, setCoverUrl] = useState(null);
// // //   const [uploadingImage, setUploadingImage] = useState(false);
// // //   const [formLoading, setFormLoading] = useState(false);

// // //   // Filter and pagination
// // //   const [filterCategory, setFilterCategory] = useState("");
// // //   const [filterStatus, setFilterStatus] = useState("");
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const postsPerPage = 10;

// // //   // Delete confirmation modal
// // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);

// // //   // Fetch posts
// // //   const fetchPosts = async () => {
// // //     setLoading(true);
// // //     setError(null);
// // //     try {
// // //       const data = await listAllPosts(1, 1000);
// // //       const postsData = Array.isArray(data.posts)
// // //         ? data.posts
// // //         : Array.isArray(data)
// // //         ? data
// // //         : [];
// // //       setPosts(postsData);
// // //     } catch (err) {
// // //       setError(err.message || "Failed to load posts.");
// // //       setPosts([]);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Fetch categories
// // //   const fetchCategories = async () => {
// // //     try {
// // //       const data = await getCategories();
// // //       setCategories(Array.isArray(data) ? data : []);
// // //     } catch {
// // //       setCategories([]);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchPosts();
// // //     fetchCategories();
// // //   }, []);

// // //   // Reset form
// // //   const resetForm = () => {
// // //     setEditingPost(null);
// // //     setTitle("");
// // //     setContent("");
// // //     setCategoryId("");
// // //     setStatus("published");
// // //     setCoverUrl(null);
// // //   };

// // //   useEffect(() => {
// // //     setCurrentPage(1);
// // //   }, [filterCategory, filterStatus]);

// // //   // Image upload handler
// // //   const handleFileChange = async (e) => {
// // //     const file = e.target.files[0];
// // //     if (!file) return;

// // //     setUploadingImage(true);
// // //     try {
// // //       const imageUrl = await uploadImageAPI(token, file);
// // //       setCoverUrl(imageUrl);
// // //     } catch (err) {
// // //       alert("Image upload failed: " + err.message);
// // //     } finally {
// // //       setUploadingImage(false);
// // //     }
// // //   };

// // //   // Handle form submit (create or update post)
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!title.trim() || !content.trim() || !categoryId) {
// // //       alert("Please fill all required fields.");
// // //       return;
// // //     }

// // //     const selectedCategory = categories.find((cat) => cat._id === categoryId);
// // //     if (!selectedCategory) {
// // //       alert("Selected category not found.");
// // //       return;
// // //     }

// // //     if (!user || !user._id) {
// // //       alert("Author information missing. Please login again.");
// // //       return;
// // //     }

// // //     const postData = {
// // //       title,
// // //       content,
// // //       categorySlug: selectedCategory.slug,
// // //       authorId: user._id,
// // //       status,
// // //       cover: coverUrl,
// // //       isTrending: editingPost?.isTrending || false,
// // //     };

// // //     setFormLoading(true);
// // //     try {
// // //       if (editingPost) {
// // //         await updatePostAdmin(token, editingPost._id, postData);
// // //         alert("Post updated successfully!");
// // //       } else {
// // //         await createPostAdmin(token, postData);
// // //         alert("Post created successfully!");
// // //       }
// // //       resetForm();
// // //       fetchPosts();
// // //     } catch (err) {
// // //       alert("Failed to save post: " + err.message);
// // //     } finally {
// // //       setFormLoading(false);
// // //     }
// // //   };

// // //   // Edit post
// // //   const handleEdit = (post) => {
// // //     setEditingPost(post);
// // //     setTitle(post.title);
// // //     setContent(post.content);
// // //     setCategoryId(post.category);
// // //     setStatus(post.status);
// // //     setCoverUrl(post.cover || null);
// // //   };

// // //   // Delete post
// // //   const handleDelete = async (id) => {
// // //     if (!window.confirm("Are you sure you want to delete this post?")) return;
// // //     try {
// // //       await deletePostAdmin(token, id);
// // //       alert("Post deleted successfully!");
// // //       fetchPosts();
// // //     } catch (err) {
// // //       alert("Failed to delete post: " + err.message);
// // //     }
// // //   };

// // //   // Toggle trending status
// // //   const toggleTrending = async (post) => {
// // //     try {
// // //       await fetch(`/api/admin/trending/posts/${post._id}/trending`, {
// // //         method: "PATCH",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify({ isTrending: !post.isTrending }),
// // //       });
// // //       fetchPosts();
// // //     } catch (error) {
// // //       alert("Failed to update trending status: " + error.message);
// // //     }
// // //   };

// // //   // Apply filters
// // //   const filteredPosts = posts.filter((post) => {
// // //     return (
// // //       (filterCategory === "" || post.category === filterCategory) &&
// // //       (filterStatus === "" || post.status === filterStatus)
// // //     );
// // //   });

// // //   // Pagination
// // //   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
// // //   const paginatedPosts = filteredPosts.slice(
// // //     (currentPage - 1) * postsPerPage,
// // //     currentPage * postsPerPage
// // //   );

// // //   return (
// // //     <div style={{ maxWidth: 900, margin: "auto" }}>
// // //       <h2 style={{ marginBottom: 24 }}>
// // //         {editingPost ? "Edit Post" : "Create Post"}
// // //       </h2>

// // //       <form
// // //         onSubmit={handleSubmit}
// // //         style={{
// // //           maxWidth: 600,
// // //           marginBottom: 40,
// // //           backgroundColor: "#f4f6f8",
// // //           padding: 16,
// // //           borderRadius: 12,
// // //           boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
// // //         }}
// // //       >
// // //         <input
// // //           type="text"
// // //           placeholder="Title"
// // //           value={title}
// // //           onChange={(e) => setTitle(e.target.value)}
// // //           disabled={formLoading}
// // //           required
// // //           style={{
// // //             width: "100%",
// // //             padding: 12,
// // //             borderRadius: 6,
// // //             border: "1px solid #ccc",
// // //             fontSize: 16,
// // //             boxSizing: "border-box",
// // //             marginBottom: 12,
// // //           }}
// // //         />
// // //         <textarea
// // //           placeholder="Content (HTML accepted)"
// // //           value={content}
// // //           onChange={(e) => setContent(e.target.value)}
// // //           rows={6}
// // //           disabled={formLoading}
// // //           required
// // //           style={{
// // //             width: "100%",
// // //             padding: 12,
// // //             borderRadius: 6,
// // //             border: "1px solid #ccc",
// // //             fontSize: 16,
// // //             boxSizing: "border-box",
// // //             resize: "vertical",
// // //             fontFamily: "inherit",
// // //             marginBottom: 12,
// // //           }}
// // //         />
// // //         <select
// // //           value={categoryId}
// // //           onChange={(e) => setCategoryId(e.target.value)}
// // //           disabled={formLoading}
// // //           required
// // //           style={{ flex: 1, padding: "10px", borderRadius: 6, fontSize: 16, marginBottom: 12 }}
// // //         >
// // //           <option value="">Select Category</option>
// // //           {categories.map((cat) => (
// // //             <option key={cat._id} value={cat._id}>
// // //               {cat.name}
// // //             </option>
// // //           ))}
// // //         </select>
// // //         <select
// // //           value={status}
// // //           onChange={(e) => setStatus(e.target.value)}
// // //           disabled={formLoading}
// // //           style={{ width: 140, padding: "10px", borderRadius: 6, fontSize: 16, marginBottom: 12 }}
// // //         >
// // //           <option value="published">Published</option>
// // //           <option value="draft">Draft</option>
// // //         </select>

// // //         <label
// // //           htmlFor="cover-upload"
// // //           style={{
// // //             display: "inline-flex",
// // //             alignItems: "center",
// // //             gap: 8,
// // //             cursor: uploadingImage || formLoading ? "not-allowed" : "pointer",
// // //             fontWeight: 600,
// // //             color: "#4054b2",
// // //             marginBottom: 12,
// // //           }}
// // //         >
// // //           <input
// // //             id="cover-upload"
// // //             type="file"
// // //             accept="image/*"
// // //             onChange={handleFileChange}
// // //             disabled={uploadingImage || formLoading}
// // //             style={{ display: "none" }}
// // //           />
// // //           Upload Cover Image
// // //           {uploadingImage && " Uploading..."}
// // //         </label>
// // //         {coverUrl && (
// // //           <div style={{ marginTop: 10, position: "relative", marginBottom: 12 }}>
// // //             <img
// // //               src={coverUrl}
// // //               alt="Cover Preview"
// // //               style={{
// // //                 maxWidth: "100%",
// // //                 borderRadius: 10,
// // //                 boxShadow: "0 0 15px rgba(0,0,0,0.15)",
// // //               }}
// // //             />
// // //             <button
// // //               type="button"
// // //               onClick={() => setCoverUrl(null)}
// // //               style={{
// // //                 position: "absolute",
// // //                 top: 10,
// // //                 right: 10,
// // //                 background: "rgba(0,0,0,0.6)",
// // //                 color: "white",
// // //                 border: "none",
// // //                 borderRadius: "50%",
// // //                 width: 28,
// // //                 height: 28,
// // //                 cursor: "pointer",
// // //                 fontSize: 16,
// // //                 display: "flex",
// // //                 justifyContent: "center",
// // //                 alignItems: "center",
// // //                 }}
// // //               aria-label="Remove cover image"
// // //             >
// // //               <FaTimes />
// // //             </button>
// // //           </div>
// // //         )}

// // //         <button
// // //           type="submit"
// // //           disabled={formLoading}
// // //           style={{
// // //             backgroundColor: "#4054b2",
// // //             color: "white",
// // //             padding: "12px 24px",
// // //             border: "none",
// // //             borderRadius: 6,
// // //             fontWeight: 700,
// // //             fontSize: 16,
// // //             cursor: formLoading ? "not-allowed" : "pointer",
// // //             transition: "background-color 0.2s ease",
// // //             width: "100%",
// // //           }}
// // //           onMouseEnter={(e) => !formLoading && (e.currentTarget.style.backgroundColor = "#6278f7")}
// // //           onMouseLeave={(e) => !formLoading && (e.currentTarget.style.backgroundColor = "#4054b2")}
// // //         >
// // //           {formLoading ? (editingPost ? "Updating..." : "Posting...") : editingPost ? "Update Post" : "Create Post"}
// // //         </button>

// // //         {editingPost && (
// // //           <button
// // //             type="button"
// // //             onClick={resetForm}
// // //             disabled={formLoading}
// // //             style={{
// // //               marginLeft: 12,
// // //               backgroundColor: "#e53e3e",
// // //               color: "white",
// // //               padding: "12px 18px",
// // //               borderRadius: 6,
// // //               border: "none",
// // //               fontWeight: 600,
// // //               cursor: "pointer",
// // //               transition: "background-color 0.2s ease",
// // //             }}
// // //             onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c53030")}
// // //             onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e53e3e")}
// // //           >
// // //             Cancel
// // //           </button>
// // //         )}
// // //       </form>

// // //       {/* Filters */}
// // //       <div
// // //         style={{
// // //           marginBottom: 20,
// // //           display: "flex",
// // //           gap: 20,
// // //           maxWidth: 600,
// // //           flexWrap: "wrap",
// // //         }}
// // //       >
// // //         <label style={{ flex: "1 1 150px" }}>
// // //           Filter by category:
// // //           <select
// // //             value={filterCategory}
// // //             onChange={(e) => setFilterCategory(e.target.value)}
// // //             disabled={loading}
// // //             style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 6 }}
// // //           >
// // //             <option value="">All Categories</option>
// // //             {categories.map((cat) => (
// // //               <option key={cat._id} value={cat._id}>
// // //                 {cat.name}
// // //               </option>
// // //             ))}
// // //           </select>
// // //         </label>

// // //         <label style={{ flex: "1 1 150px" }}>
// // //           Filter by status:
// // //           <select
// // //             value={filterStatus}
// // //             onChange={(e) => setFilterStatus(e.target.value)}
// // //             disabled={loading}
// // //             style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 6 }}
// // //           >
// // //             <option value="">All Statuses</option>
// // //             <option value="published">Published</option>
// // //             <option value="draft">Draft</option>
// // //           </select>
// // //         </label>
// // //       </div>

// // //       {/* Posts List */}
// // //       <h3 style={{ marginBottom: 12 }}>Posts</h3>
// // //       {loading ? (
// // //         <p>Loading posts...</p>
// // //       ) : error ? (
// // //         <p style={{ color: "red" }}>{error}</p>
// // //       ) : paginatedPosts.length === 0 ? (
// // //         <p>No posts found.</p>
// // //       ) : (
// // //         <div style={{ display: "grid", gap: 12 }}>
// // //           {paginatedPosts.map((post) => (
// // //             <div
// // //               key={post._id}
// // //               style={{
// // //                 border: "1px solid #ddd",
// // //                 borderRadius: 10,
// // //                 padding: 14,
// // //                 backgroundColor: "white",
// // //                 boxShadow: "0 3px 8px rgb(0 0 0 / 0.05)",
// // //                 display: "flex",
// // //                 flexDirection: "column",
// // //                 gap: 6,
// // //               }}
// // //             >
// // //               <div
// // //                 style={{
// // //                   display: "flex",
// // //                   justifyContent: "space-between",
// // //                   alignItems: "center",
// // //                 }}
// // //               >
// // //                 <h4 style={{ margin: 0 }}>{post.title}</h4>
// // //                 <small
// // //                   style={{
// // //                     padding: "4px 10px",
// // //                     borderRadius: 20,
// // //                     fontWeight: 600,
// // //                     backgroundColor:
// // //                       post.status === "published" ? "#38a169" : "#dd6b20",
// // //                     color: "white",
// // //                     textTransform: "capitalize",
// // //                   }}
// // //                 >
// // //                   {post.status}
// // //                 </small>
// // //               </div>
// // //               <div style={{ fontSize: 14, color: "#555" }}>
// // //                 Category:{" "}
// // //                 {categories.find((cat) => cat._id === post.category)?.name ||
// // //                   "N/A"}
// // //               </div>

// // //               {post.isTrending && (
// // //                 <div
// // //                   style={{
// // //                     marginTop: 6,
// // //                     backgroundColor: "#fbbf24",
// // //                     color: "black",
// // //                     padding: "3px 8px",
// // //                     borderRadius: 6,
// // //                     fontWeight: "700",
// // //                     width: 110,
// // //                     textAlign: "center",
// // //                   }}
// // //                 >
// // //                   Trending Post
// // //                 </div>
// // //               )}

// // //               <div style={{ marginTop: 10 }}>
// // //                 <button
// // //                   onClick={() => handleEdit(post)}
// // //                   style={{ marginRight: 14, cursor: "pointer" }}
// // //                   title="Edit post"
// // //                   aria-label={`Edit post ${post.title}`}
// // //                 >
// // //                   <FaEdit size={18} color="#2b6cb0" />
// // //                 </button>

// // //                 <button
// // //                   onClick={() => toggleTrending(post)}
// // //                   style={{ marginRight: 14, cursor: "pointer" }}
// // //                   title={post.isTrending ? "Unmark Trending" : "Mark as Trending"}
// // //                   aria-label={
// // //                     post.isTrending
// // //                       ? `Unmark post '${post.title}' as trending`
// // //                       : `Mark post '${post.title}' as trending`
// // //                   }
// // //                 >
// // //                   {post.isTrending ? "Unmark Trending" : "Mark Trending"}
// // //                 </button>

// // //                 <button
// // //                   onClick={() => setDeleteConfirmId(post._id)}
// // //                   style={{ cursor: "pointer" }}
// // //                   title="Delete post"
// // //                   aria-label={`Delete post ${post.title}`}
// // //                 >
// // //                   <FaTrash size={18} color="#e53e3e" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}

// // //       {/* Pagination */}
// // //       {totalPages > 1 && (
// // //         <div
// // //           style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 14 }}
// // //         >
// // //           <button
// // //             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
// // //             disabled={currentPage === 1}
// // //           >
// // //             Previous
// // //           </button>
// // //           <span>
// // //             Page {currentPage} of {totalPages}
// // //           </span>
// // //           <button
// // //             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
// // //             disabled={currentPage === totalPages}
// // //           >
// // //             Next
// // //           </button>
// // //         </div>
// // //       )}

// // //       {/* Delete confirmation modal */}
// // //       {deleteConfirmId && (
// // //         <div
// // //           aria-modal="true"
// // //           role="dialog"
// // //           style={{
// // //             position: "fixed",
// // //             top: 0,
// // //             left: 0,
// // //             right: 0,
// // //             bottom: 0,
// // //             backgroundColor: "rgba(0,0,0,0.3)",
// // //             display: "flex",
// // //             justifyContent: "center",
// // //             alignItems: "center",
// // //             zIndex: 9999,
// // //           }}
// // //           onClick={() => setDeleteConfirmId(null)}
// // //         >
// // //           <div
// // //             onClick={(e) => e.stopPropagation()}
// // //             style={{
// // //               backgroundColor: "white",
// // //               padding: 24,
// // //               borderRadius: 12,
// // //               maxWidth: 400,
// // //               width: "90%",
// // //               textAlign: "center",
// // //               boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
// // //             }}
// // //           >
// // //             <h3>Confirm Delete</h3>
// // //             <p>Are you sure you want to delete this post? This action cannot be undone.</p>
// // //             <div
// // //               style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 10 }}
// // //             >
// // //               <button
// // //                 onClick={() => {
// // //                   handleDelete(deleteConfirmId);
// // //                   setDeleteConfirmId(null);
// // //                 }}
// // //                 style={{
// // //                   backgroundColor: "#e53e3e",
// // //                   color: "white",
// // //                   border: "none",
// // //                   padding: "10px 18px",
// // //                   borderRadius: 8,
// // //                   cursor: "pointer",
// // //                 }}
// // //               >
// // //                 Delete
// // //               </button>
// // //               <button
// // //                 onClick={() => setDeleteConfirmId(null)}
// // //                 style={{
// // //                   backgroundColor: "#edf2f7",
// // //                   border: "none",
// // //                   padding: "10px 18px",
// // //                   borderRadius: 8,
// // //                   cursor: "pointer",
// // //                 }}
// // //               >
// // //                 Cancel
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ManagePosts;


// import React, { useEffect, useState, useRef } from "react";
// import { useAuth } from "../context/AuthContext.jsx";
// import {
//   listAllPosts,
//   getCategories,
//   createPostAdmin,
//   updatePostAdmin,
//   deletePostAdmin,
//   uploadImageAPI,
// } from "../api/client.js";
// import { FaEdit, FaTrash, FaTimes, FaUpload } from "react-icons/fa";

// const ManagePosts = () => {
//   const { token, user } = useAuth();

//   // Check if current user is admin to show admin controls
//  // const isAdmin = user?.role === "admin" || user?.isAdmin;
// const isAdmin =
//   user &&
//   (user.role === "admin" ||
//     user.isAdmin === true ||
//     (Array.isArray(user.roles) && user.roles.includes("admin")));


//   const [posts, setPosts] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form state
//   const [editingPost, setEditingPost] = useState(null);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [categoryId, setCategoryId] = useState("");
//   const [status, setStatus] = useState("published");
//   const [coverUrl, setCoverUrl] = useState(null);
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [formLoading, setFormLoading] = useState(false);

//   // Filter and pagination
//   const [filterCategory, setFilterCategory] = useState("");
//   const [filterStatus, setFilterStatus] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 10;

//   // Delete confirmation modal
//   const [deleteConfirmId, setDeleteConfirmId] = useState(null);

//   // Fetch posts
//   const fetchPosts = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const data = await listAllPosts(1, 1000);
//       const postsData = Array.isArray(data.posts)
//         ? data.posts
//         : Array.isArray(data)
//         ? data
//         : [];
//       setPosts(postsData);
//     } catch (err) {
//       setError(err.message || "Failed to load posts.");
//       setPosts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch categories
//   const fetchCategories = async () => {
//     try {
//       const data = await getCategories();
//       setCategories(Array.isArray(data) ? data : []);
//     } catch {
//       setCategories([]);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//     fetchCategories();
//   }, []);

//   // Reset form
//   const resetForm = () => {
//     setEditingPost(null);
//     setTitle("");
//     setContent("");
//     setCategoryId("");
//     setStatus("published");
//     setCoverUrl(null);
//   };

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [filterCategory, filterStatus]);

//   // Image upload handler
//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploadingImage(true);
//     try {
//       const imageUrl = await uploadImageAPI(token, file);
//       setCoverUrl(imageUrl);
//     } catch (err) {
//       alert("Image upload failed: " + err.message);
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   // Handle form submit (create or update post)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title.trim() || !content.trim() || !categoryId) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const selectedCategory = categories.find((cat) => cat._id === categoryId);
//     if (!selectedCategory) {
//       alert("Selected category not found.");
//       return;
//     }

//     if (!user || !user._id) {
//       alert("Author information missing. Please login again.");
//       return;
//     }

//     const postData = {
//       title,
//       content,
//       categorySlug: selectedCategory.slug,
//       authorId: user._id,
//       status,
//       cover: coverUrl,
//       isTrending: editingPost?.isTrending || false,
//     };

//     setFormLoading(true);
//     try {
//       if (editingPost) {
//         await updatePostAdmin(token, editingPost._id, postData);
//         alert("Post updated successfully!");
//       } else {
//         await createPostAdmin(token, postData);
//         alert("Post created successfully!");
//       }
//       resetForm();
//       fetchPosts();
//     } catch (err) {
//       alert("Failed to save post: " + err.message);
//     } finally {
//       setFormLoading(false);
//     }
//   };

//   // Edit post
//   const handleEdit = (post) => {
//     setEditingPost(post);
//     setTitle(post.title);
//     setContent(post.content);
//     setCategoryId(post.category);
//     setStatus(post.status);
//     setCoverUrl(post.cover || null);
//   };

//   // Delete post
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       await deletePostAdmin(token, id);
//       alert("Post deleted successfully!");
//       fetchPosts();
//     } catch (err) {
//       alert("Failed to delete post: " + err.message);
//     }
//   };

//   // Toggle trending status
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
//     } catch (error) {
//       alert("Failed to update trending status: " + error.message);
//     }
//   };

//   // Apply filters
//   const filteredPosts = posts.filter((post) => {
//     return (
//       (filterCategory === "" || post.category === filterCategory) &&
//       (filterStatus === "" || post.status === filterStatus)
//     );
//   });

//   // Pagination
//   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
//   const paginatedPosts = filteredPosts.slice(
//     (currentPage - 1) * postsPerPage,
//     currentPage * postsPerPage
//   );

//   console.log("Logged in user object:", user);
// console.log("Is Admin flag:", isAdmin);

//   return (
//     <div style={{ maxWidth: 900, margin: "auto" }}>
//       <h2 style={{ marginBottom: 24 }}>
//         {editingPost ? "Edit Post" : "Create Post"}
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         style={{
//           maxWidth: 600,
//           marginBottom: 40,
//           backgroundColor: "#f4f6f8",
//           padding: 16,
//           borderRadius: 12,
//           boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           disabled={formLoading}
//           required
//           style={{
//             width: "100%",
//             padding: 12,
//             borderRadius: 6,
//             border: "1px solid #ccc",
//             fontSize: 16,
//             boxSizing: "border-box",
//             marginBottom: 12,
//           }}
//         />
//         <textarea
//           placeholder="Content (HTML accepted)"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           rows={6}
//           disabled={formLoading}
//           required
//           style={{
//             width: "100%",
//             padding: 12,
//             borderRadius: 6,
//             border: "1px solid #ccc",
//             fontSize: 16,
//             boxSizing: "border-box",
//             resize: "vertical",
//             fontFamily: "inherit",
//             marginBottom: 12,
//           }}
//         />
//         <select
//           value={categoryId}
//           onChange={(e) => setCategoryId(e.target.value)}
//           disabled={formLoading}
//           required
//           style={{
//             flex: 1,
//             padding: "10px",
//             borderRadius: 6,
//             fontSize: 16,
//             marginBottom: 12,
//           }}
//         >
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat._id} value={cat._id}>
//               {cat.name}
//             </option>
//           ))}
//         </select>
//         <select
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           disabled={formLoading}
//           style={{
//             width: 140,
//             padding: "10px",
//             borderRadius: 6,
//             fontSize: 16,
//             marginBottom: 12,
//           }}
//         >
//           <option value="published">Published</option>
//           <option value="draft">Draft</option>
//         </select>

//         <label
//           htmlFor="cover-upload"
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 8,
//             cursor: uploadingImage || formLoading ? "not-allowed" : "pointer",
//             fontWeight: 600,
//             color: "#4054b2",
//             marginBottom: 12,
//           }}
//         >
//           <input
//             id="cover-upload"
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             disabled={uploadingImage || formLoading}
//             style={{ display: "none" }}
//           />
//           Upload Cover Image
//           {uploadingImage && " Uploading..."}
//         </label>
//         {coverUrl && (
//           <div
//             style={{
//               marginTop: 10,
//               position: "relative",
//               marginBottom: 12,
//             }}
//           >
//             <img
//               src={coverUrl}
//               alt="Cover Preview"
//               style={{
//                 maxWidth: "100%",
//                 borderRadius: 10,
//                 boxShadow: "0 0 15px rgba(0,0,0,0.15)",
//               }}
//             />
//             <button
//               type="button"
//               onClick={() => setCoverUrl(null)}
//               style={{
//                 position: "absolute",
//                 top: 10,
//                 right: 10,
//                 background: "rgba(0,0,0,0.6)",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 width: 28,
//                 height: 28,
//                 cursor: "pointer",
//                 fontSize: 16,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//               aria-label="Remove cover image"
//             >
//               <FaTimes />
//             </button>
//           </div>
//         )}

//         <button
//           type="submit"
//           disabled={formLoading}
//           style={{
//             backgroundColor: "#4054b2",
//             color: "white",
//             padding: "12px 24px",
//             border: "none",
//             borderRadius: 6,
//             fontWeight: 700,
//             fontSize: 16,
//             cursor: formLoading ? "not-allowed" : "pointer",
//             transition: "background-color 0.2s ease",
//             width: "100%",
//           }}
//           onMouseEnter={(e) =>
//             !formLoading && (e.currentTarget.style.backgroundColor = "#6278f7")
//           }
//           onMouseLeave={(e) =>
//             !formLoading && (e.currentTarget.style.backgroundColor = "#4054b2")
//           }
//         >
//           {formLoading
//             ? editingPost
//               ? "Updating..."
//               : "Posting..."
//             : editingPost
//             ? "Update Post"
//             : "Create Post"}
//         </button>

//         {editingPost && (
//           <button
//             type="button"
//             onClick={resetForm}
//             disabled={formLoading}
//             style={{
//               marginLeft: 12,
//               backgroundColor: "#e53e3e",
//               color: "white",
//               padding: "12px 18px",
//               borderRadius: 6,
//               border: "none",
//               fontWeight: 600,
//               cursor: "pointer",
//               transition: "background-color 0.2s ease",
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.backgroundColor = "#c53030")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.backgroundColor = "#e53e3e")
//             }
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       {/* Filters */}
//       <div
//         style={{
//           marginBottom: 20,
//           display: "flex",
//           gap: 20,
//           maxWidth: 600,
//           flexWrap: "wrap",
//         }}
//       >
//         <label style={{ flex: "1 1 150px" }}>
//           Filter by category:
//           <select
//             value={filterCategory}
//             onChange={(e) => setFilterCategory(e.target.value)}
//             disabled={loading}
//             style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 6 }}
//           >
//             <option value="">All Categories</option>
//             {categories.map((cat) => (
//               <option key={cat._id} value={cat._id}>
//                 {cat.name}
//               </option>
//             ))}
//           </select>
//         </label>

//         <label style={{ flex: "1 1 150px" }}>
//           Filter by status:
//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             disabled={loading}
//             style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 6 }}
//           >
//             <option value="">All Statuses</option>
//             <option value="published">Published</option>
//             <option value="draft">Draft</option>
//           </select>
//         </label>
//       </div>

//       {/* Posts List */}
//       <h3 style={{ marginBottom: 12 }}>Posts</h3>
//       {loading ? (
//         <p>Loading posts...</p>
//       ) : error ? (
//         <p style={{ color: "red" }}>{error}</p>
//       ) : paginatedPosts.length === 0 ? (
//         <p>No posts found.</p>
//       ) : (
//         <div
//           style={{ display: "grid", gap: 12 }}
//         >
//           {paginatedPosts.map((post) => (
//             <div
//               key={post._id}
//               style={{
//                 border: "1px solid #ddd",
//                 borderRadius: 10,
//                 padding: 14,
//                 backgroundColor: "white",
//                 boxShadow: "0 3px 8px rgb(0 0 0 / 0.05)",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: 6,
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <h4 style={{ margin: 0 }}>{post.title}</h4>
//                 <small
//                   style={{
//                     padding: "4px 10px",
//                     borderRadius: 20,
//                     fontWeight: 600,
//                     backgroundColor:
//                       post.status === "published"
//                         ? "#38a169"
//                         : "#dd6b20",
//                     color: "white",
//                     textTransform: "capitalize",
//                   }}
//                 >
//                   {post.status}
//                 </small>
//               </div>
//               <div style={{ fontSize: 14, color: "#555" }}>
//                 Category:{" "}
//                 {categories.find((cat) => cat._id === post.category)?.name ||
//                   "N/A"}
//               </div>

//               {post.isTrending && (
//                 <div
//                   style={{
//                     marginTop: 6,
//                     backgroundColor: "#fbbf24",
//                     color: "black",
//                     padding: "3px 8px",
//                     borderRadius: 6,
//                     fontWeight: "700",
//                     width: 110,
//                     textAlign: "center",
//                   }}
//                 >
//                   Trending Post
//                 </div>
//               )}

//               {isAdmin && (
//                 <div style={{ marginTop: 10 }}>
//                   <button
//                     onClick={() => handleEdit(post)}
//                     style={{ marginRight: 14, cursor: "pointer" }}
//                     title="Edit post"
//                     aria-label={`Edit post ${post.title}`}
//                   >
//                     <FaEdit size={18} color="#2b6cb0" />
//                   </button>

//                   <button
//                     onClick={() => toggleTrending(post)}
//                     style={{ marginRight: 14, cursor: "pointer" }}
//                     title={
//                       post.isTrending ? "Unmark Trending" : "Mark as Trending"
//                     }
//                     aria-label={
//                       post.isTrending
//                         ? `Unmark post '${post.title}' as trending`
//                         : `Mark post '${post.title}' as trending`
//                     }
//                   >
//                     {post.isTrending ? "Unmark Trending" : "Mark Trending"}
//                   </button>

//                   <button
//                     onClick={() => setDeleteConfirmId(post._id)}
//                     style={{ cursor: "pointer" }}
//                     title="Delete post"
//                     aria-label={`Delete post ${post.title}`}
//                   >
//                     <FaTrash size={18} color="#e53e3e" />
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div
//           style={{
//             marginTop: 24,
//             display: "flex",
//             justifyContent: "center",
//             gap: 14,
//           }}
//         >
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>
//           <span>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       )}

//       {/* Delete confirmation modal */}
//       {deleteConfirmId && (
//         <div
//           aria-modal="true"
//           role="dialog"
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0,0,0,0.3)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//           }}
//           onClick={() => setDeleteConfirmId(null)}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               backgroundColor: "white",
//               padding: 24,
//               borderRadius: 12,
//               maxWidth: 400,
//               width: "90%",
//               textAlign: "center",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//             }}
//           >
//             <h3>Confirm Delete</h3>
//             <p>Are you sure you want to delete this post? This action cannot be undone.</p>
//             <div
//               style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 10 }}
//             >
//               <button
//                 onClick={() => {
//                   handleDelete(deleteConfirmId);
//                   setDeleteConfirmId(null);
//                 }}
//                 style={{
//                   backgroundColor: "#e53e3e",
//                   color: "white",
//                   border: "none",
//                   padding: "10px 18px",
//                   borderRadius: 8,
//                   cursor: "pointer",
//                 }}
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => setDeleteConfirmId(null)}
//                 style={{
//                   backgroundColor: "#edf2f7",
//                   border: "none",
//                   padding: "10px 18px",
//                   borderRadius: 8,
//                   cursor: "pointer",
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManagePosts;





// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext.jsx";
// import {
//   listAllPosts,
//   getCategories,
//   createPostAdmin,
//   updatePostAdmin,
//   deletePostAdmin,
//   uploadImageAPI,
// } from "../api/client.js";
// import { FaEdit, FaTrash, FaTimes, FaUpload } from "react-icons/fa";
// import "./managepost.css";

// const ManagePosts = () => {
//   const { token, user } = useAuth();

//   const isAdmin =
//     user &&
//     (user.role === "admin" ||
//       user.isAdmin === true ||
//       (Array.isArray(user.roles) && user.roles.includes("admin")));

//   const [posts, setPosts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form state
//   const [editingPost, setEditingPost] = useState(null);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [categoryId, setCategoryId] = useState("");
//   const [status, setStatus] = useState("published");
//   const [coverUrl, setCoverUrl] = useState(null);
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [formLoading, setFormLoading] = useState(false);

//   // Filter & pagination
//   const [filterCategory, setFilterCategory] = useState("");
//   const [filterStatus, setFilterStatus] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 10;

//   const [deleteConfirmId, setDeleteConfirmId] = useState(null);

//   // Fetch posts
//   const fetchPosts = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const data = await listAllPosts(1, 1000);
//       const postsData = Array.isArray(data.posts)
//         ? data.posts
//         : Array.isArray(data)
//         ? data
//         : [];
//       setPosts(postsData);
//     } catch (err) {
//       setError(err.message || "Failed to load posts.");
//       setPosts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch categories
//   const fetchCategories = async () => {
//     try {
//       const data = await getCategories();
//       setCategories(Array.isArray(data) ? data : []);
//     } catch {
//       setCategories([]);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//     fetchCategories();
//   }, []);

//   // Reset form
//   const resetForm = () => {
//     setEditingPost(null);
//     setTitle("");
//     setContent("");
//     setCategoryId("");
//     setStatus("published");
//     setCoverUrl(null);
//   };

//   // Image upload
//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploadingImage(true);
//     try {
//       const imageUrl = await uploadImageAPI(token, file);
//       setCoverUrl(imageUrl);
//     } catch (err) {
//       alert("Image upload failed: " + err.message);
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   // Submit post
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title.trim() || !content.trim() || !categoryId) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const selectedCategory = categories.find((cat) => cat._id === categoryId);
//     if (!selectedCategory) {
//       alert("Selected category not found.");
//       return;
//     }

//     const postData = {
//       title,
//       content,
//       categorySlug: selectedCategory.slug,
//       authorId: user._id,
//       status,
//       cover: coverUrl,
//       isTrending: editingPost?.isTrending || false,
//     };

//     setFormLoading(true);
//     try {
//       if (editingPost) {
//         await updatePostAdmin(token, editingPost._id, postData);
//         alert("Post updated successfully!");
//       } else {
//         await createPostAdmin(token, postData);
//         alert("Post created successfully!");
//       }
//       resetForm();
//       fetchPosts();
//     } catch (err) {
//       alert("Failed to save post: " + err.message);
//     } finally {
//       setFormLoading(false);
//     }
//   };

//   // Edit post
//   const handleEdit = (post) => {
//     setEditingPost(post);
//     setTitle(post.title);
//     setContent(post.content);
//     setCategoryId(post.category);
//     setStatus(post.status);
//     setCoverUrl(post.cover || null);
//   };

//   // Delete post
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       await deletePostAdmin(token, id);
//       fetchPosts();
//     } catch (err) {
//       alert("Failed to delete post: " + err.message);
//     }
//   };

//   // Filtered & paginated posts
//   const filteredPosts = posts.filter(
//     (post) =>
//       (filterCategory === "" || post.category === filterCategory) &&
//       (filterStatus === "" || post.status === filterStatus)
//   );

//   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
//   const paginatedPosts = filteredPosts.slice(
//     (currentPage - 1) * postsPerPage,
//     currentPage * postsPerPage
//   );

//   return (
//     <div className="manage-post-container">
//       <h2>{editingPost ? "Edit Post" : "Create Post"}</h2>

//       <form onSubmit={handleSubmit} className="post-form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           disabled={formLoading}
//           required
//         />
//         <textarea
//           placeholder="Content (HTML accepted)"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           rows={6}
//           disabled={formLoading}
//           required
//         />
//         <select
//           value={categoryId}
//           onChange={(e) => setCategoryId(e.target.value)}
//           disabled={formLoading}
//           required
//         >
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat._id} value={cat._id}>
//               {cat.name}
//             </option>
//           ))}
//         </select>
//         <select
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           disabled={formLoading}
//         >
//           <option value="published">Published</option>
//           <option value="draft">Draft</option>
//         </select>

//         <label className="upload-label">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             disabled={uploadingImage || formLoading}
//           />
//           {uploadingImage ? "Uploading..." : "Upload Cover Image"}
//         </label>

//         {coverUrl && (
//           <div className="cover-preview">
//             <img src={coverUrl} alt="Cover Preview" />
//             <button type="button" onClick={() => setCoverUrl(null)}>
//               <FaTimes />
//             </button>
//           </div>
//         )}

//         <div className="form-actions">
//           <button type="submit" disabled={formLoading}>
//             {editingPost ? "Update Post" : "Create Post"}
//           </button>
//           {editingPost && (
//             <button type="button" onClick={resetForm} className="cancel-btn">
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>

//       <div className="filters">
//         <select
//           value={filterCategory}
//           onChange={(e) => setFilterCategory(e.target.value)}
//         >
//           <option value="">All Categories</option>
//           {categories.map((cat) => (
//             <option key={cat._id} value={cat._id}>
//               {cat.name}
//             </option>
//           ))}
//         </select>
//         <select
//           value={filterStatus}
//           onChange={(e) => setFilterStatus(e.target.value)}
//         >
//           <option value="">All Statuses</option>
//           <option value="published">Published</option>
//           <option value="draft">Draft</option>
//         </select>
//       </div>

//       <h3>Posts</h3>
//       {loading ? (
//         <p>Loading posts...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : paginatedPosts.length === 0 ? (
//         <p>No posts found.</p>
//       ) : (
//         <div className="posts-grid">
//           {paginatedPosts.map((post) => (
//             <div key={post._id} className="post-card">
//               <h4>{post.title}</h4>
//               <small>{post.status}</small>
//               <p>Category: {categories.find((c) => c._id === post.category)?.name || "N/A"}</p>
//               {post.isTrending && <span className="trending">Trending</span>}
//               {isAdmin && (
//                 <div className="post-actions">
//                   <button onClick={() => handleEdit(post)}>
//                     <FaEdit />
//                   </button>
//                   <button onClick={() => setDeleteConfirmId(post._id)}>
//                     <FaTrash />
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="pagination">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>
//           <span>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       )}

//       {/* Delete confirmation */}
//       {deleteConfirmId && (
//         <div className="delete-modal">
//           <div className="delete-box">
//             <h3>Confirm Delete</h3>
//             <p>Are you sure you want to delete this post?</p>
//             <div className="delete-actions">
//               <button
//                 onClick={() => {
//                   handleDelete(deleteConfirmId);
//                   setDeleteConfirmId(null);
//                 }}
//                 className="delete-btn"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => setDeleteConfirmId(null)}
//                 className="cancel-btn"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManagePosts;




import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import {
  listAllPosts,
  getCategories,
  createPostAdmin,
  updatePostAdmin,
  deletePostAdmin,
  uploadImageAPI,
} from "../api/client.js";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import "./managepost.css";

const ManagePosts = () => {
  const { token, user } = useAuth();

  const isAdmin =
    user &&
    (user.role === "admin" ||
      user.isAdmin === true ||
      (Array.isArray(user.roles) && user.roles.includes("admin")));

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form state
  const [editingPost, setEditingPost] = useState(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [status, setStatus] = useState("published");
  const [tags, setTags] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [coverUrl, setCoverUrl] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Fetch posts
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await listAllPosts(1, 1000);
      const postsData = Array.isArray(data.posts)
        ? data.posts
        : Array.isArray(data)
        ? data
        : [];
      setPosts(postsData);
    } catch (err) {
      setError(err.message || "Failed to load posts.");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(Array.isArray(data) ? data : []);
    } catch {
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const resetForm = () => {
    setEditingPost(null);
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setCategoryId("");
    setStatus("published");
    setTags("");
    setPublishedAt("");
    setCoverUrl(null);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filterCategory, filterStatus]);

  // Image upload
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingImage(true);
    try {
      const imageUrl = await uploadImageAPI(token, file);
      setCoverUrl(imageUrl);
    } catch (err) {
      alert("Image upload failed: " + err.message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !categoryId) {
      alert("Please fill all required fields.");
      return;
    }

    const selectedCategory = categories.find((cat) => cat._id === categoryId);
    if (!selectedCategory) {
      alert("Selected category not found.");
      return;
    }

    if (!user || !user._id) {
      alert("Author info missing. Login again.");
      return;
    }

    const postData = {
      title,
      slug: slug || title.toLowerCase().replace(/\s+/g, "-"),
      excerpt,
      content,
      categorySlug: selectedCategory.slug,
      authorId: user._id,
      status,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
      cover: coverUrl,
      views: editingPost?.views || 0,
      likes: editingPost?.likes || 0,
    };

    setFormLoading(true);
    try {
      if (editingPost) {
        await updatePostAdmin(token, editingPost._id, postData);
        alert("Post updated successfully!");
      } else {
        await createPostAdmin(token, postData);
        alert("Post created successfully!");
      }
      resetForm();
      fetchPosts();
    } catch (err) {
      alert("Failed to save post: " + err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt || "");
    setContent(post.content);
    setCategoryId(post.category);
    setStatus(post.status);
    setTags(post.tags?.join(", ") || "");
    setPublishedAt(post.publishedAt ? new Date(post.publishedAt).toISOString().slice(0, 16) : "");
    setCoverUrl(post.cover || null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await deletePostAdmin(token, id);
      alert("Post deleted successfully!");
      fetchPosts();
    } catch (err) {
      alert("Failed to delete post: " + err.message);
    }
  };

  const filteredPosts = posts.filter(
    (post) =>
      (filterCategory === "" || post.category === filterCategory) &&
      (filterStatus === "" || post.status === filterStatus)
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="manage-post-container">
      <h2>{editingPost ? "Edit Post" : "Create Post"}</h2>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Slug (optional)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <textarea
          placeholder="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          required
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        <input
          type="datetime-local"
          value={publishedAt}
          onChange={(e) => setPublishedAt(e.target.value)}
        />
        <label className="cover-upload">
          Upload Cover Image
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
        {coverUrl && (
          <div className="cover-preview">
            <img src={coverUrl} alt="cover" />
            <button type="button" onClick={() => setCoverUrl(null)}><FaTimes /></button>
          </div>
        )}
        <button type="submit">{formLoading ? "Saving..." : editingPost ? "Update Post" : "Create Post"}</button>
        {editingPost && <button type="button" onClick={resetForm} className="cancel-btn">Cancel</button>}
      </form>

      {/* Filters */}
      <div className="filters">
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat) => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
        </select>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {/* Posts List */}
      <div className="posts-list">
        {paginatedPosts.map((post) => (
          <div key={post._id} className="post-card">
            <h4>{post.title}</h4>
            <div className="meta-info">
              <span>Status: {post.status}</span>
              <span>Views: {post.views}</span>
              <span>Likes: {post.likes}</span>
            </div>
            <div className="post-actions">
              <button onClick={() => handleEdit(post)} title="Edit"><FaEdit /></button>
              <button onClick={() => setDeleteConfirmId(post._id)} title="Delete"><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteConfirmId && (
        <div className="delete-modal">
          <p>Are you sure you want to delete this post?</p>
          <div className="delete-actions">
            <button onClick={() => handleDelete(deleteConfirmId)}>Yes</button>
            <button onClick={() => setDeleteConfirmId(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePosts;
