// // // // // import React, { useEffect, useState } from "react";
// // // // // import { Link } from "react-router-dom";

// // // // // const TrendingPost = () => {
// // // // //   const [post, setPost] = useState(null);

// // // // //   useEffect(() => {
// // // // //     fetch("http://localhost:4000/api/posts/trending/latest")
// // // // //       .then(res => res.json())
// // // // //       .then(setPost)
// // // // //       .catch(() => setPost(null));
// // // // //   }, []);

// // // // //   if (!post?._id) return null;

// // // // //   return (
// // // // //     <section className="trending-post">
// // // // //       <h2>Trending Now</h2>
// // // // //       <Link to={`/post/${post.slug}`} className="trending-card" aria-label={`Read trending post: ${post.title}`}>
// // // // //         <img src={post.cover || "/placeholder.jpg"} alt={post.title} loading="lazy" />
// // // // //         <div className="details">
// // // // //           <h3>{post.title}</h3>
// // // // //           <p>{post.excerpt?.slice(0, 120)}...</p>
// // // // //         </div>
// // // // //       </Link>

// // // // //       <style>{`
// // // // //         .trending-post {
// // // // //           max-width: 1100px;
// // // // //           margin: 2rem auto 3rem;
// // // // //           background: #eef2ff;
// // // // //           border-radius: 16px;
// // // // //           padding: 1.5rem;
// // // // //           box-shadow: 0 6px 22px rgb(67 56 202 / 0.25);
// // // // //         }
// // // // //         .trending-post h2 {
// // // // //           margin-bottom: 1.2rem;
// // // // //           color: #4338ca;
// // // // //           font-weight: 700;
// // // // //           font-size: 1.7rem;
// // // // //         }
// // // // //         .trending-card {
// // // // //           display: flex;
// // // // //           gap: 1.5rem;
// // // // //           text-decoration: none;
// // // // //           color: #1e293b;
// // // // //           border-radius: 12px;
// // // // //           overflow: hidden;
// // // // //         }
// // // // //         .trending-card img {
// // // // //           width: 280px;
// // // // //           height: 180px;
// // // // //           object-fit: cover;
// // // // //           border-radius: 12px;
// // // // //           box-shadow: 0 8px 24px rgb(67 56 202 / 0.25);
// // // // //           flex-shrink: 0;
// // // // //           transition: transform 0.3s ease;
// // // // //         }
// // // // //         .trending-card:hover img, .trending-card:focus-visible img {
// // // // //           transform: scale(1.05);
// // // // //         }
// // // // //         .details h3 {
// // // // //           margin: 0 0 0.8rem;
// // // // //           font-weight: 800;
// // // // //           font-size: 1.9rem;
// // // // //         }
// // // // //         .details p {
// // // // //           font-size: 1.1rem;
// // // // //           color: #4b5563;
// // // // //           line-height: 1.4;
// // // // //         }
// // // // //         @media (max-width: 768px) {
// // // // //           .trending-card {
// // // // //             flex-direction: column;
// // // // //           }
// // // // //           .trending-card img {
// // // // //             width: 100%;
// // // // //             height: 160px;
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default TrendingPost;



// // // // import React, { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";

// // // // const TrendingPost = () => {
// // // //   const [post, setPost] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("token"); // Adjust based on your auth implementation

// // // //     if (!token) {
// // // //       setError("User not authenticated");
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     fetch("http://localhost:4000/api/posts/trending/latest", {
// // // //       headers: {
// // // //         Authorization: `Bearer ${token}`,
// // // //       },
// // // //     })
// // // //       .then((res) => {
// // // //         if (!res.ok) {
// // // //           if (res.status === 401) throw new Error("Unauthorized access - please log in.");
// // // //           throw new Error("Failed to fetch trending post");
// // // //         }
// // // //         return res.json();
// // // //       })
// // // //       .then((data) => {
// // // //         setPost(data && Object.keys(data).length > 0 ? data : null);
// // // //         setLoading(false);
// // // //       })
// // // //       .catch((err) => {
// // // //         setError(err.message);
// // // //         setLoading(false);
// // // //       });
// // // //   }, []);

// // // //   if (loading) {
// // // //     return (
// // // //       <section className="trending-post">
// // // //         <p>Loading trending post...</p>
// // // //       </section>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <section className="trending-post error">
// // // //         <p>{error}</p>
// // // //       </section>
// // // //     );
// // // //   }

// // // //   if (!post) return null;

// // // //   return (
// // // //     <section className="trending-post" aria-label="Trending post section">
// // // //       <h2>Trending Now</h2>
// // // //       <Link to={`/post/${post.slug}`} className="trending-card" aria-label={`Read trending post: ${post.title}`}>
// // // //         <img src={post.cover || "/placeholder.jpg"} alt={post.title} loading="lazy" />
// // // //         <div className="details">
// // // //           <h3>{post.title}</h3>
// // // //           <p>{post.excerpt?.slice(0, 120)}...</p>
// // // //         </div>
// // // //       </Link>

// // // //       <style>{`
// // // //         .trending-post {
// // // //           max-width: 1100px;
// // // //           margin: 2rem auto 3rem;
// // // //           background: #eef2ff;
// // // //           border-radius: 16px;
// // // //           padding: 1.5rem;
// // // //           box-shadow: 0 6px 22px rgb(67 56 202 / 0.25);
// // // //           color: #1e293b;
// // // //         }
// // // //         .trending-post.error {
// // // //           color: #dc2626;
// // // //           text-align: center;
// // // //           font-weight: 600;
// // // //           font-size: 1.1rem;
// // // //         }
// // // //         .trending-post h2 {
// // // //           margin-bottom: 1.2rem;
// // // //           color: #4338ca;
// // // //           font-weight: 700;
// // // //           font-size: 1.7rem;
// // // //         }
// // // //         .trending-card {
// // // //           display: flex;
// // // //           gap: 1.5rem;
// // // //           text-decoration: none;
// // // //           color: inherit;
// // // //           border-radius: 12px;
// // // //           overflow: hidden;
// // // //           transition: box-shadow 0.3s ease, transform 0.3s ease;
// // // //         }
// // // //         .trending-card:hover, .trending-card:focus-visible {
// // // //           box-shadow: 0 10px 40px rgba(67 56 202, 0.45);
// // // //           transform: translateY(-6px);
// // // //           outline: none;
// // // //         }
// // // //         .trending-card img {
// // // //           width: 280px;
// // // //           height: 180px;
// // // //           object-fit: cover;
// // // //           border-radius: 12px;
// // // //           flex-shrink: 0;
// // // //           box-shadow: 0 8px 24px rgba(67 56 202, 0.25);
// // // //           transition: transform 0.3s ease;
// // // //         }
// // // //         .trending-card:hover img, .trending-card:focus-visible img {
// // // //           transform: scale(1.05);
// // // //         }
// // // //         .details h3 {
// // // //           margin: 0 0 0.8rem 0;
// // // //           font-weight: 800;
// // // //           font-size: 1.9rem;
// // // //           line-height: 1.15;
// // // //         }
// // // //         .details p {
// // // //           font-size: 1.1rem;
// // // //           color: #4b5563;
// // // //           line-height: 1.4;
// // // //         }
// // // //         @media (max-width: 768px) {
// // // //           .trending-card {
// // // //             flex-direction: column;
// // // //           }
// // // //           .trending-card img {
// // // //             width: 100%;
// // // //             height: 160px;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default TrendingPost;



// // // // import React, { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";

// // // // const TrendingPost = () => {
// // // //   const [post, setPost] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("token"); // auth token

// // // //     if (!token) {
// // // //       setError("User not authenticated");
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     fetch("http://localhost:4000/api/posts/trending/latest", {
// // // //       headers: { Authorization: `Bearer ${token}` },
// // // //     })
// // // //       .then((res) => {
// // // //         if (!res.ok) {
// // // //           if (res.status === 401) throw new Error("Unauthorized access - please log in.");
// // // //           throw new Error("Failed to fetch trending post");
// // // //         }
// // // //         return res.json();
// // // //       })
// // // //       .then((data) => {
// // // //         setPost(data && Object.keys(data).length > 0 ? data : null);
// // // //         setLoading(false);
// // // //       })
// // // //       .catch((err) => {
// // // //         setError(err.message);
// // // //         setLoading(false);
// // // //       });
// // // //   }, []);

// // // //   if (loading)
// // // //     return (
// // // //       <section className="trending-post">
// // // //         <p>Loading trending post...</p>
// // // //       </section>
// // // //     );

// // // //   if (error)
// // // //     return (
// // // //       <section className="trending-post error">
// // // //         <p>{error}</p>
// // // //       </section>
// // // //     );

// // // //   if (!post) return null;

// // // //   return (
// // // //     <section className="trending-post" aria-label="Trending post section">
// // // //       <h2>Trending Now</h2>
// // // //       <Link
// // // //         to={`/post/${post.slug}`}
// // // //         className="trending-card"
// // // //         aria-label={`Read trending post: ${post.title}`}
// // // //       >
// // // //         <div className="image-wrapper">
// // // //           <img src={post.cover || "/placeholder.jpg"} alt={post.title} loading="lazy" />
// // // //           <div className="overlay">
// // // //             <h3>{post.title}</h3>
// // // //           </div>
// // // //         </div>
// // // //         <div className="content">
// // // //           <p>{post.excerpt?.slice(0, 150)}...</p>
// // // //           <span className="meta">
// // // //             {post.category?.name || "Uncategorized"} • {post.author?.name || "Anonymous"}
// // // //           </span>
// // // //         </div>
// // // //       </Link>

// // // //       <style>{`
// // // //         .trending-post {
// // // //           max-width: 1100px;
// // // //           margin: 2rem auto 3rem;
// // // //           padding: 1rem;
// // // //         }
// // // //         .trending-post h2 {
// // // //           font-size: 2rem;
// // // //           font-weight: 700;
// // // //           color: #1f2937;
// // // //           margin-bottom: 1rem;
// // // //         }
// // // //         .trending-card {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           border-radius: 16px;
// // // //           overflow: hidden;
// // // //           box-shadow: 0 10px 28px rgba(0,0,0,0.12);
// // // //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// // // //           text-decoration: none;
// // // //           color: inherit;
// // // //         }
// // // //         .trending-card:hover {
// // // //           transform: translateY(-6px);
// // // //           box-shadow: 0 16px 36px rgba(0,0,0,0.18);
// // // //         }
// // // //         .image-wrapper {
// // // //           position: relative;
// // // //           height: 250px;
// // // //           overflow: hidden;
// // // //         }
// // // //         .image-wrapper img {
// // // //           width: 100%;
// // // //           height: 100%;
// // // //           object-fit: cover;
// // // //           transition: transform 0.3s ease;
// // // //         }
// // // //         .trending-card:hover .image-wrapper img {
// // // //           transform: scale(1.05);
// // // //         }
// // // //         .overlay {
// // // //           position: absolute;
// // // //           inset: 0;
// // // //           background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0));
// // // //           display: flex;
// // // //           align-items: flex-end;
// // // //           padding: 1rem;
// // // //         }
// // // //         .overlay h3 {
// // // //           color: #fff;
// // // //           font-size: 1.6rem;
// // // //           margin: 0;
// // // //         }
// // // //         .content {
// // // //           padding: 1rem;
// // // //         }
// // // //         .content p {
// // // //           font-size: 1rem;
// // // //           color: #374151;
// // // //           margin: 0 0 0.5rem 0;
// // // //           line-height: 1.4;
// // // //         }
// // // //         .meta {
// // // //           font-size: 0.875rem;
// // // //           color: #6b7280;
// // // //         }
// // // //         @media (max-width: 768px) {
// // // //           .image-wrapper {
// // // //             height: 180px;
// // // //           }
// // // //           .overlay h3 {
// // // //             font-size: 1.3rem;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default TrendingPost;




// // // import React, { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";

// // // const TrendingPost = () => {
// // //   const [post, setPost] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const token = localStorage.getItem("token"); // auth token

// // //     fetch("http://localhost:4000/api/posts/trending/latest", {
// // //       headers: { Authorization: `Bearer ${token}` },
// // //     })
// // //       .then(res => {
// // //         if (!res.ok) throw new Error("Failed to fetch trending post");
// // //         return res.json();
// // //       })
// // //       .then(data => {
// // //         setPost(data && Object.keys(data).length > 0 ? data : null);
// // //         setLoading(false);
// // //       })
// // //       .catch(err => {
// // //         setError(err.message);
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // //   if (loading) return <p style={{ textAlign: "center", padding: "2rem" }}>Loading trending post...</p>;
// // //   if (error) return <p style={{ textAlign: "center", padding: "2rem", color: "red" }}>{error}</p>;
// // //   if (!post) return null;

// // //   return (
// // //     <section className="trending-post-home">
// // //       <h2>🔥 Trending Now</h2>
// // //       <Link to={`/post/${post.slug}`} className="trending-card">
// // //         <div className="image-wrapper">
// // //           <img src={post.cover || "/placeholder.jpg"} alt={post.title} />
// // //           <div className="overlay">
// // //             <h3>{post.title}</h3>
// // //           </div>
// // //         </div>
// // //         <div className="content">
// // //           <p>{post.excerpt?.slice(0, 200)}{post.excerpt?.length > 200 ? "..." : ""}</p>
// // //           <div className="meta">
// // //             <span>{post.category?.name || "Uncategorized"}</span> • <span>{post.author?.name || "Anonymous"}</span>
// // //           </div>
// // //         </div>
// // //       </Link>

// // //       <style>{`
// // //         .trending-post-home {
// // //           max-width: 1200px;
// // //           margin: 2rem auto 3rem;
// // //           padding: 0 1rem;
// // //         }
// // //         .trending-post-home h2 {
// // //           font-size: 2.25rem;
// // //           font-weight: 700;
// // //           margin-bottom: 1.5rem;
// // //           color: #1f2937;
// // //         }
// // //         .trending-card {
// // //           display: flex;
// // //           flex-direction: column;
// // //           border-radius: 20px;
// // //           overflow: hidden;
// // //           box-shadow: 0 14px 36px rgba(0,0,0,0.15);
// // //           text-decoration: none;
// // //           color: inherit;
// // //           transition: transform 0.35s ease, box-shadow 0.35s ease;
// // //         }
// // //         .trending-card:hover {
// // //           transform: translateY(-8px);
// // //           box-shadow: 0 22px 48px rgba(0,0,0,0.22);
// // //         }
// // //         .image-wrapper {
// // //           position: relative;
// // //           height: 420px;
// // //           overflow: hidden;
// // //         }
// // //         .image-wrapper img {
// // //           width: 100%;
// // //           height: 100%;
// // //           object-fit: cover;
// // //           transition: transform 0.4s ease;
// // //         }
// // //         .trending-card:hover .image-wrapper img {
// // //           transform: scale(1.06);
// // //         }
// // //         .overlay {
// // //           position: absolute;
// // //           inset: 0;
// // //           background: linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0));
// // //           display: flex;
// // //           align-items: flex-end;
// // //           padding: 1.5rem;
// // //         }
// // //         .overlay h3 {
// // //           color: #fff;
// // //           font-size: 2rem;
// // //           margin: 0;
// // //           line-height: 1.2;
// // //         }
// // //         .content {
// // //           padding: 1.25rem 1.5rem 1.75rem 1.5rem;
// // //           background: #fff;
// // //         }
// // //         .content p {
// // //           font-size: 1.05rem;
// // //           color: #374151;
// // //           margin: 0 0 0.75rem 0;
// // //           line-height: 1.5;
// // //         }
// // //         .meta {
// // //           font-size: 0.875rem;
// // //           color: #6b7280;
// // //           font-weight: 500;
// // //         }
// // //         @media (max-width: 1024px) {
// // //           .image-wrapper { height: 320px; }
// // //           .overlay h3 { font-size: 1.75rem; }
// // //         }
// // //         @media (max-width: 768px) {
// // //           .image-wrapper { height: 250px; }
// // //           .overlay h3 { font-size: 1.5rem; }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default TrendingPost;



// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// // const TrendingPost = ({ big }) => {
// //   const [post, setPost] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       setError("User not authenticated");
// //       setLoading(false);
// //       return;
// //     }

// //     fetch("http://localhost:4000/api/posts/trending/latest", {
// //       headers: { Authorization: `Bearer ${token}` },
// //     })
// //       .then((res) => {
// //         if (!res.ok) {
// //           if (res.status === 401) throw new Error("Unauthorized access - please log in.");
// //           throw new Error("Failed to fetch trending post");
// //         }
// //         return res.json();
// //       })
// //       .then((data) => {
// //         setPost(data && Object.keys(data).length > 0 ? data : null);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         setError(err.message);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading)
// //     return (
// //       <section className="trending-post">
// //         <p>Loading trending post...</p>
// //       </section>
// //     );

// //   if (error)
// //     return (
// //       <section className="trending-post error">
// //         <p>{error}</p>
// //       </section>
// //     );

// //   if (!post) return null;

// //   return (
// //     <section className="trending-post" aria-label="Trending post section">
// //       <Link
// //         to={`/post/${post.slug}`}
// //         className="trending-card"
// //         aria-label={`Read trending post: ${post.title}`}
// //       >
// //         <div className="image-wrapper">
// //           <img src={post.cover || "/placeholder.jpg"} alt={post.title} loading="lazy" />
// //           <div className="overlay">
// //             <h2>{post.title}</h2>
// //             <p>{post.excerpt?.slice(0, 200)}...</p>
// //             <span className="meta">
// //               {post.category?.name || "Uncategorized"} • {post.author?.name || "Anonymous"}
// //             </span>
// //           </div>
// //         </div>
// //       </Link>

// //       <style>{`
// //         .trending-post {
// //           max-width: 1200px;
// //           margin: 2rem auto 3rem;
// //           padding: 0 1rem;
// //         }
// //         .trending-card {
// //           display: block;
// //           border-radius: 16px;
// //           overflow: hidden;
// //           box-shadow: 0 12px 32px rgba(0,0,0,0.15);
// //           text-decoration: none;
// //           color: inherit;
// //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// //         }
// //         .trending-card:hover {
// //           transform: translateY(-8px);
// //           box-shadow: 0 20px 48px rgba(0,0,0,0.25);
// //         }
// //         .image-wrapper {
// //           position: relative;
// //           width: 100%;
// //           height: 400px;
// //           overflow: hidden;
// //           border-radius: 16px;
// //         }
// //         .image-wrapper img {
// //           width: 100%;
// //           height: 100%;
// //           object-fit: cover;
// //           transition: transform 0.4s ease;
// //         }
// //         .trending-card:hover img {
// //           transform: scale(1.05);
// //         }
// //         .overlay {
// //           position: absolute;
// //           inset: 0;
// //           background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0));
// //           display: flex;
// //           flex-direction: column;
// //           justify-content: flex-end;
// //           padding: 1.5rem;
// //         }
// //         .overlay h2 {
// //           font-size: 2rem;
// //           color: #fff;
// //           margin: 0 0 0.5rem 0;
// //           line-height: 1.2;
// //         }
// //         .overlay p {
// //           font-size: 1.1rem;
// //           color: #e0e0e0;
// //           margin: 0 0 0.5rem 0;
// //         }
// //         .meta {
// //           font-size: 0.9rem;
// //           color: #d1d5db;
// //           font-weight: 600;
// //         }
// //         @media (max-width: 1024px) {
// //           .image-wrapper { height: 320px; }
// //           .overlay h2 { font-size: 1.8rem; }
// //           .overlay p { font-size: 1rem; }
// //         }
// //         @media (max-width: 768px) {
// //           .image-wrapper { height: 250px; }
// //           .overlay h2 { font-size: 1.5rem; }
// //           .overlay p { font-size: 0.9rem; }
// //         }
// //         @media (max-width: 480px) {
// //           .image-wrapper { height: 200px; }
// //           .overlay h2 { font-size: 1.2rem; }
// //           .overlay p { display: none; } /* Hide excerpt on very small screens */
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default TrendingPost;





// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// // const TrendingPost = ({ big = true }) => {
// //   const [post, setPost] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token"); // auth token

// //     if (!token) {
// //       setError("User not authenticated");
// //       setLoading(false);
// //       return;
// //     }

// //     fetch("http://localhost:4000/api/posts/trending/latest", {
// //       headers: { Authorization: `Bearer ${token}` },
// //     })
// //       .then((res) => {
// //         if (!res.ok) {
// //           if (res.status === 401) throw new Error("Unauthorized access - please log in.");
// //           throw new Error("Failed to fetch trending post");
// //         }
// //         return res.json();
// //       })
// //       .then((data) => {
// //         setPost(data && Object.keys(data).length > 0 ? data : null);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         setError(err.message);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading)
// //     return (
// //       <section className="trending-post">
// //         <p>Loading trending post...</p>
// //       </section>
// //     );

// //   if (error)
// //     return (
// //       <section className="trending-post error">
// //         <p>{error}</p>
// //       </section>
// //     );

// //   if (!post) return null;

// //   return (
// //     <section className={`trending-post ${big ? "big" : ""}`} aria-label="Trending post section">
// //       <h2>🔥 Trending Now</h2>
// //       <Link
// //         to={`/post/${post.slug}`}
// //         className="trending-card"
// //         aria-label={`Read trending post: ${post.title}`}
// //       >
// //         <div className="image-wrapper">
// //           <img src={post.cover || "/placeholder.jpg"} alt={post.title} loading="lazy" />
// //           <div className="overlay">
// //             <h3>{post.title}</h3>
// //           </div>
// //         </div>
// //         <div className="content">
// //           <p>{post.excerpt?.slice(0, 180)}...</p>
// //           <span className="meta">
// //             {post.category?.name || "Uncategorized"} • {post.author?.name || "Anonymous"}
// //           </span>
// //         </div>
// //       </Link>

// //       <style>{`
// //         .trending-post {
// //           max-width: 1100px;
// //           margin: 2rem auto 3rem;
// //           padding: 1rem;
// //           transition: transform 0.3s ease;
// //         }
// //         .trending-post.big {
// //           margin-top: -80px;
// //         }
// //         .trending-post h2 {
// //           font-size: 2rem;
// //           font-weight: 700;
// //           color: #1f2937;
// //           margin-bottom: 1rem;
// //         }
// //         .trending-card {
// //           display: flex;
// //           flex-direction: column;
// //           border-radius: 16px;
// //           overflow: hidden;
// //           box-shadow: 0 12px 28px rgba(0,0,0,0.12);
// //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// //           text-decoration: none;
// //           color: inherit;
// //           background: white;
// //         }
// //         .trending-card:hover {
// //           transform: translateY(-6px);
// //           box-shadow: 0 18px 40px rgba(0,0,0,0.18);
// //         }
// //         .image-wrapper {
// //           position: relative;
// //           height: ${big ? "300px" : "220px"};
// //           overflow: hidden;
// //         }
// //         .image-wrapper img {
// //           width: 100%;
// //           height: 100%;
// //           object-fit: cover;
// //           transition: transform 0.3s ease;
// //         }
// //         .trending-card:hover .image-wrapper img {
// //           transform: scale(1.06);
// //         }
// //         .overlay {
// //           position: absolute;
// //           inset: 0;
// //           background: linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0));
// //           display: flex;
// //           align-items: flex-end;
// //           padding: 1rem;
// //         }
// //         .overlay h3 {
// //           color: #fff;
// //           font-size: ${big ? "1.8rem" : "1.4rem"};
// //           margin: 0;
// //         }
// //         .content {
// //           padding: 1rem 1.5rem;
// //         }
// //         .content p {
// //           font-size: 1rem;
// //           color: #374151;
// //           margin: 0 0 0.5rem 0;
// //           line-height: 1.5;
// //         }
// //         .meta {
// //           font-size: 0.875rem;
// //           color: #6b7280;
// //         }

// //         @media (max-width: 1024px) {
// //           .image-wrapper {
// //             height: ${big ? "250px" : "200px"};
// //           }
// //           .overlay h3 {
// //             font-size: ${big ? "1.6rem" : "1.2rem"};
// //           }
// //         }
// //         @media (max-width: 768px) {
// //           .image-wrapper {
// //             height: ${big ? "200px" : "150px"};
// //           }
// //           .overlay h3 {
// //             font-size: ${big ? "1.4rem" : "1rem"};
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default TrendingPost;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUser, FaClock, FaTag } from "react-icons/fa";

// const TrendingPost = ({ big = true }) => {
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setError("User not authenticated");
//       setLoading(false);
//       return;
//     }

//     fetch("http://localhost:4000/api/posts/trending/latest", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           if (res.status === 401) throw new Error("Unauthorized access - please log in.");
//           throw new Error("Failed to fetch trending post");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setPost(data && Object.keys(data).length > 0 ? data : null);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p style={{ textAlign: "center", padding: "2rem" }}>Loading trending post...</p>;
//   if (error) return <p style={{ textAlign: "center", padding: "2rem", color: "red" }}>{error}</p>;
//   if (!post) return null;

//   return (
//     <section className={`trending-post ${big ? "big" : ""}`}>
//       <h2>🔥 Trending Now</h2>
//       <Link to={`/post/${post.slug}`} className="trending-card">
//         <div className="image-wrapper">
//           <img src={post.cover || "/placeholder.jpg"} alt={post.title} loading="lazy" />
//           <div className="overlay">
//             <span className="category"><FaTag /> {post.category?.name || "Uncategorized"}</span>
//             <h3>{post.title}</h3>
//             <span className="meta"><FaUser /> {post.author?.name || "Anonymous"} • <FaClock /> {new Date(post.publishedAt).toLocaleDateString()}</span>
//           </div>
//         </div>
//       </Link>

//       <style>{`
//         .trending-post {
//           max-width: 1100px;
//           margin: 2rem auto 3rem;
//           padding: 1rem;
//         }
//         .trending-post h2 {
//           font-size: 2rem;
//           font-weight: 700;
//           color: #1f2937;
//           margin-bottom: 1rem;
//         }
//         .trending-card {
//           display: block;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 12px 28px rgba(0,0,0,0.12);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           text-decoration: none;
//           color: inherit;
//         }
//         .trending-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 18px 40px rgba(0,0,0,0.18);
//         }
//         .image-wrapper {
//           position: relative;
//           height: ${big ? "350px" : "220px"};
//           overflow: hidden;
//         }
//         .image-wrapper img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }
//         .trending-card:hover .image-wrapper img {
//           transform: scale(1.06);
//         }
//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0));
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-end;
//           padding: 1rem;
//           color: #fff;
//         }
//         .overlay h3 {
//           margin: 0.2rem 0;
//           font-size: ${big ? "1.8rem" : "1.4rem"};
//           font-weight: 700;
//           line-height: 1.2;
//         }
//         .overlay .category {
//           background-color: rgba(255,255,255,0.2);
//           padding: 0.2rem 0.6rem;
//           border-radius: 6px;
//           font-size: 0.85rem;
//           display: inline-flex;
//           align-items: center;
//           gap: 4px;
//           margin-bottom: 0.3rem;
//         }
//         .overlay .meta {
//           font-size: 0.85rem;
//           color: #d1d5db;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }

//         @media (max-width: 1024px) {
//           .image-wrapper { height: ${big ? "280px" : "180px"}; }
//           .overlay h3 { font-size: ${big ? "1.6rem" : "1.2rem"}; }
//         }
//         @media (max-width: 768px) {
//           .image-wrapper { height: ${big ? "220px" : "140px"}; }
//           .overlay h3 { font-size: ${big ? "1.4rem" : "1rem"}; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TrendingPost;



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
