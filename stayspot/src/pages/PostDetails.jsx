



// // // // import React, { useEffect, useState, useRef } from "react";
// // // // import { useParams, Link } from "react-router-dom";
// // // // import Seo from "../components/Seo.jsx";
// // // // import { Loader, ErrorState } from "../components/Loader.jsx";
// // // // import {
// // // //   FaUserAlt,
// // // //   FaCalendarAlt,
// // // //   FaClock,
// // // //   FaArrowLeft,
// // // //   FaCopy,
// // // //   FaEye,
// // // //   FaSun,
// // // //   FaMoon,
// // // //   FaFire,
// // // //   FaComments,
// // // //   FaFacebookF,
// // // //   FaTwitter,
// // // //   FaLinkedinIn,
// // // //   FaWhatsapp,
// // // // } from "react-icons/fa";

// // // // // Mock data
// // // // const MOCK_TRENDING_POST = {
// // // //   _id: "t1",
// // // //   title: "🔥 Big Tech Update That You Must Read",
// // // //   slug: "trending-tech-update",
// // // //   cover: "https://picsum.photos/600/350?grayscale",
// // // //   excerpt: "This trending post is making waves across the internet. Don’t miss out!",
// // // // };

// // // // const MOCK_RELATED_POSTS = [
// // // //   { _id: "r1", title: "Best Gadgets 2025", slug: "best-gadgets-2025" },
// // // //   { _id: "r2", title: "AI Tools That Will Blow Your Mind", slug: "ai-tools" },
// // // //   { _id: "r3", title: "Why Tech Giants Are Shifting to Green Energy", slug: "green-energy" },
// // // // ];

// // // // // Helper
// // // // const estimateReadingTime = (text) => {
// // // //   const words = text ? text.split(/\s+/).length : 0;
// // // //   return `${Math.ceil(words / 200)} min read`;
// // // // };

// // // // const PostDetails = () => {
// // // //   const { slug } = useParams();
// // // //   const [post, setPost] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [copied, setCopied] = useState(false);
// // // //   const [darkMode, setDarkMode] = useState(false);
// // // //   const [showComments, setShowComments] = useState(false);
// // // //   const scrollProgressRef = useRef(null);

// // // //   // Fetch post
// // // //   useEffect(() => {
// // // //     setLoading(true);
// // // //     fetch(`http://localhost:4000/api/posts/${slug}`)
// // // //       .then(res => { if (!res.ok) throw new Error("Post not found"); return res.json(); })
// // // //       .then(data => { setPost(data); setLoading(false); })
// // // //       .catch(e => { setError(e.message); setLoading(false); });
// // // //   }, [slug]);

// // // //   // Copy URL
// // // //   const copyLink = () => {
// // // //     navigator.clipboard.writeText(window.location.href);
// // // //     setCopied(true);
// // // //     setTimeout(() => setCopied(false), 2500);
// // // //   };

// // // //   // Dark mode toggle
// // // //   const toggleDarkMode = () => setDarkMode(d => !d);

// // // //   // Scroll progress
// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const scrollTop = window.scrollY;
// // // //       const docHeight = document.body.scrollHeight - window.innerHeight;
// // // //       const progress = Math.min((scrollTop / docHeight) * 100, 100);
// // // //       if(scrollProgressRef.current) scrollProgressRef.current.style.width = `${progress}%`;
// // // //     };
// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   if (loading) return <Loader />;
// // // //   if (error) return <ErrorState msg={error} />;

// // // //   const splitContent = post?.content?.split("</p>") || [];
// // // //   const midPoint = Math.floor(splitContent.length / 2);

// // // //   return (
// // // //     <>
// // // //       <Seo title={post.title} description={post.excerpt || ""} />

// // // //       <div className={`post-details-container ${darkMode ? "dark" : ""}`}>
// // // //         {/* Scroll progress */}
// // // //         <div className="scroll-progress" ref={scrollProgressRef}></div>

// // // //         {/* Main Article */}
// // // //         <article className="post-details">
// // // //           <header className="top-bar">
// // // //             <Link to="/" className="back-btn"><FaArrowLeft /> Back</Link>
// // // //             <button className="mode-toggle" onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
// // // //           </header>

// // // //           <h1 className="post-title">{post.title}</h1>
// // // //           {post.cover && <img src={post.cover} alt={post.title} className="post-cover" />}

// // // //           <section className="post-meta">
// // // //             <span><FaUserAlt /> {post.author?.name || "Unknown"}</span>
// // // //             <span><FaCalendarAlt /> {new Date(post.publishedAt).toLocaleDateString()}</span>
// // // //             <span><FaClock /> {estimateReadingTime(post.content)}</span>
// // // //             <span><FaEye /> {post.views || 1000 + Math.floor(Math.random() * 5000)}</span>
// // // //             <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={copyLink}>{copied ? "Copied!" : "Copy Link"} <FaCopy /></button>
// // // //           </section>

// // // //           {/* Post content + trending */}
// // // //           <section className="post-body">
// // // //             {splitContent.map((chunk, i) => (
// // // //               <React.Fragment key={i}>
// // // //                 <div dangerouslySetInnerHTML={{ __html: chunk + "</p>" }} />
// // // //                 {i === midPoint && (
// // // //                   <Link to={`/post/${MOCK_TRENDING_POST.slug}`} className="trending-card">
// // // //                     <img src={MOCK_TRENDING_POST.cover} alt={MOCK_TRENDING_POST.title} />
// // // //                     <div>
// // // //                       <h3><FaFire color="red" /> Trending Now</h3>
// // // //                       <h2>{MOCK_TRENDING_POST.title}</h2>
// // // //                       <p>{MOCK_TRENDING_POST.excerpt}</p>
// // // //                     </div>
// // // //                   </Link>
// // // //                 )}
// // // //               </React.Fragment>
// // // //             ))}
// // // //           </section>

// // // //           {/* Social Share */}
// // // //           <section className="social-share">
// // // //             <h3>Share this article:</h3>
// // // //             <div className="share-buttons">
// // // //               <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
// // // //               <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
// // // //               <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
// // // //               <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
// // // //             </div>
// // // //           </section>

// // // //           {/* Comments toggle */}
// // // //           <button className="toggle-comments" onClick={() => setShowComments(s => !s)}>
// // // //             <FaComments /> {showComments ? "Hide Comments" : "Show Comments"}
// // // //           </button>
// // // //           {showComments && <section className="comments-box">💬 Comments coming soon...</section>}
// // // //         </article>

// // // //         {/* Sidebar Sticky */}
// // // //         <aside className="sidebar">
// // // //           <div className="sidebar-section">
// // // //             <h3>Trending Post</h3>
// // // //             <Link to={`/post/${MOCK_TRENDING_POST.slug}`} className="trending-sidebar">
// // // //               <img src={MOCK_TRENDING_POST.cover} alt={MOCK_TRENDING_POST.title} />
// // // //               <h4>{MOCK_TRENDING_POST.title}</h4>
// // // //             </Link>
// // // //           </div>

// // // //           <div className="sidebar-section">
// // // //             <h3>Related Posts</h3>
// // // //             {MOCK_RELATED_POSTS.map(rp => (
// // // //               <Link key={rp._id} to={`/post/${rp.slug}`} className="related-sidebar">{rp.title}</Link>
// // // //             ))}
// // // //           </div>
// // // //         </aside>
// // // //       </div>

// // // //       {/* CSS */}
// // // //       <style>{`
// // // //         .post-details-container { display: flex; max-width: 1200px; margin: 2rem auto; gap: 2rem; }
// // // //         .post-details-container.dark { color: #e5e7eb; background: #111827; }
// // // //         .scroll-progress { position: fixed; top:0; left:0; height:4px; background:#2563eb; width:0; z-index:9999; transition: width 0.2s ease; }
// // // //         .post-details { flex:3; background:#fff; padding:2rem; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.08); }
// // // //         .post-details.dark { background:#1f2937; }
// // // //         .top-bar { display:flex; justify-content:space-between; margin-bottom:1rem; }
// // // //         .back-btn { text-decoration:none; color:#2563eb; font-weight:600; }
// // // //         .mode-toggle { background:none; border:none; font-size:1.3rem; cursor:pointer; }
// // // //         .post-title { font-size:2.8rem; font-weight:900; margin-bottom:1rem; }
// // // //         .post-cover { width:100%; height:auto; max-height:500px; border-radius:14px; margin-bottom:1.5rem; object-fit:cover; }
// // // //         .post-meta { display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:2rem; font-weight:600; align-items:center; }
// // // //         .copy-btn { margin-left:auto; background:#2563eb; color:white; border:none; padding:6px 14px; border-radius:6px; cursor:pointer; }
// // // //         .copy-btn.copied { background:#16a34a; }
// // // //         .post-body p { margin-bottom:1.5rem; font-size:1.15rem; }
// // // //         .trending-card { display:flex; gap:1rem; margin:2rem 0; background:#fef3c7; padding:1rem; border-radius:12px; text-decoration:none; color:#111; transition:transform 0.3s ease; }
// // // //         .trending-card:hover { transform:translateY(-4px); }
// // // //         .trending-card img { width:220px; height:150px; object-fit:cover; border-radius:10px; }
// // // //         .trending-card h3 { margin:0; color:#b91c1c; font-size:1rem; }
// // // //         .trending-card h2 { margin:0.3rem 0; font-size:1.4rem; }
// // // //         .social-share { display:flex; flex-direction:column; gap:0.5rem; margin:2rem 0; }
// // // //         .share-buttons a { display:inline-flex; justify-content:center; align-items:center; margin-right:0.5rem; width:36px; height:36px; border-radius:50%; background:#2563eb; color:white; text-decoration:none; font-size:1rem; transition: transform 0.2s; }
// // // //         .share-buttons a:hover { transform: scale(1.1); }
// // // //         .toggle-comments { margin-top:2rem; background:#2563eb; color:white; border:none; padding:10px 20px; border-radius:9999px; cursor:pointer; font-weight:600; }
// // // //         .comments-box { margin-top:1rem; background:#f3f4f6; padding:1rem; border-radius:12px; }
// // // //         .sidebar { flex:1; position:sticky; top:2rem; display:flex; flex-direction:column; gap:2rem; height:max-content; }
// // // //         .sidebar-section { background:#fff; padding:1rem; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
// // // //         .sidebar-section h3 { margin-bottom:1rem; }
// // // //         .trending-sidebar img { width:100%; height:120px; object-fit:cover; border-radius:10px; margin-bottom:0.5rem; }
// // // //         .related-sidebar { display:block; margin-bottom:0.5rem; color:#2563eb; text-decoration:none; font-weight:500; }
// // // //       `}</style>
// // // //     </>
// // // //   );
// // // // };

// // // // export default PostDetails;




// // // import React, { useEffect, useState, useRef } from "react";
// // // import { useParams, Link } from "react-router-dom";
// // // import Seo from "../components/Seo.jsx";
// // // import { Loader, ErrorState } from "../components/Loader.jsx";
// // // import {
// // //   FaUserAlt, FaCalendarAlt, FaClock, FaArrowLeft, FaCopy, FaEye,
// // //   FaSun, FaMoon, FaFire, FaComments, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp
// // // } from "react-icons/fa";

// // // // Helper
// // // const estimateReadingTime = (text) => {
// // //   const words = text ? text.split(/\s+/).length : 0;
// // //   return `${Math.ceil(words / 200)} min read`;
// // // };

// // // const PostDetails = () => {
// // //   const { slug } = useParams();
// // //   const [post, setPost] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [copied, setCopied] = useState(false);
// // //   const [darkMode, setDarkMode] = useState(false);
// // //   const [showComments, setShowComments] = useState(false);
// // //   const scrollProgressRef = useRef(null);
// // //   const [trendingPosts, setTrendingPosts] = useState([]);

// // //   // Fetch post
// // //   useEffect(() => {
// // //     setLoading(true);
// // //     fetch(`http://localhost:4000/api/posts/${slug}`)
// // //       .then(res => { if (!res.ok) throw new Error("Post not found"); return res.json(); })
// // //       .then(data => { setPost(data); setLoading(false); })
// // //       .catch(e => { setError(e.message); setLoading(false); });
// // //   }, [slug]);

// // //   // Fetch trending posts
// // //   useEffect(() => {
// // //     fetch("http://localhost:4000/api/posts?limit=5")
// // //       .then(res => res.json())
// // //       .then(data => {
// // //         const trending = (data.results || []).filter(p => p.isTrending);
// // //         setTrendingPosts(trending);
// // //       })
// // //       .catch(err => console.error(err));
// // //   }, []);

// // //   // Copy URL
// // //   const copyLink = () => {
// // //     navigator.clipboard.writeText(window.location.href);
// // //     setCopied(true);
// // //     setTimeout(() => setCopied(false), 2500);
// // //   };

// // //   const toggleDarkMode = () => setDarkMode(d => !d);

// // //   // Scroll progress
// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const scrollTop = window.scrollY;
// // //       const docHeight = document.body.scrollHeight - window.innerHeight;
// // //       const progress = Math.min((scrollTop / docHeight) * 100, 100);
// // //       if(scrollProgressRef.current) scrollProgressRef.current.style.width = `${progress}%`;
// // //     };
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   if (loading) return <Loader />;
// // //   if (error) return <ErrorState msg={error} />;

// // //   const splitContent = post?.content?.split("</p>") || [];
// // //   const midPoint = Math.floor(splitContent.length / 2);

// // //   return (
// // //     <>
// // //       <Seo title={post.title} description={post.excerpt || ""} />

// // //       <div className={`post-details-container ${darkMode ? "dark" : ""}`}>
// // //         <div className="scroll-progress" ref={scrollProgressRef}></div>

// // //         <article className="post-details">
// // //           <header className="top-bar">
// // //             <Link to="/" className="back-btn"><FaArrowLeft /> Back</Link>
// // //             <button className="mode-toggle" onClick={toggleDarkMode}>
// // //               {darkMode ? <FaSun /> : <FaMoon />}
// // //             </button>
// // //           </header>

// // //           <h1 className="post-title">{post.title}</h1>
// // //           {post.cover && <img src={post.cover} alt={post.title} className="post-cover" />}

// // //           <section className="post-meta">
// // //             <span><FaUserAlt /> {post.author?.name || "Unknown"}</span>
// // //             <span><FaCalendarAlt /> {new Date(post.publishedAt).toLocaleDateString()}</span>
// // //             <span><FaClock /> {estimateReadingTime(post.content)}</span>
// // //             <span><FaEye /> {post.views || 1000 + Math.floor(Math.random() * 5000)}</span>
// // //             <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={copyLink}>
// // //               {copied ? "Copied!" : "Copy Link"} <FaCopy />
// // //             </button>
// // //           </section>

// // //           <section className="post-body">
// // //             {splitContent.map((chunk, i) => (
// // //               <React.Fragment key={i}>
// // //                 <div dangerouslySetInnerHTML={{ __html: chunk + "</p>" }} />
// // //                 {i === midPoint && trendingPosts.length > 0 && (
// // //                   <div className="trending-inline">
// // //                     {trendingPosts.slice(0,1).map(t => (
// // //                       <Link key={t._id} to={`/post/${t.slug}`}>
// // //                         <img src={t.cover} alt={t.title} />
// // //                         <div><h4>{t.title}</h4></div>
// // //                       </Link>
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </React.Fragment>
// // //             ))}
// // //           </section>

// // //           <section className="social-share">
// // //             <h3>Share this article:</h3>
// // //             <div className="share-buttons">
// // //               <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
// // //               <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
// // //               <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
// // //               <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
// // //             </div>
// // //           </section>

// // //           <button className="toggle-comments" onClick={() => setShowComments(s => !s)}>
// // //             <FaComments /> {showComments ? "Hide Comments" : "Show Comments"}
// // //           </button>
// // //           {showComments && <section className="comments-box">💬 Comments coming soon...</section>}
// // //         </article>

// // //         <aside className="sidebar">
// // //           <div className="sidebar-section">
// // //             <h3>Trending Post</h3>
// // //             {trendingPosts.slice(0,2).map(t => (
// // //               <Link key={t._id} to={`/post/${t.slug}`} className="trending-sidebar">
// // //                 <img src={t.cover} alt={t.title} />
// // //                 <h4>{t.title}</h4>
// // //               </Link>
// // //             ))}
// // //           </div>

// // //           <div className="sidebar-section">
// // //             <h3>Related Posts</h3>
// // //             {post.relatedPosts?.map(rp => (
// // //               <Link key={rp._id} to={`/post/${rp.slug}`} className="related-sidebar">{rp.title}</Link>
// // //             ))}
// // //           </div>
// // //         </aside>
// // //       </div>

// // //       <style>{`
// // //         .post-details-container { display:flex; max-width:1200px; margin:2rem auto; gap:2rem; }
// // //         .post-details-container.dark { color:#e5e7eb; background:#111827; }
// // //         .scroll-progress { position:fixed; top:0; left:0; height:4px; background:#2563eb; width:0; z-index:9999; transition: width 0.2s ease; }
// // //         .post-details { flex:3; background:#fff; padding:2rem; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.08); }
// // //         .post-details.dark { background:#1f2937; }
// // //         .top-bar { display:flex; justify-content:space-between; margin-bottom:1rem; }
// // //         .back-btn { text-decoration:none; color:#2563eb; font-weight:600; }
// // //         .mode-toggle { background:none; border:none; font-size:1.3rem; cursor:pointer; }
// // //         .post-title { font-size:2.5rem; font-weight:900; margin-bottom:1rem; }
// // //         .post-cover { width:100%; max-height:500px; border-radius:14px; margin-bottom:1.5rem; object-fit:cover; }
// // //         .post-meta { display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:2rem; font-weight:600; align-items:center; }
// // //         .copy-btn { margin-left:auto; background:#2563eb; color:white; border:none; padding:6px 14px; border-radius:6px; cursor:pointer; }
// // //         .copy-btn.copied { background:#16a34a; }
// // //         .post-body p { margin-bottom:1.5rem; font-size:1.15rem; line-height:1.65; }
// // //         .trending-inline { margin:2rem 0; border-left:4px solid #f59e0b; padding-left:1rem; }
// // //         .trending-inline img { width:180px; height:110px; object-fit:cover; border-radius:8px; margin-right:0.8rem; }
// // //         .trending-inline h4 { font-size:1rem; margin:0.3rem 0; }
// // //         .social-share { display:flex; flex-direction:column; gap:0.5rem; margin:2rem 0; }
// // //         .share-buttons a { display:inline-flex; justify-content:center; align-items:center; margin-right:0.5rem; width:36px; height:36px; border-radius:50%; background:#2563eb; color:white; font-size:1rem; transition: transform 0.2s; }
// // //         .share-buttons a:hover { transform: scale(1.1); }
// // //         .toggle-comments { margin-top:2rem; background:#2563eb; color:white; border:none; padding:10px 20px; border-radius:9999px; cursor:pointer; font-weight:600; }
// // //         .comments-box { margin-top:1rem; background:#f3f4f6; padding:1rem; border-radius:12px; }
// // //         .sidebar { flex:1; position:sticky; top:2rem; display:flex; flex-direction:column; gap:2rem; height:max-content; }
// // //         .sidebar-section { background:#fff; padding:1rem; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
// // //         .sidebar-section h3 { margin-bottom:1rem; }
// // //         .trending-sidebar img { width:100%; height:120px; object-fit:cover; border-radius:10px; margin-bottom:0.5rem; }
// // //         .related-sidebar { display:block; margin-bottom:0.5rem; color:#2563eb; text-decoration:none; font-weight:500; }
// // //       `}</style>
// // //     </>
// // //   );
// // // };

// // // export default PostDetails;




// // import React, { useEffect, useState, useRef } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import Seo from "../components/Seo.jsx";
// // import { Loader, ErrorState } from "../components/Loader.jsx";
// // import {
// //   FaUserAlt, FaCalendarAlt, FaClock, FaArrowLeft, FaCopy, FaEye,
// //   FaSun, FaMoon, FaFire, FaComments, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp
// // } from "react-icons/fa";

// // const estimateReadingTime = (text) => {
// //   const words = text ? text.split(/\s+/).length : 0;
// //   return `${Math.ceil(words / 200)} min read`;
// // };

// // const PostDetails = () => {
// //   const { slug } = useParams();
// //   const [post, setPost] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [copied, setCopied] = useState(false);
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [showComments, setShowComments] = useState(false);
// //   const scrollProgressRef = useRef(null);

// //   const [trendingPosts, setTrendingPosts] = useState([]);
// //   const [relatedPosts, setRelatedPosts] = useState([]);

// //   // Fetch main post
// //   useEffect(() => {
// //     setLoading(true);
// //     fetch(`http://localhost:4000/api/posts/${slug}`)
// //       .then(res => { if(!res.ok) throw new Error("Post not found"); return res.json(); })
// //       .then(data => { setPost(data); setLoading(false); })
// //       .catch(e => { setError(e.message); setLoading(false); });
// //   }, [slug]);

// //   // Fetch trending posts
// //   useEffect(() => {
// //     fetch("http://localhost:4000/api/posts?limit=5")
// //       .then(res => res.json())
// //       .then(data => setTrendingPosts((data.results || []).filter(p => p.isTrending)))
// //       .catch(err => console.error(err));
// //   }, []);

// //   // Fetch related posts (same category)
// //   useEffect(() => {
// //     if(!post?.category?._id) return;
// //     fetch(`http://localhost:4000/api/posts?category=${post.category._id}&limit=5`)
// //       .then(res => res.json())
// //       .then(data => setRelatedPosts((data.results || []).filter(p => p._id !== post._id)))
// //       .catch(err => console.error(err));
// //   }, [post]);

// //   const copyLink = () => {
// //     navigator.clipboard.writeText(window.location.href);
// //     setCopied(true);
// //     setTimeout(() => setCopied(false), 2500);
// //   };

// //   const toggleDarkMode = () => setDarkMode(d => !d);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollTop = window.scrollY;
// //       const docHeight = document.body.scrollHeight - window.innerHeight;
// //       const progress = Math.min((scrollTop / docHeight) * 100, 100);
// //       if(scrollProgressRef.current) scrollProgressRef.current.style.width = `${progress}%`;
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   if (loading) return <Loader />;
// //   if (error) return <ErrorState msg={error} />;

// //   const splitContent = post?.content?.split("</p>") || [];
// //   const midPoint = Math.floor(splitContent.length / 2);

// //   return (
// //     <>
// //       <Seo title={post.title} description={post.excerpt || ""} />

// //       <div className={`post-details-container ${darkMode ? "dark" : ""}`}>
// //         <div className="scroll-progress" ref={scrollProgressRef}></div>

// //         <article className="post-details">
// //           <header className="top-bar">
// //             <Link to="/" className="back-btn"><FaArrowLeft /> Back</Link>
// //             <button className="mode-toggle" onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
// //           </header>

// //           <h1 className="post-title">{post.title}</h1>
// //           {post.cover && <img src={post.cover} alt={post.title} className="post-cover" />}

// //           <section className="post-meta">
// //             <span><FaUserAlt /> {post.author?.name || "Unknown"}</span>
// //             <span><FaCalendarAlt /> {new Date(post.publishedAt).toLocaleDateString()}</span>
// //             <span><FaClock /> {estimateReadingTime(post.content)}</span>
// //             <span><FaEye /> {post.views || 1000 + Math.floor(Math.random()*5000)}</span>
// //             <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={copyLink}>{copied ? "Copied!" : "Copy Link"} <FaCopy /></button>
// //           </section>

// //           <section className="post-body">
// //             {splitContent.map((chunk,i) => (
// //               <React.Fragment key={i}>
// //                 <div dangerouslySetInnerHTML={{ __html: chunk + "</p>" }} />
// //                 {i === midPoint && trendingPosts.length > 0 && (
// //                   <div className="trending-inline">
// //                     {trendingPosts.slice(0,1).map(t => (
// //                       <Link key={t._id} to={`/post/${t.slug}`}>
// //                         <img src={t.cover} alt={t.title} />
// //                         <div><h4>{t.title}</h4></div>
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}
// //                 {i === midPoint+1 && (
// //                   <div className="newsletter-inline">
// //                     <h4>Subscribe to our newsletter</h4>
// //                     <input type="email" placeholder="Your email..." />
// //                     <button>Subscribe</button>
// //                   </div>
// //                 )}
// //               </React.Fragment>
// //             ))}
// //           </section>

// //           <section className="social-share">
// //             <h3>Share this article:</h3>
// //             <div className="share-buttons">
// //               <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
// //               <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
// //               <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
// //               <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
// //             </div>
// //           </section>

// //           <button className="toggle-comments" onClick={() => setShowComments(s=>!s)}>
// //             <FaComments /> {showComments ? "Hide Comments" : "Show Comments"}
// //           </button>
// //           {showComments && <section className="comments-box">💬 Comments coming soon...</section>}
// //         </article>

// //         <aside className="sidebar">
// //           <div className="sidebar-section">
// //             <h3>Trending Post</h3>
// //             {trendingPosts.slice(0,2).map(t => (
// //               <Link key={t._id} to={`/post/${t.slug}`} className="trending-sidebar">
// //                 <img src={t.cover} alt={t.title} />
// //                 <h4>{t.title}</h4>
// //               </Link>
// //             ))}
// //           </div>

// //           <div className="sidebar-section">
// //             <h3>Related Posts</h3>
// //             {relatedPosts.map(rp => (
// //               <Link key={rp._id} to={`/post/${rp.slug}`} className="related-sidebar">{rp.title}</Link>
// //             ))}
// //           </div>
// //         </aside>
// //       </div>

// //       <style>{`
// //         .post-details-container { display:flex; max-width:1200px; margin:2rem auto; gap:2rem; }
// //         .post-details-container.dark { color:#e5e7eb; background:#111827; }
// //         .scroll-progress { position:fixed; top:0; left:0; height:4px; background:#2563eb; width:0; z-index:9999; transition: width 0.2s ease; }
// //         .post-details { flex:3; background:#fff; padding:2rem; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.08); }
// //         .post-details.dark { background:#1f2937; }
// //         .top-bar { display:flex; justify-content:space-between; margin-bottom:1rem; }
// //         .back-btn { text-decoration:none; color:#2563eb; font-weight:600; }
// //         .mode-toggle { background:none; border:none; font-size:1.3rem; cursor:pointer; }
// //         .post-title { font-size:2rem; font-weight:900; margin-bottom:1rem; }
// //         .post-cover { width:100%; max-height:380px; border-radius:14px; margin-bottom:1.5rem; object-fit:cover; }
// //         .post-meta { display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:2rem; font-weight:600; align-items:center; }
// //         .copy-btn { margin-left:auto; background:#2563eb; color:white; border:none; padding:6px 14px; border-radius:6px; cursor:pointer; }
// //         .copy-btn.copied { background:#16a34a; }
// //         .post-body p { margin-bottom:1.5rem; font-size:1.1rem; line-height:1.6; }
// //         .trending-inline { margin:2rem 0; border-left:4px solid #f59e0b; padding-left:1rem; display:flex; align-items:center; gap:1rem; }
// //         .trending-inline img { width:140px; height:90px; object-fit:cover; border-radius:8px; }
// //         .trending-inline h4 { font-size:0.95rem; margin:0; }
// //         .newsletter-inline { margin:2rem 0; padding:1rem; border:1px solid #2563eb; border-radius:8px; display:flex; gap:0.5rem; align-items:center; }
// //         .newsletter-inline input { flex:1; padding:6px 10px; border-radius:6px; border:1px solid #ccc; }
// //         .newsletter-inline button { padding:6px 12px; border:none; background:#2563eb; color:white; border-radius:6px; cursor:pointer; }
// //         .social-share { display:flex; flex-direction:column; gap:0.5rem; margin:2rem 0; }
// //         .share-buttons a { display:inline-flex; justify-content:center; align-items:center; margin-right:0.5rem; width:36px; height:36px; border-radius:50%; background:#2563eb; color:white; font-size:1rem; transition: transform 0.2s; }
// //         .share-buttons a:hover { transform: scale(1.1); }
// //         .toggle-comments { margin-top:2rem; background:#2563eb; color:white; border:none; padding:10px 20px; border-radius:9999px; cursor:pointer; font-weight:600; }
// //         .comments-box { margin-top:1rem; background:#f3f4f6; padding:1rem; border-radius:12px; }
// //         .sidebar { flex:1; position:sticky; top:2rem; display:flex; flex-direction:column; gap:2rem; height:max-content; }
// //         .sidebar-section { background:#fff; padding:1rem; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
// //         .sidebar-section h3 { margin-bottom:1rem; }
// //         .trending-sidebar img { width:100%; height:110px; object-fit:cover; border-radius:10px; margin-bottom:0.5rem; }
// //         .trending-sidebar h4 { font-size:1rem; margin:0; }
// //         .related-sidebar { display:block; margin-bottom:0.5rem; color:#2563eb; text-decoration:none; font-weight:500; }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default PostDetails;




// import React, { useEffect, useState, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import Seo from "../components/Seo.jsx";
// import { Loader, ErrorState } from "../components/Loader.jsx";
// import {
//   FaUserAlt, FaCalendarAlt, FaClock, FaArrowLeft, FaCopy, FaEye,
//   FaSun, FaMoon, FaFire, FaComments, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp
// } from "react-icons/fa";

// const estimateReadingTime = (text) => {
//   const words = text ? text.split(/\s+/).length : 0;
//   return `${Math.ceil(words / 200)} min read`;
// };

// const PostDetails = () => {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [copied, setCopied] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const scrollProgressRef = useRef(null);

//   const [trendingPosts, setTrendingPosts] = useState([]);
//   const [relatedPosts, setRelatedPosts] = useState([]);
//   const [likes, setLikes] = useState(0);

//   // Fetch main post
//   useEffect(() => {
//     setLoading(true);
//     fetch(`http://localhost:4000/api/posts/${slug}`)
//       .then(res => { if(!res.ok) throw new Error("Post not found"); return res.json(); })
//       .then(data => { setPost(data); setLikes(data.likes || 0); setLoading(false); })
//       .catch(e => { setError(e.message); setLoading(false); });
//   }, [slug]);

//   // Fetch trending posts
//   useEffect(() => {
//     fetch("http://localhost:4000/api/posts?limit=5")
//       .then(res => res.json())
//       .then(data => setTrendingPosts((data.results || []).filter(p => p.isTrending)))
//       .catch(err => console.error(err));
//   }, []);

//   // Fetch related posts (same category)
//   useEffect(() => {
//     if(!post?.category?._id) return;
//     fetch(`http://localhost:4000/api/posts?category=${post.category._id}&limit=5`)
//       .then(res => res.json())
//       .then(data => setRelatedPosts((data.results || []).filter(p => p._id !== post._id)))
//       .catch(err => console.error(err));
//   }, [post]);

//   const copyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2500);
//   };

//   const toggleDarkMode = () => setDarkMode(d => !d);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.body.scrollHeight - window.innerHeight;
//       const progress = Math.min((scrollTop / docHeight) * 100, 100);
//       if(scrollProgressRef.current) scrollProgressRef.current.style.width = `${progress}%`;
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (loading) return <Loader />;
//   if (error) return <ErrorState msg={error} />;

//   const splitContent = post?.content?.split("</p>") || [];
//   const midPoint = Math.floor(splitContent.length / 2);

//   return (
//     <>
//       <Seo title={post.title} description={post.excerpt || ""} />

//       <div className={`post-details-container ${darkMode ? "dark" : ""}`}>
//         <div className="scroll-progress" ref={scrollProgressRef}></div>

//         <article className="post-details">
//           <header className="top-bar">
//             <Link to="/" className="back-btn"><FaArrowLeft /> Back</Link>
//             <button className="mode-toggle" onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
//           </header>

//           <h1 className="post-title">{post.title}</h1>

//           {/* Category + Tags */}
//           <section className="post-category-tags">
//             {post.category?.name && <span className="category-badge">{post.category.name}</span>}
//             {post.tags && post.tags.map((tag,i) => <span key={i} className="tag-chip">#{tag}</span>)}
//           </section>

//           {post.cover && <img src={post.cover} alt={post.title} className="post-cover" />}

//           <section className="post-meta">
//             <span><FaUserAlt /> {post.author?.name || "Unknown"}</span>
//             <span><FaCalendarAlt /> {new Date(post.publishedAt).toLocaleDateString()}</span>
//             <span><FaClock /> {estimateReadingTime(post.content)}</span>
//             <span><FaEye /> {post.views || 1000 + Math.floor(Math.random()*5000)}</span>
//             <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={copyLink}>{copied ? "Copied!" : "Copy Link"} <FaCopy /></button>
//           </section>

//           <section className="post-body">
//             {splitContent.map((chunk,i) => (
//               <React.Fragment key={i}>
//                 <div dangerouslySetInnerHTML={{ __html: chunk + "</p>" }} />
//                 {i === midPoint && trendingPosts.length > 0 && (
//                   <div className="trending-inline">
//                     {trendingPosts.slice(0,1).map(t => (
//                       <Link key={t._id} to={`/post/${t.slug}`}>
//                         <img src={t.cover} alt={t.title} />
//                         <div><h4>{t.title}</h4></div>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//                 {i === midPoint+1 && (
//                   <div className="newsletter-inline">
//                     <h4>Subscribe to our newsletter</h4>
//                     <input type="email" placeholder="Your email..." />
//                     <button>Subscribe</button>
//                   </div>
//                 )}
//               </React.Fragment>
//             ))}
//             <button className="like-btn" onClick={() => setLikes(likes+1)}>❤️ {likes}</button>
//           </section>

//           <section className="social-share">
//   <h3>Share this article:</h3>
//   <div className="share-buttons">
//     <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//     <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//     <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//     <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
//   </div>
// </section>


//           <button className="toggle-comments" onClick={() => setShowComments(s=>!s)}>
//             <FaComments /> {showComments ? "Hide Comments" : "Show Comments"}
//           </button>
//           {showComments && <section className="comments-box">💬 Comments coming soon...</section>}

//           {/* Author Box */}
//           <section className="author-box">
//             <img src={post.author?.avatar || "https://via.placeholder.com/80"} alt={post.author?.name || "Author"} />
//             <div>
//               <h4>{post.author?.name || "Unknown Author"}</h4>
//               <p>{post.author?.bio || "Author bio coming soon..."}</p>
//             </div>
//           </section>

//           {/* Prev/Next Navigation */}
//           <section className="post-nav">
//             <Link to="/post/prev-slug">← Previous Post</Link>
//             <Link to="/post/next-slug">Next Post →</Link>
//           </section>
//         </article>

//         <aside className="sidebar">
//           <div className="sidebar-section">
//             <h3>Trending Post</h3>
//             {trendingPosts.slice(0,2).map(t => (
//               <Link key={t._id} to={`/post/${t.slug}`} className="trending-sidebar">
//                 <img src={t.cover} alt={t.title} />
//                 <h4>{t.title}</h4>
//               </Link>
//             ))}
//           </div>

//           <div className="sidebar-section">
//             <h3>Related Posts</h3>
//             {relatedPosts.map(rp => (
//               <Link key={rp._id} to={`/post/${rp.slug}`} className="related-sidebar">
//                 <img src={rp.cover} alt={rp.title} />
//                 <div>
//                   <h5>{rp.title}</h5>
//                   <p>{rp.excerpt?.slice(0,50)}...</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </aside>
//       </div>

//       <style>{`
//         .post-details-container { display:flex; max-width:1200px; margin:2rem auto; gap:2rem; }
//         .post-details-container.dark { color:#e5e7eb; background:#111827; }
//         .scroll-progress { position:fixed; top:0; left:0; height:4px; background:#2563eb; width:0; z-index:9999; transition: width 0.2s ease; }
//         .post-details { flex:3; background:#fff; padding:2rem; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.08); }
//         .post-details.dark { background:#1f2937; }
//         .top-bar { display:flex; justify-content:space-between; margin-bottom:1rem; }
//         .back-btn { text-decoration:none; color:#2563eb; font-weight:600; }
//         .mode-toggle { background:none; border:none; font-size:1.3rem; cursor:pointer; }
//         .post-title { font-size:2rem; font-weight:900; margin-bottom:1rem; }
//         .post-cover { width:100%; max-height:380px; border-radius:14px; margin-bottom:1.5rem; object-fit:cover; }
//         .post-category-tags { margin:1rem 0; }
//         .category-badge { background:#f59e0b; color:white; padding:4px 10px; border-radius:6px; margin-right:8px; font-size:0.9rem; font-weight:600; }
//         .tag-chip { background:#e5f0ff; color:#2563eb; margin:0 4px; padding:3px 8px; border-radius:12px; font-size:0.8rem; }
//         .post-meta { display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:2rem; font-weight:600; align-items:center; }
//         .copy-btn { margin-left:auto; background:#2563eb; color:white; border:none; padding:6px 14px; border-radius:6px; cursor:pointer; }
//         .copy-btn.copied { background:#16a34a; }
//         .post-body p { margin-bottom:1.5rem; font-size:1.1rem; line-height:1.6; }
//         .post-body img { max-width:100%; border-radius:12px; margin:1rem 0; }
//         .trending-inline { margin:2rem 0; border-left:4px solid #f59e0b; padding-left:1rem; display:flex; align-items:center; gap:1rem; }
//         .trending-inline img { width:140px; height:90px; object-fit:cover; border-radius:8px; }
//         .trending-inline h4 { font-size:0.95rem; margin:0; }
//         .newsletter-inline { margin:2rem 0; padding:1rem; border:1px solid #2563eb; border-radius:8px; display:flex; gap:0.5rem; align-items:center; }
//         .newsletter-inline input { flex:1; padding:6px 10px; border-radius:6px; border:1px solid #ccc; }
//         .newsletter-inline button { padding:6px 12px; border:none; background:#2563eb; color:white; border-radius:6px; cursor:pointer; }
//         .social-share { display:flex; flex-direction:column; gap:0.5rem; margin:2rem 0; }
//         .share-buttons a { display:inline-flex; justify-content:center; align-items:center; margin-right:0.5rem; width:36px; height:36px; border-radius:50%; background:#2563eb; color:white; font-size:1rem; transition: transform 0.2s; }
//         .share-buttons a:hover { transform: scale(1.1); }
//         .toggle-comments { margin-top:2rem; background:#2563eb; color:white; border:none; padding:10px 20px; border-radius:9999px; cursor:pointer; font-weight:600; }
//         .comments-box { margin-top:1rem; background:#f3f4f6; padding:1rem; border-radius:12px; }
//         .sidebar { flex:1; position:sticky; top:2rem; display:flex; flex-direction:column; gap:2rem; height:max-content; }
//         .sidebar-section { background:#fff; padding:1rem; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
//         .sidebar-section h3 { margin-bottom:1rem; }
//         .trending-sidebar img { width:100%; height:110px; object-fit:cover; border-radius:10px; margin-bottom:0.5rem; }
//         .trending-sidebar h4 { font-size:1rem; margin:0; }
//         .related-sidebar { display:flex; gap:0.5rem; margin-bottom:1rem; text-decoration:none; color:#111; }
//         .related-sidebar img { width:70px; height:60px; border-radius:6px; object-fit:cover; }
//         .related-sidebar h5 { margin:0; font-size:0.9rem; font-weight:600; }
//         .related-sidebar p { font-size:0.75rem; color:#666; margin:0; }
//         .author-box { display:flex; gap:1rem; margin-top:2rem; padding:1rem; background:#f9fafb; border-radius:12px; }
//         .author-box img { width:80px; height:80px; border-radius:50%; object-fit:cover; }
//         .like-btn { margin-top:1rem; background:#f43f5e; color:white; border:none; padding:6px 14px; border-radius:20px; cursor:pointer; }
//         .post-nav { display:flex; justify-content:space-between; margin-top:2rem; font-weight:600; }
//         .post-nav a { text-decoration:none; color:#2563eb; }
//       `}</style>
//     </>
//   );
// };

// export default PostDetails;




import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { Loader, ErrorState } from "../components/Loader.jsx";
import {
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
  FaCopy,
  FaEye,
  FaSun,
  FaMoon,
  FaFire,
  FaComments,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";

const estimateReadingTime = (text) => {
  const words = text ? text.split(/\s+/).length : 0;
  return `${Math.ceil(words / 200)} min read`;
};

const PostDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const scrollProgressRef = useRef(null);

  const [trendingPosts, setTrendingPosts] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:4000/api/posts/${slug}`)
      .then(res => { if(!res.ok) throw new Error("Post not found"); return res.json(); })
      .then(data => { setPost(data); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, [slug]);

  useEffect(() => {
    fetch("http://localhost:4000/api/posts?limit=5")
      .then(res => res.json())
      .then(data => setTrendingPosts((data.results || []).filter(p => p.isTrending)))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if(!post?.category?._id) return;
    fetch(`http://localhost:4000/api/posts?category=${post.category._id}&limit=5`)
      .then(res => res.json())
      .then(data => setRelatedPosts((data.results || []).filter(p => p._id !== post._id)))
      .catch(err => console.error(err));
  }, [post]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleDarkMode = () => setDarkMode(d => !d);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      if(scrollProgressRef.current) scrollProgressRef.current.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorState msg={error} />;

  const splitContent = post?.content?.split("</p>") || [];
  const midPoint = Math.floor(splitContent.length / 2);

  return (
    <>
      <Seo title={post.title} description={post.excerpt || ""} />

      <div className={`post-details-container ${darkMode ? "dark" : ""}`}>
        <div className="scroll-progress" ref={scrollProgressRef}></div>

        <article className="post-details">
          <header className="top-bar">
            <Link to="/" className="back-btn"><FaArrowLeft /> Back</Link>
            <button className="mode-toggle" onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
          </header>

          <h1 className="post-title">{post.title}</h1>
          {post.cover && <img src={post.cover} alt={post.title} className="post-cover" />}

          <section className="post-meta">
            <span><FaUserAlt /> {post.author?.name || "Unknown"}</span>
            <span><FaCalendarAlt /> {new Date(post.publishedAt).toLocaleDateString()}</span>
            <span><FaClock /> {estimateReadingTime(post.content)}</span>
            <span><FaEye /> {post.views || 1000 + Math.floor(Math.random()*5000)}</span>
            <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={copyLink}>{copied ? "Copied!" : "Copy Link"} <FaCopy /></button>
          </section>

          <section className="post-body">
            {splitContent.map((chunk,i) => (
              <React.Fragment key={i}>
                <div dangerouslySetInnerHTML={{ __html: chunk + "</p>" }} />
                {i === midPoint && trendingPosts.length > 0 && (
                  <div className="trending-inline">
                    {trendingPosts.slice(0,1).map(t => (
                      <Link key={t._id} to={`/post/${t.slug}`}>
                        <img src={t.cover} alt={t.title} />
                        <div><h4>{t.title}</h4></div>
                      </Link>
                    ))}
                  </div>
                )}
                {i === midPoint+1 && (
                  <div className="newsletter-inline">
                    <h4>Subscribe to our newsletter</h4>
                    <input type="email" placeholder="Your email..." />
                    <button>Subscribe</button>
                  </div>
                )}
              </React.Fragment>
            ))}
          </section>

          <section className="social-share">
            <h3>Share this article:</h3>
            <div className="share-buttons">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </section>

          <button className="toggle-comments" onClick={() => setShowComments(s=>!s)}>
            <FaComments /> {showComments ? "Hide Comments" : "Show Comments"}
          </button>
          {showComments && <section className="comments-box">💬 Comments coming soon...</section>}
        </article>

        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Trending Posts</h3>
            {trendingPosts.slice(0,3).map(t => (
              <Link key={t._id} to={`/post/${t.slug}`} className="card-sidebar">
                <img src={t.cover} alt={t.title} />
                <div className="card-info">
                  <h4>{t.title}</h4>
                  <span>{t.category?.name}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="sidebar-section">
            <h3>Related Posts</h3>
            {relatedPosts.slice(0,3).map(rp => (
              <Link key={rp._id} to={`/post/${rp.slug}`} className="card-sidebar related-card">
                <img src={rp.cover} alt={rp.title} />
                <div className="card-info">
                  <h4>{rp.title}</h4>
                  <span>{rp.category?.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <style>{`
        .post-details-container { display:flex; max-width:1200px; margin:2rem auto; gap:2rem; }
        .post-details-container.dark { color:#e5e7eb; background:#111827; }
        .scroll-progress { position:fixed; top:0; left:0; height:4px; background:#2563eb; width:0; z-index:9999; transition: width 0.2s ease; }
        .post-details { flex:3; background:#fff; padding:2rem; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.08); }
        .post-details.dark { background:#1f2937; }
        .top-bar { display:flex; justify-content:space-between; margin-bottom:1rem; }
        .back-btn { text-decoration:none; color:#2563eb; font-weight:600; }
        .mode-toggle { background:none; border:none; font-size:1.3rem; cursor:pointer; }
        .post-title { font-size:2rem; font-weight:900; margin-bottom:1rem; }
        .post-cover { width:100%; max-height:380px; border-radius:14px; margin-bottom:1.5rem; object-fit:cover; }
        .post-meta { display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:2rem; font-weight:600; align-items:center; }
        .copy-btn { margin-left:auto; background:#2563eb; color:white; border:none; padding:6px 14px; border-radius:6px; cursor:pointer; }
        .copy-btn.copied { background:#16a34a; }
        .post-body p { margin-bottom:1.5rem; font-size:1.1rem; line-height:1.6; }
        .trending-inline { margin:2rem 0; border-left:4px solid #f59e0b; padding-left:1rem; display:flex; align-items:center; gap:1rem; }
        .trending-inline img { width:140px; height:90px; object-fit:cover; border-radius:8px; }
        .trending-inline h4 { font-size:0.95rem; margin:0; }
        .newsletter-inline { margin:2rem 0; padding:1rem; border:1px solid #2563eb; border-radius:8px; display:flex; gap:0.5rem; align-items:center; }
        .newsletter-inline input { flex:1; padding:6px 10px; border-radius:6px; border:1px solid #ccc; }
        .newsletter-inline button { padding:6px 12px; border:none; background:#2563eb; color:white; border-radius:6px; cursor:pointer; }
        .social-share { display:flex; flex-direction:column; gap:0.5rem; margin:2rem 0; }
        .share-buttons a { display:inline-flex; justify-content:center; align-items:center; margin-right:0.5rem; width:36px; height:36px; border-radius:50%; background:#2563eb; color:white; font-size:1rem; transition: transform 0.2s; }
        .share-buttons a:hover { transform: scale(1.1); }
        .toggle-comments { margin-top:2rem; background:#2563eb; color:white; border:none; padding:10px 20px; border-radius:9999px; cursor:pointer; font-weight:600; }
        .comments-box { margin-top:1rem; background:#f3f4f6; padding:1rem; border-radius:12px; }
        .sidebar { flex:1; position:sticky; top:2rem; display:flex; flex-direction:column; gap:2rem; height:max-content; }
        .sidebar-section { background:#fff; padding:1rem; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
        .sidebar-section h3 { margin-bottom:1rem; font-size:1.2rem; font-weight:700; }
        .card-sidebar { display:flex; flex-direction:column; gap:0.5rem; text-decoration:none; background:#f9fafb; border-radius:12px; overflow:hidden; transition: transform 0.3s, box-shadow 0.3s; }
        .card-sidebar:hover { transform: translateY(-4px); box-shadow:0 10px 25px rgba(0,0,0,0.15); }
        .card-sidebar img { width:100%; height:120px; object-fit:cover; }
        .card-info { padding:0.5rem 1rem; }
        .card-info h4 { font-size:1rem; margin:0 0 4px 0; font-weight:600; color:#111827; }
        .card-info span { font-size:0.85rem; color:#6b7280; }
        .related-card img { height:100px; }
        .related-card .card-info h4 { font-size:0.95rem; }
      `}</style>
    </>
  );
};

export default PostDetails;
