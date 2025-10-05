

// // // import React, { useEffect, useState, useRef } from "react";
// // // import { useParams, Link } from "react-router-dom";
// // // import Seo from "../components/Seo.jsx";
// // // import { Loader, ErrorState } from "../components/Loader.jsx";
// // // import {
// // //   FaUserAlt,
// // //   FaCalendarAlt,
// // //   FaClock,
// // //   FaArrowLeft,
// // //   FaCopy,
// // //   FaEye,
// // //   FaSun,
// // //   FaMoon,
// // //   FaFire,
// // //   FaComments,
// // //   FaFacebookF,
// // //   FaTwitter,
// // //   FaLinkedinIn,
// // //   FaWhatsapp
// // // } from "react-icons/fa";

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
// // //   const [relatedPosts, setRelatedPosts] = useState([]);

// // //   useEffect(() => {
// // //     setLoading(true);
// // //     fetch(`http://localhost:4000/api/posts/${slug}`)
// // //       .then(res => { if(!res.ok) throw new Error("Post not found"); return res.json(); })
// // //       .then(data => { setPost(data); setLoading(false); })
// // //       .catch(e => { setError(e.message); setLoading(false); });
// // //   }, [slug]);

// // //   useEffect(() => {
// // //     fetch("http://localhost:4000/api/posts?limit=5")
// // //       .then(res => res.json())
// // //       .then(data => setTrendingPosts((data.results || []).filter(p => p.isTrending)))
// // //       .catch(err => console.error(err));
// // //   }, []);

// // //   useEffect(() => {
// // //     if(!post?.category?._id) return;
// // //     fetch(`http://localhost:4000/api/posts?category=${post.category._id}&limit=5`)
// // //       .then(res => res.json())
// // //       .then(data => setRelatedPosts((data.results || []).filter(p => p._id !== post._id)))
// // //       .catch(err => console.error(err));
// // //   }, [post]);

// // //   const copyLink = () => {
// // //     navigator.clipboard.writeText(window.location.href);
// // //     setCopied(true);
// // //     setTimeout(() => setCopied(false), 2500);
// // //   };

// // //   const toggleDarkMode = () => setDarkMode(d => !d);

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
// // //             <button className="mode-toggle" onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
// // //           </header>

// // //           <h1 className="post-title">{post.title}</h1>
// // //           {post.cover && <img src={post.cover} alt={post.title} className="post-cover" />}

// // //           <section className="post-meta">
// // //             <span><FaUserAlt /> {post.author?.name || "Unknown"}</span>
// // //             <span><FaCalendarAlt /> {new Date(post.publishedAt).toLocaleDateString()}</span>
// // //             <span><FaClock /> {estimateReadingTime(post.content)}</span>
// // //             <span><FaEye /> {post.views || 1000 + Math.floor(Math.random()*5000)}</span>
// // //             <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={copyLink}>{copied ? "Copied!" : "Copy Link"} <FaCopy /></button>
// // //           </section>

// // //           <section className="post-body">
// // //             {splitContent.map((chunk,i) => (
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
// // //                 {i === midPoint+1 && (
// // //                   <div className="newsletter-inline">
// // //                     <h4>Subscribe to our newsletter</h4>
// // //                     <input type="email" placeholder="Your email..." />
// // //                     <button>Subscribe</button>
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

// // //           <button className="toggle-comments" onClick={() => setShowComments(s=>!s)}>
// // //             <FaComments /> {showComments ? "Hide Comments" : "Show Comments"}
// // //           </button>
// // //           {showComments && <section className="comments-box">💬 Comments coming soon...</section>}
// // //         </article>

// // //         <aside className="sidebar">
// // //           <div className="sidebar-section">
// // //             <h3>Trending Posts</h3>
// // //             {trendingPosts.slice(0,3).map(t => (
// // //               <Link key={t._id} to={`/post/${t.slug}`} className="card-sidebar">
// // //                 <img src={t.cover} alt={t.title} />
// // //                 <div className="card-info">
// // //                   <h4>{t.title}</h4>
// // //                   <span>{t.category?.name}</span>
// // //                 </div>
// // //               </Link>
// // //             ))}
// // //           </div>

// // //           <div className="sidebar-section">
// // //             <h3>Related Posts</h3>
// // //             {relatedPosts.slice(0,3).map(rp => (
// // //               <Link key={rp._id} to={`/post/${rp.slug}`} className="card-sidebar related-card">
// // //                 <img src={rp.cover} alt={rp.title} />
// // //                 <div className="card-info">
// // //                   <h4>{rp.title}</h4>
// // //                   <span>{rp.category?.name}</span>
// // //                 </div>
// // //               </Link>
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
// // //         .post-title { font-size:2rem; font-weight:900; margin-bottom:1rem; }
// // //         .post-cover { width:100%; max-height:380px; border-radius:14px; margin-bottom:1.5rem; object-fit:cover; }
// // //         .post-meta { display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:2rem; font-weight:600; align-items:center; }
// // //         .copy-btn { margin-left:auto; background:#2563eb; color:white; border:none; padding:6px 14px; border-radius:6px; cursor:pointer; }
// // //         .copy-btn.copied { background:#16a34a; }
// // //         .post-body p { margin-bottom:1.5rem; font-size:1.1rem; line-height:1.6; }
// // //         .trending-inline { margin:2rem 0; border-left:4px solid #f59e0b; padding-left:1rem; display:flex; align-items:center; gap:1rem; }
// // //         .trending-inline img { width:140px; height:90px; object-fit:cover; border-radius:8px; }
// // //         .trending-inline h4 { font-size:0.95rem; margin:0; }
// // //         .newsletter-inline { margin:2rem 0; padding:1rem; border:1px solid #2563eb; border-radius:8px; display:flex; gap:0.5rem; align-items:center; }
// // //         .newsletter-inline input { flex:1; padding:6px 10px; border-radius:6px; border:1px solid #ccc; }
// // //         .newsletter-inline button { padding:6px 12px; border:none; background:#2563eb; color:white; border-radius:6px; cursor:pointer; }
// // //         .social-share { display:flex; flex-direction:column; gap:0.5rem; margin:2rem 0; }
// // //         .share-buttons a { display:inline-flex; justify-content:center; align-items:center; margin-right:0.5rem; width:36px; height:36px; border-radius:50%; background:#2563eb; color:white; font-size:1rem; transition: transform 0.2s; }
// // //         .share-buttons a:hover { transform: scale(1.1); }
// // //         .toggle-comments { margin-top:2rem; background:#2563eb; color:white; border:none; padding:10px 20px; border-radius:9999px; cursor:pointer; font-weight:600; }
// // //         .comments-box { margin-top:1rem; background:#f3f4f6; padding:1rem; border-radius:12px; }
// // //         .sidebar { flex:1; position:sticky; top:2rem; display:flex; flex-direction:column; gap:2rem; height:max-content; }
// // //         .sidebar-section { background:#fff; padding:1rem; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
// // //         .sidebar-section h3 { margin-bottom:1rem; font-size:1.2rem; font-weight:700; }
// // //         .card-sidebar { display:flex; flex-direction:column; gap:0.5rem; text-decoration:none; background:#f9fafb; border-radius:12px; overflow:hidden; transition: transform 0.3s, box-shadow 0.3s; }
// // //         .card-sidebar:hover { transform: translateY(-4px); box-shadow:0 10px 25px rgba(0,0,0,0.15); }
// // //         .card-sidebar img { width:100%; height:120px; object-fit:cover; }
// // //         .card-info { padding:0.5rem 1rem; }
// // //         .card-info h4 { font-size:1rem; margin:0 0 4px 0; font-weight:600; color:#111827; }
// // //         .card-info span { font-size:0.85rem; color:#6b7280; }
// // //         .related-card img { height:100px; }
// // //         .related-card .card-info h4 { font-size:0.95rem; }
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
// //   FaSun, FaMoon, FaComments, FaFacebookF, FaTwitter,
// //   FaLinkedinIn, FaWhatsapp, FaTags, FaLink
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

// //   // Fetch current post
// //   useEffect(() => {
// //     setLoading(true);
// //     fetch(`http://localhost:4000/api/posts/${slug}`)
// //       .then(res => { if(!res.ok) throw new Error("Post not found"); return res.json(); })
// //       .then(data => { setPost(data); setLoading(false); })
// //       .catch(e => { setError(e.message); setLoading(false); });
// //   }, [slug]);

// //   // Fetch trending
// //   useEffect(() => {
// //     fetch("http://localhost:4000/api/posts?limit=6")
// //       .then(res => res.json())
// //       .then(data => setTrendingPosts((data.results || []).filter(p => p.isTrending)))
// //       .catch(err => console.error(err));
// //   }, []);

// //   // Fetch related
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
// //   if (!post) return null;

// //   const splitContent = post?.content?.split("</p>") || [];
// //   const midPoint = Math.floor(splitContent.length / 2);

// //   return (
// //     <>
// //       <Seo title={post?.title || "Post"} description={post?.excerpt || ""} />

// //       <div className={`post-details-container ${darkMode ? "dark" : ""}`}>
// //         <div className="scroll-progress" ref={scrollProgressRef}></div>

// //         <article className="post-details">
// //           <header className="top-bar">
// //             <Link to="/" className="back-btn"><FaArrowLeft /> Back</Link>
// //             <button className="mode-toggle" onClick={toggleDarkMode}>
// //               {darkMode ? <FaSun /> : <FaMoon />}
// //             </button>
// //           </header>

// //           {/* Title */}
// //           <h1 className="post-title">{post.title}</h1>
          
// //           {/* Cover */}
// //           {post.cover && (
// //             <img src={post.cover} alt={post.title} className="post-cover" />
// //           )}

// //           {/* Excerpt / Slug / Tags */}
// //           <div className="extra-meta">
// //             {post.excerpt && <p className="excerpt">“{post.excerpt}”</p>}
// //             <p className="slug"><FaLink /> {post.slug}</p>
// //             {post.tags?.length > 0 && (
// //               <p className="tags">
// //                 <FaTags /> {post.tags.join(", ")}
// //               </p>
// //             )}
// //           </div>

// //           {/* Meta */}
// //           <section className="post-meta">
// //             <span><FaUserAlt /> {post.author?.name || "Unknown"}</span>
// //             <span><FaCalendarAlt /> {new Date(post.publishedAt).toLocaleDateString()}</span>
// //             <span><FaClock /> {estimateReadingTime(post.content)}</span>
// //             <span><FaEye /> {post.views || 1000 + Math.floor(Math.random()*5000)}</span>
// //             <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={copyLink}>
// //               {copied ? "Copied!" : "Copy Link"} <FaCopy />
// //             </button>
// //           </section>

// //           {/* Body */}
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

// //           {/* Share */}
// //           <section className="social-share">
// //             <h3>Share this article:</h3>
// //             <div className="share-buttons">
// //               <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
// //               <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
// //               <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
// //               <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
// //             </div>
// //           </section>

// //           {/* Comments */}
// //           <button className="toggle-comments" onClick={() => setShowComments(s=>!s)}>
// //             <FaComments /> {showComments ? "Hide Comments" : "Show Comments"}
// //           </button>
// //           {showComments && <section className="comments-box">💬 Comments coming soon...</section>}
// //         </article>

// //         {/* Sidebar */}
// //         <aside className="sidebar">
// //           <div className="sidebar-section">
// //             <h3>Trending Posts</h3>
// //             {trendingPosts.slice(0,3).map(t => (
// //               <Link key={t._id} to={`/post/${t.slug}`} className="card-sidebar">
// //                 <img src={t.cover} alt={t.title} />
// //                 <div className="card-info">
// //                   <h4>{t.title}</h4>
// //                   <span>{t.category?.name}</span>
// //                 </div>
// //               </Link>
// //             ))}
// //           </div>

// //           <div className="sidebar-section">
// //             <h3>Related Posts</h3>
// //             {relatedPosts.slice(0,3).map(rp => (
// //               <Link key={rp._id} to={`/post/${rp.slug}`} className="card-sidebar related-card">
// //                 <img src={rp.cover} alt={rp.title} />
// //                 <div className="card-info">
// //                   <h4>{rp.title}</h4>
// //                   <span>{rp.category?.name}</span>
// //                 </div>
// //               </Link>
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
// //         .post-cover { width:100%; max-height:320px; border-radius:12px; margin-bottom:1rem; object-fit:cover; }
// //         .extra-meta { font-size:0.95rem; margin-bottom:1rem; color:#374151; }
// //         .excerpt { font-style:italic; margin-bottom:0.3rem; }
// //         .slug, .tags { display:flex; align-items:center; gap:0.4rem; margin-bottom:0.2rem; }
// //         .post-meta { display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:1.5rem; font-weight:600; align-items:center; }
// //         .copy-btn { margin-left:auto; background:#2563eb; color:white; border:none; padding:6px 14px; border-radius:6px; cursor:pointer; }
// //         .copy-btn.copied { background:#16a34a; }
// //         .post-body p { margin-bottom:1.5rem; font-size:1.1rem; line-height:1.6; }
// //         .trending-inline { margin:2rem 0; border-left:4px solid #f59e0b; padding-left:1rem; display:flex; align-items:center; gap:1rem; }
// //         .trending-inline img { width:120px; height:80px; object-fit:cover; border-radius:8px; }
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
// //         .sidebar-section h3 { margin-bottom:1rem; font-size:1.2rem; font-weight:700; }
// //         .card-sidebar { display:flex; flex-direction:column; text-decoration:none; background:#f9fafb; border-radius:12px; overflow:hidden; margin-bottom:0.8rem; transition: transform 0.3s, box-shadow 0.3s; }
// //         .card-sidebar:hover { transform: translateY(-4px); box-shadow:0 10px 25px rgba(0,0,0,0.15); }
// //         .card-sidebar img { width:100%; height:110px; object-fit:cover; }
// //         .card-info { padding:0.6rem; }
// //         .card-info h4 { font-size:0.95rem; margin:0 0 4px 0; font-weight:600; color:#111827; }
// //         .card-info span { font-size:0.8rem; color:#6b7280; }
// //         .related-card img { height:100px; }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default PostDetails;



// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Loader, ErrorState } from "../components/Loader.jsx";
// import Seo from "../components/Seo.jsx";
// import "./PostDetail.css";

// const PostDetail = () => {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [trendingPosts, setTrendingPosts] = useState([]);
//   const [sidePosts, setSidePosts] = useState([]);

//   /** Fetch single post by slug */
//   useEffect(() => {
//     setLoading(true);
//     fetch(`http://localhost:4000/api/posts/${slug}`)
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to load post");
//         return res.json();
//       })
//       .then(data => {
//         setPost(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [slug]);

//   /** Fetch trending + side posts */
//   useEffect(() => {
//     fetch("http://localhost:4000/api/posts?limit=20")
//       .then(res => res.json())
//       .then(data => {
//         const all = data.results || [];
//         const trending = all.filter(p => p.isTrending).slice(0, 1);
//         const sideLatest = all.filter(p => !p.isTrending).slice(0, 6);

//         setTrendingPosts(trending);
//         setSidePosts(sideLatest);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   if (loading) return <Loader />;
//   if (error) return <ErrorState msg={error} />;
//   if (!post) return <ErrorState msg="Post not found" />;

//   return (
//     <>
//       <Seo title={post.title} description={post.excerpt || post.shortDescription} />

//       <div className="postdetail-container">
//         {/* Left: Post Content */}
//         <div className="postdetail-main">
//           <h1 className="postdetail-title">{post.title}</h1>
//           {post.excerpt && <p className="postdetail-excerpt">{post.excerpt}</p>}
//           <p className="postdetail-slug">Slug: {post.slug}</p>

//           {post.tags && (
//             <div className="postdetail-tags">
//               {post.tags.map(tag => (
//                 <span key={tag} className="tag">{tag}</span>
//               ))}
//             </div>
//           )}

//           {post.cover && (
//             <img
//               src={post.cover}
//               alt={post.title}
//               className="postdetail-cover"
//             />
//           )}

//           <div
//             className="postdetail-content"
//             dangerouslySetInnerHTML={{ __html: post.content }}
//           />
//         </div>

//         {/* Right: Trending + Latest */}
//         <aside className="postdetail-sidebar">
//           {trendingPosts.length > 0 && (
//             <section className="trending-section">
//               <h3 className="section-title">🔥 Trending Now</h3>
//               <div className="trending-layout">
//                 <div className="trending-featured-wrap">
//                   <Link
//                     to={`/post/${trendingPosts[0].slug}`}
//                     className="trending-featured"
//                   >
//                     <img
//                       src={trendingPosts[0].cover || "/placeholder.jpg"}
//                       alt={trendingPosts[0].title}
//                     />
//                     <div className="featured-content">
//                       <span className="category">
//                         {trendingPosts[0].category?.name || "Uncategorized"}
//                       </span>
//                       <h3>{trendingPosts[0].title}</h3>
//                     </div>
//                   </Link>
//                 </div>

//                 <div className="latest-articles-list">
//                   {sidePosts.slice(0, 6).map(p => (
//                     <Link
//                       key={p._id}
//                       to={`/post/${p.slug}`}
//                       className="latest-article-post"
//                     >
//                       <h4>{p.title}</h4>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </aside>
//       </div>
//     </>
//   );
// };

// export default PostDetail;



import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader, ErrorState } from "../components/Loader.jsx";
import Seo from "../components/Seo.jsx";
import "./PostDetail.css";

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [trendingPosts, setTrendingPosts] = useState([]);
  const [sidePosts, setSidePosts] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);

  /** Fetch single post by slug */
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:4000/api/posts/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to load post");
        return res.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);

        // Related posts by category
        if (data?.category?.slug) {
          fetch(`http://localhost:4000/api/posts/category/${data.category.slug}?limit=4`)
            .then(res => res.json())
            .then(catData => {
              setRelatedPosts((catData.posts || []).filter(p => p.slug !== slug));
            });
        }
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  /** Fetch trending + side posts */
  useEffect(() => {
    fetch("http://localhost:4000/api/posts?limit=20")
      .then(res => res.json())
      .then(data => {
        const all = data.results || [];
        const trending = all.filter(p => p.isTrending).slice(0, 1);
        const sideLatest = all.filter(p => !p.isTrending).slice(0, 6);

        setTrendingPosts(trending);
        setSidePosts(sideLatest);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorState msg={error} />;
  if (!post) return <ErrorState msg="Post not found" />;

  return (
    <>
      <Seo title={post.title} description={post.excerpt || post.shortDescription} />

      <div className="postdetail-container">
        {/* Left: Post Content */}
        <div className="postdetail-main">
          <h1 className="postdetail-title">{post.title}</h1>
          {post.excerpt && <p className="postdetail-excerpt">{post.excerpt}</p>}
          <p className="postdetail-slug">Slug: {post.slug}</p>

          {post.tags && (
            <div className="postdetail-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}

          {post.cover && (
            <img
              src={post.cover}
              alt={post.title}
              className="postdetail-cover"
            />
          )}

          <div
            className="postdetail-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* ✅ Extra Features after content */}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="related-posts">
              <h3>Related Articles</h3>
              <div className="related-grid">
                {relatedPosts.map(rp => (
                  <Link key={rp._id} to={`/post/${rp.slug}`} className="related-card">
                    <img src={rp.cover || "/placeholder.jpg"} alt={rp.title} />
                    <h4>{rp.title}</h4>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Author Info */}
          {/* {post.author && (
            <section className="author-box">
              <img src={post.author.avatar || "/placeholder-user.png"} alt={post.author.name} />
              <div>
                <h4>{post.author.name}</h4>
                <p>{post.author.bio || "Author at our blog"}</p>
              </div>
            </section>
          )} */}
          {post.author && (
  <section className="author-box">
    <img
      src={post.author.avatar || "/placeholder-user.png"}
      alt={post.author.name}
      className="author-avatar"
    />
    <div className="author-info">
      <h4 className="author-name">{post.author.name}</h4>
      <p className="author-bio">{post.author.bio || "Author at our blog"}</p>
    </div>
  </section>
)}


          {/* CTA */}
          <div className="read-more-cta">
            <p>Enjoyed this article? Explore more trending topics!</p>
            <Link to="/search?q=technology" className="cta-btn">Discover More</Link>
          </div>
        </div>

        {/* Right: Trending + Latest */}
        <aside className="postdetail-sidebar">
          {trendingPosts.length > 0 && (
            <section className="trending-section">
              <h3 className="section-title">🔥 Trending Now</h3>
              <div className="trending-layout">
                <div className="trending-featured-wrap">
                  <Link
                    to={`/post/${trendingPosts[0].slug}`}
                    className="trending-featured"
                  >
                    <img
                      src={trendingPosts[0].cover || "/placeholder.jpg"}
                      alt={trendingPosts[0].title}
                    />
                    <div className="featured-content">
                      <span className="category">
                        {trendingPosts[0].category?.name || "Uncategorized"}
                      </span>
                      <h3>{trendingPosts[0].title}</h3>
                    </div>
                  </Link>
                </div>

                <div className="latest-articles-list">
                  {sidePosts.slice(0, 6).map(p => (
                    <Link
                      key={p._id}
                      to={`/post/${p.slug}`}
                      className="latest-article-post"
                    >
                      <h4>{p.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </aside>
      </div>
    </>
  );
};

export default PostDetail;
