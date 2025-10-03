import React from "react";
import { FaRecycle, FaLeaf } from "react-icons/fa";
import "./FeaturePage.css";

const Sustainability = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaRecycle size={64} className="feature-icon" />
      <h1>Sustainability Stories</h1>
      <p>Read and share inspiring stories from eco warriors and clean-tech leaders around the globe.</p>
    </header>
    <section>
      <h2>Top Stories</h2>
      <ul>
        <li><FaLeaf /> Local city reduces plastic by 42%</li>
        <li>School launches solar challenge for children</li>
        <li>Startup builds world’s lightest electric vehicle</li>
      </ul>
    </section>
    <section>
      <h2>Submit Your Story</h2>
      <p>
        <a href="/contact">Send us</a> your story to get featured and inspire others!
      </p>
    </section>
  </div>
);

export default Sustainability;
