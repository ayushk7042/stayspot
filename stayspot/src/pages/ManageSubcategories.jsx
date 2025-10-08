import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import {
  getCategories,
  getSubcategoriesByCategory,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
} from "../api/client.js";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import "./managesubcategories.css";

const ManageSubcategories = () => {
  const { token } = useAuth();

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [editingSubcategory, setEditingSubcategory] = useState(null);
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState("");

  const [filterCategory, setFilterCategory] = useState("");

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setCategories([]);
    }
  };

  // Fetch subcategories by category
 const fetchSubcategories = async (categoryId = "") => {
  setLoading(true);
  setError(null);
  try {
    let data = [];
    if (categoryId) {
      data = await getSubcategoriesByCategory(token, categoryId);
    } else {
      // fallback: fetch all subcategories (if backend supports a generic /admin/subcategories endpoint)
      data = await getSubcategories(token);
    }
    setSubcategories(Array.isArray(data) ? data : []);
  } catch (err) {
    console.error(err);
    setError("Failed to load subcategories.");
    setSubcategories([]);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
  }, []);

  useEffect(() => {
    fetchSubcategories(filterCategory);
  }, [filterCategory]);

  const resetForm = () => {
    setEditingSubcategory(null);
    setName("");
    setParentCategory("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !parentCategory) {
      alert("Please provide both name and parent category.");
      return;
    }

    const data = { name, parentCategory };
    try {
      if (editingSubcategory) {
        await updateSubcategory(token, editingSubcategory._id, data);
        alert("Subcategory updated successfully!");
      } else {
        await createSubcategory(token, data);
        alert("Subcategory created successfully!");
      }
      resetForm();
      fetchSubcategories(filterCategory);
    } catch (err) {
      alert("Failed to save subcategory: " + err.message);
    }
  };

  const handleEdit = (sub) => {
    setEditingSubcategory(sub);
    setName(sub.name);
    setParentCategory(sub.parentCategory?._id || "");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subcategory?")) return;
    try {
      await deleteSubcategory(token, id);
      alert("Subcategory deleted successfully!");
      fetchSubcategories(filterCategory);
    } catch (err) {
      alert("Failed to delete subcategory: " + err.message);
    }
  };

  const filteredSubcategories = subcategories.filter(
    (sub) => !filterCategory || sub.parentCategory?._id === filterCategory
  );

  return (
    <div className="manage-subcategory-container">
      <h2>{editingSubcategory ? "Edit Subcategory" : "Create Subcategory"}</h2>
      <form className="subcategory-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subcategory Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select
          value={parentCategory}
          onChange={(e) => setParentCategory(e.target.value)}
          required
        >
          <option value="">Select Parent Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
        <button type="submit">
          {editingSubcategory ? "Update Subcategory" : "Create Subcategory"}
        </button>
        {editingSubcategory && (
          <button type="button" onClick={resetForm} className="cancel-btn">
            Cancel
          </button>
        )}
      </form>

      {/* Filter */}
      <div className="filters">
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* Subcategories List */}
      <div className="subcategories-list">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : filteredSubcategories.length === 0 ? (
          <p>No subcategories found.</p>
        ) : (
          filteredSubcategories.map((sub) => (
            <div key={sub._id} className="subcategory-card">
              <h4>{sub.name}</h4>
              <p>Parent: {sub.parentCategory?.name || "N/A"}</p>
              <div className="actions">
                <button onClick={() => handleEdit(sub)} title="Edit">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(sub._id)} title="Delete">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageSubcategories;
