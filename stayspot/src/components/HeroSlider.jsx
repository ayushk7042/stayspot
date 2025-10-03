// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaLeaf,
//   FaGlobe,
//   FaBolt,
//   FaRecycle,
//   FaBookOpen,
//   FaChartLine,
//   FaRocket,
// } from "react-icons/fa";
// import "./HeroSlider.css"; // new CSS for animations

// const iconMap = {
//   environment: FaLeaf,
//   global: FaGlobe,
//   technology: FaBolt,
//   sustainability: FaRecycle,
//   study: FaBookOpen,
//   trending: FaChartLine,
//   latest: FaRocket,
// };

// const HeroSlider = ({ articles }) => {
//   const [index, setIndex] = useState(0);
//   const slideInterval = useRef(null);

//   useEffect(() => {
//     startAutoPlay();
//     return stopAutoPlay;
//   }, [index, articles.length]);

//   const startAutoPlay = () => {
//     stopAutoPlay();
//     slideInterval.current = setInterval(() => {
//       setIndex((prev) => (prev + 1) % articles.length);
//     }, 6000);
//   };

//   const stopAutoPlay = () => {
//     if (slideInterval.current) clearInterval(slideInterval.current);
//   };

//   if (!articles.length) return null;

//   return (
//     <section
//       className="hero-slider-wrapper"
//       onMouseEnter={stopAutoPlay}
//       onMouseLeave={startAutoPlay}
//       aria-roledescription="carousel"
//       aria-label="Featured Articles"
//     >
//       {articles.map((article, i) => {
//         const isActive = i === index;
//         const IconComponent = iconMap[article.category?.slug] || FaGlobe;

//         return (
//           <article
//             key={article._id || i}
//             className={`hero-slide ${isActive ? "active" : ""}`}
//             aria-hidden={!isActive}
//           >
//             <div
//               className="hero-slide-bg"
//               style={{ backgroundImage: `url(${article.cover})` }}
//             />
//             <div className="hero-overlay-gradient" />
//             <div className="hero-slide-content">
//               <div className="hero-icon-box">
//                 <IconComponent size={80} className="hero-icon" />
//               </div>
//               <h2 className="hero-title">{article.title}</h2>
//               <p className="hero-excerpt">{article.excerpt}</p>
//               <button className="hero-read-btn">
//                 Read More →
//               </button>
//             </div>
//           </article>
//         );
//       })}

//       {/* Navigation */}
//       <button
//         className="hero-nav prev"
//         onClick={() => setIndex((index - 1 + articles.length) % articles.length)}
//         aria-label="Previous"
//       >
//         ‹
//       </button>
//       <button
//         className="hero-nav next"
//         onClick={() => setIndex((index + 1) % articles.length)}
//         aria-label="Next"
//       >
//         ›
//       </button>

//       {/* Dots */}
//       <div className="hero-dots">
//         {articles.map((_, i) => (
//           <button
//             key={i}
//             className={`hero-dot ${i === index ? "active" : ""}`}
//             onClick={() => setIndex(i)}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import {
//   FaLeaf,
//   FaGlobe,
//   FaBolt,
//   FaRecycle,
//   FaBookOpen,
//   FaChartLine,
//   FaRocket,
// } from "react-icons/fa";
// import "./HeroSlider.css";

// const iconMap = {
//   environment: FaLeaf,
//   global: FaGlobe,
//   technology: FaBolt,
//   sustainability: FaRecycle,
//   study: FaBookOpen,
//   trending: FaChartLine,
//   latest: FaRocket,
// };

// const HeroSlider = () => {
//   const [articles, setArticles] = useState([]);
//   const [index, setIndex] = useState(0);
//   const slideInterval = useRef(null);

//   useEffect(() => {
//     axios.get("/api/hero-slides").then((res) => setArticles(res.data));
//   }, []);

//   useEffect(() => {
//     startAutoPlay();
//     return stopAutoPlay;
//   }, [index, articles.length]);

//   const startAutoPlay = () => {
//     stopAutoPlay();
//     slideInterval.current = setInterval(() => {
//       setIndex((prev) => (prev + 1) % articles.length);
//     }, 6000);
//   };

//   const stopAutoPlay = () => {
//     if (slideInterval.current) clearInterval(slideInterval.current);
//   };

//   if (!articles.length) return null;

//   return (
//     <section
//       className="hero-slider-wrapper"
//       onMouseEnter={stopAutoPlay}
//       onMouseLeave={startAutoPlay}
//       aria-roledescription="carousel"
//       aria-label="Featured Articles"
//     >
//       {articles.map((article, i) => {
//         const isActive = i === index;
//         const IconComponent = iconMap[article.category?.slug] || FaGlobe;
//         return (
//           <article
//             key={article._id || i}
//             className={`hero-slide ${isActive ? "active" : ""}`}
//             aria-hidden={!isActive}
//           >
//             <div
//               className="hero-slide-bg"
//               style={{ backgroundImage: `url(${article.cover})` }}
//             />
//             <div className="hero-overlay-gradient" />
//             <div className="hero-slide-content">
//               <div className="hero-icon-box">
//                 <IconComponent size={80} className="hero-icon" />
//               </div>
//               <h2 className="hero-title">{article.title}</h2>
//               <p className="hero-excerpt">{article.excerpt}</p>
//               <button className="hero-read-btn">
//                 Read More →
//               </button>
//             </div>
//           </article>
//         );
//       })}
//       <button
//         className="hero-nav prev"
//         onClick={() => setIndex((index - 1 + articles.length) % articles.length)}
//         aria-label="Previous"
//       >
//         ‹
//       </button>
//       <button
//         className="hero-nav next"
//         onClick={() => setIndex((index + 1) % articles.length)}
//         aria-label="Next"
//       >
//         ›
//       </button>
//       <div className="hero-dots">
//         {articles.map((_, i) => (
//           <button
//             key={i}
//             className={`hero-dot ${i === index ? "active" : ""}`}
//             onClick={() => setIndex(i)}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  FaLeaf,
  FaGlobe,
  FaBolt,
  FaRecycle,
  FaBookOpen,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";
import "./HeroSlider.css";

const iconMap = {
  environment: FaLeaf,
  global: FaGlobe,
  technology: FaBolt,
  sustainability: FaRecycle,
  study: FaBookOpen,
  trending: FaChartLine,
  latest: FaRocket,
};

const HeroSlider = () => {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    axios
      .get("/api/hero-slides")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setArticles(res.data);
        } else {
          console.error("Expected array from /api/hero-slides but got:", res.data);
          setArticles([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching hero slides:", err);
        setArticles([]);
      });
  }, []);

  useEffect(() => {
    if (articles.length === 0) return;

    startAutoPlay();
    return () => {
      stopAutoPlay();
    };
  }, [index, articles.length]);

  const startAutoPlay = () => {
    stopAutoPlay();
    slideInterval.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % articles.length);
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  if (!Array.isArray(articles) || articles.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    <section
      className="hero-slider-wrapper"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      aria-roledescription="carousel"
      aria-label="Featured Articles"
    >
      {articles.map((article, i) => {
        const isActive = i === index;
        const categorySlug = article.category?.slug || article.category || ""; // support slug or string
        const IconComponent = iconMap[categorySlug] || FaGlobe;
        return (
          <article
            key={article._id || i}
            className={`hero-slide ${isActive ? "active" : ""}`}
            aria-hidden={!isActive}
          >
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${article.cover})` }}
            />
            <div className="hero-overlay-gradient" />
            <div className="hero-slide-content">
              <div className="hero-icon-box">
                <IconComponent size={80} className="hero-icon" />
              </div>
              <h2 className="hero-title">{article.title}</h2>
              <p className="hero-excerpt">{article.excerpt}</p>
              <button className="hero-read-btn">Read More →</button>
            </div>
          </article>
        );
      })}

      {/* Navigation */}
      <button
        className="hero-nav prev"
        onClick={() => setIndex((index - 1 + articles.length) % articles.length)}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        className="hero-nav next"
        onClick={() => setIndex((index + 1) % articles.length)}
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {articles.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
