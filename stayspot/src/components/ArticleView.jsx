import React, { useEffect, useState } from "react";
import axios from "axios";

const ArticleView = ({ slug }) => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/article/${slug}`);
        setArticle(res.data);
      } catch (err) {
        setError("Failed to load article.");
      }
    };

    fetchArticle();
  }, [slug]);

  if (error) return <p>{error}</p>;
  if (!article) return <p>Loading...</p>;

  return (
    <article>
      <h1>{article.title}</h1>
      <p><em>{article.excerpt}</em></p>
      <img src={article.cover} alt={article.title} />
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
      <p>Category: {article.category.name}</p>
      <p>Author: {article.author.name}</p>
    </article>
  );
};

export default ArticleView;
