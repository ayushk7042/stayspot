



import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageLogo = () => {
  const [logos, setLogos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch existing logos
  const fetchLogos = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/logo");
      setLogos(res.data); // array of logo objects
    } catch (err) {
      console.error("Error fetching logos:", err);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  // Upload a new logo
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("logo", selectedFile);

    try {
      setUploading(true);
      await axios.post(
        "http://localhost:4000/api/logo/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSelectedFile(null);
      fetchLogos(); // refresh logos
      setUploading(false);
    } catch (err) {
      console.error("Error uploading logo:", err);
      setUploading(false);
    }
  };

  // Delete a logo
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this logo?")) return;
    try {
      setDeletingId(id);
      await axios.delete(`http://localhost:4000/api/logo/${id}`);
      fetchLogos();
      setDeletingId(null);
    } catch (err) {
      console.error("Error deleting logo:", err);
      setDeletingId(null);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Manage Logo</h2>

      {/* Upload form */}
      <form onSubmit={handleUpload} style={{ marginBottom: "2rem" }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button type="submit" disabled={uploading} style={{ marginLeft: 10 }}>
          {uploading ? "Uploading..." : "Upload Logo"}
        </button>
      </form>

      {/* Display logos */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {logos.length === 0 && <p>No logos uploaded yet.</p>}
        {logos.map((logo, idx) => (
          <div key={logo._id || idx} style={{ textAlign: "center" }}>
            <img
              src={logo.url}
              alt={`Logo ${idx}`}
              style={{
                width: 120,
                height: 60,
                objectFit: "contain",
                border: "1px solid #ccc",
                borderRadius: 8,
              }}
            />
            <br />
            <button
              onClick={() => handleDelete(logo._id)}
              disabled={deletingId === logo._id}
              style={{
                marginTop: 8,
                padding: "4px 8px",
                borderRadius: 6,
                border: "1px solid #e53e3e",
                background: deletingId === logo._id ? "#fbdada" : "#fff",
                color: "#e53e3e",
                cursor: "pointer",
              }}
            >
              {deletingId === logo._id ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageLogo;
