import React from "react";
import { FaRocket, FaCogs } from "react-icons/fa";
import "./FeaturePage.css";

const Performance = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaRocket size={64} className="feature-icon" />
      <h1>Site Performance & Optimizations</h1>
      <p>Feedtag is tuned for speed and reliability, with modern code splitting and asset loading.</p>
    </header>
    <section>
      <h2>Key Features</h2>
      <ul>
        <li><FaCogs /> Lazy loading for images and data</li>
        <li>Optimized react components and routing</li>
        <li>Secure and scalable backend</li>
      </ul>
    </section>
    <section>
      <h2>Your Experience Matters</h2>
      <p>Report bugs, suggest improvements via <a href="/contact">Contact</a>.</p>
    </section>
  </div>
);

export default Performance;
