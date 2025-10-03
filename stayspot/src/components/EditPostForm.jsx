import React, { useState } from "react";

const EditPostForm = ({ post, onCancel, onSave }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content || "");
  const [category, setCategory] = useState(post.category || "");
  const [isTrending, setIsTrending] = useState(post.isTrending || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate minimally here if needed
    onSave({ ...post, title, content, category, isTrending });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
      <h2>Edit Post</h2>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 12 }}
        />
      </label>

      <label>
        Content
        <textarea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 12 }}
        />
      </label>

      <label>
        Category ID (for simplicity, use ID or slug)
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 12 }}
        />
      </label>

      <label style={{ display: "block", marginBottom: 12 }}>
        <input
          type="checkbox"
          checked={isTrending}
          onChange={(e) => setIsTrending(e.target.checked)}
        />{" "}
        Mark as Trending
      </label>

      <button type="submit" style={{ marginRight: 10 }}>
        Save
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditPostForm;
