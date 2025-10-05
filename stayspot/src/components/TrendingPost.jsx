


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaClock, FaTag } from "react-icons/fa";

const TrendingPost = ({ big = true, post }) => {
  const [singlePost, setSinglePost] = useState(post || null);
  const [loading, setLoading] = useState(!post);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (post) return; // agar prop se mila hai toh API call ki zarurat nahi

    const token = localStorage.getItem("token");
    if (!token) {
      setError("User not authenticated");
      setLoading(false);
      return;
    }

    fetch("http://localhost:4000/api/posts/trending/latest", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 401) throw new Error("Unauthorized access - please log in.");
          throw new Error("Failed to fetch trending post");
        }
        return res.json();
      })
      .then((data) => {
        setSinglePost(data && Object.keys(data).length > 0 ? data : null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [post]);

  if (loading) return <p style={{ textAlign: "center", padding: "2rem" }}>Loading trending post...</p>;
  if (error) return <p style={{ textAlign: "center", padding: "2rem", color: "red" }}>{error}</p>;
  if (!singlePost) return null;

  return (
    <Link to={`/post/${singlePost.slug}`} className={`trending-card ${big ? "big" : "small"}`}>
      <div className="image-wrapper">
        <img src={singlePost.cover || "/placeholder.jpg"} alt={singlePost.title} loading="lazy" />
        <div className="overlay">
          <span className="category">
            <FaTag /> {singlePost.category?.name || "Uncategorized"}
          </span>
          <h3>{singlePost.title}</h3>
          <span className="meta">
            <FaUser /> {singlePost.author?.name || "Anonymous"} • <FaClock />{" "}
            {new Date(singlePost.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <style>{`
        .trending-card {
          display: block;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
          color: inherit;
          background: #fff;
        }
        .trending-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.15);
        }
        .image-wrapper {
          position: relative;
          height: ${big ? "320px" : "180px"};
          overflow: hidden;
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .trending-card:hover .image-wrapper img {
          transform: scale(1.05);
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1));
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1rem;
          color: #fff;
        }
        .overlay h3 {
          margin: 0.3rem 0;
          font-size: ${big ? "1.6rem" : "1.1rem"};
          font-weight: 700;
          line-height: 1.3;
        }
        .overlay .category {
          background-color: rgba(255,255,255,0.2);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          font-size: 0.8rem;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 0.4rem;
        }
        .overlay .meta {
          font-size: 0.8rem;
          color: #d1d5db;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .image-wrapper { height: ${big ? "260px" : "160px"}; }
          .overlay h3 { font-size: ${big ? "1.4rem" : "1rem"}; }
        }
        @media (max-width: 768px) {
          .image-wrapper { height: ${big ? "220px" : "140px"}; }
          .overlay h3 { font-size: ${big ? "1.2rem" : "0.95rem"}; }
        }
      `}</style>
    </Link>
  );
};

export default TrendingPost;
