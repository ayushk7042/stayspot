


// // // // // // // import React, { useState } from "react";
// // // // // // // import PropTypes from "prop-types";
// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import { FaClock, FaUser, FaTag, FaShareAlt, FaTimes } from "react-icons/fa";

// // // // // // // // Utility to format relative time
// // // // // // // function timeAgo(dateStr) {
// // // // // // //   const date = new Date(dateStr);
// // // // // // //   const seconds = Math.floor((new Date() - date) / 1000);
// // // // // // //   if (seconds < 60) return "Just now";
// // // // // // //   if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
// // // // // // //   if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
// // // // // // //   if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
// // // // // // //   return date.toLocaleDateString();
// // // // // // // }

// // // // // // // const PostList = ({ posts, layout = "list" }) => {
// // // // // // //   const [expanded, setExpanded] = useState({});
// // // // // // //   const [lightboxImage, setLightboxImage] = useState(null);

// // // // // // //   const toggleExcerpt = (id) => {
// // // // // // //     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
// // // // // // //   };

// // // // // // //   const openLightbox = (src) => {
// // // // // // //     setLightboxImage(src);
// // // // // // //   };

// // // // // // //   const closeLightbox = () => setLightboxImage(null);

// // // // // // //   if (!posts || posts.length === 0) return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <div className={`post-list ${layout}`}>
// // // // // // //         {posts.map((post) => {
// // // // // // //           const isNew = post.publishedAt && (new Date() - new Date(post.publishedAt)) < 7 * 24 * 3600 * 1000;
// // // // // // //           const isExpanded = !!expanded[post._id];
// // // // // // //           const excerpt = isExpanded ? (post.excerpt || "") : (post.excerpt?.slice(0, 150) + (post.excerpt?.length > 150 ? "..." : ""));
// // // // // // //           return (
// // // // // // //             <article
// // // // // // //               key={post._id}
// // // // // // //               className="post-card"
// // // // // // //               tabIndex={0}
// // // // // // //               aria-labelledby={`post-title-${post._id}`}
// // // // // // //               role="article"
// // // // // // //               aria-describedby={`post-excerpt-${post._id}`}
// // // // // // //             >
// // // // // // //               <Link to={`/post/${post.slug}`} className="post-card-link" aria-label={`Read full article: ${post.title}`}>
// // // // // // //                 <div className="post-image-wrapper" onClick={(e) => { e.preventDefault(); openLightbox(post.cover); }}>
// // // // // // //                   {post.cover ? (
// // // // // // //                     <img
// // // // // // //                       src={post.cover}
// // // // // // //                       alt={post.title}
// // // // // // //                       loading="lazy"
// // // // // // //                       className="post-image"
// // // // // // //                     />
// // // // // // //                   ) : (
// // // // // // //                     <div className="post-image-placeholder">No Image</div>
// // // // // // //                   )}
// // // // // // //                   {isNew && <span className="badge-new" aria-label="New Post">New</span>}
// // // // // // //                 </div>
// // // // // // //                 <div className="post-content-wrapper">
// // // // // // //                   <h3 id={`post-title-${post._id}`} className="post-title">{post.title}</h3>
// // // // // // //                   <p id={`post-excerpt-${post._id}`} className="post-excerpt">{excerpt}</p>
// // // // // // //                   {post.excerpt && post.excerpt.length > 150 && (
// // // // // // //                     <button
// // // // // // //                       className="toggle-excerpt"
// // // // // // //                       onClick={(e) => { e.preventDefault(); toggleExcerpt(post._id); }}
// // // // // // //                       aria-expanded={isExpanded}
// // // // // // //                       aria-controls={`post-excerpt-${post._id}`}
// // // // // // //                     >
// // // // // // //                       {isExpanded ? "Show Less" : "Read More"}
// // // // // // //                     </button>
// // // // // // //                   )}

// // // // // // //                   <div className="post-meta">
// // // // // // //                     <span className="meta-item category" title={`Category: ${post.category?.name || "Uncategorized"}`}>
// // // // // // //                       <FaTag aria-hidden="true" /> {post.category?.name || "Uncategorized"}
// // // // // // //                     </span>
// // // // // // //                     <span className="meta-item author" title={`Author: ${post.author?.name || "Anonymous"}`}>
// // // // // // //                       <FaUser aria-hidden="true" /> {post.author?.name || "Anonymous"}
// // // // // // //                     </span>
// // // // // // //                     <span className="meta-item reading-time" title="Estimated reading time">
// // // // // // //                       <FaClock aria-hidden="true" /> {post.content ? `${Math.ceil(post.content.split(/\s+/).length / 200)} min read` : "N/A"}
// // // // // // //                     </span>
// // // // // // //                     <span className="meta-item date" title={`Published: ${post.publishedAt ? new Date(post.publishedAt).toLocaleString() : ""}`}>
// // // // // // //                       {post.publishedAt ? timeAgo(post.publishedAt) : ""}
// // // // // // //                     </span>
// // // // // // //                     <button
// // // // // // //                       className="meta-item share-button"
// // // // // // //                       aria-label="Share post"
// // // // // // //                       onClick={(e) => {
// // // // // // //                         e.preventDefault();
// // // // // // //                         navigator.clipboard.writeText(window.location.origin + `/posts/${post.slug}`);
// // // // // // //                         alert("Post URL copied to clipboard!");
// // // // // // //                       }}
// // // // // // //                       type="button"
// // // // // // //                     >
// // // // // // //                       <FaShareAlt />
// // // // // // //                     </button>
// // // // // // //                   </div>

// // // // // // //                   {/* Render tags if available */}
// // // // // // //                   {post.tags && post.tags.length > 0 && (
// // // // // // //                     <div className="post-tags" aria-label="Post Tags">
// // // // // // //                       {post.tags.map((tag) => (
// // // // // // //                         <Link key={tag._id || tag} to={`/tag/${tag.slug || tag}`} className="tag-link">
// // // // // // //                           #{tag.name || tag}
// // // // // // //                         </Link>
// // // // // // //                       ))}
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </Link>
// // // // // // //             </article>
// // // // // // //           );
// // // // // // //         })}
// // // // // // //       </div>

// // // // // // //       {/* Lightbox modal */}
// // // // // // //       {lightboxImage && (
// // // // // // //         <div
// // // // // // //           className="lightbox-overlay"
// // // // // // //           role="dialog"
// // // // // // //           aria-modal="true"
// // // // // // //           tabIndex={-1}
// // // // // // //           onClick={closeLightbox}
// // // // // // //           onKeyDown={(e) => { if (e.key === "Escape") closeLightbox(); }}
// // // // // // //         >
// // // // // // //           <button className="lightbox-close" aria-label="Close image preview" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>
// // // // // // //             <FaTimes size={24} />
// // // // // // //           </button>
// // // // // // //           <img src={lightboxImage} alt="Post preview" className="lightbox-image" />
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       <style>{`
// // // // // // //         .post-list.grid {
// // // // // // //           display: grid;
// // // // // // //           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// // // // // // //           gap: 24px;
// // // // // // //         }
// // // // // // //         .post-list.list {
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           gap: 24px;
// // // // // // //         }
// // // // // // //         .post-card {
// // // // // // //           background: white;
// // // // // // //           border-radius: 14px;
// // // // // // //           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
// // // // // // //           overflow: hidden;
// // // // // // //           cursor: pointer;
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// // // // // // //           outline-offset: 3px;
// // // // // // //         }
// // // // // // //         .post-card:hover, .post-card:focus-within {
// // // // // // //           transform: translateY(-5px);
// // // // // // //           box-shadow: 0 16px 32px rgba(0,0,0,0.15);
// // // // // // //           outline: none;
// // // // // // //         }
// // // // // // //         .post-card-link {
// // // // // // //           color: inherit;
// // // // // // //           text-decoration: none;
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           height: 100%;
// // // // // // //         }
// // // // // // //         .post-image-wrapper {
// // // // // // //           position: relative;
// // // // // // //           height: 200px;
// // // // // // //           overflow: hidden;
// // // // // // //         }
// // // // // // //         .post-image {
// // // // // // //           width: 100%;
// // // // // // //           height: 100%;
// // // // // // //           object-fit: cover;
// // // // // // //           transition: transform 0.4s ease;
// // // // // // //         }
// // // // // // //         .post-card:hover .post-image,
// // // // // // //         .post-card:focus-within .post-image {
// // // // // // //           transform: scale(1.05);
// // // // // // //         }
// // // // // // //         .post-image-placeholder {
// // // // // // //           height: 200px;
// // // // // // //           display: flex;
// // // // // // //           justify-content: center;
// // // // // // //           align-items: center;
// // // // // // //           font-style: italic;
// // // // // // //           background-color: #f0f0f0;
// // // // // // //           color: #888;
// // // // // // //         }
// // // // // // //         .badge-new {
// // // // // // //           position: absolute;
// // // // // // //           top: 8px;
// // // // // // //           right: 8px;
// // // // // // //           background-color: #e02424;
// // // // // // //           color: white;
// // // // // // //           padding: 0.25em 0.5em;
// // // // // // //           border-radius: 4px;
// // // // // // //           font-weight: 700;
// // // // // // //           font-size: 0.75rem;
// // // // // // //           user-select: none;
// // // // // // //         }
// // // // // // //         .post-content-wrapper {
// // // // // // //           padding: 1rem 1.5rem;
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           flex-grow: 1;
// // // // // // //         }
// // // // // // //         .post-title {
// // // // // // //           font-weight: 700;
// // // // // // //           font-size: 1.3rem;
// // // // // // //           margin: 0 0 0.5rem 0;
// // // // // // //           color: #222;
// // // // // // //         }
// // // // // // //         .post-excerpt {
// // // // // // //           font-size: 1rem;
// // // // // // //           color: #555;
// // // // // // //           flex-grow: 1;
// // // // // // //           line-height: 1.5;
// // // // // // //           max-height: 4.5rem;
// // // // // // //           overflow: hidden;
// // // // // // //           position: relative;
// // // // // // //           transition: max-height 0.3s ease;
// // // // // // //         }
// // // // // // //         .toggle-excerpt {
// // // // // // //           background: none;
// // // // // // //           border: none;
// // // // // // //           color: #2563eb;
// // // // // // //           font-weight: 600;
// // // // // // //           cursor: pointer;
// // // // // // //           padding: 4px 0;
// // // // // // //           align-self: flex-start;
// // // // // // //           font-size: 0.9rem;
// // // // // // //         }
// // // // // // //         .post-meta {
// // // // // // //           display: flex;
// // // // // // //           flex-wrap: wrap;
// // // // // // //           gap: 14px;
// // // // // // //           margin-top: 1rem;
// // // // // // //           font-size: 0.875rem;
// // // // // // //           color: #777;
// // // // // // //           font-weight: 600;
// // // // // // //           align-items: center;
// // // // // // //         }
// // // // // // //         .meta-item {
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 6px;
// // // // // // //           user-select: none;
// // // // // // //         }
// // // // // // //         .meta-item.category {
// // // // // // //           color: #6278f7;
// // // // // // //         }
// // // // // // //         .meta-item.author {
// // // // // // //           color: #e07b39;
// // // // // // //         }
// // // // // // //         .meta-item.reading-time {
// // // // // // //           color: #38a169;
// // // // // // //         }
// // // // // // //         .meta-item.date {
// // // // // // //           color: #5a5a5a;
// // // // // // //           font-style: italic;
// // // // // // //         }
// // // // // // //         .meta-item.share-button {
// // // // // // //           background: none;
// // // // // // //           border: none;
// // // // // // //           color: #2563eb;
// // // // // // //           cursor: pointer;
// // // // // // //           padding: 0;
// // // // // // //           font-size: 1.2rem;
// // // // // // //         }
// // // // // // //         .post-tags {
// // // // // // //           margin-top: 12px;
// // // // // // //           display: flex;
// // // // // // //           flex-wrap: wrap;
// // // // // // //           gap: 8px;
// // // // // // //         }
// // // // // // //         .tag-link {
// // // // // // //           background: #e0e7ff;
// // // // // // //           color: #3730a3;
// // // // // // //           text-decoration: none;
// // // // // // //           padding: 0.25em 0.5em;
// // // // // // //           border-radius: 6px;
// // // // // // //           font-size: 0.85rem;
// // // // // // //           transition: background-color 0.2s ease;
// // // // // // //         }
// // // // // // //         .tag-link:hover,
// // // // // // //         .tag-link:focus-visible {
// // // // // // //           background-color: #c7d2fe;
// // // // // // //           outline: none;
// // // // // // //         }
// // // // // // //         /* Lightbox */
// // // // // // //         .lightbox-overlay {
// // // // // // //           position: fixed;
// // // // // // //           inset: 0;
// // // // // // //           background: rgba(0,0,0,0.8);
// // // // // // //           display: flex;
// // // // // // //           justify-content: center;
// // // // // // //           align-items: center;
// // // // // // //           z-index: 1000;
// // // // // // //         }
// // // // // // //         .lightbox-image {
// // // // // // //           max-width: 90vw;
// // // // // // //           max-height: 90vh;
// // // // // // //           border-radius: 12px;
// // // // // // //           box-shadow: 0 8px 40px rgba(0,0,0,0.7);
// // // // // // //         }
// // // // // // //         .lightbox-close {
// // // // // // //           position: absolute;
// // // // // // //           top: 24px;
// // // // // // //           right: 24px;
// // // // // // //           background: none;
// // // // // // //           border: none;
// // // // // // //           color: white;
// // // // // // //           font-size: 2rem;
// // // // // // //           cursor: pointer;
// // // // // // //           z-index: 1100;
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //         }
// // // // // // //         .lightbox-close:hover,
// // // // // // //         .lightbox-close:focus-visible {
// // // // // // //           color: #f87171;
// // // // // // //           outline: none;
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // PostList.propTypes = {
// // // // // // //   posts: PropTypes.array.isRequired,
// // // // // // //   layout: PropTypes.oneOf(["grid", "list"]),
// // // // // // // };

// // // // // // // export default PostList;




// // // // // // import React, { useState } from "react";
// // // // // // import PropTypes from "prop-types";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import { FaClock, FaUser, FaTag, FaShareAlt, FaTimes } from "react-icons/fa";

// // // // // // // Utility to format relative time
// // // // // // function timeAgo(dateStr) {
// // // // // //   const date = new Date(dateStr);
// // // // // //   const seconds = Math.floor((new Date() - date) / 1000);
// // // // // //   if (seconds < 60) return "Just now";
// // // // // //   if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
// // // // // //   if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
// // // // // //   if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
// // // // // //   return date.toLocaleDateString();
// // // // // // }

// // // // // // const PostList = ({ posts, layout = "list" }) => {
// // // // // //   const [expanded, setExpanded] = useState({});
// // // // // //   const [lightboxImage, setLightboxImage] = useState(null);

// // // // // //   const toggleExcerpt = (id) => {
// // // // // //     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
// // // // // //   };

// // // // // //   const openLightbox = (src) => {
// // // // // //     setLightboxImage(src);
// // // // // //   };

// // // // // //   const closeLightbox = () => setLightboxImage(null);

// // // // // //   if (!posts || posts.length === 0)
// // // // // //     return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

// // // // // //   return (
// // // // // //     <>
// // // // // //       <div className={`post-list ${layout}`}>
// // // // // //         {posts.map((post) => {
// // // // // //           const isNew =
// // // // // //             post.publishedAt && new Date() - new Date(post.publishedAt) < 7 * 24 * 3600 * 1000;
// // // // // //           const isExpanded = !!expanded[post._id];
// // // // // //           const excerpt = isExpanded
// // // // // //             ? post.excerpt || ""
// // // // // //             : post.excerpt?.slice(0, 150) + (post.excerpt?.length > 150 ? "..." : "");

// // // // // //           return (
// // // // // //             <article
// // // // // //               key={post._id}
// // // // // //               className="post-card"
// // // // // //               tabIndex={0}
// // // // // //               aria-labelledby={`post-title-${post._id}`}
// // // // // //               role="article"
// // // // // //               aria-describedby={`post-excerpt-${post._id}`}
// // // // // //             >
// // // // // //               <Link
// // // // // //                 to={`/post/${post.slug}`}
// // // // // //                 className="post-card-link"
// // // // // //                 aria-label={`Read full article: ${post.title}`}
// // // // // //               >
// // // // // //                 <div
// // // // // //                   className="post-image-wrapper"
// // // // // //                   onClick={(e) => {
// // // // // //                     e.preventDefault();
// // // // // //                     openLightbox(post.cover);
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {post.cover ? (
// // // // // //                     <img src={post.cover} alt={post.title} loading="lazy" className="post-image" />
// // // // // //                   ) : (
// // // // // //                     <div className="post-image-placeholder">No Image</div>
// // // // // //                   )}
// // // // // //                   {isNew && (
// // // // // //                     <span className="badge-new" aria-label="New Post">
// // // // // //                       New
// // // // // //                     </span>
// // // // // //                   )}
// // // // // //                 </div>

// // // // // //                 <div className="post-content-wrapper">
// // // // // //                   <h3 id={`post-title-${post._id}`} className="post-title">
// // // // // //                     {post.title}
// // // // // //                   </h3>
// // // // // //                   <p id={`post-excerpt-${post._id}`} className="post-excerpt">
// // // // // //                     {excerpt}
// // // // // //                   </p>
// // // // // //                   {post.excerpt && post.excerpt.length > 150 && (
// // // // // //                     <button
// // // // // //                       className="toggle-excerpt"
// // // // // //                       onClick={(e) => {
// // // // // //                         e.preventDefault();
// // // // // //                         toggleExcerpt(post._id);
// // // // // //                       }}
// // // // // //                       aria-expanded={isExpanded}
// // // // // //                       aria-controls={`post-excerpt-${post._id}`}
// // // // // //                     >
// // // // // //                       {isExpanded ? "Show Less" : "Read More"}
// // // // // //                     </button>
// // // // // //                   )}

// // // // // //                   <div className="post-meta">
// // // // // //                     <span
// // // // // //                       className="meta-item category"
// // // // // //                       title={`Category: ${post.category?.name || "Uncategorized"}`}
// // // // // //                     >
// // // // // //                       <FaTag aria-hidden="true" /> {post.category?.name || "Uncategorized"}
// // // // // //                     </span>
// // // // // //                     <span
// // // // // //                       className="meta-item author"
// // // // // //                       title={`Author: ${post.author?.name || "Anonymous"}`}
// // // // // //                     >
// // // // // //                       <FaUser aria-hidden="true" /> {post.author?.name || "Anonymous"}
// // // // // //                     </span>
// // // // // //                     <span className="meta-item reading-time" title="Estimated reading time">
// // // // // //                       <FaClock aria-hidden="true" />{" "}
// // // // // //                       {post.content
// // // // // //                         ? `${Math.ceil(post.content.split(/\s+/).length / 200)} min read`
// // // // // //                         : "N/A"}
// // // // // //                     </span>
// // // // // //                     <span
// // // // // //                       className="meta-item date"
// // // // // //                       title={`Published: ${
// // // // // //                         post.publishedAt ? new Date(post.publishedAt).toLocaleString() : ""
// // // // // //                       }`}
// // // // // //                     >
// // // // // //                       {post.publishedAt ? timeAgo(post.publishedAt) : ""}
// // // // // //                     </span>
// // // // // //                     <button
// // // // // //                       className="meta-item share-button"
// // // // // //                       aria-label="Share post"
// // // // // //                       onClick={(e) => {
// // // // // //                         e.preventDefault();
// // // // // //                         navigator.clipboard.writeText(window.location.origin + `/posts/${post.slug}`);
// // // // // //                         alert("Post URL copied to clipboard!");
// // // // // //                       }}
// // // // // //                       type="button"
// // // // // //                     >
// // // // // //                       <FaShareAlt />
// // // // // //                     </button>
// // // // // //                   </div>

// // // // // //                   {/* Render tags if available */}
// // // // // //                   {/* {post.tags && post.tags.length > 0 && (
// // // // // //                     <div className="post-tags" aria-label="Post Tags">
// // // // // //                       {post.tags.map((tag) => (
// // // // // //                         <Link
// // // // // //                           key={tag._id || tag}
// // // // // //                           to={`/tag/${tag.slug || tag}`}
// // // // // //                           className="tag-link"
// // // // // //                         >
// // // // // //                           #{tag.name || tag}
// // // // // //                         </Link>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   )} */}
// // // // // //                   {post.tags && post.tags.length > 0 && (
// // // // // //   <div className="post-tags" aria-label="Post Tags">
// // // // // //     {post.tags.map((tag) => (
// // // // // //       <Link
// // // // // //         key={tag._id || tag}
// // // // // //         to={`/tag/${tag.slug || tag}`}
// // // // // //         className="tag-link"
// // // // // //       >
// // // // // //         {`#${tag.name || tag}`}
// // // // // //       </Link>
// // // // // //     ))}
// // // // // //   </div>
// // // // // // )}

// // // // // //                 </div>
// // // // // //               </Link>
// // // // // //             </article>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>

// // // // // //       {/* Lightbox modal */}
// // // // // //       {lightboxImage && (
// // // // // //         <div
// // // // // //           className="lightbox-overlay"
// // // // // //           role="dialog"
// // // // // //           aria-modal="true"
// // // // // //           tabIndex={-1}
// // // // // //           onClick={closeLightbox}
// // // // // //           onKeyDown={(e) => {
// // // // // //             if (e.key === "Escape") closeLightbox();
// // // // // //           }}
// // // // // //         >
// // // // // //           <button
// // // // // //             className="lightbox-close"
// // // // // //             aria-label="Close image preview"
// // // // // //             onClick={(e) => {
// // // // // //               e.stopPropagation();
// // // // // //               closeLightbox();
// // // // // //             }}
// // // // // //           >
// // // // // //             <FaTimes size={24} />
// // // // // //           </button>
// // // // // //           <img src={lightboxImage} alt="Post preview" className="lightbox-image" />
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <style>{`
// // // // // //         .post-list.grid {
// // // // // //           display: grid;
// // // // // //           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// // // // // //           gap: 24px;
// // // // // //         }
// // // // // //         .post-list.list {
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           gap: 24px;
// // // // // //         }
// // // // // //         .post-card {
// // // // // //           background: white;
// // // // // //           border-radius: 14px;
// // // // // //           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
// // // // // //           overflow: hidden;
// // // // // //           cursor: pointer;
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// // // // // //           outline-offset: 3px;
// // // // // //         }
// // // // // //         .post-card:hover, .post-card:focus-within {
// // // // // //           transform: translateY(-5px);
// // // // // //           box-shadow: 0 16px 32px rgba(0,0,0,0.15);
// // // // // //           outline: none;
// // // // // //         }
// // // // // //         .post-card-link {
// // // // // //           color: inherit;
// // // // // //           text-decoration: none;
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           height: 100%;
// // // // // //         }
// // // // // //         .post-image-wrapper {
// // // // // //           position: relative;
// // // // // //           height: 200px;
// // // // // //           overflow: hidden;
// // // // // //         }
// // // // // //         .post-image {
// // // // // //           width: 100%;
// // // // // //           height: 100%;
// // // // // //           object-fit: cover;
// // // // // //           transition: transform 0.4s ease;
// // // // // //         }
// // // // // //         .post-card:hover .post-image,
// // // // // //         .post-card:focus-within .post-image {
// // // // // //           transform: scale(1.05);
// // // // // //         }
// // // // // //         .post-image-placeholder {
// // // // // //           height: 200px;
// // // // // //           display: flex;
// // // // // //           justify-content: center;
// // // // // //           align-items: center;
// // // // // //           font-style: italic;
// // // // // //           background-color: #f0f0f0;
// // // // // //           color: #888;
// // // // // //         }
// // // // // //         .badge-new {
// // // // // //           position: absolute;
// // // // // //           top: 8px;
// // // // // //           right: 8px;
// // // // // //           background-color: #e02424;
// // // // // //           color: white;
// // // // // //           padding: 0.25em 0.5em;
// // // // // //           border-radius: 4px;
// // // // // //           font-weight: 700;
// // // // // //           font-size: 0.75rem;
// // // // // //           user-select: none;
// // // // // //         }
// // // // // //         .post-content-wrapper {
// // // // // //           padding: 1rem 1.5rem;
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           flex-grow: 1;
// // // // // //         }
// // // // // //         .post-title {
// // // // // //           font-weight: 700;
// // // // // //           font-size: 1.3rem;
// // // // // //           margin: 0 0 0.5rem 0;
// // // // // //           color: #222;
// // // // // //         }
// // // // // //         .post-excerpt {
// // // // // //           font-size: 1rem;
// // // // // //           color: #555;
// // // // // //           flex-grow: 1;
// // // // // //           line-height: 1.5;
// // // // // //           max-height: 4.5rem;
// // // // // //           overflow: hidden;
// // // // // //           position: relative;
// // // // // //           transition: max-height 0.3s ease;
// // // // // //         }
// // // // // //         .toggle-excerpt {
// // // // // //           background: none;
// // // // // //           border: none;
// // // // // //           color: #2563eb;
// // // // // //           font-weight: 600;
// // // // // //           cursor: pointer;
// // // // // //           padding: 4px 0;
// // // // // //           align-self: flex-start;
// // // // // //           font-size: 0.9rem;
// // // // // //         }
// // // // // //         .post-meta {
// // // // // //           display: flex;
// // // // // //           flex-wrap: wrap;
// // // // // //           gap: 14px;
// // // // // //           margin-top: 1rem;
// // // // // //           font-size: 0.875rem;
// // // // // //           color: #777;
// // // // // //           font-weight: 600;
// // // // // //           align-items: center;
// // // // // //         }
// // // // // //         .meta-item {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           gap: 6px;
// // // // // //           user-select: none;
// // // // // //         }
// // // // // //         .meta-item.category {
// // // // // //           color: #6278f7;
// // // // // //         }
// // // // // //         .meta-item.author {
// // // // // //           color: #e07b39;
// // // // // //         }
// // // // // //         .meta-item.reading-time {
// // // // // //           color: #38a169;
// // // // // //         }
// // // // // //         .meta-item.date {
// // // // // //           color: #5a5a5a;
// // // // // //           font-style: italic;
// // // // // //         }
// // // // // //         .meta-item.share-button {
// // // // // //           background: none;
// // // // // //           border: none;
// // // // // //           color: #2563eb;
// // // // // //           cursor: pointer;
// // // // // //           padding: 0;
// // // // // //           font-size: 1.2rem;
// // // // // //         }
// // // // // //         .post-tags {
// // // // // //           margin-top: 12px;
// // // // // //           display: flex;
// // // // // //           flex-wrap: wrap;
// // // // // //           gap: 8px;
// // // // // //         }
// // // // // //         .tag-link {
// // // // // //           background: #e0e7ff;
// // // // // //           color: #3730a3;
// // // // // //           text-decoration: none;
// // // // // //           padding: 0.25em 0.5em;
// // // // // //           border-radius: 6px;
// // // // // //           font-size: 0.85rem;
// // // // // //           transition: background-color 0.2s ease;
// // // // // //         }
// // // // // //         .tag-link:hover,
// // // // // //         .tag-link:focus-visible {
// // // // // //           background-color: #c7d2fe;
// // // // // //           outline: none;
// // // // // //         }
// // // // // //         /* Lightbox */
// // // // // //         .lightbox-overlay {
// // // // // //           position: fixed;
// // // // // //           inset: 0;
// // // // // //           background: rgba(0,0,0,0.8);
// // // // // //           display: flex;
// // // // // //           justify-content: center;
// // // // // //           align-items: center;
// // // // // //           z-index: 1000;
// // // // // //         }
// // // // // //         .lightbox-image {
// // // // // //           max-width: 90vw;
// // // // // //           max-height: 90vh;
// // // // // //           border-radius: 12px;
// // // // // //           box-shadow: 0 8px 40px rgba(0,0,0,0.7);
// // // // // //         }
// // // // // //         .lightbox-close {
// // // // // //           position: absolute;
// // // // // //           top: 24px;
// // // // // //           right: 24px;
// // // // // //           background: none;
// // // // // //           border: none;
// // // // // //           color: white;
// // // // // //           font-size: 2rem;
// // // // // //           cursor: pointer;
// // // // // //           z-index: 1100;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //         }
// // // // // //         .lightbox-close:hover,
// // // // // //         .lightbox-close:focus-visible {
// // // // // //           color: #f87171;
// // // // // //           outline: none;
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // PostList.propTypes = {
// // // // // //   posts: PropTypes.array.isRequired,
// // // // // //   layout: PropTypes.oneOf(["grid", "list"]),
// // // // // // };

// // // // // // export default PostList;



// // // // // import React, { useState } from "react";
// // // // // import PropTypes from "prop-types";
// // // // // import { Link } from "react-router-dom";
// // // // // import { FaClock, FaUser, FaTag, FaShareAlt, FaTimes } from "react-icons/fa";

// // // // // // Utility to format relative time
// // // // // function timeAgo(dateStr) {
// // // // //   const date = new Date(dateStr);
// // // // //   const seconds = Math.floor((new Date() - date) / 1000);
// // // // //   if (seconds < 60) return "Just now";
// // // // //   if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
// // // // //   if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
// // // // //   if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
// // // // //   return date.toLocaleDateString();
// // // // // }

// // // // // const PostList = ({ posts, layout = "list" }) => {
// // // // //   const [expanded, setExpanded] = useState({});
// // // // //   const [lightboxImage, setLightboxImage] = useState(null);

// // // // //   const toggleExcerpt = (id) => {
// // // // //     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
// // // // //   };

// // // // //   const openLightbox = (src) => {
// // // // //     setLightboxImage(src);
// // // // //   };

// // // // //   const closeLightbox = () => setLightboxImage(null);

// // // // //   if (!posts || posts.length === 0)
// // // // //     return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

// // // // //   return (
// // // // //     <>
// // // // //       <div className={`post-list ${layout}`}>
// // // // //         {posts.map((post) => {
// // // // //           const isNew =
// // // // //             post.publishedAt && new Date() - new Date(post.publishedAt) < 7 * 24 * 3600 * 1000;
// // // // //           const isExpanded = !!expanded[post._id];
// // // // //           const excerpt = isExpanded
// // // // //             ? post.excerpt || ""
// // // // //             : post.excerpt?.slice(0, 150) + (post.excerpt?.length > 150 ? "..." : "");

// // // // //           return (
// // // // //             <article
// // // // //               key={post._id}
// // // // //               className="post-card"
// // // // //               tabIndex={0}
// // // // //               aria-labelledby={`post-title-${post._id}`}
// // // // //               role="article"
// // // // //               aria-describedby={`post-excerpt-${post._id}`}
// // // // //             >
// // // // //               <Link
// // // // //                 to={`/post/${post.slug}`}
// // // // //                 className="post-card-link"
// // // // //                 aria-label={`Read full article: ${post.title}`}
// // // // //               >
// // // // //                 <div
// // // // //                   className="post-image-wrapper"
// // // // //                   onClick={(e) => {
// // // // //                     e.preventDefault();
// // // // //                     openLightbox(post.cover);
// // // // //                   }}
// // // // //                 >
// // // // //                   {post.cover ? (
// // // // //                     <img src={post.cover} alt={post.title} loading="lazy" className="post-image" />
// // // // //                   ) : (
// // // // //                     <div className="post-image-placeholder">No Image</div>
// // // // //                   )}
// // // // //                   {isNew && (
// // // // //                     <span className="badge-new" aria-label="New Post">
// // // // //                       New
// // // // //                     </span>
// // // // //                   )}
// // // // //                 </div>

// // // // //                 <div className="post-content-wrapper">
// // // // //                   <h3 id={`post-title-${post._id}`} className="post-title">
// // // // //                     {post.title}
// // // // //                   </h3>
// // // // //                   <p id={`post-excerpt-${post._id}`} className="post-excerpt">
// // // // //                     {excerpt}
// // // // //                   </p>
// // // // //                   {post.excerpt && post.excerpt.length > 150 && (
// // // // //                     <button
// // // // //                       className="toggle-excerpt"
// // // // //                       onClick={(e) => {
// // // // //                         e.preventDefault();
// // // // //                         toggleExcerpt(post._id);
// // // // //                       }}
// // // // //                       aria-expanded={isExpanded}
// // // // //                       aria-controls={`post-excerpt-${post._id}`}
// // // // //                     >
// // // // //                       {isExpanded ? "Show Less" : "Read More"}
// // // // //                     </button>
// // // // //                   )}

// // // // //                   <div className="post-meta">
// // // // //                     <span
// // // // //                       className="meta-item category"
// // // // //                       title={`Category: ${post.category?.name || "Uncategorized"}`}
// // // // //                     >
// // // // //                       <FaTag aria-hidden="true" /> {post.category?.name || "Uncategorized"}
// // // // //                     </span>
// // // // //                     <span
// // // // //                       className="meta-item author"
// // // // //                       title={`Author: ${post.author?.name || "Anonymous"}`}
// // // // //                     >
// // // // //                       <FaUser aria-hidden="true" /> {post.author?.name || "Anonymous"}
// // // // //                     </span>
// // // // //                     <span className="meta-item reading-time" title="Estimated reading time">
// // // // //                       <FaClock aria-hidden="true" />{" "}
// // // // //                       {post.content
// // // // //                         ? `${Math.ceil(post.content.split(/\s+/).length / 200)} min read`
// // // // //                         : "N/A"}
// // // // //                     </span>
// // // // //                     <span
// // // // //                       className="meta-item date"
// // // // //                       title={`Published: ${
// // // // //                         post.publishedAt ? new Date(post.publishedAt).toLocaleString() : ""
// // // // //                       }`}
// // // // //                     >
// // // // //                       {post.publishedAt ? timeAgo(post.publishedAt) : ""}
// // // // //                     </span>
// // // // //                     <button
// // // // //                       className="meta-item share-button"
// // // // //                       aria-label="Share post"
// // // // //                       onClick={(e) => {
// // // // //                         e.preventDefault();
// // // // //                         navigator.clipboard.writeText(window.location.origin + `/posts/${post.slug}`);
// // // // //                         alert("Post URL copied to clipboard!");
// // // // //                       }}
// // // // //                       type="button"
// // // // //                     >
// // // // //                       <FaShareAlt />
// // // // //                     </button>
// // // // //                   </div>

// // // // //                   {/* Render tags if available, ensure no nested <a> */}
// // // // //                   {post.tags && post.tags.length > 0 && (
// // // // //                     <div className="post-tags" aria-label="Post Tags">
// // // // //                       {post.tags.map((tag) => (
// // // // //                         <Link
// // // // //                           key={tag._id || tag}
// // // // //                           to={`/tag/${tag.slug || tag}`}
// // // // //                           className="tag-link"
// // // // //                         >
// // // // //                           {`#${tag.name || tag}`}
// // // // //                         </Link>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </Link>
// // // // //             </article>
// // // // //           );
// // // // //         })}
// // // // //       </div>

// // // // //       {/* Lightbox modal */}
// // // // //       {lightboxImage && (
// // // // //         <div
// // // // //           className="lightbox-overlay"
// // // // //           role="dialog"
// // // // //           aria-modal="true"
// // // // //           tabIndex={-1}
// // // // //           onClick={closeLightbox}
// // // // //           onKeyDown={(e) => {
// // // // //             if (e.key === "Escape") closeLightbox();
// // // // //           }}
// // // // //         >
// // // // //           <button
// // // // //             className="lightbox-close"
// // // // //             aria-label="Close image preview"
// // // // //             onClick={(e) => {
// // // // //               e.stopPropagation();
// // // // //               closeLightbox();
// // // // //             }}
// // // // //           >
// // // // //             <FaTimes size={24} />
// // // // //           </button>
// // // // //           <img src={lightboxImage} alt="Post preview" className="lightbox-image" />
// // // // //         </div>
// // // // //       )}

// // // // //       <style>{`
// // // // //         .post-list.grid {
// // // // //           display: grid;
// // // // //           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// // // // //           gap: 24px;
// // // // //         }
// // // // //         .post-list.list {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           gap: 24px;
// // // // //         }
// // // // //         .post-card {
// // // // //           background: white;
// // // // //           border-radius: 14px;
// // // // //           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
// // // // //           overflow: hidden;
// // // // //           cursor: pointer;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// // // // //           outline-offset: 3px;
// // // // //         }
// // // // //         .post-card:hover, .post-card:focus-within {
// // // // //           transform: translateY(-5px);
// // // // //           box-shadow: 0 16px 32px rgba(0,0,0,0.15);
// // // // //           outline: none;
// // // // //         }
// // // // //         .post-card-link {
// // // // //           color: inherit;
// // // // //           text-decoration: none;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           height: 100%;
// // // // //         }
// // // // //         .post-image-wrapper {
// // // // //           position: relative;
// // // // //           height: 200px;
// // // // //           overflow: hidden;
// // // // //         }
// // // // //         .post-image {
// // // // //           width: 100%;
// // // // //           height: 100%;
// // // // //           object-fit: cover;
// // // // //           transition: transform 0.4s ease;
// // // // //         }
// // // // //         .post-card:hover .post-image,
// // // // //         .post-card:focus-within .post-image {
// // // // //           transform: scale(1.05);
// // // // //         }
// // // // //         .post-image-placeholder {
// // // // //           height: 200px;
// // // // //           display: flex;
// // // // //           justify-content: center;
// // // // //           align-items: center;
// // // // //           font-style: italic;
// // // // //           background-color: #f0f0f0;
// // // // //           color: #888;
// // // // //         }
// // // // //         .badge-new {
// // // // //           position: absolute;
// // // // //           top: 8px;
// // // // //           right: 8px;
// // // // //           background-color: #e02424;
// // // // //           color: white;
// // // // //           padding: 0.25em 0.5em;
// // // // //           border-radius: 4px;
// // // // //           font-weight: 700;
// // // // //           font-size: 0.75rem;
// // // // //           user-select: none;
// // // // //         }
// // // // //         .post-content-wrapper {
// // // // //           padding: 1rem 1.5rem;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           flex-grow: 1;
// // // // //         }
// // // // //         .post-title {
// // // // //           font-weight: 700;
// // // // //           font-size: 1.3rem;
// // // // //           margin: 0 0 0.5rem 0;
// // // // //           color: #222;
// // // // //         }
// // // // //         .post-excerpt {
// // // // //           font-size: 1rem;
// // // // //           color: #555;
// // // // //           flex-grow: 1;
// // // // //           line-height: 1.5;
// // // // //           max-height: 4.5rem;
// // // // //           overflow: hidden;
// // // // //           position: relative;
// // // // //           transition: max-height 0.3s ease;
// // // // //         }
// // // // //         .toggle-excerpt {
// // // // //           background: none;
// // // // //           border: none;
// // // // //           color: #2563eb;
// // // // //           font-weight: 600;
// // // // //           cursor: pointer;
// // // // //           padding: 4px 0;
// // // // //           align-self: flex-start;
// // // // //           font-size: 0.9rem;
// // // // //         }
// // // // //         .post-meta {
// // // // //           display: flex;
// // // // //           flex-wrap: wrap;
// // // // //           gap: 14px;
// // // // //           margin-top: 1rem;
// // // // //           font-size: 0.875rem;
// // // // //           color: #777;
// // // // //           font-weight: 600;
// // // // //           align-items: center;
// // // // //         }
// // // // //         .meta-item {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           gap: 6px;
// // // // //           user-select: none;
// // // // //         }
// // // // //         .meta-item.category {
// // // // //           color: #6278f7;
// // // // //         }
// // // // //         .meta-item.author {
// // // // //           color: #e07b39;
// // // // //         }
// // // // //         .meta-item.reading-time {
// // // // //           color: #38a169;
// // // // //         }
// // // // //         .meta-item.date {
// // // // //           color: #5a5a5a;
// // // // //           font-style: italic;
// // // // //         }
// // // // //         .meta-item.share-button {
// // // // //           background: none;
// // // // //           border: none;
// // // // //           color: #2563eb;
// // // // //           cursor: pointer;
// // // // //           padding: 0;
// // // // //           font-size: 1.2rem;
// // // // //         }
// // // // //         .post-tags {
// // // // //           margin-top: 12px;
// // // // //           display: flex;
// // // // //           flex-wrap: wrap;
// // // // //           gap: 8px;
// // // // //         }
// // // // //         .tag-link {
// // // // //           background: #e0e7ff;
// // // // //           color: #3730a3;
// // // // //           text-decoration: none;
// // // // //           padding: 0.25em 0.5em;
// // // // //           border-radius: 6px;
// // // // //           font-size: 0.85rem;
// // // // //           transition: background-color 0.2s ease;
// // // // //         }
// // // // //         .tag-link:hover,
// // // // //         .tag-link:focus-visible {
// // // // //           background-color: #c7d2fe;
// // // // //           outline: none;
// // // // //         }
// // // // //         /* Lightbox */
// // // // //         .lightbox-overlay {
// // // // //           position: fixed;
// // // // //           inset: 0;
// // // // //           background: rgba(0,0,0,0.8);
// // // // //           display: flex;
// // // // //           justify-content: center;
// // // // //           align-items: center;
// // // // //           z-index: 1000;
// // // // //         }
// // // // //         .lightbox-image {
// // // // //           max-width: 90vw;
// // // // //           max-height: 90vh;
// // // // //           border-radius: 12px;
// // // // //           box-shadow: 0 8px 40px rgba(0,0,0,0.7);
// // // // //         }
// // // // //         .lightbox-close {
// // // // //           position: absolute;
// // // // //           top: 24px;
// // // // //           right: 24px;
// // // // //           background: none;
// // // // //           border: none;
// // // // //           color: white;
// // // // //           font-size: 2rem;
// // // // //           cursor: pointer;
// // // // //           z-index: 1100;
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //         }
// // // // //         .lightbox-close:hover,
// // // // //         .lightbox-close:focus-visible {
// // // // //           color: #f87171;
// // // // //           outline: none;
// // // // //         }
// // // // //       `}</style>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // PostList.propTypes = {
// // // // //   posts: PropTypes.array.isRequired,
// // // // //   layout: PropTypes.oneOf(["grid", "list"]),
// // // // // };

// // // // // export default PostList;



// // // import React, { useState } from "react";
// // // import PropTypes from "prop-types";
// // // import { Link } from "react-router-dom";
// // // import { FaClock, FaUser, FaTag, FaShareAlt, FaTimes } from "react-icons/fa";

// // // // Utility to format relative time
// // // function timeAgo(dateStr) {
// // //   const date = new Date(dateStr);
// // //   const seconds = Math.floor((new Date() - date) / 1000);
// // //   if (seconds < 60) return "Just now";
// // //   if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
// // //   if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
// // //   if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
// // //   return date.toLocaleDateString();
// // // }

// // // const PostList = ({ posts, layout = "list" }) => {
// // //   const [expanded, setExpanded] = useState({});
// // //   const [lightboxImage, setLightboxImage] = useState(null);

// // //   const toggleExcerpt = (id) => {
// // //     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
// // //   };

// // //   const openLightbox = (src) => {
// // //     setLightboxImage(src);
// // //   };

// // //   const closeLightbox = () => setLightboxImage(null);

// // //   if (!posts || posts.length === 0)
// // //     return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

// // //   return (
// // //     <>
// // //       <div className={`post-list ${layout}`}>
// // //         {posts.map((post) => {
// // //           const isNew = post.publishedAt && new Date() - new Date(post.publishedAt) < 7 * 24 * 3600 * 1000;
// // //           const isExpanded = !!expanded[post._id];
// // //           const excerpt = isExpanded
// // //             ? post.excerpt || ""
// // //             : post.excerpt?.slice(0, 150) + (post.excerpt?.length > 150 ? "..." : "");

// // //           return (
// // //             <article
// // //               key={post._id}
// // //               className="post-card"
// // //               tabIndex={0}
// // //               aria-labelledby={`post-title-${post._id}`}
// // //               role="article"
// // //               aria-describedby={`post-excerpt-${post._id}`}
// // //             >
// // //               <Link
// // //                 to={`/post/${post.slug}`}
// // //                 className="post-card-link"
// // //                 aria-label={`Read full article: ${post.title}`}
// // //               >
// // //                 <div
// // //                   className="post-image-wrapper"
// // //                   onClick={(e) => {
// // //                     e.preventDefault();
// // //                     openLightbox(post.cover);
// // //                   }}
// // //                   style={{ cursor: "zoom-in" }}
// // //                 >
// // //                   {post.cover ? (
// // //                     <img src={post.cover} alt={post.title} loading="lazy" className="post-image" />
// // //                   ) : (
// // //                     <div className="post-image-placeholder">No Image</div>
// // //                   )}
// // //                   {isNew && (
// // //                     <span className="badge-new" aria-label="New Post">
// // //                       New
// // //                     </span>
// // //                   )}
// // //                 </div>

// // //                 <div className="post-content-wrapper">
// // //                   <h3 id={`post-title-${post._id}`} className="post-title">
// // //                     {post.title}
// // //                   </h3>
// // //                   <p id={`post-excerpt-${post._id}`} className="post-excerpt">
// // //                     {excerpt}
// // //                   </p>
// // //                   {post.excerpt && post.excerpt.length > 150 && (
// // //                     <button
// // //                       className="toggle-excerpt"
// // //                       onClick={(e) => {
// // //                         e.preventDefault();
// // //                         toggleExcerpt(post._id);
// // //                       }}
// // //                       aria-expanded={isExpanded}
// // //                       aria-controls={`post-excerpt-${post._id}`}
// // //                     >
// // //                       {isExpanded ? "Show Less" : "Read More"}
// // //                     </button>
// // //                   )}

// // //                   <div className="post-meta">
// // //                     <span
// // //                       className="meta-item category"
// // //                       title={`Category: ${post.category?.name || "Uncategorized"}`}
// // //                     >
// // //                       <FaTag aria-hidden="true" /> {post.category?.name || "Uncategorized"}
// // //                     </span>
// // //                     <span
// // //                       className="meta-item author"
// // //                       title={`Author: ${post.author?.name || "Anonymous"}`}
// // //                     >
// // //                       <FaUser aria-hidden="true" /> {post.author?.name || "Anonymous"}
// // //                     </span>
// // //                     <span className="meta-item reading-time" title="Estimated reading time">
// // //                       <FaClock aria-hidden="true" />{" "}
// // //                       {post.content
// // //                         ? `${Math.ceil(post.content.split(/\s+/).length / 200)} min read`
// // //                         : "N/A"}
// // //                     </span>
// // //                     <span
// // //                       className="meta-item date"
// // //                       title={`Published: ${
// // //                         post.publishedAt ? new Date(post.publishedAt).toLocaleString() : ""
// // //                       }`}
// // //                     >
// // //                       {post.publishedAt ? timeAgo(post.publishedAt) : ""}
// // //                     </span>
// // //                     <button
// // //                       className="meta-item share-button"
// // //                       aria-label="Share post"
// // //                       onClick={(e) => {
// // //                         e.preventDefault();
// // //                         navigator.clipboard.writeText(window.location.origin + `/posts/${post.slug}`);
// // //                         alert("Post URL copied to clipboard!");
// // //                       }}
// // //                       type="button"
// // //                     >
// // //                       <FaShareAlt />
// // //                     </button>
// // //                   </div>

// // //                   {/* {post.tags && post.tags.length > 0 && (
// // //                     <div className="post-tags" aria-label="Post Tags">
// // //                       {post.tags.map((tag) => (
// // //                         <Link
// // //                           key={tag._id || tag}
// // //                           to={`/tag/${tag.slug || tag}`}
// // //                           className="tag-link"
// // //                         >
// // //                           {`#${tag.name || tag}`}
// // //                         </Link>
// // //                       ))}
// // //                     </div>
// // //                   )} */}
// // //                   {post.tags && post.tags.length > 0 && (
// // //   <div className="post-tags" aria-label="Post Tags">
// // //     {post.tags.map((tag, index) => (
// // //       <Link
// // //         key={`${post._id}-tag-${tag._id || tag}-${index}`}
// // //         to={`/tag/${tag.slug || tag}`}
// // //         className="tag-link"
// // //       >
// // //         {`#${tag.name || tag}`}
// // //       </Link>
// // //     ))}
// // //   </div>
// // // )}

// // //                 </div>
// // //               </Link>
// // //             </article>
// // //           );
// // //         })}
// // //       </div>

// // //       {/* Lightbox modal */}
// // //       {lightboxImage && (
// // //         <div
// // //           className="lightbox-overlay"
// // //           role="dialog"
// // //           aria-modal="true"
// // //           tabIndex={-1}
// // //           onClick={closeLightbox}
// // //           onKeyDown={(e) => {
// // //             if (e.key === "Escape") closeLightbox();
// // //           }}
// // //         >
// // //           <button
// // //             className="lightbox-close"
// // //             aria-label="Close image preview"
// // //             onClick={(e) => {
// // //               e.stopPropagation();
// // //               closeLightbox();
// // //             }}
// // //           >
// // //             <FaTimes size={24} />
// // //           </button>
// // //           <img src={lightboxImage} alt="Post preview" className="lightbox-image" />
// // //         </div>
// // //       )}

// // //       <style>{`
// // //         .post-list.grid {
// // //           display: grid;
// // //           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// // //           gap: 24px;
// // //         }
// // //         .post-list.list {
// // //           display: flex;
// // //           flex-direction: column;
// // //           gap: 24px;
// // //         }
// // //         .post-card {
// // //           background: white;
// // //           border-radius: 14px;
// // //           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
// // //           overflow: hidden;
// // //           cursor: pointer;
// // //           display: flex;
// // //           flex-direction: column;
// // //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// // //           outline-offset: 3px;
// // //         }
// // //         .post-card:hover, .post-card:focus-within {
// // //           transform: translateY(-5px);
// // //           box-shadow: 0 16px 32px rgba(0,0,0,0.15);
// // //           outline: none;
// // //         }
// // //         .post-card-link {
// // //           color: inherit;
// // //           text-decoration: none;
// // //           display: flex;
// // //           flex-direction: column;
// // //           height: 100%;
// // //         }
// // //         .post-image-wrapper {
// // //           position: relative;
// // //           height: 200px;
// // //           overflow: hidden;
// // //         }
// // //         .post-image {
// // //           width: 100%;
// // //           height: 100%;
// // //           object-fit: cover;
// // //           transition: transform 0.4s ease;
// // //         }
// // //         .post-card:hover .post-image,
// // //         .post-card:focus-within .post-image {
// // //           transform: scale(1.05);
// // //         }
// // //         .post-image-placeholder {
// // //           height: 200px;
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //           font-style: italic;
// // //           background-color: #f0f0f0;
// // //           color: #888;
// // //         }
// // //         .badge-new {
// // //           position: absolute;
// // //           top: 8px;
// // //           right: 8px;
// // //           background-color: #e02424;
// // //           color: white;
// // //           padding: 0.25em 0.5em;
// // //           border-radius: 4px;
// // //           font-weight: 700;
// // //           font-size: 0.75rem;
// // //           user-select: none;
// // //         }
// // //         .post-content-wrapper {
// // //           padding: 1rem 1.5rem;
// // //           display: flex;
// // //           flex-direction: column;
// // //           flex-grow: 1;
// // //         }
// // //         .post-title {
// // //           font-weight: 700;
// // //           font-size: 1.3rem;
// // //           margin: 0 0 0.5rem 0;
// // //           color: #222;
// // //         }
// // //         .post-excerpt {
// // //           font-size: 1rem;
// // //           color: #555;
// // //           flex-grow: 1;
// // //           line-height: 1.5;
// // //           max-height: 4.5rem;
// // //           overflow: hidden;
// // //           position: relative;
// // //           transition: max-height 0.3s ease;
// // //         }
// // //         .toggle-excerpt {
// // //           background: none;
// // //           border: none;
// // //           color: #2563eb;
// // //           font-weight: 600;
// // //           cursor: pointer;
// // //           padding: 4px 0;
// // //           align-self: flex-start;
// // //           font-size: 0.9rem;
// // //         }
// // //         .post-meta {
// // //           display: flex;
// // //           flex-wrap: wrap;
// // //           gap: 14px;
// // //           margin-top: 1rem;
// // //           font-size: 0.875rem;
// // //           color: #777;
// // //           font-weight: 600;
// // //           align-items: center;
// // //         }
// // //         .meta-item {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 6px;
// // //           user-select: none;
// // //         }
// // //         .meta-item.category {
// // //           color: #6278f7;
// // //         }
// // //         .meta-item.author {
// // //           color: #e07b39;
// // //         }
// // //         .meta-item.reading-time {
// // //           color: #38a169;
// // //         }
// // //         .meta-item.date {
// // //           color: #5a5a5a;
// // //           font-style: italic;
// // //         }
// // //         .meta-item.share-button {
// // //           background: none;
// // //           border: none;
// // //           color: #2563eb;
// // //           cursor: pointer;
// // //           padding: 0;
// // //           font-size: 1.2rem;
// // //         }
// // //         .post-tags {
// // //           margin-top: 12px;
// // //           display: flex;
// // //           flex-wrap: wrap;
// // //           gap: 8px;
// // //         }
// // //         .tag-link {
// // //           background: #e0e7ff;
// // //           color: #3730a3;
// // //           text-decoration: none;
// // //           padding: 0.25em 0.5em;
// // //           border-radius: 6px;
// // //           font-size: 0.85rem;
// // //           transition: background-color 0.2s ease;
// // //         }
// // //         .tag-link:hover,
// // //         .tag-link:focus-visible {
// // //           background-color: #c7d2fe;
// // //           outline: none;
// // //         }
// // //         /* Lightbox */
// // //         .lightbox-overlay {
// // //           position: fixed;
// // //           inset: 0;
// // //           background: rgba(0,0,0,0.8);
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //           z-index: 1000;
// // //         }
// // //         .lightbox-image {
// // //           max-width: 90vw;
// // //           max-height: 90vh;
// // //           border-radius: 12px;
// // //           box-shadow: 0 8px 40px rgba(0,0,0,0.7);
// // //         }
// // //         .lightbox-close {
// // //           position: absolute;
// // //           top: 24px;
// // //           right: 24px;
// // //           background: none;
// // //           border: none;
// // //           color: white;
// // //           font-size: 2rem;
// // //           cursor: pointer;
// // //           z-index: 1100;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //         }
// // //         .lightbox-close:hover,
// // //         .lightbox-close:focus-visible {
// // //           color: #f87171;
// // //           outline: none;
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // };

// // // PostList.propTypes = {
// // //   posts: PropTypes.array.isRequired,
// // //   layout: PropTypes.oneOf(["grid", "list"]),
// // // };

// // // export default PostList;




// // import React, { useState } from "react";
// // import PropTypes from "prop-types";
// // import { Link } from "react-router-dom";
// // import { FaClock, FaUser, FaTag, FaShareAlt, FaTimes } from "react-icons/fa";

// // // Utility to format relative time
// // function timeAgo(dateStr) {
// //   const date = new Date(dateStr);
// //   const seconds = Math.floor((new Date() - date) / 1000);
// //   if (seconds < 60) return "Just now";
// //   if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
// //   if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
// //   if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
// //   return date.toLocaleDateString();
// // }

// // const PostList = ({ posts }) => {
// //   const [expanded, setExpanded] = useState({});
// //   const [lightboxImage, setLightboxImage] = useState(null);

// //   const toggleExcerpt = (id) => {
// //     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
// //   };

// //   const openLightbox = (src) => setLightboxImage(src);
// //   const closeLightbox = () => setLightboxImage(null);

// //   if (!posts || posts.length === 0)
// //     return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

// //   return (
// //     <>
// //       <div className="post-list-grid">
// //         {posts.map((post) => {
// //           const isNew = post.publishedAt && new Date() - new Date(post.publishedAt) < 7 * 24 * 3600 * 1000;
// //           const isExpanded = !!expanded[post._id];
// //           const excerpt = isExpanded
// //             ? post.excerpt || ""
// //             : post.excerpt?.slice(0, 120) + (post.excerpt?.length > 120 ? "..." : "");

// //           return (
// //             <article key={post._id} className="post-card">
// //               <div
// //                 className="post-image-wrapper"
// //                 onClick={() => post.cover && openLightbox(post.cover)}
// //               >
// //                 {post.cover ? (
// //                   <img src={post.cover} alt={post.title} loading="lazy" className="post-image" />
// //                 ) : (
// //                   <div className="post-image-placeholder">No Image</div>
// //                 )}
// //                 {isNew && <span className="badge-new">New</span>}
// //               </div>

// //               <div className="post-content-wrapper">
// //                 <Link to={`/post/${post.slug}`} className="post-title-link">
// //                   <h3 className="post-title">{post.title}</h3>
// //                 </Link>
// //                 <p className={`post-excerpt ${isExpanded ? "expanded" : ""}`}>{excerpt}</p>
// //                 {post.excerpt && post.excerpt.length > 120 && (
// //                   <button className="toggle-excerpt" onClick={() => toggleExcerpt(post._id)}>
// //                     {isExpanded ? "Show Less" : "Read More"}
// //                   </button>
// //                 )}
// //                 <div className="post-meta">
// //                   <span className="meta-item">
// //                     <FaTag /> {post.category?.name || "Uncategorized"}
// //                   </span>
// //                   <span className="meta-item">
// //                     <FaUser /> {post.author?.name || "Anonymous"}
// //                   </span>
// //                   <span className="meta-item">
// //                     <FaClock /> {post.content ? `${Math.ceil(post.content.split(/\s+/).length / 200)} min read` : "N/A"}
// //                   </span>
// //                   <span className="meta-item date">{post.publishedAt ? timeAgo(post.publishedAt) : ""}</span>
// //                   <button
// //                     className="meta-item share-button"
// //                     onClick={() => {
// //                       navigator.clipboard.writeText(window.location.origin + `/post/${post.slug}`);
// //                       alert("Post URL copied!");
// //                     }}
// //                   >
// //                     <FaShareAlt />
// //                   </button>
// //                 </div>
// //                 {post.tags && post.tags.length > 0 && (
// //                   <div className="post-tags">
// //                     {post.tags.map((tag, index) => (
// //                       <Link key={`${post._id}-tag-${index}`} to={`/tag/${tag.slug || tag}`} className="tag-link">
// //                         #{tag.name || tag}
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             </article>
// //           );
// //         })}
// //       </div>

// //       {/* Lightbox */}
// //       {lightboxImage && (
// //         <div className="lightbox-overlay" onClick={closeLightbox}>
// //           <button className="lightbox-close" onClick={closeLightbox}><FaTimes size={24} /></button>
// //           <img src={lightboxImage} alt="Preview" className="lightbox-image" />
// //         </div>
// //       )}

// //       <style>{`
// //         .post-list-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// //           gap: 24px;
// //         }
// //         .post-card {
// //           background: white;
// //           border-radius: 14px;
// //           overflow: hidden;
// //           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
// //           display: flex;
// //           flex-direction: column;
// //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// //           cursor: pointer;
// //         }
// //         .post-card:hover {
// //           transform: translateY(-5px);
// //           box-shadow: 0 16px 32px rgba(0,0,0,0.15);
// //         }
// //         .post-image-wrapper {
// //           position: relative;
// //           height: 180px;
// //           overflow: hidden;
// //         }
// //         .post-image {
// //           width: 100%;
// //           height: 100%;
// //           object-fit: cover;
// //           transition: transform 0.4s ease;
// //         }
// //         .post-card:hover .post-image {
// //           transform: scale(1.05);
// //         }
// //         .post-image-placeholder {
// //           height: 180px;
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           background-color: #f0f0f0;
// //           color: #888;
// //         }
// //         .badge-new {
// //           position: absolute;
// //           top: 8px;
// //           right: 8px;
// //           background-color: #e02424;
// //           color: white;
// //           padding: 0.25em 0.5em;
// //           border-radius: 4px;
// //           font-size: 0.75rem;
// //           font-weight: 700;
// //         }
// //         .post-content-wrapper {
// //           padding: 1rem 1.2rem;
// //           display: flex;
// //           flex-direction: column;
// //           flex-grow: 1;
// //         }
// //         .post-title {
// //           font-size: 1.25rem;
// //           margin: 0 0 0.5rem 0;
// //           font-weight: 700;
// //         }
// //         .post-title-link {
// //           text-decoration: none;
// //           color: #222;
// //         }
// //         .post-excerpt {
// //           font-size: 1rem;
// //           color: #555;
// //           overflow: hidden;
// //           max-height: 3rem;
// //           transition: max-height 0.3s ease;
// //         }
// //         .post-excerpt.expanded {
// //           max-height: 12rem;
// //         }
// //         .toggle-excerpt {
// //           background: none;
// //           border: none;
// //           color: #2563eb;
// //           font-weight: 600;
// //           cursor: pointer;
// //           font-size: 0.9rem;
// //           padding: 4px 0;
// //           align-self: flex-start;
// //         }
// //         .post-meta {
// //           display: flex;
// //           flex-wrap: wrap;
// //           gap: 10px;
// //           font-size: 0.875rem;
// //           color: #777;
// //           margin-top: 0.75rem;
// //         }
// //         .meta-item {
// //           display: flex;
// //           align-items: center;
// //           gap: 4px;
// //         }
// //         .meta-item.share-button {
// //           background: none;
// //           border: none;
// //           cursor: pointer;
// //           font-size: 1rem;
// //           color: #2563eb;
// //         }
// //         .post-tags {
// //           margin-top: 10px;
// //           display: flex;
// //           flex-wrap: wrap;
// //           gap: 6px;
// //         }
// //         .tag-link {
// //           background: #e0e7ff;
// //           color: #3730a3;
// //           text-decoration: none;
// //           padding: 0.25em 0.5em;
// //           border-radius: 6px;
// //           font-size: 0.85rem;
// //         }
// //         .tag-link:hover {
// //           background-color: #c7d2fe;
// //         }
// //         /* Lightbox */
// //         .lightbox-overlay {
// //           position: fixed;
// //           inset: 0;
// //           background: rgba(0,0,0,0.8);
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           z-index: 1000;
// //         }
// //         .lightbox-image {
// //           max-width: 90vw;
// //           max-height: 90vh;
// //           border-radius: 12px;
// //           box-shadow: 0 8px 40px rgba(0,0,0,0.7);
// //         }
// //         .lightbox-close {
// //           position: absolute;
// //           top: 24px;
// //           right: 24px;
// //           background: none;
// //           border: none;
// //           color: white;
// //           font-size: 2rem;
// //           cursor: pointer;
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // PostList.propTypes = {
// //   posts: PropTypes.array.isRequired,
// // };

// // export default PostList;



// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { FaClock, FaUser, FaTag, FaShareAlt, FaTimes } from "react-icons/fa";

// // Format relative time
// function timeAgo(dateStr) {
//   const date = new Date(dateStr);
//   const seconds = Math.floor((new Date() - date) / 1000);
//   if (seconds < 60) return "Just now";
//   if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
//   if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
//   if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
//   return date.toLocaleDateString();
// }

// const PostList = ({ posts }) => {
//   const [lightboxImage, setLightboxImage] = useState(null);

//   const openLightbox = (src) => setLightboxImage(src);
//   const closeLightbox = () => setLightboxImage(null);

//   if (!posts || posts.length === 0)
//     return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

//   return (
//     <>
//       <div className="post-list-grid">
//         {posts.map((post) => {
//           const isNew = post.publishedAt && new Date() - new Date(post.publishedAt) < 7 * 24 * 3600 * 1000;

//           return (
//             <article key={post._id} className="post-card">
//               <div
//                 className="post-image-wrapper"
//                 onClick={() => post.cover && openLightbox(post.cover)}
//               >
//                 {post.cover ? (
//                   <img src={post.cover} alt={post.title} loading="lazy" className="post-image" />
//                 ) : (
//                   <div className="post-image-placeholder">No Image</div>
//                 )}
//                 {isNew && <span className="badge-new">New</span>}
//                 <span className="post-category">{post.category?.name || "Uncategorized"}</span>
//               </div>

//               <div className="post-content-wrapper">
//                 <Link to={`/post/${post.slug}`} className="post-title-link">
//                   <h3 className="post-title">{post.title}</h3>
//                 </Link>
//                 <div className="post-meta">
//                   <span className="meta-item"><FaUser /> {post.author?.name || "Anonymous"}</span>
//                   <span className="meta-item"><FaClock /> {post.content ? `${Math.ceil(post.content.split(/\s+/).length / 200)} min read` : "N/A"}</span>
//                   <span className="meta-item date">{post.publishedAt ? timeAgo(post.publishedAt) : ""}</span>
//                   <button
//                     className="meta-item share-button"
//                     onClick={() => {
//                       navigator.clipboard.writeText(window.location.origin + `/post/${post.slug}`);
//                       alert("Post URL copied!");
//                     }}
//                   >
//                     <FaShareAlt />
//                   </button>
//                 </div>
//               </div>
//             </article>
//           );
//         })}
//       </div>

//       {lightboxImage && (
//         <div className="lightbox-overlay" onClick={closeLightbox}>
//           <button className="lightbox-close" onClick={closeLightbox}><FaTimes size={24} /></button>
//           <img src={lightboxImage} alt="Preview" className="lightbox-image" />
//         </div>
//       )}

//       <style>{`
//         .post-list-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 24px;
//         }
//         .post-card {
//           background: white;
//           border-radius: 12px;
//           overflow: hidden;
//           cursor: pointer;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           display: flex;
//           flex-direction: column;
//         }
//         .post-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 16px 32px rgba(0,0,0,0.15);
//         }
//         .post-image-wrapper {
//           position: relative;
//           height: 220px;
//           overflow: hidden;
//         }
//         .post-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.4s ease;
//         }
//         .post-card:hover .post-image {
//           transform: scale(1.05);
//         }
//         .badge-new {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           background-color: #e02424;
//           color: white;
//           padding: 0.25em 0.5em;
//           border-radius: 4px;
//           font-size: 0.75rem;
//           font-weight: 700;
//         }
//         .post-category {
//           position: absolute;
//           bottom: 10px;
//           left: 10px;
//           background-color: rgba(255,0,0,0.8);
//           color: white;
//           padding: 0.25em 0.5em;
//           border-radius: 4px;
//           font-size: 0.8rem;
//           font-weight: 600;
//         }
//         .post-content-wrapper {
//           padding: 1rem 1.2rem;
//           display: flex;
//           flex-direction: column;
//           flex-grow: 1;
//         }
//         .post-title {
//           font-size: 1.2rem;
//           font-weight: 700;
//           margin: 0 0 0.5rem 0;
//           color: #111;
//         }
//         .post-title-link { text-decoration: none; color: inherit; }
//         .post-meta {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//           font-size: 0.85rem;
//           color: #555;
//           margin-top: auto;
//         }
//         .meta-item { display: flex; align-items: center; gap: 4px; }
//         .meta-item.share-button { background: none; border: none; cursor: pointer; color: #2563eb; }
//         /* Lightbox */
//         .lightbox-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.8);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 1000;
//         }
//         .lightbox-image {
//           max-width: 90vw;
//           max-height: 90vh;
//           border-radius: 12px;
//           box-shadow: 0 8px 40px rgba(0,0,0,0.7);
//         }
//         .lightbox-close {
//           position: absolute;
//           top: 24px;
//           right: 24px;
//           background: none;
//           border: none;
//           color: white;
//           font-size: 2rem;
//           cursor: pointer;
//         }
//       `}</style>
//     </>
//   );
// };

// PostList.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

// export default PostList;


import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaClock, FaUser, FaShareAlt, FaTimes } from "react-icons/fa";

function timeAgo(dateStr) {
  const date = new Date(dateStr);
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
  return date.toLocaleDateString();
}

const PostList = ({ posts }) => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  if (!posts || posts.length === 0)
    return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

  return (
    <>
      <div className="post-list-grid">
        {posts.map((post) => {
          const isNew = post.publishedAt && new Date() - new Date(post.publishedAt) < 7 * 24 * 3600 * 1000;

          return (
            <article key={post._id} className="post-card">
              <div
                className="post-image-wrapper"
                onClick={() => post.cover && openLightbox(post.cover)}
              >
                {post.cover ? (
                  <img src={post.cover} alt={post.title} loading="lazy" className="post-image" />
                ) : (
                  <div className="post-image-placeholder">No Image</div>
                )}
                {isNew && <span className="badge-new">New</span>}
                <span className="post-category">{post.category?.name || "Uncategorized"}</span>
              </div>

              <div className="post-content-wrapper">
                <Link to={`/post/${post.slug}`} className="post-title-link">
                  <h3 className="post-title">{post.title}</h3>
                </Link>
                <div className="post-meta">
                  <span className="meta-item"><FaUser /> {post.author?.name || "Anonymous"}</span>
                  <span className="meta-item"><FaClock /> {post.content ? `${Math.ceil(post.content.split(/\s+/).length / 200)} min read` : "N/A"}</span>
                  <span className="meta-item date">{post.publishedAt ? timeAgo(post.publishedAt) : ""}</span>
                  <button
                    className="meta-item share-button"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.origin + `/post/${post.slug}`);
                      alert("Post URL copied!");
                    }}
                  >
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}><FaTimes /></button>
          <img src={lightboxImage} alt="Preview" className="lightbox-image" />
        </div>
      )}

      <style>{`
        .post-list-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }
        .post-card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
        }
        .post-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(0,0,0,0.18);
        }
        .post-image-wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .post-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .post-card:hover .post-image {
          transform: scale(1.08);
        }
        .badge-new {
          position: absolute;
          top: 12px;
          right: 12px;
          background-color: #e02424;
          color: white;
          padding: 0.3em 0.6em;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .post-category {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background-color: rgba(0,0,0,0.7);
          color: #fff;
          padding: 0.3em 0.6em;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .post-content-wrapper {
          padding: 1rem 1.2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .post-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.6rem 0;
          color: #111;
          line-height: 1.3;
        }
        .post-title-link { text-decoration: none; color: inherit; }
        .post-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          font-size: 0.88rem;
          color: #555;
          margin-top: auto;
        }
        .meta-item { display: flex; align-items: center; gap: 6px; }
        .meta-item.share-button { background: none; border: none; cursor: pointer; color: #2563eb; transition: color 0.2s ease; }
        .meta-item.share-button:hover { color: #1d4ed8; }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .lightbox-image {
          max-width: 92vw;
          max-height: 92vh;
          border-radius: 12px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.7);
        }
        .lightbox-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .post-list-grid { grid-template-columns: 1fr; }
          .post-image-wrapper { height: 200px; }
        }
      `}</style>
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
