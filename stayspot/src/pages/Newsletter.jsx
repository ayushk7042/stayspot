import React from "react";
import { FaEnvelopeOpenText, FaBell } from "react-icons/fa";
import "./FeaturePage.css";

const Newsletter = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaEnvelopeOpenText size={64} className="feature-icon" />
      <h1>Subscribe to Our Newsletter</h1>
      <p>Stay updated with curated articles, site news, and exclusive access to events.</p>
    </header>
    <section>
      <h2>Benefits</h2>
      <ul>
        <li><FaBell /> Weekly email summaries of top content</li>
        <li>Early access to new features and beta releases</li>
        <li>Invitations to webinars and eco-events</li>
      </ul>
    </section>
    <section>
      <h2>Subscribe Now</h2>
      <form className="feature-form">
        <input type="email" placeholder="Your Email Address" required />
        <button type="submit">Subscribe</button>
      </form>
      <p>We respect your privacy. Unsubscribe anytime.</p>
    </section>
  </div>
);

export default Newsletter;
