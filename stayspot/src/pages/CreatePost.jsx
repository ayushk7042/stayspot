import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import "./CreatePost.css";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [tags, setTags] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newPost = {
      title,
      slug,
      excerpt,
      content,
      status,
      tags: tags.split(",").map((t) => t.trim()),
    };

    fetch("http://localhost:4000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSubmitting(false);
        navigate("/manage-posts"); // redirect after creation
      })
      .catch(() => setIsSubmitting(false));
  };

  return (
    <div className="create-post-container">
      <header className="create-header">
        <h1>Create New Post</h1>
        <button onClick={() => navigate("/admin/dashboard")} className="btn-back">
          <FaArrowLeft /> Back
        </button>
      </header>

      <form className="create-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Slug:
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </label>
        <label>
          Excerpt:
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
        <label>
          Tags (comma separated):
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>

        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          <FaSave /> {isSubmitting ? "Saving..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
