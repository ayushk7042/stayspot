// // import React, { useEffect, useState } from "react";
// // import { useSearchParams } from "react-router-dom";
// // import PostList from "../components/PostList.jsx";
// // import { Loader, ErrorState } from "../components/Loader.jsx";
// // import Seo from "../components/Seo.jsx";

// // const PAGE_SIZE = 12;

// // const Search = () => {
// //   const [params, setParams] = useSearchParams();
// //   const q = params.get("q") || "";
// //   const pageParam = Number(params.get("page") || 1);

// //   const [articles, setArticles] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [totalResults, setTotalResults] = useState(0);
// //   const [page, setPage] = useState(pageParam);

// //   useEffect(() => {
// //     if (!q) {
// //       setArticles([]);
// //       setTotalResults(0);
// //       return;
// //     }
// //     setLoading(true);
// //     setError(null);
// //     fetch(`http://localhost:4000/api/posts/category/${q}?page=${page}&limit=${PAGE_SIZE}`)
// //       .then(res => {
// //         if (!res.ok) throw new Error("Failed to fetch search results");
// //         return res.json();
// //       })
// //       .then(data => {
// //         setArticles(data.posts || []);
// //         setTotalResults(data.total || data.posts?.length || 0);
// //         setLoading(false);
// //       })
// //       .catch(e => {
// //         setError(e.message);
// //         setLoading(false);
// //       });
// //   }, [q, page]);

// //   const onSubmit = (e) => {
// //     e.preventDefault();
// //     const query = new FormData(e.currentTarget).get("q")?.trim();
// //     setPage(1);
// //     setParams(query ? { q: query, page: "1" } : {});
// //   };

// //   const handlePageChange = (newPage) => {
// //     if (newPage < 1 || newPage > Math.ceil(totalResults / PAGE_SIZE)) return;
// //     setPage(newPage);
// //     setParams({ q, page: newPage.toString() });
// //   };

// //   return (
// //     <div className="container">
// //       <Seo title={q ? `Search: ${q}` : "Search"} description={`Search results for "${q}"`} />

// //       <form onSubmit={onSubmit} className="search-bar" autoComplete="off">
// //         <input name="q" defaultValue={q} placeholder="Search by category slug (e.g. technology)" />
// //         <button type="submit">Search</button>
// //       </form>

// //       {loading && <Loader />}
// //       {error && <ErrorState msg={error} />}
      
// //       {!loading && !error && articles.length > 0 && (
// //         <>
// //           <h3>Results for “{q}”</h3>
// //           <PostList
// //             posts={articles}
// //             currentPage={page}
// //             totalPages={Math.ceil(totalResults / PAGE_SIZE)}
// //             onPageChange={handlePageChange}
// //             layout="list"
// //           />
// //         </>
// //       )}
// //       {!loading && !error && articles.length === 0 && q && (
// //         <p>No articles found for "{q}".</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Search;




// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import PostList from "../components/PostList.jsx";
// import { Loader, ErrorState } from "../components/Loader.jsx";
// import Seo from "../components/Seo.jsx";

// const PAGE_SIZE = 12;

// const Search = () => {
//   const [params, setParams] = useSearchParams();
//   const q = params.get("q") || "";
//   const pageParam = Number(params.get("page") || 1);

//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [totalResults, setTotalResults] = useState(0);
//   const [page, setPage] = useState(pageParam);

//   useEffect(() => {
//     if (!q) {
//       setArticles([]);
//       setTotalResults(0);
//       return;
//     }
//     setLoading(true);
//     setError(null);
//     fetch(`http://localhost:4000/api/posts/category/${q}?page=${page}&limit=${PAGE_SIZE}`)
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch search results");
//         return res.json();
//       })
//       .then(data => {
//         setArticles(data.posts || []);
//         setTotalResults(data.total || data.posts?.length || 0);
//         setLoading(false);
//       })
//       .catch(e => {
//         setError(e.message);
//         setLoading(false);
//       });
//   }, [q, page]);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const query = new FormData(e.currentTarget).get("q")?.trim();
//     setPage(1);
//     setParams(query ? { q: query, page: "1" } : {});
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage < 1 || newPage > Math.ceil(totalResults / PAGE_SIZE)) return;
//     setPage(newPage);
//     setParams({ q, page: newPage.toString() });
//   };

//   return (
//     <div className="search-page-container">
//       <Seo title={q ? `Search: ${q}` : "Search"} description={`Search results for "${q}"`} />

//       <form onSubmit={onSubmit} className="search-bar" autoComplete="off">
//         <input name="q" defaultValue={q} placeholder="Search by category slug (e.g. technology)" />
//         <button type="submit">🔍</button>
//       </form>

//       {loading && <Loader />}
//       {error && <ErrorState msg={error} />}
      
//       {!loading && !error && articles.length > 0 && (
//         <>
//           <h3 className="search-results-title">Results for “{q}”</h3>
//           <PostList
//             posts={articles}
//             currentPage={page}
//             totalPages={Math.ceil(totalResults / PAGE_SIZE)}
//             onPageChange={handlePageChange}
//             layout="list"
//           />
//         </>
//       )}
//       {!loading && !error && articles.length === 0 && q && (
//         <p className="no-results">No articles found for "{q}".</p>
//       )}

//       <style>{`
//         .search-page-container {
//           max-width: 1200px;
//           margin: 2rem auto;
//           padding: 0 1rem;
//         }

//         .search-bar {
//           display: flex;
//           gap: 0.5rem;
//           margin-bottom: 2rem;
//           justify-content: center;
//           align-items: center;
//         }

//         .search-bar input {
//           flex: 1;
//           padding: 0.6rem 1rem;
//           font-size: 1rem;
//           border: 2px solid #d1d5db;
//           border-radius: 50px;
//           outline: none;
//           transition: all 0.3s ease;
//         }

//         .search-bar input:focus {
//           border-color: #4338ca;
//           box-shadow: 0 0 10px rgba(67,56,202,0.3);
//         }

//         .search-bar button {
//           padding: 0.6rem 1.5rem;
//           font-size: 1rem;
//           background: #4338ca;
//           color: white;
//           border: none;
//           border-radius: 50px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .search-bar button:hover {
//           background: #5b46ff;
//           transform: scale(1.05);
//         }

//         .search-results-title {
//           font-size: 1.8rem;
//           font-weight: 700;
//           margin-bottom: 1.5rem;
//           color: #222;
//           text-align: center;
//           animation: fadeIn 0.8s ease forwards;
//         }

//         .no-results {
//           text-align: center;
//           color: #9ca3af;
//           font-size: 1.1rem;
//           margin-top: 2rem;
//         }

//         /* Pagination styling inside PostList */
//         .pagination {
//           display: flex;
//           justify-content: center;
//           gap: 0.5rem;
//           margin-top: 2rem;
//         }

//         .pagination button {
//           padding: 0.5rem 1rem;
//           border-radius: 8px;
//           border: 1px solid #4338ca;
//           background: white;
//           cursor: pointer;
//           font-weight: 600;
//           transition: all 0.3s ease;
//         }

//         .pagination button:hover, .pagination button.active {
//           background: #4338ca;
//           color: white;
//           transform: scale(1.05);
//         }

//         @keyframes fadeIn {
//           0% {opacity: 0; transform: translateY(10px);}
//           100% {opacity: 1; transform: translateY(0);}
//         }

//         /* Responsive adjustments */
//         @media (max-width: 768px) {
//           .search-bar {
//             flex-direction: column;
//           }
//           .search-bar input { width: 100%; }
//           .search-bar button { width: 100%; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Search;


import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PostList from "../components/PostList.jsx";
import { Loader, ErrorState } from "../components/Loader.jsx";
import Seo from "../components/Seo.jsx";

const PAGE_SIZE = 12;

const Search = () => {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const pageParam = Number(params.get("page") || 1);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(pageParam);

  useEffect(() => {
    if (!q) {
      setArticles([]);
      setTotalResults(0);
      return;
    }
    setLoading(true);
    setError(null);
    fetch(`http://localhost:4000/api/posts/category/${q}?page=${page}&limit=${PAGE_SIZE}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch search results");
        return res.json();
      })
      .then(data => {
        setArticles(data.posts || []);
        setTotalResults(data.total || data.posts?.length || 0);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setLoading(false);
      });
  }, [q, page]);

  const onSubmit = (e) => {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get("q")?.trim();
    setPage(1);
    setParams(query ? { q: query, page: "1" } : {});
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(totalResults / PAGE_SIZE)) return;
    setPage(newPage);
    setParams({ q, page: newPage.toString() });
  };

  return (
    <div className="search-page-container">
      <Seo title={q ? `Search: ${q}` : "Search"} description={`Search results for "${q}"`} />

      <form onSubmit={onSubmit} className="search-bar" autoComplete="off">
        <input name="q" defaultValue={q} placeholder="Search by category slug (e.g. technology)" />
        <button type="submit">🔍</button>
      </form>

      {loading && <Loader />}
      {error && <ErrorState msg={error} />}

      {!loading && !error && articles.length > 0 && (
        <>
          <h3 className="search-results-title">Results for “{q}”</h3>
          <div className="grid-3">
            {articles.map(post => (
              <PostList key={post._id} posts={[post]} layout="card" />
            ))}
          </div>

          {/* Pagination */}
          {totalResults > PAGE_SIZE && (
            <div className="pagination">
              {Array.from({ length: Math.ceil(totalResults / PAGE_SIZE) }, (_, i) => (
                <button
                  key={i + 1}
                  className={page === i + 1 ? "active" : ""}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {!loading && !error && articles.length === 0 && q && (
        <p className="no-results">No articles found for "{q}".</p>
      )}

      <style>{`
        .search-page-container {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        .search-bar {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          justify-content: center;
          align-items: center;
        }
        .search-bar input {
          flex: 1;
          padding: 0.6rem 1rem;
          font-size: 1rem;
          border: 2px solid #d1d5db;
          border-radius: 50px;
          outline: none;
          transition: all 0.3s ease;
        }
        .search-bar input:focus {
          border-color: #4338ca;
          box-shadow: 0 0 10px rgba(67,56,202,0.3);
        }
        .search-bar button {
          padding: 0.6rem 1.5rem;
          font-size: 1rem;
          background: #4338ca;
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .search-bar button:hover {
          background: #5b46ff;
          transform: scale(1.05);
        }
        .search-results-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #222;
          text-align: center;
          animation: fadeIn 0.8s ease forwards;
        }
        .no-results {
          text-align: center;
          color: #9ca3af;
          font-size: 1.1rem;
          margin-top: 2rem;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }
        .pagination {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        .pagination button {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid #4338ca;
          background: white;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .pagination button:hover, .pagination button.active {
          background: #4338ca;
          color: white;
          transform: scale(1.05);
        }
        @keyframes fadeIn {
          0% {opacity: 0; transform: translateY(10px);}
          100% {opacity: 1; transform: translateY(0);}
        }
        @media (max-width: 768px) {
          .search-bar {
            flex-direction: column;
          }
          .search-bar input { width: 100%; }
          .search-bar button { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Search;
