


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
