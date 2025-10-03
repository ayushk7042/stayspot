import React from "react";
import { FaLightbulb, FaLeaf } from "react-icons/fa";
import "./FeaturePage.css";

const GreenTips = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaLightbulb size={64} className="feature-icon" />
      <h1>Green Tech Tips</h1>
      <p>Discover practical advice to make your lifestyle more sustainable and tech-savvy.</p>
    </header>
    <section>
      <h2>Latest Tips</h2>
      <ul>
        <li><FaLeaf /> Switch to LED lighting to save energy</li>
        <li><FaLeaf /> Plant a small herbal garden in your balcony</li>
        <li>Try eco-friendly cleaning solutions and support local farmers</li>
      </ul>
    </section>
    <section>
      <h2>Get Involved</h2>
      <p>
        Share your tips! Post on our <a href="/community">community hub</a>.
      </p>
    </section>
  </div>
);

export default GreenTips;
