


import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { getCategories, createCategory, updateCategory, deleteCategory } from "../api/client.js";
import { FaEdit, FaTrash, FaTimes, FaCheck } from "react-icons/fa";

const ManageCategories = () => {
  const { token } = useAuth();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const inputRef = useRef(null);

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Focus input on edit start
  useEffect(() => {
    if (editId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editId]);

  const fetchCategories = () => {
    setLoading(true);
    setError(null);
    getCategories()
      .then(data => setCategories(Array.isArray(data) ? data : []))
      .catch(() => setError("Failed to load categories"))
      .finally(() => setLoading(false));
  };

  const resetForm = () => {
    setEditId(null);
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Category name is required");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      if (editId) {
        await updateCategory(token, editId, { name });
      } else {
        await createCategory(token, { name, isActive: true });
      }
      resetForm();
      fetchCategories();
    } catch (err) {
      setError("Failed to save category");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (cat) => {
    setEditId(cat._id);
    setName(cat.name);
  };

  const confirmDelete = (id) => {
    setDeleteConfirmId(id);
  };

  const handleDelete = async () => {
    if (!deleteConfirmId) return;
    setLoading(true);
    setError(null);
    try {
      await deleteCategory(token, deleteConfirmId);
      setDeleteConfirmId(null);
      fetchCategories();
      if (editId === deleteConfirmId) resetForm();
    } catch {
      setError("Failed to delete category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2 style={{ marginBottom: 24 }}>Manage Categories</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20, display: "flex", gap: 12 }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          style={{
            flexGrow: 1,
            padding: 10,
            fontSize: 16,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
          required
          aria-label="Category name"
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            fontWeight: 600,
            borderRadius: 6,
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            backgroundColor: "#4054b2",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {editId ? (
            <>
              <FaCheck /> Update
            </>
          ) : (
            "Create"
          )}
        </button>
        {editId && (
          <button
            type="button"
            onClick={resetForm}
            disabled={loading}
            style={{
              padding: "10px 16px",
              borderRadius: 6,
              border: "1px solid #888",
              cursor: loading ? "not-allowed" : "pointer",
              backgroundColor: "white",
            }}
            aria-label="Cancel editing"
          >
            <FaTimes />
          </button>
        )}
      </form>

      {error && (
        <p style={{ color: "red", marginBottom: 12 }}>
          <strong>Error:</strong> {error}
        </p>
      )}

      {loading && <p>Loading categories...</p>}

      {!loading && categories.length === 0 && <p>No categories found.</p>}

      <div style={{ display: "grid", gap: 12 }}>
        {categories.map((cat) => (
          <div
            key={cat._id}
            style={{
              padding: 14,
              borderRadius: 10,
              boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <span>{cat.name}</span>
            <div>
              <button
                onClick={() => handleEdit(cat)}
                aria-label={`Edit category ${cat.name}`}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#2b6cb0",
                  marginRight: 8,
                }}
              >
                <FaEdit size={18} />
              </button>
              <button
                onClick={() => confirmDelete(cat._id)}
                aria-label={`Delete category ${cat.name}`}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#e53e3e",
                }}
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete confirmation modal */}
      {deleteConfirmId && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
          }}
          onClick={() => setDeleteConfirmId(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              padding: 24,
              borderRadius: 12,
              maxWidth: 400,
              width: "90%",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
            }}
          >
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this category? This action cannot be undone.</p>
            <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 16 }}>
              <button
                onClick={handleDelete}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#e53e3e",
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteConfirmId(null)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#edf2f7",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCategories;
