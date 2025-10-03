




// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, useSearchParams } from "react-router-dom";
// // // // import Seo from "../components/Seo.jsx";
// // // // import PostList from "../components/PostList.jsx";
// // // // import Pagination from "../components/Pagination.jsx";
// // // // import { Loader, ErrorState } from "../components/Loader.jsx";
// // // // import { getCategoryFeed } from "../api/client.js";

// // // // const Category = () => {
// // // //   const { slug } = useParams(); // category slug from URL
// // // //   const [params, setParams] = useSearchParams();
// // // //   const pageParam = Number(params.get("page") || 1);

// // // //   const [state, setState] = useState({
// // // //     loading: true,
// // // //     error: null,
// // // //     data: null,
// // // //   });

// // // //   useEffect(() => {
// // // //     setState({ loading: true, error: null, data: null });

// // // //     getCategoryFeed(slug, pageParam, 12) // fetch posts filtered by category
// // // //       .then(({ data }) => setState({ loading: false, error: null, data }))
// // // //       .catch((e) => setState({ loading: false, error: e.message, data: null }));
// // // //   }, [slug, pageParam]);

// // // //   if (state.loading) return <Loader />;
// // // //   if (state.error) return <ErrorState msg={state.error} />;

// // // //   const { category, posts, page, totalPages } = state.data || {};

// // // //   const changePage = (p) => setParams({ page: String(p) });

// // // //   return (
// // // //     <>
// // // //       <Seo title={`${category?.name || slug} articles`} />
// // // //       <div className="container">
// // // //         <h2 className="section-title">{category?.name || slug}</h2>
// // // //         <PostList posts={posts || []} />
// // // //         {totalPages > 1 && (
// // // //           <Pagination page={page} pages={totalPages} onPage={changePage} />
// // // //         )}
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Category;


// // // import React, { useEffect, useState } from "react";
// // // import { useParams, useSearchParams } from "react-router-dom";
// // // import Seo from "../components/Seo.jsx";
// // // import PostList from "../components/PostList.jsx";
// // // import Pagination from "../components/Pagination.jsx";
// // // import { Loader, ErrorState } from "../components/Loader.jsx";
// // // import { getCategoryFeed } from "../api/client.js";

// // // const Category = () => {
// // //   const { slug } = useParams();
// // //   const [params, setParams] = useSearchParams();
// // //   const pageParam = Number(params.get("page") || 1);

// // //   const [state, setState] = useState({
// // //     loading: true,
// // //     error: null,
// // //     data: null,
// // //   });

// // //   useEffect(() => {
// // //     setState({ loading: true, error: null, data: null });

// // //     getCategoryFeed(slug, pageParam, 12) // Fetch posts filtered by category and page
// // //       .then(({ data }) => setState({ loading: false, error: null, data }))
// // //       .catch((e) => setState({ loading: false, error: e.message, data: null }));
// // //   }, [slug, pageParam]);

// // //   if (state.loading) return <Loader />;
// // //   if (state.error) return <ErrorState msg={state.error} />;

// // //   const { category, posts, page, totalPages } = state.data || {};

// // //   const changePage = (p) => setParams({ page: String(p) });

// // //   return (
// // //     <>
// // //       <Seo title={`${category?.name || slug} articles`} />
// // //       <div className="category-container">
// // //         <header className="category-header">
// // //           <h2>{category?.name || slug}</h2>
// // //           <p className="category-description">
// // //             {category?.description ||
// // //               "Explore the latest articles in this category."}
// // //           </p>
// // //         </header>

// // //         <PostList posts={posts || []} layout="grid" />

// // //         {totalPages > 1 && (
// // //           <Pagination page={page} pages={totalPages} onPage={changePage} />
// // //         )}
// // //       </div>

// // //       <style>{`
// // //         .category-container {
// // //           max-width: 960px;
// // //           margin: 40px auto 60px;
// // //           padding: 0 16px;
// // //         }
// // //         .category-header {
// // //           text-align: center;
// // //           margin-bottom: 36px;
// // //           border-bottom: 2px solid #6278f7;
// // //           padding-bottom: 12px;
// // //         }
// // //         .category-header h2 {
// // //           font-size: 2.4rem;
// // //           font-weight: 700;
// // //           margin: 0;
// // //           color: #4054b2;
// // //           text-transform: capitalize;
// // //         }
// // //         .category-description {
// // //           color: #555d8a;
// // //           font-size: 1.05rem;
// // //           margin-top: 6px;
// // //           font-weight: 400;
// // //         }
// // //         @media (max-width: 600px) {
// // //           .category-container {
// // //             margin: 30px auto 40px;
// // //             padding: 0 12px;
// // //           }
// // //           .category-header h2 {
// // //             font-size: 1.8rem;
// // //           }
// // //           .category-description {
// // //             font-size: 0.9rem;
// // //           }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // };

// // // export default Category;



// import React, { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
// import Seo from "../components/Seo.jsx";
// import PostList from "../components/PostList.jsx";
// import Pagination from "../components/Pagination.jsx";
// import { Loader, ErrorState } from "../components/Loader.jsx";
// import { getCategoryFeed } from "../api/client.js";

// const Category = () => {
//   const { slug } = useParams(); // category slug from URL
//   const [params, setParams] = useSearchParams();
//   const pageParam = Number(params.get("page") || 1);

//   const [state, setState] = useState({
//     loading: true,
//     error: null,
//     data: null,
//   });

//   useEffect(() => {
//     setState({ loading: true, error: null, data: null });

//     getCategoryFeed(slug, pageParam, 12) // fetch posts filtered by category
//       .then(({ data }) => setState({ loading: false, error: null, data }))
//       .catch((e) => setState({ loading: false, error: e.message, data: null }));
//   }, [slug, pageParam]);

//   if (state.loading) return <Loader />;
//   if (state.error) return <ErrorState msg={state.error} />;

//   const { category, posts, page, totalPages } = state.data || {};

//   const changePage = (p) => setParams({ page: String(p) });

//   return (
//     <>
//       <Seo title={`${category?.name || slug} articles`} />
//       <div className="container">
//         <h2 className="section-title">{category?.name || slug}</h2>
//         <PostList posts={posts || []} />
//         {totalPages > 1 && (
//           <Pagination page={page} pages={totalPages} onPage={changePage} />
//         )}
//       </div>
//     </>
//   );
// };

// export default Category;



// import React, { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
// import Seo from "../components/Seo.jsx";
// import PostList from "../components/PostList.jsx";
// import Pagination from "../components/Pagination.jsx";
// import { Loader, ErrorState } from "../components/Loader.jsx";
// import { getCategoryFeed } from "../api/client.js";

// const Category = () => {
//   const { slug } = useParams();
//   const [params, setParams] = useSearchParams();
//   const pageParam = Number(params.get("page") || 1);

//   const [state, setState] = useState({
//     loading: true,
//     error: null,
//     data: null,
//   });

//   useEffect(() => {
//     setState({ loading: true, error: null, data: null });

//     getCategoryFeed(slug, pageParam, 12) // Fetch posts filtered by category and page
//       .then(({ data }) => setState({ loading: false, error: null, data }))
//       .catch((e) => setState({ loading: false, error: e.message, data: null }));
//   }, [slug, pageParam]);

//   if (state.loading) return <Loader />;
//   if (state.error) return <ErrorState msg={state.error} />;

//   const { category, posts, page, totalPages } = state.data || {};

//   const changePage = (p) => setParams({ page: String(p) });

//   return (
//     <>
//       <Seo title={`${category?.name || slug} articles`} />
//       <div className="category-container">
//         <header className="category-header">
//           <h2>{category?.name || slug}</h2>
//           <p className="category-description">
//             {category?.description ||
//               "Explore the latest articles in this category."}
//           </p>
//         </header>

//         <PostList posts={posts || []} layout="grid" />

//         {totalPages > 1 && (
//           <Pagination page={page} pages={totalPages} onPage={changePage} />
//         )}
//       </div>

//       <style>{`
//         .category-container {
//           max-width: 960px;
//           margin: 40px auto 60px;
//           padding: 0 16px;
//         }
//         .category-header {
//           text-align: center;
//           margin-bottom: 36px;
//           border-bottom: 2px solid #6278f7;
//           padding-bottom: 12px;
//         }
//         .category-header h2 {
//           font-size: 2.4rem;
//           font-weight: 700;
//           margin: 0;
//           color: #4054b2;
//           text-transform: capitalize;
//         }
//         .category-description {
//           color: #555d8a;
//           font-size: 1.05rem;
//           margin-top: 6px;
//           font-weight: 400;
//         }
//         @media (max-width: 600px) {
//           .category-container {
//             margin: 30px auto 40px;
//             padding: 0 12px;
//           }
//           .category-header h2 {
//             font-size: 1.8rem;
//           }
//           .category-description {
//             font-size: 0.9rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Category;






import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import PostList from "../components/PostList.jsx";
import Pagination from "../components/Pagination.jsx";
import { Loader, ErrorState } from "../components/Loader.jsx";
import { getCategoryFeed } from "../api/client.js";

const Category = () => {
  const { slug } = useParams();
  const [params, setParams] = useSearchParams();
  const pageParam = Number(params.get("page") || 1);

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    setState({ loading: true, error: null, data: null });
    getCategoryFeed(slug, pageParam, 12)
      .then(({ data }) => setState({ loading: false, error: null, data }))
      .catch((e) => setState({ loading: false, error: e.message, data: null }));
  }, [slug, pageParam]);

  if (state.loading) return <Loader />;
  if (state.error) return <ErrorState msg={state.error} />;

  const { category, posts, page, totalPages } = state.data || {};
  const changePage = (p) => setParams({ page: String(p) });

  return (
    <>
      <Seo title={`${category?.name || slug} articles`} />
      <div className="category-container">
        {/* Hero-like header */}
        <header className="category-header">
          <h2>{category?.name || slug}</h2>
          <p className="category-description">
            {category?.description || "Explore the latest articles in this category."}
          </p>
        </header>

        {/* Posts grid */}
        <PostList posts={posts || []} layout="grid" />

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination page={page} pages={totalPages} onPage={changePage} />
        )}
      </div>

      {/* Category page styles */}
      <style>{`
        .category-container {
          max-width: 1024px;
          margin: 50px auto 80px;
          padding: 0 20px;
        }

        .category-header {
          text-align: center;
          margin-bottom: 50px;
          padding: 30px 20px;
          border-radius: 15px;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: #fff;
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
          position: relative;
          overflow: hidden;
        }

        .category-header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%);
          animation: rotateOverlay 15s linear infinite;
        }

        @keyframes rotateOverlay {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .category-header h2 {
          font-size: 3rem;
          font-weight: 900;
          margin: 0;
          text-transform: capitalize;
          position: relative;
          z-index: 1;
          text-shadow: 2px 2px 6px rgba(0,0,0,0.4);
        }

        .category-description {
          font-size: 1.2rem;
          margin-top: 12px;
          font-weight: 400;
          color: rgba(255,255,255,0.9);
          z-index: 1;
          position: relative;
        }

        /* Post card hover effect */
        .post-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          border-radius: 12px;
          overflow: hidden;
        }
        .post-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 18px 35px rgba(0,0,0,0.2);
        }

        .post-card img {
          border-radius: 12px;
          transition: transform 0.4s ease;
        }
        .post-card img:hover {
          transform: scale(1.05);
        }

        /* Pagination styling */
        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 45px;
          gap: 10px;
        }
        .pagination button {
          background: linear-gradient(135deg, #2575fc, #6a11cb);
          border: none;
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .pagination button:hover {
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          transform: scale(1.05);
        }
        .pagination button.active {
          background: linear-gradient(135deg, #f7971e, #ffd200);
          color: #333;
          transform: scale(1.08);
        }

        @media (max-width: 768px) {
          .category-container {
            margin: 30px auto 60px;
            padding: 0 15px;
          }
          .category-header h2 {
            font-size: 2.2rem;
          }
          .category-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .category-header h2 {
            font-size: 1.7rem;
          }
          .category-description {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default Category;
