import React from "react";
import { FaComments, FaUsers } from "react-icons/fa";
import "./FeaturePage.css";

const Community = () => (
  <div className="feature-page">
    <header className="feature-header">
      <FaComments size={64} className="feature-icon" />
      <h1>Community Hub</h1>
      <p>Connect, discuss, and inspire with passionate people across Feedtag's community.</p>
    </header>
    <section>
      <h2>Join Discussions</h2>
      <ul>
        <li><FaUsers /> Ask questions, share ideas, respond to posts</li>
        <li>Follow topic experts, vote for top answers</li>
      </ul>
    </section>
    <section>
      <h2>Events & Challenges</h2>
      <p>
        Participate in eco campaigns, online meetups, and green leader webinars!
      </p>
    </section>
  </div>
);

export default Community;
