


// // // // // import React, { useEffect, useState, useRef, useCallback } from "react";
// // // // // import Seo from "../components/Seo.jsx";
// // // // // import PostList from "../components/PostList.jsx";
// // // // // import { Loader, ErrorState } from "../components/Loader.jsx";
// // // // // import { Link } from "react-router-dom";
// // // // // import "./Home.css";

// // // // // const POSTS_PER_PAGE = 9;

// // // // // const Home = () => {
// // // // //   const [posts, setPosts] = useState([]);
// // // // //   const [page, setPage] = useState(1);
// // // // //   const [hasMore, setHasMore] = useState(true);
// // // // //   const [loadingPosts, setLoadingPosts] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const loadMoreRef = useRef(null);
// // // // //   const scrollProgressRef = useRef(null);
// // // // //   const [showTop, setShowTop] = useState(false);

// // // // //   const [trendingPosts, setTrendingPosts] = useState([]);
// // // // //   const [newPosts, setNewPosts] = useState([]); // side ke liye

// // // // //   /** Fetch paginated posts */
// // // // //   const fetchPosts = useCallback(() => {
// // // // //     setLoadingPosts(true);
// // // // //     setError(null);
// // // // //     const url = new URL("http://localhost:4000/api/posts");
// // // // //     url.searchParams.set("page", page);
// // // // //     url.searchParams.set("limit", POSTS_PER_PAGE);

// // // // //     fetch(url.toString())
// // // // //       .then(res => {
// // // // //         if (!res.ok) throw new Error("Failed to load posts");
// // // // //         return res.json();
// // // // //       })
// // // // //       .then(data => {
// // // // //         const newPostsData = data.results || [];
// // // // //         setPosts(prev => (page === 1 ? newPostsData : [...prev, ...newPostsData]));
// // // // //         setHasMore(newPostsData.length === POSTS_PER_PAGE);
// // // // //         setLoadingPosts(false);
// // // // //       })
// // // // //       .catch(e => {
// // // // //         setError(e.message);
// // // // //         setLoadingPosts(false);
// // // // //       });
// // // // //   }, [page]);

// // // // //   useEffect(() => { fetchPosts(); }, [fetchPosts]);

// // // // //   /** Infinite scroll observer */
// // // // //   useEffect(() => {
// // // // //     if (!hasMore || loadingPosts) return;
// // // // //     const observer = new IntersectionObserver(
// // // // //       ([entry]) => { if (entry.isIntersecting) setPage(p => p + 1); },
// // // // //       { rootMargin: "200px" }
// // // // //     );
// // // // //     const current = loadMoreRef.current;
// // // // //     if (current) observer.observe(current);
// // // // //     return () => current && observer.unobserve(current);
// // // // //   }, [hasMore, loadingPosts]);

// // // // //   /** Scroll progress bar */
// // // // //   useEffect(() => {
// // // // //     const updateScrollProgress = () => {
// // // // //       if (!scrollProgressRef.current) return;
// // // // //       const scrollTop = window.scrollY;
// // // // //       const docHeight = document.body.scrollHeight - window.innerHeight;
// // // // //       const progress = Math.min((scrollTop / docHeight) * 100, 100);
// // // // //       scrollProgressRef.current.style.width = `${progress}%`;
// // // // //     };
// // // // //     window.addEventListener("scroll", updateScrollProgress);
// // // // //     return () => window.removeEventListener("scroll", updateScrollProgress);
// // // // //   }, []);

// // // // //   /** Back to top button */
// // // // //   useEffect(() => {
// // // // //     const onScroll = () => setShowTop(window.scrollY > 300);
// // // // //     window.addEventListener("scroll", onScroll);
// // // // //     return () => window.removeEventListener("scroll", onScroll);
// // // // //   }, []);

// // // // //   /** Fetch trending + new posts */
// // // // //   useEffect(() => {
// // // // //     fetch("http://localhost:4000/api/posts?limit=7")
// // // // //       .then(res => res.json())
// // // // //       .then(data => {
// // // // //         const all = data.results || [];
// // // // //         const trending = all.filter(p => p.isTrending).slice(0, 1); // sirf 1 trending
// // // // //         const latest = all.filter(p => !p.isTrending).slice(0, 6); // side ke liye 2 new
// // // // //         setTrendingPosts(trending);
// // // // //         setNewPosts(latest);
// // // // //       })
// // // // //       .catch(err => console.error(err));
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       <Seo title="Home" description="Explore top articles and latest news" />
// // // // //       <div className="home-container">
// // // // //         <div className="scroll-progress-bar" ref={scrollProgressRef}></div>

// // // // //      {/* Trending + Latest Articles Section */}
// // // // // {trendingPosts.length > 0 && (
// // // // //   <section className="trending-section">
// // // // //     <h3 className="section-title">🔥 Trending Now</h3>
// // // // //     <div className="trending-layout">
      
// // // // //       {/* Main Featured Trending Post */}
// // // // //       <div className="trending-featured-wrap">
// // // // //         <Link to={`/post/${trendingPosts[0].slug}`} className="trending-featured">
// // // // //           <img src={trendingPosts[0].cover || "/placeholder.jpg"} alt={trendingPosts[0].title} />
// // // // //           <div className="featured-content">
// // // // //             <span className="category">{trendingPosts[0].category?.name || "Uncategorized"}</span>
// // // // //             <h3>{trendingPosts[0].title}</h3>
// // // // //           </div>
// // // // //         </Link>
// // // // //       </div>

// // // // //       {/* Side Latest Articles (6 titles, no category) */}
// // // // //       <div className="latest-articles-list">
// // // // //         {newPosts.slice(0, 6).map(post => (
// // // // //           <Link key={post._id} to={`/post/${post.slug}`} className="latest-article-post">
// // // // //             <h4>{post.title}</h4>
// // // // //           </Link>
// // // // //         ))}
// // // // //       </div>

// // // // //     </div>
// // // // //   </section>
// // // // // )}



// // // // //         {/* Main Feed Grid */}
// // // // //         <section className="main-feed-grid">
// // // // //           {error && <ErrorState msg={error} />}
// // // // //           <div className="grid-3">
// // // // //             {posts.map(post => (
// // // // //               <PostList key={post._id} posts={[post]} layout="card" />
// // // // //             ))}
// // // // //           </div>
// // // // //           {loadingPosts && <Loader />}
// // // // //           {!loadingPosts && hasMore &&
// // // // //             <button className="load-more-btn" onClick={() => setPage(p => p + 1)}>Load More</button>
// // // // //           }
// // // // //           <div ref={loadMoreRef} style={{ height: 1 }} />
// // // // //         </section>

// // // // //         {showTop && (
// // // // //           <button
// // // // //             className="back-to-top"
// // // // //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // // // //           >
// // // // //             ↑
// // // // //           </button>
// // // // //         )}
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Home;



// // // // import React, { useEffect, useState, useRef, useCallback } from "react";
// // // // import Seo from "../components/Seo.jsx";
// // // // import PostList from "../components/PostList.jsx";
// // // // import { Loader, ErrorState } from "../components/Loader.jsx";
// // // // import { Link } from "react-router-dom";
// // // // import "./Home.css";

// // // // const POSTS_PER_PAGE = 9;

// // // // const Home = () => {
// // // //   const [posts, setPosts] = useState([]);
// // // //   const [page, setPage] = useState(1);
// // // //   const [hasMore, setHasMore] = useState(true);
// // // //   const [loadingPosts, setLoadingPosts] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const loadMoreRef = useRef(null);
// // // //   const scrollProgressRef = useRef(null);
// // // //   const [showTop, setShowTop] = useState(false);

// // // //   const [trendingPosts, setTrendingPosts] = useState([]);
// // // //   const [sidePosts, setSidePosts] = useState([]); // side ke liye
// // // //   const [latestPosts, setLatestPosts] = useState([]); // new latest section

// // // //   /** Fetch paginated posts */
// // // //   const fetchPosts = useCallback(() => {
// // // //     setLoadingPosts(true);
// // // //     setError(null);
// // // //     const url = new URL("http://localhost:4000/api/posts");
// // // //     url.searchParams.set("page", page);
// // // //     url.searchParams.set("limit", POSTS_PER_PAGE);

// // // //     fetch(url.toString())
// // // //       .then(res => {
// // // //         if (!res.ok) throw new Error("Failed to load posts");
// // // //         return res.json();
// // // //       })
// // // //       .then(data => {
// // // //         const newPostsData = data.results || [];
// // // //         setPosts(prev => (page === 1 ? newPostsData : [...prev, ...newPostsData]));
// // // //         setHasMore(newPostsData.length === POSTS_PER_PAGE);
// // // //         setLoadingPosts(false);
// // // //       })
// // // //       .catch(e => {
// // // //         setError(e.message);
// // // //         setLoadingPosts(false);
// // // //       });
// // // //   }, [page]);

// // // //   useEffect(() => { fetchPosts(); }, [fetchPosts]);

// // // //   /** Infinite scroll observer */
// // // //   useEffect(() => {
// // // //     if (!hasMore || loadingPosts) return;
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => { if (entry.isIntersecting) setPage(p => p + 1); },
// // // //       { rootMargin: "200px" }
// // // //     );
// // // //     const current = loadMoreRef.current;
// // // //     if (current) observer.observe(current);
// // // //     return () => current && observer.unobserve(current);
// // // //   }, [hasMore, loadingPosts]);

// // // //   /** Scroll progress bar */
// // // //   useEffect(() => {
// // // //     const updateScrollProgress = () => {
// // // //       if (!scrollProgressRef.current) return;
// // // //       const scrollTop = window.scrollY;
// // // //       const docHeight = document.body.scrollHeight - window.innerHeight;
// // // //       const progress = Math.min((scrollTop / docHeight) * 100, 100);
// // // //       scrollProgressRef.current.style.width = `${progress}%`;
// // // //     };
// // // //     window.addEventListener("scroll", updateScrollProgress);
// // // //     return () => window.removeEventListener("scroll", updateScrollProgress);
// // // //   }, []);

// // // //   /** Back to top button */
// // // //   useEffect(() => {
// // // //     const onScroll = () => setShowTop(window.scrollY > 300);
// // // //     window.addEventListener("scroll", onScroll);
// // // //     return () => window.removeEventListener("scroll", onScroll);
// // // //   }, []);

// // // //   /** Fetch trending + side + latest posts */
// // // //   useEffect(() => {
// // // //     fetch("http://localhost:4000/api/posts?limit=12")
// // // //       .then(res => res.json())
// // // //       .then(data => {
// // // //         const all = data.results || [];
// // // //         setTrendingPosts(all.filter(p => p.isTrending).slice(0, 1));
// // // //         setSidePosts(all.filter(p => !p.isTrending).slice(0, 6)); // side latest titles
// // // //         setLatestPosts(all.filter(p => !p.isTrending).slice(0, 5)); // latest feature section
// // // //       })
// // // //       .catch(err => console.error(err));
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <Seo title="Home" description="Explore top articles and latest news" />
// // // //       <div className="home-container">
// // // //         <div className="scroll-progress-bar" ref={scrollProgressRef}></div>

// // // //         {/* Trending + Side Posts */}
// // // //         {trendingPosts.length > 0 && (
// // // //           <section className="trending-section">
// // // //             <h3 className="section-title">🔥 Trending Now</h3>
// // // //             <div className="trending-layout">
// // // //               <div className="trending-featured-wrap">
// // // //                 <Link to={`/post/${trendingPosts[0].slug}`} className="trending-featured">
// // // //                   <img src={trendingPosts[0].cover || "/placeholder.jpg"} alt={trendingPosts[0].title} />
// // // //                   <div className="featured-content">
// // // //                     <span className="category">{trendingPosts[0].category?.name || "Uncategorized"}</span>
// // // //                     <h3>{trendingPosts[0].title}</h3>
// // // //                   </div>
// // // //                 </Link>
// // // //               </div>
// // // //               <div className="latest-articles-list">
// // // //                 {sidePosts.map(post => (
// // // //                   <Link key={post._id} to={`/post/${post.slug}`} className="latest-article-post">
// // // //                     <h4>{post.title}</h4>
// // // //                   </Link>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </section>
// // // //         )}

// // // //         {/* Latest Posts Feature Section */}
// // // //         {latestPosts.length > 0 && (
// // // //           <section className="latest-featured-section">
// // // //             <h3 className="section-title">🆕 Latest Articles</h3>
// // // //             <div className="latest-featured-grid">
// // // //               <div className="top-row">
// // // //                 {latestPosts.slice(0, 3).map(post => (
// // // //                   <Link key={post._id} to={`/post/${post.slug}`} className="latest-card">
// // // //                     <img src={post.cover || "/placeholder.jpg"} alt={post.title} />
// // // //                     <h4>{post.title}</h4>
// // // //                   </Link>
// // // //                 ))}
// // // //               </div>
// // // //               <div className="bottom-row">
// // // //                 {latestPosts.slice(3, 5).map(post => (
// // // //                   <Link key={post._id} to={`/post/${post.slug}`} className="latest-card big">
// // // //                     <img src={post.cover || "/placeholder.jpg"} alt={post.title} />
// // // //                     <h4>{post.title}</h4>
// // // //                   </Link>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </section>
// // // //         )}

// // // //         {/* Main Feed Grid */}
// // // //         <section className="main-feed-grid">
// // // //           {error && <ErrorState msg={error} />}
// // // //           <div className="grid-3">
// // // //             {posts.map(post => (
// // // //               <PostList key={post._id} posts={[post]} layout="card" />
// // // //             ))}
// // // //           </div>
// // // //           {loadingPosts && <Loader />}
// // // //           {!loadingPosts && hasMore &&
// // // //             <button className="load-more-btn" onClick={() => setPage(p => p + 1)}>Load More</button>
// // // //           }
// // // //           <div ref={loadMoreRef} style={{ height: 1 }} />
// // // //         </section>

// // // //         {showTop && (
// // // //           <button
// // // //             className="back-to-top"
// // // //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // // //           >
// // // //             ↑
// // // //           </button>
// // // //         )}
// // // //       </div>

// // // //       {/* Inline CSS for Latest Section */}
// // // //       <style>{`
// // // //         .latest-featured-section { margin:2.5rem 0; }
// // // //         .latest-featured-grid { display:flex; flex-direction:column; gap:1rem; }
// // // //         .latest-featured-grid .top-row { display:flex; gap:1rem; }
// // // //         .latest-featured-grid .bottom-row { display:flex; gap:1rem; }
// // // //         .latest-card { flex:1; display:flex; flex-direction:column; text-decoration:none; color:#111; overflow:hidden; border-radius:10px; cursor:pointer; transition:transform 0.3s ease, box-shadow 0.3s ease; }
// // // //         .latest-card img { width:100%; height:200px; object-fit:cover; transition:transform 0.3s ease; }
// // // //         .latest-card:hover img { transform:scale(1.08); }
// // // //         .latest-card h4 { padding:0.5rem 0.6rem; font-weight:700; font-size:1rem; line-height:1.2; color:#111; }
// // // //         .latest-card.big img { height:260px; }
// // // //         @media(max-width:768px){.latest-featured-grid .top-row, .latest-featured-grid .bottom-row{flex-direction:column;}.latest-card.big img{height:220px;}}
// // // //       `}</style>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Home;
// // // import React, { useEffect, useState, useRef, useCallback } from "react";
// // // import Seo from "../components/Seo.jsx";
// // // import { Loader, ErrorState } from "../components/Loader.jsx";
// // // import { Link } from "react-router-dom";
// // // import PostList from "../components/PostList.jsx";
// // // import "./Home.css";

// // // const POSTS_PER_PAGE = 9;

// // // const Home = () => {
// // //   const [posts, setPosts] = useState([]);
// // //   const [page, setPage] = useState(1);
// // //   const [hasMore, setHasMore] = useState(true);
// // //   const [loadingPosts, setLoadingPosts] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const loadMoreRef = useRef(null);
// // //   const scrollProgressRef = useRef(null);
// // //   const [showTop, setShowTop] = useState(false);

// // //   const [trendingPosts, setTrendingPosts] = useState([]);
// // //   const [sidePosts, setSidePosts] = useState([]);
// // //   const [latest5Posts, setLatest5Posts] = useState([]);

// // //   // Fetch paginated posts
// // //   const fetchPosts = useCallback(() => {
// // //     setLoadingPosts(true);
// // //     setError(null);
// // //     const url = new URL("http://localhost:4000/api/posts");
// // //     url.searchParams.set("page", page);
// // //     url.searchParams.set("limit", POSTS_PER_PAGE);

// // //     fetch(url.toString())
// // //       .then(res => {
// // //         if (!res.ok) throw new Error("Failed to load posts");
// // //         return res.json();
// // //       })
// // //       .then(data => {
// // //         const newPostsData = data.results || [];
// // //         setPosts(prev => (page === 1 ? newPostsData : [...prev, ...newPostsData]));
// // //         setHasMore(newPostsData.length === POSTS_PER_PAGE);
// // //         setLoadingPosts(false);
// // //       })
// // //       .catch(e => {
// // //         setError(e.message);
// // //         setLoadingPosts(false);
// // //       });
// // //   }, [page]);

// // //   useEffect(() => { fetchPosts(); }, [fetchPosts]);

// // //   // Infinite scroll observer
// // //   useEffect(() => {
// // //     if (!hasMore || loadingPosts) return;
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => { if (entry.isIntersecting) setPage(p => p + 1); },
// // //       { rootMargin: "200px" }
// // //     );
// // //     const current = loadMoreRef.current;
// // //     if (current) observer.observe(current);
// // //     return () => current && observer.unobserve(current);
// // //   }, [hasMore, loadingPosts]);

// // //   // Scroll progress bar
// // //   useEffect(() => {
// // //     const updateScrollProgress = () => {
// // //       if (!scrollProgressRef.current) return;
// // //       const scrollTop = window.scrollY;
// // //       const docHeight = document.body.scrollHeight - window.innerHeight;
// // //       const progress = Math.min((scrollTop / docHeight) * 100, 100);
// // //       scrollProgressRef.current.style.width = `${progress}%`;
// // //     };
// // //     window.addEventListener("scroll", updateScrollProgress);
// // //     return () => window.removeEventListener("scroll", updateScrollProgress);
// // //   }, []);

// // //   // Back to top button
// // //   useEffect(() => {
// // //     const onScroll = () => setShowTop(window.scrollY > 300);
// // //     window.addEventListener("scroll", onScroll);
// // //     return () => window.removeEventListener("scroll", onScroll);
// // //   }, []);

// // //   // Fetch trending, side posts, latest 5 posts
// // //   useEffect(() => {
// // //     fetch("http://localhost:4000/api/posts?limit=12")
// // //       .then(res => res.json())
// // //       .then(data => {
// // //         const all = data.results || [];
// // //         setTrendingPosts(all.filter(p => p.isTrending).slice(0, 1));
// // //         setSidePosts(all.filter(p => !p.isTrending).slice(0, 6));
// // //         setLatest5Posts(all.filter(p => !p.isTrending).slice(6, 11));
// // //       })
// // //       .catch(err => console.error(err));
// // //   }, []);

// // //   return (
// // //     <>
// // //       <Seo title="Home" description="Explore top articles and latest news" />
// // //       <div className="home-container">
// // //         <div className="scroll-progress-bar" ref={scrollProgressRef}></div>

// // //         {/* Trending + Side Posts */}
// // //         {trendingPosts.length > 0 && (
// // //           <section className="trending-section">
// // //             <h3 className="section-title">🔥 Trending Now</h3>
// // //             <div className="trending-layout">
// // //               <div className="trending-featured-wrap">
// // //                 <Link to={`/post/${trendingPosts[0].slug}`} className="trending-featured">
// // //                   <img src={trendingPosts[0].cover || "/placeholder.jpg"} alt={trendingPosts[0].title} />
// // //                   <div className="featured-content">
// // //                     <span className="category">{trendingPosts[0].category?.name || "Uncategorized"}</span>
// // //                     <h3>{trendingPosts[0].title}</h3>
// // //                   </div>
// // //                 </Link>
// // //               </div>

// // //               <div className="latest-articles-list">
// // //                 {sidePosts.map(post => (
// // //                   <Link key={post._id} to={`/post/${post.slug}`} className="latest-article-post">
// // //                     <h4>{post.title}</h4>
// // //                   </Link>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </section>
// // //         )}

// // //         {/* Latest 5 Posts Feature */}
// // //         {latest5Posts.length > 0 && (
// // //           <section className="latest-featured-section">
// // //             <h3 className="section-title">Latest Articles</h3>
// // //             <div className="latest-featured-grid">
// // //               <div className="top-row">
// // //                 {latest5Posts.slice(0, 3).map(post => (
// // //                   <Link key={post._id} to={`/post/${post.slug}`} className="latest-card big">
// // //                     <img src={post.cover || "/placeholder.jpg"} alt={post.title} />
// // //                     <h4>{post.title}</h4>
// // //                   </Link>
// // //                 ))}
// // //               </div>
// // //               <div className="bottom-row">
// // //                 {latest5Posts.slice(3, 5).map(post => (
// // //                   <Link key={post._id} to={`/post/${post.slug}`} className="latest-card">
// // //                     <img src={post.cover || "/placeholder.jpg"} alt={post.title} />
// // //                     <h4>{post.title}</h4>
// // //                   </Link>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </section>
// // //         )}

// // //         {/* Main Feed Grid */}
// // //         <section className="main-feed-grid">
// // //           {error && <ErrorState msg={error} />}
// // //           <div className="grid-3">
// // //             {posts.map(post => (
// // //               <PostList key={post._id} posts={[post]} layout="card" />
// // //             ))}
// // //           </div>
// // //           {loadingPosts && <Loader />}
// // //           {!loadingPosts && hasMore &&
// // //             <button className="load-more-btn" onClick={() => setPage(p => p + 1)}>Load More</button>
// // //           }
// // //           <div ref={loadMoreRef} style={{ height: 1 }} />
// // //         </section>

// // //         {showTop && (
// // //           <button
// // //             className="back-to-top"
// // //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // //           >
// // //             ↑
// // //           </button>
// // //         )}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Home;




import React, { useEffect, useState, useRef, useCallback } from "react";
import Seo from "../components/Seo.jsx";
import PostList from "../components/PostList.jsx";
import { Loader, ErrorState } from "../components/Loader.jsx";
import { Link } from "react-router-dom";
import "./Home.css";

const POSTS_PER_PAGE = 9;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);
  const loadMoreRef = useRef(null);
  const scrollProgressRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  const [trendingPosts, setTrendingPosts] = useState([]);
  const [newPosts, setNewPosts] = useState([]); // side latest
  const [latest5Posts, setLatest5Posts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);

  /** Fetch paginated posts */
  const fetchPosts = useCallback(() => {
    setLoadingPosts(true);
    setError(null);
    const url = new URL("http://localhost:4000/api/posts");
    url.searchParams.set("page", page);
    url.searchParams.set("limit", POSTS_PER_PAGE);

    fetch(url.toString())
      .then(res => {
        if (!res.ok) throw new Error("Failed to load posts");
        return res.json();
      })
      .then(data => {
        const newPostsData = data.results || [];
        setPosts(prev => (page === 1 ? newPostsData : [...prev, ...newPostsData]));
        setHasMore(newPostsData.length === POSTS_PER_PAGE);
        setLoadingPosts(false);
      })
      .catch(e => {
        setError(e.message);
        setLoadingPosts(false);
      });
  }, [page]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  /** Infinite scroll observer */
  useEffect(() => {
    if (!hasMore || loadingPosts) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setPage(p => p + 1); },
      { rootMargin: "200px" }
    );
    const current = loadMoreRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, [hasMore, loadingPosts]);

  /** Scroll progress bar */
  useEffect(() => {
    const updateScrollProgress = () => {
      if (!scrollProgressRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      scrollProgressRef.current.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  /** Back to top button */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Fetch trending + side latest + latest 5 + categories + featured */
  useEffect(() => {
    fetch("http://localhost:4000/api/posts?limit=20")
      .then(res => res.json())
      .then(data => {
        const all = data.results || [];

        const trending = all.filter(p => p.isTrending).slice(0, 1);
        const sideLatest = all.filter(p => !p.isTrending).slice(0, 6);
        const latest5 = all.filter(p => !p.isTrending).slice(0, 5);

        setTrendingPosts(trending);
        setNewPosts(sideLatest);
        setLatest5Posts(latest5);

        // Pick a featured post (first from latest posts not trending)
        setFeaturedPost(all.find(p => !p.isTrending));

        // Get unique categories from posts
        const uniqueCats = [...new Map(all.map(p => [p.category?._id, p.category])).values()].filter(Boolean);
        setCategories(uniqueCats);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Seo title="Home" description="Explore top articles and latest news" />
      <div className="home-container">
        <div className="scroll-progress-bar" ref={scrollProgressRef}></div>

        {/* Trending Section */}
        {trendingPosts.length > 0 && (
          <section className="trending-section">
            <h3 className="section-title">🔥 Trending Now</h3>
            <div className="trending-layout">
              <div className="trending-featured-wrap">
                <Link to={`/post/${trendingPosts[0].slug}`} className="trending-featured">
                  <img src={trendingPosts[0].cover || "/placeholder.jpg"} alt={trendingPosts[0].title} />
                  <div className="featured-content">
                    <span className="category">{trendingPosts[0].category?.name || "Uncategorized"}</span>
                    <h3>{trendingPosts[0].title}</h3>
                  </div>
                </Link>
              </div>

              <div className="latest-articles-list">
                {newPosts.slice(0, 5).map(post => (
                  <Link key={post._id} to={`/post/${post.slug}`} className="latest-article-post">
                    <h4>{post.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Latest 5 Posts Section */}
        {latest5Posts.length > 0 && (
          <section className="latest5-posts-section">
            <h3 className="section-title">Latest Articles</h3>
            <div className="latest5-grid">
              {latest5Posts.slice(0, 3).map(post => (
                <Link key={post._id} to={`/post/${post.slug}`} className="latest5-card">
                  <img src={post.cover || "/placeholder.jpg"} alt={post.title} />
                  <h4>{post.title}</h4>
                </Link>
              ))}
            </div>
            <div className="latest5-grid latest5-bottom">
              {latest5Posts.slice(3, 5).map(post => (
                <Link key={post._id} to={`/post/${post.slug}`} className="latest5-card">
                  <img src={post.cover || "/placeholder.jpg"} alt={post.title} />
                  <h4>{post.title}</h4>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Featured Section */}
        {featuredPost && (
          <section className="home-feature-section">
            <Link to={`/post/${featuredPost.slug}`} className="feature-card">
              <img src={featuredPost.cover || "/placeholder.jpg"} alt={featuredPost.title} />
              <div className="feature-content">
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.shortDescription || featuredPost.title}</p>
                <button>Read More</button>
              </div>
            </Link>
          </section>
        )}

        {/* Category-wise Sections */}
        {categories.map(category => {
          const categoryPosts = posts.filter(p => p.category?.slug === category.slug);
          if (!categoryPosts.length) return null;
          return (
            <section key={category._id} className="category-section">
              <h3 className="category-title">{category.name}</h3>
              <div className="category-posts-grid">
                {categoryPosts.slice(0, 4).map(post => (
                  <Link key={post._id} to={`/post/${post.slug}`} className="category-post-card">
                    <img src={post.cover || "/placeholder.jpg"} alt={post.title} />
                    <h4>{post.title}</h4>
                  </Link>
                ))}
              </div>
              <Link to={`/search?q=${encodeURIComponent(category.slug)}`} className="see-all-btn">
                See All
              </Link>
            </section>
          );
        })}

        {/* Main Feed Grid */}
        <section className="main-feed-grid">
          {error && <ErrorState msg={error} />}
          <div className="grid-3">
            {posts.map(post => (
              <PostList key={post._id} posts={[post]} layout="card" />
            ))}
          </div>
          {loadingPosts && <Loader />}
          {!loadingPosts && hasMore &&
            <button className="load-more-btn" onClick={() => setPage(p => p + 1)}>Load More</button>
          }
          <div ref={loadMoreRef} style={{ height: 1 }} />
        </section>

        {showTop && (
          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        )}
      </div>
    </>
  );
};

export default Home;



