// import React from 'react';
// import { Link } from 'react-router-dom';

// const HeroCarousel = ({ items = [] }) => (
//   <section className="hero">
//     <div className="hero-track">
//       {items.slice(0, 5).map((p) => (
//         <Link key={p.slug} to={`/article/${p.slug}`} className="hero-slide" style={{ backgroundImage: `url(${p.cover})` }}>
//           <div className="overlay">
//             <span className="pill">{p.category?.name}</span>
//             <h2>{p.title}</h2>
//           </div>
//         </Link>
//       ))}
//     </div>
//   </section>
// );

// export default HeroCarousel;


import React from 'react';
import { Link } from 'react-router-dom';

const HeroCarousel = ({ items = [] }) => {
  if (!Array.isArray(items) || items.length === 0)
    return <div style={styles.noItems}>No featured articles available</div>;

  return (
    <section style={styles.heroSection} aria-label="Featured articles carousel">
      <div style={styles.heroTrack}>
        {items.slice(0, 5).map((p) => (
          <Link
            key={p.slug}
            to={`/article/${p.slug}`}
            style={{ ...styles.heroSlide, backgroundImage: `url(${p.cover})` }}
            className="hero-slide"
            aria-label={`Read article: ${p.title}`}
          >
            <div style={styles.overlay}>
              <span style={styles.pill}>{p.category?.name}</span>
              <h2 style={styles.title}>{p.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    padding: '1rem 0',
    overflowX: 'hidden',
  },
  heroTrack: {
    display: 'flex',
    gap: '1rem',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    paddingBottom: '1rem',
    scrollbarWidth: 'thin',
    scrollbarColor: '#1c92d2 transparent',
  },
  heroSlide: {
    flex: '0 0 280px',
    height: '420px',
    borderRadius: '15px',
    color: '#fff',
    textDecoration: 'none',
    position: 'relative',
    scrollSnapAlign: 'start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '20px',
    borderRadius: '0 0 15px 15px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
  },
  pill: {
    backgroundColor: '#1c92d2',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    marginBottom: '12px',
    display: 'inline-block',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: '700',
    textShadow: '0 2px 8px rgba(0,0,0,0.7)',
  },
  noItems: {
    padding: '2rem',
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
};

// Add simple hover/tap effect using CSS in your stylesheet or inline with event handlers:

// Example CSS (put into your HeroCarousel.css or global CSS):
/*
.hero-slide:hover,
.hero-slide:focus {
  transform: scale(1.05);
  box-shadow: 0 12px 36px rgba(28,146,210,0.7);
  cursor: pointer;
}
*/

export default HeroCarousel;
