// import React from "react";
// import { Link } from "react-router-dom";

// const FeatureCard = ({ title, description, Icon, link }) => {
//   return (
//     <Link to={link} className="feature-card" aria-label={`Explore feature: ${title}`}>
//       <div className="feature-icon">
//         <Icon size={36} />
//       </div>
//       <h3 className="feature-title">{title}</h3>
//       <p className="feature-desc">{description}</p>
//     </Link>
//   );
// };

// export default FeatureCard;


import React from "react";

const FeatureCard = ({
  title,
  description,
  Icon,
  link,
  variant = "vertical", // "vertical" or "horizontal"
  badge = null, // optional badge text like "New" or "Beta"
}) => {
  return (
    <Link
      to={link}
      className={`feature-card ${variant}`}
      aria-label={`Explore feature: ${title}`}
      tabIndex={0}
      title={description.length > 60 ? description : undefined}
    >
      <div className="feature-icon" aria-hidden="true">
        <Icon size={36} />
        {badge && <span className="feature-badge">{badge}</span>}
      </div>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
      </div>

      <style>{`
        .feature-card {
          display: flex;
          cursor: pointer;
          text-decoration: none;
          color: #1e293b;
          background: white;
          border-radius: 14px;
          padding: 1rem 1.2rem;
          box-shadow: 0 6px 18px rgba(0,0,0,0.07);
          transition: box-shadow 0.3s, transform 0.3s;
          outline-offset: 3px;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .feature-card.horizontal {
          flex-direction: row;
          text-align: left;
          align-items: center;
          gap: 1rem;
        }
        .feature-card:hover,
        .feature-card:focus-visible {
          box-shadow: 0 12px 36px rgba(0,0,0,0.12);
          transform: translateY(-4px);
          outline: none;
          color: #2563eb;
          background: #eff6ff;
        }
        .feature-icon {
          position: relative;
          color: #2563eb;
          transition: color 0.3s ease;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.65rem;
        }
        .feature-card.horizontal .feature-icon {
          margin-bottom: 0;
        }
        .feature-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: #f97316;
          color: white;
          font-size: 0.6rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 12px;
          user-select: none;
        }
        .feature-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 0.4rem 0;
        }
        .feature-desc {
          margin: 0;
          font-size: 0.95rem;
          color: #475569;
          max-height: 3rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 600px) {
          .feature-card.horizontal {
            flex-direction: column;
            text-align: center;
          }
          .feature-card.horizontal .feature-icon {
            margin-bottom: 0.65rem;
          }
        }
      `}</style>
    </Link>
  );
};

export default FeatureCard;
