import React, { useState, useEffect, useRef } from "react";
import { searchPosts } from "../api/client.js"; // backend search function
import { fetchTopHeadlinesByCategory } from "../api/newsapi.js"; // fallback API
import PostList from "./PostList.jsx";
import { Loader, ErrorState } from "./Loader.jsx";

const LiveSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    debounceTimeout.current = setTimeout(() => {
      setLoading(true);
      setError(null);

      searchPosts(query, 1, 10)
        .then(({ data }) => {
          if (data.results?.length) {
            setResults(data.results);
            setLoading(false);
          } else {
            fetchTopHeadlinesByCategory("general", 1, 10)
              .then(({ articles }) => {
                setResults(articles);
                setLoading(false);
              })
              .catch((e) => {
                setError(e.message);
                setLoading(false);
              });
          }
        })
        .catch((e) => {
          setError(e.message);
          setLoading(false);
        });
    }, 400);

    return () => clearTimeout(debounceTimeout.current);
  }, [query]);

  return (
    <div className="live-search">
      <input
        type="search"
        placeholder="Search articles..."
        autoComplete="off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <Loader />}
      {error && <ErrorState msg={error} />}
      {!loading && !error && results.length > 0 && <PostList posts={results} layout="list" />}
      {!loading && !error && results.length === 0 && query.trim() && (
        <p>No related articles found.</p>
      )}
    </div>
  );
};

export default LiveSearch;
