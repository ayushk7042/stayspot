import React from "react";
import { FaLeaf, FaMedal } from "react-icons/fa";
import "./FeaturePage.css";

const EcoChallenges = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaLeaf size={64} className="feature-icon" />
      <h1>Eco Challenges</h1>
      <p>Join fun, gamified eco challenges and win badges for green actions!</p>
    </header>
    <section>
      <h2>Current Challenges</h2>
      <ul>
        <li><FaMedal /> Plant a seed today and share a photo</li>
        <li>Go plastic-free for a week</li>
        <li>Participate in climate quizzes and earn rewards!</li>
      </ul>
    </section>
    <section>
      <h2>Leaderboard & Rewards</h2>
      <p>Check your score and see how you rank among eco champions.</p>
    </section>
  </div>
);

export default EcoChallenges;
