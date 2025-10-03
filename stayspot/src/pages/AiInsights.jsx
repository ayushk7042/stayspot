import React from "react";
import { FaStar, FaRobot } from "react-icons/fa";
import "./FeaturePage.css";

const AiInsights = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaStar size={64} className="feature-icon" />
      <h1>AI-powered Insights</h1>
      <p>Get smart, personalized recommendations for articles and challenges.</p>
    </header>
    <section>
      <h2>How We Personalize</h2>
      <ul>
        <li><FaRobot /> Machine learning suggests climate actions, reads</li>
        <li>Privacy-first: No data sharing outside Feedtag</li>
      </ul>
    </section>
    <section>
      <h2>Try It!</h2>
      <p>Login and let Feedtag AI boost your learning journey.</p>
    </section>
  </div>
);

export default AiInsights;
