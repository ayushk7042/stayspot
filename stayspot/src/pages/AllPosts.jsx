import React, { useCallback, useEffect, useMemo, useState } from "react";
import Seo from "../components/Seo.jsx";
import PostList from "../components/PostList.jsx";
import { Loader, ErrorState } from "../components/Loader.jsx";
import { listAllPosts } from "../api/client.js";
import useInfiniteScroll from "../hooks/useInfiniteScroll.js";

const PAGE_LIMIT = 12;
const USE_INFINITE = false; // set true to enable infinite scroll

const AllPosts = () => {
  const [state, setState] = useState({ loading: true, error: null, data: null });
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [posts, setPosts] = useState([]);

  const fetchPage = useCallback(async (p) => {
    const { data } = await listAllPosts(p, PAGE_LIMIT);
    setPages(data.pages);
    setPosts((prev) => (p === 1 ? data.results || data.posts || [] : [...prev, ...(data.results || data.posts || [])]));
    setState({ loading: false, error: null, data });
  }, []);

  useEffect(() => {
    setState((s) => ({ ...s, loading: true, error: null }));
    fetchPage(1).catch((e) => setState({ loading: false, error: e.message, data: null }));
  }, [fetchPage]);

  const hasMore = useMemo(() => page < pages, [page, pages]);

  const onLoadMore = useCallback(() => {
    const next = page + 1;
    setPage(next);
    fetchPage(next).catch(() => {});
  }, [page, fetchPage]);

  const sentryRef = useInfiniteScroll(USE_INFINITE, state.loading, hasMore, onLoadMore);

  return (
    <>
      <Seo title="All Posts" description="Browse all articles with pagination" />
      <div className="container">
        <h2 className="section-title">All Posts</h2>
        {state.error && <ErrorState msg={state.error} />}
        <PostList posts={posts} />
        {state.loading && <Loader />}

        {!USE_INFINITE && !state.loading && pages > 1 && (
          <div className="pagination">
            <button disabled={page <= 1} onClick={() => { setPage((p) => Math.max(1, p - 1)); fetchPage(Math.max(1, page - 1)); }}>
              Prev
            </button>
            <span>{page} / {pages}</span>
            <button disabled={page >= pages} onClick={() => { setPage((p) => Math.min(pages, p + 1)); fetchPage(Math.min(pages, page + 1)); }}>
              Next
            </button>
          </div>
        )}

        {USE_INFINITE && <div ref={sentryRef} style={{ height: 1 }} />}
      </div>
    </>
  );
};

export default AllPosts;
