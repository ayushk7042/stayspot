import React from "react";
import { FaGlobe, FaMapMarkedAlt, FaCloud } from "react-icons/fa";
import "./FeaturePage.css";

const EmissionsMap = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaGlobe size={64} className="feature-icon" />
      <h1>Global Emissions Map</h1>
      <p>See real-time air quality and emissions data visualized worldwide.</p>
    </header>
    <section>
      <h2>Live Map</h2>
      <div className="map-embed">
        <iframe
          title="Emissions Map"
          src="https://www.google.com/maps"
          width="100%"
          height="250"
          frameBorder="0"
        />
      </div>
      <p>Explore hotspots and watch trends for cleaner cities and healthier communities.</p>
    </section>
    <section>
      <h2>How It Works</h2>
      <ul>
        <li><FaMapMarkedAlt /> Data from sensors and satellites</li>
        <li><FaCloud /> Updates every minute for reliability</li>
        <li>Open API for developers and researchers</li>
      </ul>
    </section>
  </div>
);

export default EmissionsMap;
