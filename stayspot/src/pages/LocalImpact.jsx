import React from "react";
import { FaMapMarkedAlt, FaChartBar } from "react-icons/fa";
import "./FeaturePage.css";

const LocalImpact = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaMapMarkedAlt size={64} className="feature-icon" />
      <h1>Local Impact Tracker</h1>
      <p>Track and support local community actions for the environment.</p>
    </header>
    <section>
      <h2>Recent Achievements</h2>
      <ul>
        <li><FaChartBar /> Water conservation drive in Green City</li>
        <li>Neighborhood solar power installation</li>
      </ul>
    </section>
    <section>
      <h2>Get Involved</h2>
      <p>
        Join local groups and measure your positive impact for a greener tomorrow!
      </p>
    </section>
  </div>
);

export default LocalImpact;
