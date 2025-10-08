




// // import React, { useEffect, useState } from "react";
// // import { useAuth } from "../context/AuthContext.jsx";
// // import {
// //   listAllPosts,
// //   getCategories,
// //   createPostAdmin,
// //   updatePostAdmin,
// //   deletePostAdmin,
// //   uploadImageAPI,
// // } from "../api/client.js";
// // import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
// // import "./managepost.css";

// // const ManagePosts = () => {
// //   const { token, user } = useAuth();

// //   const isAdmin =
// //     user &&
// //     (user.role === "admin" ||
// //       user.isAdmin === true ||
// //       (Array.isArray(user.roles) && user.roles.includes("admin")));

// //   const [posts, setPosts] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   // Form state
// //   const [editingPost, setEditingPost] = useState(null);
// //   const [title, setTitle] = useState("");
// //   const [slug, setSlug] = useState("");
// //   const [excerpt, setExcerpt] = useState("");
// //   const [content, setContent] = useState("");
// //   const [categoryId, setCategoryId] = useState("");
// //   const [status, setStatus] = useState("published");
// //   const [tags, setTags] = useState("");
// //   const [publishedAt, setPublishedAt] = useState("");
// //   const [coverUrl, setCoverUrl] = useState(null);
// //   const [uploadingImage, setUploadingImage] = useState(false);
// //   const [formLoading, setFormLoading] = useState(false);

// //   const [filterCategory, setFilterCategory] = useState("");
// //   const [filterStatus, setFilterStatus] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const postsPerPage = 10;

// //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);

// //   // Fetch posts
// //   const fetchPosts = async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const data = await listAllPosts(1, 1000);
// //       const postsData = Array.isArray(data.posts)
// //         ? data.posts
// //         : Array.isArray(data)
// //         ? data
// //         : [];
// //       setPosts(postsData);
// //     } catch (err) {
// //       setError(err.message || "Failed to load posts.");
// //       setPosts([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchCategories = async () => {
// //     try {
// //       const data = await getCategories();
// //       setCategories(Array.isArray(data) ? data : []);
// //     } catch {
// //       setCategories([]);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchPosts();
// //     fetchCategories();
// //   }, []);

// //   const resetForm = () => {
// //     setEditingPost(null);
// //     setTitle("");
// //     setSlug("");
// //     setExcerpt("");
// //     setContent("");
// //     setCategoryId("");
// //     setStatus("published");
// //     setTags("");
// //     setPublishedAt("");
// //     setCoverUrl(null);
// //   };

// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [filterCategory, filterStatus]);

// //   // Image upload
// //   const handleFileChange = async (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;
// //     setUploadingImage(true);
// //     try {
// //       const imageUrl = await uploadImageAPI(token, file);
// //       setCoverUrl(imageUrl);
// //     } catch (err) {
// //       alert("Image upload failed: " + err.message);
// //     } finally {
// //       setUploadingImage(false);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!title.trim() || !content.trim() || !categoryId) {
// //       alert("Please fill all required fields.");
// //       return;
// //     }

// //     const selectedCategory = categories.find((cat) => cat._id === categoryId);
// //     if (!selectedCategory) {
// //       alert("Selected category not found.");
// //       return;
// //     }

// //     if (!user || !user._id) {
// //       alert("Author info missing. Login again.");
// //       return;
// //     }

// //     const postData = {
// //       title,
// //       slug: slug || title.toLowerCase().replace(/\s+/g, "-"),
// //       excerpt,
// //       content,
// //       categorySlug: selectedCategory.slug,
// //       authorId: user._id,
// //       status,
// //       tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
// //       publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
// //       cover: coverUrl,
// //       views: editingPost?.views || 0,
// //       likes: editingPost?.likes || 0,
// //     };

// //     setFormLoading(true);
// //     try {
// //       if (editingPost) {
// //         await updatePostAdmin(token, editingPost._id, postData);
// //         alert("Post updated successfully!");
// //       } else {
// //         await createPostAdmin(token, postData);
// //         alert("Post created successfully!");
// //       }
// //       resetForm();
// //       fetchPosts();
// //     } catch (err) {
// //       alert("Failed to save post: " + err.message);
// //     } finally {
// //       setFormLoading(false);
// //     }
// //   };

// //   const handleEdit = (post) => {
// //     setEditingPost(post);
// //     setTitle(post.title);
// //     setSlug(post.slug);
// //     setExcerpt(post.excerpt || "");
// //     setContent(post.content);
// //     setCategoryId(post.category);
// //     setStatus(post.status);
// //     setTags(post.tags?.join(", ") || "");
// //     setPublishedAt(post.publishedAt ? new Date(post.publishedAt).toISOString().slice(0, 16) : "");
// //     setCoverUrl(post.cover || null);
// //   };

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Are you sure?")) return;
// //     try {
// //       await deletePostAdmin(token, id);
// //       alert("Post deleted successfully!");
// //       fetchPosts();
// //     } catch (err) {
// //       alert("Failed to delete post: " + err.message);
// //     }
// //   };

// //   const filteredPosts = posts.filter(
// //     (post) =>
// //       (filterCategory === "" || post.category === filterCategory) &&
// //       (filterStatus === "" || post.status === filterStatus)
// //   );

// //   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
// //   const paginatedPosts = filteredPosts.slice(
// //     (currentPage - 1) * postsPerPage,
// //     currentPage * postsPerPage
// //   );

// //   return (
// //     <div className="manage-post-container">
// //       <h2>{editingPost ? "Edit Post" : "Create Post"}</h2>
// //       <form className="post-form" onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Title"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="text"
// //           placeholder="Slug (optional)"
// //           value={slug}
// //           onChange={(e) => setSlug(e.target.value)}
// //         />
// //         <textarea
// //           placeholder="Excerpt"
// //           value={excerpt}
// //           onChange={(e) => setExcerpt(e.target.value)}
// //         />
// //         <textarea
// //           placeholder="Content"
// //           value={content}
// //           onChange={(e) => setContent(e.target.value)}
// //           rows={6}
// //           required
// //         />
// //         <select
// //           value={categoryId}
// //           onChange={(e) => setCategoryId(e.target.value)}
// //           required
// //         >
// //           <option value="">Select Category</option>
// //           {categories.map((cat) => (
// //             <option key={cat._id} value={cat._id}>{cat.name}</option>
// //           ))}
// //         </select>
// //         <input
// //           type="text"
// //           placeholder="Tags (comma separated)"
// //           value={tags}
// //           onChange={(e) => setTags(e.target.value)}
// //         />
// //         <select value={status} onChange={(e) => setStatus(e.target.value)}>
// //           <option value="published">Published</option>
// //           <option value="draft">Draft</option>
// //         </select>
// //         <input
// //           type="datetime-local"
// //           value={publishedAt}
// //           onChange={(e) => setPublishedAt(e.target.value)}
// //         />
// //         <label className="cover-upload">
// //           Upload Cover Image
// //           <input type="file" accept="image/*" onChange={handleFileChange} />
// //         </label>
// //         {coverUrl && (
// //           <div className="cover-preview">
// //             <img src={coverUrl} alt="cover" />
// //             <button type="button" onClick={() => setCoverUrl(null)}><FaTimes /></button>
// //           </div>
// //         )}
// //         <button type="submit">{formLoading ? "Saving..." : editingPost ? "Update Post" : "Create Post"}</button>
// //         {editingPost && <button type="button" onClick={resetForm} className="cancel-btn">Cancel</button>}
// //       </form>

// //       {/* Filters */}
// //       <div className="filters">
// //         <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
// //           <option value="">All Categories</option>
// //           {categories.map((cat) => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
// //         </select>
// //         <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
// //           <option value="">All Status</option>
// //           <option value="published">Published</option>
// //           <option value="draft">Draft</option>
// //         </select>
// //       </div>

// //       {/* Posts List */}
// //       <div className="posts-list">
// //         {paginatedPosts.map((post) => (
// //           <div key={post._id} className="post-card">
// //             <h4>{post.title}</h4>
// //             <div className="meta-info">
// //               <span>Status: {post.status}</span>
// //               <span>Views: {post.views}</span>
// //               <span>Likes: {post.likes}</span>
// //             </div>
// //             <div className="post-actions">
// //               <button onClick={() => handleEdit(post)} title="Edit"><FaEdit /></button>
// //               <button onClick={() => setDeleteConfirmId(post._id)} title="Delete"><FaTrash /></button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Pagination */}
// //       {totalPages > 1 && (
// //         <div className="pagination">
// //           <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Previous</button>
// //           <span>Page {currentPage} of {totalPages}</span>
// //           <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
// //         </div>
// //       )}

// //       {/* Delete Confirmation */}
// //       {deleteConfirmId && (
// //         <div className="delete-modal">
// //           <p>Are you sure you want to delete this post?</p>
// //           <div className="delete-actions">
// //             <button onClick={() => handleDelete(deleteConfirmId)}>Yes</button>
// //             <button onClick={() => setDeleteConfirmId(null)}>Cancel</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ManagePosts;





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
import { Editor } from "@tinymce/tinymce-react";
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
  const [formLoading, setFormLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

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

        {/* TinyMCE Rich Text Editor */}
        <Editor
          apiKey="hx7ylchg5tdoxntgdzm8apy8nw501s8xepc5eesvoucxtr3u" // Replace with your TinyMCE free API key
          value={content}
          init={{
            height: 400,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic underline strikethrough | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | link image media | code",
            content_style: "body { font-family:Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={(newValue) => setContent(newValue)}
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


// //managesubcategory
// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext.jsx";
// import {
//   listAllPosts,
//   getCategories,
//   getSubcategoriesByCategory,
//   createPostAdmin,
//   updatePostAdmin,
//   deletePostAdmin,
//   uploadImageAPI,
// } from "../api/client.js";
// import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
// import { Editor } from "@tinymce/tinymce-react";
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
//   const [subcategories, setSubcategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form state
//   const [editingPost, setEditingPost] = useState(null);
//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [excerpt, setExcerpt] = useState("");
//   const [content, setContent] = useState("");
//   const [categoryId, setCategoryId] = useState("");
//   const [subcategoryId, setSubcategoryId] = useState("");
//   const [status, setStatus] = useState("published");
//   const [tags, setTags] = useState("");
//   const [publishedAt, setPublishedAt] = useState("");
//   const [coverUrl, setCoverUrl] = useState(null);
//   const [formLoading, setFormLoading] = useState(false);
//   const [uploadingImage, setUploadingImage] = useState(false);

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

//   const fetchCategories = async () => {
//     try {
//       const data = await getCategories();
//       setCategories(Array.isArray(data) ? data : []);
//     } catch {
//       setCategories([]);
//     }
//   };

//   const fetchSubcategoriesForCategory = async (catId) => {
//     if (!catId) {
//       setSubcategories([]);
//       setSubcategoryId("");
//       return;
//     }
//     try {
//       const data = await getSubcategoriesByCategory(catId);
//       setSubcategories(Array.isArray(data) ? data : []);
//       setSubcategoryId(""); // Reset subcategory selection
//     } catch {
//       setSubcategories([]);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//     fetchCategories();
//   }, []);

//   const resetForm = () => {
//     setEditingPost(null);
//     setTitle("");
//     setSlug("");
//     setExcerpt("");
//     setContent("");
//     setCategoryId("");
//     setSubcategoryId("");
//     setStatus("published");
//     setTags("");
//     setPublishedAt("");
//     setCoverUrl(null);
//   };

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [filterCategory, filterStatus]);

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
//       slug: slug || title.toLowerCase().replace(/\s+/g, "-"),
//       excerpt,
//       content,
//       categorySlug: selectedCategory.slug,
//       subcategory: subcategoryId || null,
//       authorId: user._id,
//       status,
//       tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
//       publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
//       cover: coverUrl,
//       views: editingPost?.views || 0,
//       likes: editingPost?.likes || 0,
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

//   const handleEdit = (post) => {
//     setEditingPost(post);
//     setTitle(post.title);
//     setSlug(post.slug);
//     setExcerpt(post.excerpt || "");
//     setContent(post.content);
//     setCategoryId(post.category);
//     setSubcategoryId(post.subcategory || "");
//     setStatus(post.status);
//     setTags(post.tags?.join(", ") || "");
//     setPublishedAt(post.publishedAt ? new Date(post.publishedAt).toISOString().slice(0, 16) : "");
//     setCoverUrl(post.cover || null);
//     if (post.category) fetchSubcategoriesForCategory(post.category);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure?")) return;
//     try {
//       await deletePostAdmin(token, id);
//       alert("Post deleted successfully!");
//       fetchPosts();
//     } catch (err) {
//       alert("Failed to delete post: " + err.message);
//     }
//   };

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
//       <form className="post-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Slug (optional)"
//           value={slug}
//           onChange={(e) => setSlug(e.target.value)}
//         />
//         <textarea
//           placeholder="Excerpt"
//           value={excerpt}
//           onChange={(e) => setExcerpt(e.target.value)}
//         />

//         <Editor
//           apiKey="hx7ylchg5tdoxntgdzm8apy8nw501s8xepc5eesvoucxtr3u"
//           value={content}
//           init={{
//             height: 400,
//             menubar: true,
//             plugins: [
//               "advlist autolink lists link image charmap print preview anchor",
//               "searchreplace visualblocks code fullscreen",
//               "insertdatetime media table paste code help wordcount",
//             ],
//             toolbar:
//               "undo redo | formatselect | bold italic underline strikethrough | " +
//               "alignleft aligncenter alignright alignjustify | " +
//               "bullist numlist outdent indent | removeformat | link image media | code",
//             content_style: "body { font-family:Arial,sans-serif; font-size:14px }",
//           }}
//           onEditorChange={(newValue) => setContent(newValue)}
//         />

//         <select
//           value={categoryId}
//           onChange={(e) => {
//             setCategoryId(e.target.value);
//             fetchSubcategoriesForCategory(e.target.value);
//           }}
//           required
//         >
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat._id} value={cat._id}>{cat.name}</option>
//           ))}
//         </select>

//         {subcategories.length > 0 && (
//           <select
//             value={subcategoryId}
//             onChange={(e) => setSubcategoryId(e.target.value)}
//           >
//             <option value="">Select Subcategory (optional)</option>
//             {subcategories.map((sub) => (
//               <option key={sub._id} value={sub._id}>{sub.name}</option>
//             ))}
//           </select>
//         )}

//         <input
//           type="text"
//           placeholder="Tags (comma separated)"
//           value={tags}
//           onChange={(e) => setTags(e.target.value)}
//         />
//         <select value={status} onChange={(e) => setStatus(e.target.value)}>
//           <option value="published">Published</option>
//           <option value="draft">Draft</option>
//         </select>
//         <input
//           type="datetime-local"
//           value={publishedAt}
//           onChange={(e) => setPublishedAt(e.target.value)}
//         />
//         <label className="cover-upload">
//           Upload Cover Image
//           <input type="file" accept="image/*" onChange={handleFileChange} />
//         </label>
//         {coverUrl && (
//           <div className="cover-preview">
//             <img src={coverUrl} alt="cover" />
//             <button type="button" onClick={() => setCoverUrl(null)}><FaTimes /></button>
//           </div>
//         )}
//         <button type="submit">{formLoading ? "Saving..." : editingPost ? "Update Post" : "Create Post"}</button>
//         {editingPost && <button type="button" onClick={resetForm} className="cancel-btn">Cancel</button>}
//       </form>

//       {/* Filters */}
//       <div className="filters">
//         <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
//           <option value="">All Categories</option>
//           {categories.map((cat) => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
//         </select>
//         <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
//           <option value="">All Status</option>
//           <option value="published">Published</option>
//           <option value="draft">Draft</option>
//         </select>
//       </div>

//       {/* Posts List */}
//       <div className="posts-list">
//         {paginatedPosts.map((post) => (
//           <div key={post._id} className="post-card">
//             <h4>{post.title}</h4>
//             <div className="meta-info">
//               <span>Status: {post.status}</span>
//               <span>Views: {post.views}</span>
//               <span>Likes: {post.likes}</span>
//             </div>
//             <div className="post-actions">
//               <button onClick={() => handleEdit(post)} title="Edit"><FaEdit /></button>
//               <button onClick={() => setDeleteConfirmId(post._id)} title="Delete"><FaTrash /></button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="pagination">
//           <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Previous</button>
//           <span>Page {currentPage} of {totalPages}</span>
//           <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
//         </div>
//       )}

//       {/* Delete Confirmation */}
//       {deleteConfirmId && (
//         <div className="delete-modal">
//           <p>Are you sure you want to delete this post?</p>
//           <div className="delete-actions">
//             <button onClick={() => handleDelete(deleteConfirmId)}>Yes</button>
//             <button onClick={() => setDeleteConfirmId(null)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManagePosts;
