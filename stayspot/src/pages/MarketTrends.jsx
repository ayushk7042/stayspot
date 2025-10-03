import React from "react";
import { FaChartLine, FaBriefcase } from "react-icons/fa";
import "./FeaturePage.css";

const MarketTrends = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaChartLine size={64} className="feature-icon" />
      <h1>Market Trends</h1>
      <p>Track the future of green technology and climate innovation.</p>
    </header>
    <section>
      <h2>Real-Time Data</h2>
      <p>
        Use our dashboard to view live trends in solar, wind, and eco-startups. Monitor how green investments grow!
      </p>
    </section>
    <section>
      <h2>News & Insights</h2>
      <p>
        Read analysis from industry experts. Get investment tips and business forecasts.
      </p>
    </section>
  </div>
);

export default MarketTrends;
