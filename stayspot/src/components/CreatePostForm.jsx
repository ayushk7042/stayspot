// // import React, { useState, useEffect } from "react";
// // import { getCategories, createPostAdmin } from "../api/client.js";
// // import { useAuth } from "../context/AuthContext.jsx";

// // const CreatePostForm = ({ onPostCreated }) => {
// //   const { token } = useAuth();
// //   const [categories, setCategories] = useState([]);
// //   const [title, setTitle] = useState("");
// //   const [content, setContent] = useState("");
// //   const [categoryId, setCategoryId] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     getCategories()
// //       .then(setCategories)
// //       .catch((err) => alert("Failed to load categories: " + err.message));
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!title.trim() || !content.trim() || !categoryId) {
// //       alert("Please fill all fields");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       await createPostAdmin(token, {
// //         title,
// //         content,
// //         category: categoryId,
// //         status: "published", // or 'draft' based on your logic
// //       });
// //       alert("Post created successfully");
// //       setTitle("");
// //       setContent("");
// //       setCategoryId("");
// //       if (onPostCreated) onPostCreated();
// //     } catch (err) {
// //       alert("Failed to create post: " + err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "auto" }}>
// //       <h2>Create New Post</h2>
// //       <input
// //         type="text"
// //         placeholder="Title"
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //         disabled={loading}
// //         required
// //         style={{ width: "100%", marginBottom: "1rem" }}
// //       />
// //       <textarea
// //         placeholder="Content"
// //         value={content}
// //         onChange={(e) => setContent(e.target.value)}
// //         disabled={loading}
// //         required
// //         rows={6}
// //         style={{ width: "100%", marginBottom: "1rem" }}
// //       />
// //       <select
// //         value={categoryId}
// //         onChange={(e) => setCategoryId(e.target.value)}
// //         disabled={loading}
// //         required
// //         style={{ width: "100%", marginBottom: "1rem" }}
// //       >
// //         <option value="">Select Category</option>
// //         {categories.map((cat) => (
// //           <option key={cat._id} value={cat._id}>
// //             {cat.name}
// //           </option>
// //         ))}
// //       </select>
// //       <button type="submit" disabled={loading}>
// //         {loading ? "Posting..." : "Create Post"}
// //       </button>
// //     </form>
// //   );
// // };

// // export default CreatePostForm;



// import React, { useState, useEffect, useRef } from "react";
// import { getCategories, createPostAdmin } from "../api/client.js";
// import { useAuth } from "../context/AuthContext.jsx";

// const MAX_TITLE_LENGTH = 100;
// const MAX_CONTENT_LENGTH = 10000;

// const CreatePostForm = ({ onPostCreated }) => {
//   const { token } = useAuth();
//   const [categories, setCategories] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [categoryId, setCategoryId] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [successMsg, setSuccessMsg] = useState(null);

//   const titleRef = useRef(null);

//   useEffect(() => {
//     titleRef.current?.focus();
//   }, []);

//   useEffect(() => {
//     getCategories()
//       .then(setCategories)
//       .catch((err) =>
//         setErrorMsg("Failed to load categories: " + err.message)
//       );
//   }, []);

//   const validateForm = () => {
//     if (!title.trim()) {
//       setErrorMsg("Title is required");
//       return false;
//     }
//     if (title.length > MAX_TITLE_LENGTH) {
//       setErrorMsg(`Title must be under ${MAX_TITLE_LENGTH} characters`);
//       return false;
//     }
//     if (!content.trim()) {
//       setErrorMsg("Content is required");
//       return false;
//     }
//     if (content.length > MAX_CONTENT_LENGTH) {
//       setErrorMsg(`Content must be under ${MAX_CONTENT_LENGTH} characters`);
//       return false;
//     }
//     if (!categoryId) {
//       setErrorMsg("Please select a category");
//       return false;
//     }
//     setErrorMsg(null);
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuccessMsg(null);
//     if (!validateForm()) return;

//     setLoading(true);
//     try {
//       await createPostAdmin(token, {
//         title,
//         content,
//         category: categoryId,
//         status: "published", // or 'draft' per your workflow
//       });
//       setSuccessMsg("Post created successfully!");
//       setTitle("");
//       setContent("");
//       setCategoryId("");
//       onPostCreated?.();
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       titleRef.current?.focus();
//     } catch (err) {
//       setErrorMsg("Failed to create post: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}
//       aria-live="polite"
//       noValidate
//     >
//       <h2>Create New Post</h2>

//       {errorMsg && (
//         <div role="alert" style={{ color: "red", marginBottom: 12 }}>
//           {errorMsg}
//         </div>
//       )}
//       {successMsg && (
//         <div role="status" style={{ color: "green", marginBottom: 12 }}>
//           {successMsg}
//         </div>
//       )}

//       <label htmlFor="title-input" style={{ display: "block", fontWeight: "600" }}>
//         Title <small>({title.length}/{MAX_TITLE_LENGTH})</small>
//       </label>
//       <input
//         id="title-input"
//         type="text"
//         placeholder="Post Title"
//         value={title}
//         maxLength={MAX_TITLE_LENGTH}
//         onChange={(e) => setTitle(e.target.value)}
//         disabled={loading}
//         ref={titleRef}
//         aria-required="true"
//         aria-describedby="title-desc"
//         style={{
//           width: "100%",
//           padding: "8px",
//           marginBottom: "1rem",
//           borderRadius: 6,
//           border: "1.5px solid #ccc",
//           fontSize: "1rem",
//           outlineOffset: 2,
//         }}
//       />
//       <div id="title-desc" style={{fontSize: 12, color: "#555", marginBottom: 12}}>
//         Max {MAX_TITLE_LENGTH} characters.
//       </div>

//       <label
//         htmlFor="content-textarea"
//         style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//       >
//         Content <small>({content.length}/{MAX_CONTENT_LENGTH})</small>
//       </label>
//       <textarea
//         id="content-textarea"
//         placeholder="Write your post content here..."
//         rows={10}
//         maxLength={MAX_CONTENT_LENGTH}
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         disabled={loading}
//         aria-required="true"
//         aria-describedby="content-desc"
//         style={{
//           width: "100%",
//           padding: "10px",
//           borderRadius: 6,
//           border: "1.5px solid #ccc",
//           resize: "vertical",
//           fontSize: "1rem",
//           lineHeight: 1.5,
//           outlineOffset: 2,
//           marginBottom: "1rem",
//         }}
//       />
//       <div id="content-desc" style={{fontSize: 12, color: "#555", marginBottom: 12}}>
//         Max {MAX_CONTENT_LENGTH} characters.
//       </div>

//       <label htmlFor="category-select" style={{ display: "block", fontWeight: "600", marginBottom: 6 }}>
//         Category
//       </label>
//       <select
//         id="category-select"
//         value={categoryId}
//         onChange={(e) => setCategoryId(e.target.value)}
//         disabled={loading}
//         required
//         aria-required="true"
//         style={{
//           width: "100%",
//           padding: "8px",
//           borderRadius: 6,
//           border: "1.5px solid #ccc",
//           fontSize: "1rem",
//           marginBottom: "1.5rem",
//         }}
//       >
//         <option value="" disabled>
//           Select category
//         </option>
//         {categories.map((cat) => (
//           <option key={cat._id} value={cat._id}>
//             {cat.name}
//           </option>
//         ))}
//       </select>

//       <button
//         type="submit"
//         disabled={loading}
//         style={{
//           backgroundColor: "#3b82f6",
//           color: "white",
//           padding: "10px 20px",
//           fontSize: "1.1rem",
//           fontWeight: "700",
//           borderRadius: 8,
//           border: "none",
//           cursor: loading ? "not-allowed" : "pointer",
//           transition: "background-color 0.3s ease",
//           width: "100%",
//         }}
//         onMouseEnter={(e) => {
//           if (!loading) e.currentTarget.style.backgroundColor = "#2563eb";
//         }}
//         onMouseLeave={(e) => {
//           if (!loading) e.currentTarget.style.backgroundColor = "#3b82f6";
//         }}
//       >
//         {loading ? "Posting..." : "Create Post"}
//       </button>
//     </form>
//   );
// };

// export default CreatePostForm;



import React, { useState, useEffect, useRef } from "react";
import { getCategories, createPostAdmin } from "../api/client.js";
import { useAuth } from "../context/AuthContext.jsx";

const MAX_TITLE_LENGTH = 100;
const MAX_CONTENT_LENGTH = 10000;

const CreatePostForm = ({ onPostCreated }) => {
  const { token, user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [isTrending, setIsTrending] = useState(false); // NEW state
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current?.focus();
    getCategories()
      .then(setCategories)
      .catch((err) =>
        setErrorMsg("Failed to load categories: " + err.message)
      );
  }, []);

  const validateForm = () => {
    if (!title.trim()) {
      setErrorMsg("Title is required");
      return false;
    }
    if (title.length > MAX_TITLE_LENGTH) {
      setErrorMsg(`Title must be under ${MAX_TITLE_LENGTH} characters`);
      return false;
    }
    if (!content.trim()) {
      setErrorMsg("Content is required");
      return false;
    }
    if (content.length > MAX_CONTENT_LENGTH) {
      setErrorMsg(`Content must be under ${MAX_CONTENT_LENGTH} characters`);
      return false;
    }
    if (!categoryId) {
      setErrorMsg("Please select a category");
      return false;
    }
    setErrorMsg(null);
    return true;
  };

  const canSetTrending = user?.roles?.includes("admin") || user?.isAdmin; // Adjust based on your auth logic

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg(null);
    if (!validateForm()) return;

    setLoading(true);
    try {
      await createPostAdmin(token, {
        title,
        content,
        category: categoryId,
        isTrending, // send trending field to backend
        status: "published", // or 'draft'
      });
      setSuccessMsg("Post created successfully!");
      setTitle("");
      setContent("");
      setCategoryId("");
      setIsTrending(false);
      onPostCreated?.();
      window.scrollTo({ top: 0, behavior: "smooth" });
      titleRef.current?.focus();
    } catch (err) {
      setErrorMsg("Failed to create post: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}
      aria-live="polite"
      noValidate
    >
      <h2>Create New Post</h2>

      {errorMsg && (
        <div role="alert" style={{ color: "red", marginBottom: 12 }}>
          {errorMsg}
        </div>
      )}
      {successMsg && (
        <div role="status" style={{ color: "green", marginBottom: 12 }}>
          {successMsg}
        </div>
      )}

      <label htmlFor="title-input" style={{ display: "block", fontWeight: "600" }}>
        Title <small>({title.length}/{MAX_TITLE_LENGTH})</small>
      </label>
      <input
        id="title-input"
        type="text"
        placeholder="Post Title"
        value={title}
        maxLength={MAX_TITLE_LENGTH}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
        ref={titleRef}
        aria-required="true"
        aria-describedby="title-desc"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "1rem",
          borderRadius: 6,
          border: "1.5px solid #ccc",
          fontSize: "1rem",
          outlineOffset: 2,
        }}
      />
      <div id="title-desc" style={{ fontSize: 12, color: "#555", marginBottom: 12 }}>
        Max {MAX_TITLE_LENGTH} characters.
      </div>

      <label
        htmlFor="content-textarea"
        style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
      >
        Content <small>({content.length}/{MAX_CONTENT_LENGTH})</small>
      </label>
      <textarea
        id="content-textarea"
        placeholder="Write your post content here..."
        rows={10}
        maxLength={MAX_CONTENT_LENGTH}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={loading}
        aria-required="true"
        aria-describedby="content-desc"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: 6,
          border: "1.5px solid #ccc",
          resize: "vertical",
          fontSize: "1rem",
          lineHeight: 1.5,
          outlineOffset: 2,
          marginBottom: "1rem",
        }}
      />
      <div id="content-desc" style={{ fontSize: 12, color: "#555", marginBottom: 12 }}>
        Max {MAX_CONTENT_LENGTH} characters.
      </div>

      <label htmlFor="category-select" style={{ display: "block", fontWeight: "600", marginBottom: 6 }}>
        Category
      </label>
      <select
        id="category-select"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        disabled={loading}
        required
        aria-required="true"
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: 6,
          border: "1.5px solid #ccc",
          fontSize: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <option value="" disabled>
          Select category
        </option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* Show trending checkbox only if admin */}
      {canSetTrending && (
        <label style={{ display: "block", marginBottom: 16 }}>
          <input
            type="checkbox"
            checked={isTrending}
            onChange={(e) => setIsTrending(e.target.checked)}
            disabled={loading}
          />{" "}
          Mark as Trending
        </label>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "10px 20px",
          fontSize: "1.1rem",
          fontWeight: "700",
          borderRadius: 8,
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background-color 0.3s ease",
          width: "100%",
        }}
        onMouseEnter={(e) => {
          if (!loading) e.currentTarget.style.backgroundColor = "#2563eb";
        }}
        onMouseLeave={(e) => {
          if (!loading) e.currentTarget.style.backgroundColor = "#3b82f6";
        }}
      >
        {loading ? "Posting..." : "Create Post"}
      </button>
    </form>
  );
};

export default CreatePostForm;
