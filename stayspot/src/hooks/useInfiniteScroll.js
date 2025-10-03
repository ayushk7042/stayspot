import { useEffect, useRef } from "react";

export default function useInfiniteScroll(enabled, loading, hasMore, onLoadMore) {
  const sentryRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    if (!sentryRef.current) return;
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !loading) onLoadMore();
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentryRef.current);
    return () => observer.disconnect();
  }, [enabled, hasMore, loading, onLoadMore]);

  return sentryRef;
}
