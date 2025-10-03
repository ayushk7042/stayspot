// // // import React from "react";

// // // const PostCard = ({ post, variant = "vertical" }) => {
// // //   // Support fields for both backend and NewsAPI article shape
// // //   const {
// // //     url,
// // //     urlToImage,
// // //     title,
// // //     description,
// // //     publishedAt,
// // //     source,
// // //     category,
// // //     author,
// // //     slug,
// // //     thumbnail,
// // //     cover,
// // //   } = post;

// // //   const linkUrl = url || (slug ? `/article/${slug}` : "#");
// // //   const imageSrc = urlToImage || thumbnail || cover || "/placeholder.jpg";
// // //   const displayTitle = title || "Untitled Article";
// // //   const displayDesc = description || post.excerpt || "";
// // //   const displayDate = publishedAt ? new Date(publishedAt).toLocaleDateString() : "";
// // //   const displaySource = source?.name || category?.name || author?.name || "Unknown";

// // //   // Horizontal variant gets different layout (optional tweak)
// // //   return (
// // //     <article className={`postcard ${variant}`}>
// // //       <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="thumb">
// // //         <img src={imageSrc} alt={displayTitle} loading="lazy" />
// // //       </a>
// // //       <div className="meta">
// // //         <span className="pill">{displaySource}</span>
// // //         <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="title">
// // //           {displayTitle}
// // //         </a>
// // //         {displayDesc && <p className="excerpt">{displayDesc}</p>}
// // //         {displayDate && (
// // //           <div className="byline">
// // //             <span>{displayDate}</span>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </article>
// // //   );
// // // };

// // // export default PostCard;





// import React, { useState } from "react";

// function timeAgo(dateStr) {
//   if (!dateStr) return "";
//   const date = new Date(dateStr);
//   const seconds = Math.floor((new Date() - date) / 1000);
//   if (seconds < 60) return "Just now";
//   if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
//   if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
//   if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
//   return date.toLocaleDateString();
// }

// const PostCard = ({ post, variant = "vertical" }) => {
//   const {
//     url,
//     urlToImage,
//     title,
//     description,
//     publishedAt,
//     source,
//     category,
//     author,
//     slug,
//     thumbnail,
//     cover,
//   } = post;

//   const linkUrl = url || (slug ? `/post/${slug}` : "#");
//   const imageSrc = urlToImage || thumbnail || cover || "/placeholder.jpg";
//   const displayTitle = title || "Untitled Article";
//   const displayDesc = description || post.excerpt || "";
//   const displayDate = publishedAt ? timeAgo(publishedAt) : "";
//   const displaySource = source?.name || category?.name || author?.name || "Unknown";

//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = (e) => {
//     e.preventDefault();
//     setExpanded((e) => !e);
//   };

//   // Truncate description if not expanded
//   const truncatedDesc = displayDesc.length > 120 && !expanded ? displayDesc.slice(0, 120) + "…" : displayDesc;

//   const copyLinkToClipboard = (e) => {
//     e.preventDefault();
//     navigator.clipboard.writeText(linkUrl).then(() => alert("Post link copied!"));
//   };

//   return (
//     <article className={`postcard ${variant}`} tabIndex={0} aria-label={displayTitle}>
//       <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="thumb" aria-describedby={`desc-${slug}`}>
//         <img src={imageSrc} alt={displayTitle} loading="lazy" />
//         <div className="overlay">Read Article →</div>
//       </a>

//       <div className="meta">
//         <span className="pill source">{displaySource}</span>

//         <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="title">
//           {displayTitle}
//         </a>

//         {displayDesc && (
//           <>
//             <p className="excerpt" id={`desc-${slug}`}>
//               {truncatedDesc}{" "}
//               {displayDesc.length > 120 && (
//                 <button onClick={toggleExpand} aria-expanded={expanded} className="read-more-btn">
//                   {expanded ? "Show less" : "Read more"}
//                 </button>
//               )}
//             </p>
//           </>
//         )}

//         <div className="byline">
//           <span className="date">{displayDate}</span>
//           <button onClick={copyLinkToClipboard} aria-label="Copy post URL" className="share-btn">
//             🔗
//           </button>
//         </div>
//       </div>

//       <style>{`
//         .postcard {
//           background: white;
//           border-radius: 12px;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.1);
//           overflow: hidden;
//           display: flex;
//           flex-direction: ${variant === "horizontal" ? "row" : "column"};
//           cursor: pointer;
//           transition: box-shadow 0.3s ease, transform 0.3s ease;
//           outline-offset: 3px;
//           gap: ${variant === "horizontal" ? "1rem" : "0"};
//         }
//         .postcard:hover,
//         .postcard:focus-within {
//           box-shadow: 0 12px 30px rgba(0,0,0,0.2);
//           transform: translateY(-5px);
//           outline: none;
//         }
//         .thumb {
//           position: relative;
//           flex-shrink: 0;
//           display: block;
//           overflow: hidden;
//           border-radius: ${variant === "horizontal" ? "12px" : "12px 12px 0 0"};
//           width: ${variant === "horizontal" ? "40%" : "100%"};
//           height: ${variant === "horizontal" ? "auto" : "200px"};
//         }
//         .thumb img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.4s ease;
//           display: block;
//         }
//         .postcard:hover .thumb img,
//         .postcard:focus-within .thumb img {
//           transform: scale(1.05);
//         }
//         .overlay {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background: rgba(0,0,0,0.35);
//           color: white;
//           font-weight: 700;
//           padding: 0.5rem 1rem;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           pointer-events: none;
//         }
//         .thumb:hover .overlay,
//         .thumb:focus-visible .overlay {
//           opacity: 1;
//           pointer-events: auto;
//         }
//         .meta {
//           flex-grow: 1;
//           padding: 1rem 1.25rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//         }
//         .pill {
//           background: #e0e7ff;
//           color: #3730a3;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//           padding: 0.25em 0.5em;
//           border-radius: 6px;
//           width: fit-content;
//           margin-bottom: 0.5rem;
//           user-select: none;
//           font-size: 0.75rem;
//         }
//         .title {
//           font-size: 1.25rem;
//           font-weight: 700;
//           color: #111827;
//           text-decoration: none;
//           margin-bottom: 0.5rem;
//         }
//         .title:hover,
//         .title:focus-visible {
//           text-decoration: underline;
//           outline: none;
//         }
//         .excerpt {
//           font-size: 1rem;
//           line-height: 1.5;
//           color: #4b5563;
//           margin-bottom: 0.75rem;
//           white-space: pre-wrap;
//         }
//         .read-more-btn {
//           background: none;
//           border: none;
//           color: #2563eb;
//           cursor: pointer;
//           font-weight: 600;
//           font-size: 0.95rem;
//           margin-left: 6px;
//           padding: 0;
//         }
//         .read-more-btn:hover,
//         .read-more-btn:focus-visible {
//           text-decoration: underline;
//           outline: none;
//         }
//         .byline {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           font-size: 0.875rem;
//           color: #6b7280;
//           user-select: none;
//         }
//         .date {
//           font-style: italic;
//         }
//         .share-btn {
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 1.2rem;
//           color: #2563eb;
//           padding: 0;
//         }
//         .share-btn:hover,
//         .share-btn:focus-visible {
//           color: #1d4ed8;
//           outline: none;
//         }
//         @media (max-width: 768px) {
//           .postcard {
//             flex-direction: column;
//           }
//           .thumb {
//             width: 100% !important;
//             height: 200px !important;
//             border-radius: 12px 12px 0 0;
//           }
//         }
//       `}</style>
//     </article>
//   );
// };

// export default PostCard;




import React, { useState } from "react";
import { Link } from "react-router-dom";

function timeAgo(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

const PostCard = ({ post, variant = "vertical" }) => {
  const {
    url,
    urlToImage,
    title,
    description,
    publishedAt,
    source,
    category,
    author,
    slug,
    thumbnail,
    cover,
  } = post;

  const linkUrl = url || (slug ? `/post/${slug}` : "#");
  const imageSrc = urlToImage || thumbnail || cover || "/placeholder.jpg";
  const displayTitle = title || "Untitled Article";
  const displayDesc = description || post.excerpt || "";
  const displayDate = publishedAt ? timeAgo(publishedAt) : "";
  const displaySource = source?.name || category?.name || author?.name || "Unknown";

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.preventDefault();
    setExpanded((v) => !v);
  };

  const truncatedDesc = displayDesc.length > 140 && !expanded ? displayDesc.slice(0, 140) + "…" : displayDesc;

  const copyLinkToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.origin + linkUrl).then(() => alert("Post link copied!"));
  };

  return (
    <article className={`postcard ${variant}`} tabIndex={0} aria-label={displayTitle} role="article">
      <Link
        to={linkUrl}
        className="thumb"
        aria-describedby={`desc-${slug}`}
        tabIndex={-1}
      >
        <img src={imageSrc} alt={displayTitle} loading="lazy" />
        <div className="overlay" aria-hidden="true">Read Article →</div>
      </Link>

      <div className="meta">
        <span className="pill source" aria-label={`Source: ${displaySource}`}>{displaySource}</span>

        <Link to={linkUrl} className="title">
          {displayTitle}
        </Link>

        {displayDesc && (
          <p className="excerpt" id={`desc-${slug}`}>
            {truncatedDesc}
            {displayDesc.length > 140 && (
              <button onClick={toggleExpand} aria-expanded={expanded} className="read-more-btn" aria-label={expanded ? "Show less" : "Read more"}>
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </p>
        )}

        <div className="byline">
          <time className="date" dateTime={publishedAt}>
            {displayDate}
          </time>
          <button onClick={copyLinkToClipboard} aria-label="Copy post URL" className="share-btn" title="Copy post URL">
            🔗
          </button>
        </div>
      </div>

      <style>{`
        .postcard {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 10px rgb(0 0 0 / 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: ${variant === "horizontal" ? "row" : "column"};
          cursor: pointer;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          outline-offset: 3px;
          gap: ${variant === "horizontal" ? "1.2rem" : "0"};
        }
        .postcard:hover,
        .postcard:focus-within {
          box-shadow: 0 12px 40px rgb(0 0 0 / 0.15);
          transform: translateY(-6px);
          outline: none;
        }
        .thumb {
          position: relative;
          flex-shrink: 0;
          display: block;
          overflow: hidden;
          border-radius: ${variant === "horizontal" ? "16px" : "16px 16px 0 0"};
          width: ${variant === "horizontal" ? "45%" : "100%"};
          height: ${variant === "horizontal" ? "auto" : "210px"};
          box-shadow: 0 8px 24px rgb(0 0 0 / 0.05);
        }
        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }
        .postcard:hover .thumb img,
        .postcard:focus-within .thumb img {
          transform: scale(1.07);
        }
        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.4);
          color: white;
          font-weight: 700;
          padding: 0.5rem 1.2rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          font-size: 1.05rem;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          user-select: none;
        }
        .thumb:hover .overlay,
        .thumb:focus-visible .overlay {
          opacity: 1;
          pointer-events: auto;
        }
        .meta {
          flex-grow: 1;
          padding: 1.2rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.65rem;
        }
        .pill {
          background: #e5e7ff;
          color: #4f46e5;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.2em 0.7em;
          border-radius: 12px;
          width: fit-content;
          font-size: 0.75rem;
          user-select: none;
          align-self: flex-start;
        }
        .title {
          font-size: 1.3rem;
          font-weight: 900;
          color: #111827;
          text-decoration: none;
          margin-bottom: 0.4rem;
          line-height: 1.1;
        }
        .title:hover,
        .title:focus-visible {
          text-decoration: underline;
          outline: none;
        }
        .excerpt {
          font-size: 1rem;
          line-height: 1.6;
          color: #4b5563;
          margin-bottom: 0.9rem;
          white-space: pre-wrap;
        }
        .read-more-btn {
          background: none;
          border: none;
          color: #4338ca;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0;
          margin-left: 8px;
          user-select: none;
        }
        .read-more-btn:hover,
        .read-more-btn:focus-visible {
          text-decoration: underline;
          outline: none;
        }
        .byline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.88rem;
          color: #6b7280;
          user-select: none;
        }
        .date {
          font-style: italic;
        }
        .share-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.3rem;
          color: #4f46e5;
          padding: 0;
        }
        .share-btn:hover,
        .share-btn:focus-visible {
          color: #3730a3;
          outline: none;
        }
        @media (max-width: 768px) {
          .postcard {
            flex-direction: column;
          }
          .thumb {
            width: 100% !important;
            height: 210px !important;
            border-radius: 16px 16px 0 0;
          }
        }
      `}</style>
    </article>
  );
};

export default PostCard;
