


// // // import React, { useState } from "react";
// // // import PropTypes from "prop-types";
// // // import { Link } from "react-router-dom";
// // // import { FaClock, FaUser, FaShareAlt, FaTimes } from "react-icons/fa";

// // // function timeAgo(dateStr) {
// // //   const date = new Date(dateStr);
// // //   const seconds = Math.floor((new Date() - date) / 1000);
// // //   if (seconds < 60) return "Just now";
// // //   if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
// // //   if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
// // //   if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
// // //   return date.toLocaleDateString();
// // // }

// // // const PostList = ({ posts }) => {
// // //   const [lightboxImage, setLightboxImage] = useState(null);

// // //   const openLightbox = (src) => setLightboxImage(src);
// // //   const closeLightbox = () => setLightboxImage(null);

// // //   if (!posts || posts.length === 0)
// // //     return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

// // //   return (
// // //     <>
// // //       <div className="post-list-grid">
// // //         {posts.map((post) => {
// // //           const isNew = post.publishedAt && new Date() - new Date(post.publishedAt) < 7 * 24 * 3600 * 1000;

// // //           return (
// // //             <article key={post._id} className="post-card">
// // //               <div
// // //                 className="post-image-wrapper"
// // //                 onClick={() => post.cover && openLightbox(post.cover)}
// // //               >
// // //                 {post.cover ? (
// // //                   <img src={post.cover} alt={post.title} loading="lazy" className="post-image" />
// // //                 ) : (
// // //                   <div className="post-image-placeholder">No Image</div>
// // //                 )}
// // //                 {isNew && <span className="badge-new">New</span>}
// // //                 <span className="post-category">{post.category?.name || "Uncategorized"}</span>
// // //               </div>

// // //               <div className="post-content-wrapper">
// // //                 <Link to={`/post/${post.slug}`} className="post-title-link">
// // //                   <h3 className="post-title">{post.title}</h3>
// // //                 </Link>
// // //                 <div className="post-meta">
// // //                   <span className="meta-item"><FaUser /> {post.author?.name || "Anonymous"}</span>
// // //                   <span className="meta-item"><FaClock /> {post.content ? `${Math.ceil(post.content.split(/\s+/).length / 200)} min read` : "N/A"}</span>
// // //                   <span className="meta-item date">{post.publishedAt ? timeAgo(post.publishedAt) : ""}</span>
// // //                   <button
// // //                     className="meta-item share-button"
// // //                     onClick={() => {
// // //                       navigator.clipboard.writeText(window.location.origin + `/post/${post.slug}`);
// // //                       alert("Post URL copied!");
// // //                     }}
// // //                   >
// // //                     <FaShareAlt />
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </article>
// // //           );
// // //         })}
// // //       </div>

// // //       {lightboxImage && (
// // //         <div className="lightbox-overlay" onClick={closeLightbox}>
// // //           <button className="lightbox-close" onClick={closeLightbox}><FaTimes /></button>
// // //           <img src={lightboxImage} alt="Preview" className="lightbox-image" />
// // //         </div>
// // //       )}

// // //       <style>{`
// // //         .post-list-grid {
// // //           display: grid;
// // //           grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
// // //           gap: 28px;
// // //         }
// // //         .post-card {
// // //           background: #fff;
// // //           border-radius: 14px;
// // //           overflow: hidden;
// // //           cursor: pointer;
// // //           transition: transform 0.35s ease, box-shadow 0.35s ease;
// // //           display: flex;
// // //           flex-direction: column;
// // //         }
// // //         .post-card:hover {
// // //           transform: translateY(-6px);
// // //           box-shadow: 0 18px 36px rgba(0,0,0,0.18);
// // //         }
// // //         .post-image-wrapper {
// // //           position: relative;
// // //           height: 240px;
// // //           overflow: hidden;
// // //         }
// // //         .post-image {
// // //           width: 100%;
// // //           height: 100%;
// // //           object-fit: cover;
// // //           transition: transform 0.4s ease;
// // //         }
// // //         .post-card:hover .post-image {
// // //           transform: scale(1.08);
// // //         }
// // //         .badge-new {
// // //           position: absolute;
// // //           top: 12px;
// // //           right: 12px;
// // //           background-color: #e02424;
// // //           color: white;
// // //           padding: 0.3em 0.6em;
// // //           border-radius: 4px;
// // //           font-size: 0.75rem;
// // //           font-weight: 700;
// // //         }
// // //         .post-category {
// // //           position: absolute;
// // //           bottom: 12px;
// // //           left: 12px;
// // //           background-color: rgba(0,0,0,0.7);
// // //           color: #fff;
// // //           padding: 0.3em 0.6em;
// // //           border-radius: 4px;
// // //           font-size: 0.8rem;
// // //           font-weight: 600;
// // //         }
// // //         .post-content-wrapper {
// // //           padding: 1rem 1.2rem;
// // //           display: flex;
// // //           flex-direction: column;
// // //           flex-grow: 1;
// // //         }
// // //         .post-title {
// // //           font-size: 1.25rem;
// // //           font-weight: 700;
// // //           margin: 0 0 0.6rem 0;
// // //           color: #111;
// // //           line-height: 1.3;
// // //         }
// // //         .post-title-link { text-decoration: none; color: inherit; }
// // //         .post-meta {
// // //           display: flex;
// // //           flex-wrap: wrap;
// // //           gap: 14px;
// // //           font-size: 0.88rem;
// // //           color: #555;
// // //           margin-top: auto;
// // //         }
// // //         .meta-item { display: flex; align-items: center; gap: 6px; }
// // //         .meta-item.share-button { background: none; border: none; cursor: pointer; color: #2563eb; transition: color 0.2s ease; }
// // //         .meta-item.share-button:hover { color: #1d4ed8; }

// // //         /* Lightbox */
// // //         .lightbox-overlay {
// // //           position: fixed;
// // //           inset: 0;
// // //           background: rgba(0,0,0,0.85);
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //           z-index: 1000;
// // //         }
// // //         .lightbox-image {
// // //           max-width: 92vw;
// // //           max-height: 92vh;
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
// // //         }

// // //         /* Responsive tweaks */
// // //         @media (max-width: 768px) {
// // //           .post-list-grid { grid-template-columns: 1fr; }
// // //           .post-image-wrapper { height: 200px; }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // };

// // // PostList.propTypes = {
// // //   posts: PropTypes.array.isRequired,
// // // };

// // // export default PostList;


// // import React from "react";
// // import PropTypes from "prop-types";
// // import { Link } from "react-router-dom";

// // const PostList = ({ posts }) => {
// //   if (!posts || posts.length === 0)
// //     return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

// //   return (
// //     <div className="post-list-grid">
// //       {posts.map((post) => (
// //         <article key={post._id} className="post-card">
// //           <Link to={`/post/${post.slug}`} className="post-card-link">
// //             <div className="post-image-wrapper">
// //               <img
// //                 src={post.cover || "/placeholder.jpg"}
// //                 alt={post.title}
// //                 className="post-image"
// //                 loading="lazy"
// //               />
// //             </div>
// //             <div className="post-content-overlay">
// //               <h3 className="post-title">{post.title}</h3>
// //             </div>
// //           </Link>
// //         </article>
// //       ))}
// //     </div>
// //   );
// // };

// // PostList.propTypes = {
// //   posts: PropTypes.array.isRequired,
// // };

// // export default PostList;


// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// const PostList = ({ posts }) => {
//   if (!posts || posts.length === 0)
//     return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

//   return (
//     <div className="post-list-grid">
//       {posts.map((post) => (
//         <Link key={post._id} to={`/post/${post.slug}`} className="post-card">
//           <div className="image-wrapper">
//             <img src={post.cover || "/placeholder.jpg"} alt={post.title} loading="lazy" />
//             <div className="overlay">
//               <h3>{post.title}</h3>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// PostList.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

// export default PostList;



import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function timeAgo(dateStr) {
  const date = new Date(dateStr);
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
  return date.toLocaleDateString();
}

const PostList = ({ posts, layout = "card" }) => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  if (!posts || posts.length === 0)
    return <p style={{ textAlign: "center", padding: "2rem" }}>No posts available.</p>;

  return (
    <>
      <div className={layout === "grid" ? "post-list-grid" : "post-list-flex"}>
        {posts.map(post => {
          const isNew = post.publishedAt && new Date() - new Date(post.publishedAt) < 7 * 24 * 3600 * 1000;

          return (
            <article key={post._id} className={`post-card ${layout}`}>
              <div
                className="post-image-wrapper"
                onClick={() => post.cover && openLightbox(post.cover)}
              >
                {post.cover ? (
                  <img src={post.cover} alt={post.title} className="post-image" />
                ) : (
                  <div className="post-image-placeholder">No Image</div>
                )}
                {isNew && <span className="badge-new">New</span>}
              </div>

              <div className="post-content-wrapper">
                <Link to={`/post/${post.slug}`} className="post-title-link">
                  <h3 className="post-title">{post.title}</h3>
                </Link>
                <div className="post-meta">
                  <span className="meta-item">{post.author?.name || "Anonymous"}</span>
                  <span className="meta-item date">{post.publishedAt ? timeAgo(post.publishedAt) : ""}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <img src={lightboxImage} alt="Preview" className="lightbox-image" />
        </div>
      )}

      <style>{`
        .post-list-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1rem;
        }
        .post-list-flex {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .post-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          overflow: hidden;
          border-radius: 12px;
          background: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.15);
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
          transition: transform 0.3s ease;
        }
        .post-card:hover .post-image {
          transform: scale(1.07);
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
        .post-content-wrapper {
          padding: 1rem;
          display: flex;
          flex-direction: column;
        }
        .post-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #111;
        }
        .post-title-link { text-decoration: none; color: inherit; }
        .post-meta {
          font-size: 0.85rem;
          color: #555;
          display: flex;
          gap: 0.6rem;
        }
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
        @media (max-width: 768px) {
          .post-image-wrapper { height: 200px; }
        }
      `}</style>
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  layout: PropTypes.string,
};

export default PostList;
