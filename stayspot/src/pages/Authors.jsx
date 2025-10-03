import React from "react";
import { FaUsers, FaEdit } from "react-icons/fa";
import "./FeaturePage.css";

const Authors = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaUsers size={64} className="feature-icon" />
      <h1>Featured Authors</h1>
      <p>Meet our expert writers, scientists, and activists powering Feedtag!</p>
    </header>
    <section>
      <h2>Spotlight Authors</h2>
      <div className="author-list">
        <div><FaEdit /> <b>Ayush Sharma</b>: Full Stack Dev, green technologist</div>
        <div><FaEdit /> <b>Bhawana Gupta</b>: Community leader, educator</div>
        <div><FaEdit /> <b>Dr. Ravi Kumar</b>: Science advisor, researcher</div>
      </div>
    </section>
    <section>
      <h2>Write for Us</h2>
      <p>
        Want to be featured? <a href="/contact">Contact us</a> to contribute your stories, data or passion!
      </p>
    </section>
  </div>
);

export default Authors;
