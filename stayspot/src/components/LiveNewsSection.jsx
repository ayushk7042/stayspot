// import React, { useEffect, useState, useRef } from "react";
// import { FaNewspaper, FaSyncAlt, FaClock } from "react-icons/fa";

// // Simulated icon map by category slug or status
// const iconMap = {
//   business: <FaNewspaper color="#2563eb" />,
//   technology: <FaNewspaper color="#10b981" />,
//   environment: <FaNewspaper color="#84cc16" />,
//   trending: <FaNewspaper color="#f59e0b" />,
//   default: <FaNewspaper color="#64748b" />,
// };

// const LiveNewsSection = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const refreshIntervalRef = useRef(null);

//   // Fetch live news articles from API
//   const fetchLiveNews = () => {
//     setLoading(true);
//     setError(null);

//     fetch("000710dd7df24433a516c43522e32412") // replace with your live news API
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to load live news");
//         return res.json();
//       })
//       .then((data) => {
//         setNews(data.slice(0, 8)); // top 8 latest articles
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchLiveNews();
//     // Auto refresh every 60 seconds (adjust as needed)
//     refreshIntervalRef.current = setInterval(fetchLiveNews, 60000);
//     return () => clearInterval(refreshIntervalRef.current);
//   }, []);

//   // Format published time 'hh:mm:ss' or 'x seconds ago'
//   const formatTime = (dateStr) => {
//     const date = new Date(dateStr);
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
//   };

//   return (
//     <section className="live-news-section" aria-label="Live news feed">
//       <header className="live-news-header">
//         <h2>Live Green News</h2>
//         <button
//           aria-label="Refresh live news"
//           className="refresh-button"
//           onClick={fetchLiveNews}
//           title="Refresh news"
//         >
//           <FaSyncAlt size={18} />
//         </button>
//       </header>

//       {loading && <p className="loading-text">Loading live news...</p>}
//       {error && <p className="error-text">Error loading news: {error}</p>}

//       {!loading && !error && (
//         <ul className="news-list">
//           {news.map(({ _id, title, category, publishedAt, slug }) => (
//             <li key={_id} className="news-item" tabIndex={0}>
//               <a href={`/posts/${slug}`} className="news-link" aria-label={`Read full article: ${title}`}>
//                 <span className="news-icon" aria-hidden="true">
//                   {iconMap[category?.slug] || iconMap.default}
//                 </span>
//                 <span className="news-title">{title}</span>
//                 <time className="news-time" dateTime={publishedAt}>
//                   <FaClock aria-hidden="true" /> {formatTime(publishedAt)}
//                 </time>
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}

//       <style>{`
//         .live-news-section {
//           max-width: 900px;
//           margin: 3rem auto;
//           padding: 1.5rem;
//           background: #e6fffa;
//           border-radius: 12px;
//           box-shadow: 0 10px 25px rgb(0 0 0 / 0.05);
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         }
//         .live-news-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 1rem;
//           border-bottom: 1px solid #b2f5ea;
//           padding-bottom: 0.5rem;
//           color: #065f46;
//         }
//         .live-news-header h2 {
//           margin: 0;
//           font-size: 1.8rem;
//           font-weight: 700;
//         }
//         .refresh-button {
//           background: none;
//           border: none;
//           color: #065f46;
//           cursor: pointer;
//           padding: 5px;
//           border-radius: 50%;
//           transition: background-color 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .refresh-button:hover, .refresh-button:focus-visible {
//           background-color: #c6f6d5;
//           outline: none;
//         }
//         .loading-text,
//         .error-text {
//           text-align: center;
//           color: #4a5568;
//           font-style: italic;
//         }
//         .error-text {
//           color: #e53e3e;
//         }
//         .news-list {
//           list-style: none;
//           margin: 0;
//           padding: 0;
//         }
//         .news-item + .news-item {
//           margin-top: 0.8rem;
//         }
//         .news-link {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           color: #065f46;
//           font-weight: 600;
//           font-size: 1rem;
//           text-decoration: none;
//           padding: 0.5rem 0.75rem;
//           border-radius: 6px;
//           transition: background-color 0.3s ease;
//         }
//         .news-link:hover, .news-link:focus-visible {
//           background-color: #b2f5ea;
//           outline: none;
//         }
//         .news-icon {
//           flex-shrink: 0;
//           font-size: 1.3rem;
//           color: #22c55e;
//         }
//         .news-title {
//           flex-grow: 1;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }
//         .news-time {
//           display: flex;
//           align-items: center;
//           gap: 0.3rem;
//           font-size: 0.825rem;
//           font-weight: 500;
//           color: #38a169;
//           white-space: nowrap;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LiveNewsSection;



import React, { useEffect, useState, useRef } from "react";
import { FaNewspaper, FaSyncAlt, FaClock } from "react-icons/fa";

const iconMap = {
  business: <FaNewspaper color="#2563eb" />,
  technology: <FaNewspaper color="#10b981" />,
  environment: <FaNewspaper color="#84cc16" />,
  trending: <FaNewspaper color="#f59e0b" />,
  default: <FaNewspaper color="#64748b" />,
};

const API_KEY = "2bc8f70d10879b1634434dd89715152e";
const NEWS_API_URL = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&topic=environment&max=8`;

const LiveNewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshIntervalRef = useRef(null);

  const fetchLiveNews = () => {
    setLoading(true);
    setError(null);

    fetch(NEWS_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load live news");
        return res.json();
      })
      .then((data) => {
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLiveNews();
    refreshIntervalRef.current = setInterval(fetchLiveNews, 60000);
    return () => clearInterval(refreshIntervalRef.current);
  }, []);

  const formatTime = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <section className="live-news-section" aria-label="Live news feed">
      <header className="live-news-header">
        <h2>Latest News</h2>
        <button
          aria-label="Refresh live news"
          className="refresh-button"
          onClick={fetchLiveNews}
          title="Refresh news"
        >
          <FaSyncAlt size={18} />
        </button>
      </header>

      {loading && <p className="loading-text">Loading live news...</p>}
      {error && <p className="error-text">Error loading news: {error}</p>}

      {!loading && !error && news.length === 0 && <p>No live news available.</p>}

      {!loading && !error && news.length > 0 && (
        <ul className="news-list">
          {news.map(({ url, title, publishedAt, source, category }, i) => {
            const categorySlug = category?.toLowerCase() || source?.name?.toLowerCase() || "default";
            return (
              <li key={i} className="news-item" tabIndex={0}>
                <a
                  href={url}
                  className="news-link"
                  aria-label={`Read full article: ${title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="news-icon" aria-hidden="true">
                    {iconMap[categorySlug] || iconMap.default}
                  </span>
                  <span className="news-title">{title}</span>
                  <time className="news-time" dateTime={publishedAt}>
                    <FaClock aria-hidden="true" /> {formatTime(publishedAt)}
                  </time>
                </a>
              </li>
            );
          })}
        </ul>
      )}

      <style>{`
        .live-news-section {
          max-width: 900px;
          margin: 3rem auto;
          padding: 1.5rem;
          background: #e6fffa;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgb(0 0 0 / 0.05);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .live-news-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          border-bottom: 1px solid #b2f5ea;
          padding-bottom: 0.5rem;
          color: #065f46;
        }
        .live-news-header h2 {
          margin: 0;
          font-size: 1.8rem;
          font-weight: 700;
        }
        .refresh-button {
          background: none;
          border: none;
          color: #065f46;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .refresh-button:hover,
        .refresh-button:focus-visible {
          background-color: #c6f6d5;
          outline: none;
        }
        .loading-text,
        .error-text {
          text-align: center;
          color: #4a5568;
          font-style: italic;
        }
        .error-text {
          color: #e53e3e;
        }
        .news-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .news-item + .news-item {
          margin-top: 0.8rem;
        }
        .news-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #065f46;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          transition: background-color 0.3s ease;
        }
        .news-link:hover,
        .news-link:focus-visible {
          background-color: #b2f5ea;
          outline: none;
        }
        .news-icon {
          flex-shrink: 0;
          font-size: 1.3rem;
          color: #22c55e;
        }
        .news-title {
          flex-grow: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .news-time {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.825rem;
          font-weight: 500;
          color: #38a169;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
};

export default LiveNewsSection;
