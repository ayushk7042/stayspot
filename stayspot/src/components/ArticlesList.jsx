// import React, { useEffect, useState } from "react";

// function ArticlesList() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:4000/api/posts")  // Your backend URL to get published posts
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch articles");
//         return res.json();
//       })
//       .then((data) => {
//         setArticles(data.results || data);  // Adjust for your API response shape
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading articles...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Published Articles</h2>
//       {articles.length === 0 ? (
//         <p>No articles found.</p>
//       ) : (
//         <ul>
//           {articles.map((article) => (
//             <li key={article._id}>
//               <h3>{article.title}</h3>
//               <p>
//                 <em>Category: {article.category?.name}</em>
//               </p>
//               <p dangerouslySetInnerHTML={{ __html: article.excerpt }} />
//               {/* Add a link or route to full article if desired */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default ArticlesList;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/posts") // Your backend URL to get published posts
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then((data) => {
        setArticles(data.results || data); // Adjust for your API response shape
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Published Articles</h2>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {articles.map((article) => (
            <li key={article._id} style={{ marginBottom: "1.5rem" }}>
              <h3>
                <Link to={`/article/${article.slug}`} style={{ textDecoration: "none", color: "#007acc" }}>
                  {article.title}
                </Link>
              </h3>
              <p>
                <em>Category: {article.category?.name || "Uncategorized"}</em>
              </p>
              <p dangerouslySetInnerHTML={{ __html: article.excerpt }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArticlesList;
