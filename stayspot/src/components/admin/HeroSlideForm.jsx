// components/admin/HeroSlideForm.jsx
import React, { useState } from "react";
import axios from "axios";

const iconOptions = [
  { value: "FaLeaf", label: "Leaf" },
  { value: "FaGlobe", label: "Globe" },
  { value: "FaBolt", label: "Bolt" },
  { value: "FaRecycle", label: "Recycle" },
  { value: "FaBookOpen", label: "Book" },
  { value: "FaChartLine", label: "Chart" },
  { value: "FaRocket", label: "Rocket" }
];

const HeroSlideForm = ({ onSlideAdded }) => {
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    cover: "",
    category: "",
    icon: "FaLeaf"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/admin/hero-slides", form, {
      headers: { Authorization: `Bearer <your_admin_token>` }
    });
    setForm({ title: "", excerpt: "", cover: "", category: "", icon: "FaLeaf" });
    if (onSlideAdded) onSlideAdded();
  };

  return (
    <form className="hero-admin-form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input type="text" name="excerpt" placeholder="Excerpt" value={form.excerpt} onChange={handleChange} required />
      <input type="url" name="cover" placeholder="Image URL" value={form.cover} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category slug" value={form.category} onChange={handleChange} required />
      <select name="icon" value={form.icon} onChange={handleChange}>
        {iconOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
      <button type="submit">Add Slide</button>
    </form>
  );
};

export default HeroSlideForm;
