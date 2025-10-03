// import React from 'react';
// import { HelmetProvider, Helmet } from 'react-helmet-async';

// const Seo = ({ title, description, image, url, tags = [] }) => (
//   <HelmetProvider>
//     <Helmet>
//       <title>{title ? `${title} | FeedClone` : 'FeedClone Magazine'}</title>
//       <meta name="description" content={description || 'Trending insights across niches'} />
//       {image && <meta property="og:image" content={image} />}
//       {url && <meta property="og:url" content={url} />}
//       {tags.slice(0, 8).map((t) => (
//         <meta key={t} name="keywords" content={t} />
//       ))}
//     </Helmet>
//   </HelmetProvider>
// );

// export default Seo;



import React, { useEffect, useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Seo = ({ title, description, image, url, tags = [], author = 'FeedClone' }) => {
  const [animatedTitle, setAnimatedTitle] = useState(title);

  // Optional: Animate the title (typewriter effect)
  useEffect(() => {
    if (!title) return;
    let index = 0;
    let fullTitle = `${title} | FeedClone`;
    setAnimatedTitle('');
    const interval = setInterval(() => {
      setAnimatedTitle(fullTitle.slice(0, index + 1));
      index++;
      if (index >= fullTitle.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [title]);

  const defaultImage = image || '/default-og-image.png';
  const defaultUrl = url || window.location.href;

  // Structured JSON-LD for rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title || "FeedClone Magazine",
    "url": defaultUrl,
    "description": description || "Trending insights across niches",
    "author": {
      "@type": "Person",
      "name": author
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{animatedTitle || 'FeedClone Magazine'}</title>
        <meta name="description" content={description || 'Trending insights across niches'} />
        <meta name="author" content={author} />
        {tags.slice(0, 8).map((t) => (
          <meta key={t} name="keywords" content={t} />
        ))}

        {/* Open Graph */}
        <meta property="og:title" content={title || 'FeedClone Magazine'} />
        <meta property="og:description" content={description || 'Trending insights across niches'} />
        <meta property="og:image" content={defaultImage} />
        <meta property="og:url" content={defaultUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || 'FeedClone Magazine'} />
        <meta name="twitter:description" content={description || 'Trending insights across niches'} />
        <meta name="twitter:image" content={defaultImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;
