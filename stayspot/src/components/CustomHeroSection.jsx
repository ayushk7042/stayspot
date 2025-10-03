import React from "react";
import {
  FaLeaf,
  FaLightbulb,
  FaGlobe,
  FaStar,
  FaRocket,
} from "react-icons/fa";

const heroCards = [
  {
    icon: FaLeaf,
    title: "Explore Nature",
    description: "Discover sustainable ways to protect our planet.",
    bgColor: "#d1fae5",
    iconColor: "#16a34a",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: FaLightbulb,
    title: "Innovate Green Tech",
    description: "Learn about the latest in environmental technology.",
    bgColor: "#fef9c3",
    iconColor: "#f59e0b",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: FaGlobe,
    title: "Global Community",
    description: "Join a worldwide movement for climate action.",
    bgColor: "#dbeafe",
    iconColor: "#3b82f6",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: FaStar,
    title: "Top Insights",
    description: "Stay informed with featured green news and ideas.",
    bgColor: "#fee2e2",
    iconColor: "#ef4444",
    image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: FaRocket,
    title: "Be a Changemaker",
    description: "Take bold actions for a sustainable future.",
    bgColor: "#fce7f3",
    iconColor: "#db2777",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
  },
];

const CustomHeroSection = () => {
  return (
    <section className="custom-hero-section" aria-label="Highlighted articles and features">
      <header className="hero-header">
        <h1>Discover Today's Featured Green Articles</h1>
        <p>Engage with impactful stories shaping our environment.</p>
      </header>
      <div className="hero-grid">
        {heroCards.map(({ icon: Icon, title, description, bgColor, iconColor, image }) => (
          <article
            key={title}
            className="hero-card"
            style={{ backgroundColor: bgColor }}
            tabIndex={0}
            aria-label={`${title} article`}
          >
            <div
              className="hero-image"
              style={{ backgroundImage: `url(${image})` }}
              role="img"
              aria-label={title}
            />
            <div className="hero-content">
              <Icon size={36} color={iconColor} aria-hidden="true" className="hero-icon" />
              <h3>{title}</h3>
              <p>{description}</p>
              <button className="read-more-button" aria-label={`Read more about ${title}`}>
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .custom-hero-section {
          max-width: 1200px;
          margin: 3rem auto;
          padding: 0 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .hero-header {
          text-align: center;
          margin-bottom: 3rem;
          color: #064e3b;
        }
        .hero-header h1 {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }
        .hero-header p {
          font-size: 1.25rem;
          font-weight: 500;
          color: #166534;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
          gap: 2.5rem;
        }

        .hero-card {
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          outline-offset: 3px;
        }
        .hero-card:hover,
        .hero-card:focus-visible {
          box-shadow: 0 12px 30px rgba(0,0,0,0.2);
          transform: scale(1.03);
          background-color: #f0fdf4;
        }

        .hero-image {
          flex: none;
          height: 180px;
          background-size: cover;
          background-position: center;
          border-bottom: 6px solid rgba(0,0,0,0.1);
          transition: filter 0.3s ease;
        }
        .hero-card:hover .hero-image,
        .hero-card:focus-visible .hero-image {
          filter: brightness(1.1);
        }

        .hero-content {
          flex: 1;
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          color: #065f46;
        }
        .hero-icon {
          align-self: center;
        }
        .hero-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          text-align: center;
        }
        .hero-content p {
          flex-grow: 1;
          font-size: 1rem;
          text-align: center;
          line-height: 1.4;
          color: #065f46dd;
        }

        .read-more-button {
          background: #22c55e;
          border: none;
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1rem;
          align-self: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
          outline-offset: 3px;
        }
        .read-more-button:hover,
        .read-more-button:focus-visible {
          background-color: #15803d;
          outline: none;
        }

        @media (max-width: 480px) {
          .hero-header h1 {
            font-size: 2rem;
          }
          .hero-header p {
            font-size: 1rem;
          }
          .hero-image {
            height: 140px;
          }
        }
      `}</style>
    </section>
  );
};

export default CustomHeroSection;
