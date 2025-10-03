import React from "react";
import { FaLanguage, FaGlobeAmericas } from "react-icons/fa";
import "./FeaturePage.css";

const Languages = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaLanguage size={64} className="feature-icon" />
      <h1>Multi-language Support</h1>
      <p>Browse our site in your preferred language and connect globally!</p>
    </header>
    <section>
      <h2>Available Languages</h2>
      <ul>
        <li>English</li>
        <li>Hindi</li>
        <li>Spanish</li>
        <li>French</li>
        <li>Chinese</li>
        <li>More coming soon...</li>
      </ul>
    </section>
    <section>
      <h2>Why It Matters</h2>
      <p>We believe everyone should access reliable environmental information, regardless of language. Join our translation team and help us grow!</p>
    </section>
  </div>
);

export default Languages;
