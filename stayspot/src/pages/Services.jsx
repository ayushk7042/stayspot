import React from "react";
import Seo from "../components/Seo.jsx";
import { FaLaptopCode, FaSearchDollar, FaMobileAlt, FaBullhorn, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={40} color="#4054b2" />,
    title: "Web Development",
    description: "Custom websites and web apps tailored to your needs with the latest technology.",
    cta: { label: "Learn More", link: "/services/web-development" },
  },
  {
    icon: <FaSearchDollar size={40} color="#4054b2" />,
    title: "SEO Optimization",
    description: "Improve your website’s visibility and rank higher on search engines with proven strategies.",
    cta: { label: "Get Started", link: "/services/seo-optimization" },
  },
  {
    icon: <FaMobileAlt size={40} color="#4054b2" />,
    title: "Mobile App Design",
    description: "Beautiful and user-friendly mobile apps for iOS and Android platforms.",
    cta: { label: "Explore", link: "/services/mobile-apps" },
  },
  {
    icon: <FaBullhorn size={40} color="#4054b2" />,
    title: "Digital Marketing",
    description: "Full-scale digital marketing services including social media, email marketing, and PPC.",
    cta: { label: "Contact Us", link: "/contact" },
  },
  {
    icon: <FaPaintBrush size={40} color="#4054b2" />,
    title: "UI/UX Design",
    description: "Design that delights your users and boosts engagement with intuitive interfaces.",
    cta: { label: "See Portfolio", link: "/portfolio" },
  },
];

const Services = () => {
  return (
    <>
      <Seo title="Our Services" description="Explore the services we offer" />

      <main style={{ maxWidth: 900, margin: "auto", padding: 24 }}>
        <h1 style={{ textAlign: "center", marginBottom: 40 }}>Our Services</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
          }}
        >
          {services.map(({ icon, title, description, cta }) => (
            <section
              key={title}
              style={{
                background: "#f1f5f9",
                padding: 24,
                borderRadius: 16,
                boxShadow: "0 6px 20px rgb(0 0 0 / 0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "transform 0.25s ease",
                cursor: "default",
              }}
              tabIndex={0}
              onFocus={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onBlur={(e) => e.currentTarget.style.transform = "scale(1)"}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <div style={{ marginBottom: 20 }}>{icon}</div>
              <h3 style={{ marginBottom: 12 }}>{title}</h3>
              <p style={{ color: "#555", marginBottom: 24 }}>{description}</p>
              <a
                href={cta.link}
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#4054b2",
                  color: "white",
                  borderRadius: 30,
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#6278f7")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#4054b2")}
              >
                {cta.label}
              </a>
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default Services;
