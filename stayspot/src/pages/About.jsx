// import React from "react";
// import { FaGlobe, FaLeaf, FaBolt, FaUsers, FaRocket, FaComments, FaRegLightbulb } from "react-icons/fa";
// import "./About.css";

// const About = () => (
//   <div className="about-page">
//     <header className="about-hero">
//       <FaGlobe size={64} className="about-hero-icon" />
//       <h1>About Feedtag</h1>
//       <p>
//         Feedtag is an interactive platform dedicated to environmental technology, air quality monitoring, and global awareness.
//         Our mission is to provide real-time data, reliable insights, and a dynamic community experience for everyone passionate about sustainability and tech innovation.
//       </p>
//     </header>

//     <section className="about-mission">
//       <h2>Our Mission</h2>
//       <p>
//         Empower individuals and organizations to make climate-friendly choices by delivering accurate air quality data, impactful news, and cutting-edge technology solutions.
//       </p>
//     </section>

//     <section className="about-values">
//       <h2>Core Values</h2>
//       <div className="about-values-list">
//         <div>
//           <FaLeaf size={32} />
//           <span>Sustainability</span>
//         </div>
//         <div>
//           <FaBolt size={32} />
//           <span>Innovation</span>
//         </div>
//         <div>
//           <FaUsers size={32} />
//           <span>Community</span>
//         </div>
//         <div>
//           <FaRocket size={32} />
//           <span>Performance</span>
//         </div>
//         <div>
//           <FaComments size={32} />
//           <span>Transparency</span>
//         </div>
//       </div>
//     </section>

//     <section className="about-story">
//       <h2>Our Story</h2>
//       <p>
//         Founded in 2022 by a team of enthusiastic developers, scientists, and activists, Feedtag started as a small project to visualize air quality for neighborhoods.<br />
//         Today, we connect thousands of users globally, power data-driven decisions for cities, and support a vibrant community striving for cleaner air and a greener future.
//       </p>
//     </section>

//     <section className="about-features">
//       <h2>What We Offer</h2>
//       <ul>
//         <li><FaRegLightbulb size={22} /> Live Air Quality Index maps for every region</li>
//         <li><FaRocket size={22} /> Green technology news and innovations</li>
//         <li><FaUsers size={22} /> Interactive community discussions</li>
//         <li><FaLeaf size={22} /> Personalized sustainability goals tracking</li>
//         <li><FaBolt size={22} /> Business and educational resources for climate action</li>
//         <li><FaComments size={22} /> Open data portal for research and development</li>
//       </ul>
//     </section>

//     <section className="about-team">
//       <h2>Meet Our Team</h2>
//       <div className="about-team-list">
//         <div>
//           <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" />
//           <h3>Ayush Sharma</h3>
//           <p>Founder & Full Stack Engineer</p>
//         </div>
//         <div>
//           <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Community Lead" />
//           <h3>Bhawana Gupta</h3>
//           <p>Community & Partnerships</p>
//         </div>
//         <div>
//           <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="Science Advisor" />
//           <h3>Dr. Ravi Kumar</h3>
//           <p>Science Advisor</p>
//         </div>
//       </div>
//     </section>
//   </div>
// );

// export default About;
import React from "react";
import { FaGlobe, FaLeaf, FaBolt, FaUsers, FaRocket, FaComments, FaRegLightbulb } from "react-icons/fa";
import "./About.css";

const About = () => (
  <div className="about-page">
    {/* Hero Section */}
    <header className="about-hero">
      <FaGlobe size={72} className="about-hero-icon" />
      <h1>About Feedtag</h1>
      <p>
        Feedtag is an interactive platform dedicated to environmental technology, air quality monitoring, and global awareness.
        Our mission is to provide real-time data, reliable insights, and a dynamic community experience for everyone passionate about sustainability and tech innovation.
      </p>
    </header>

    {/* Mission Section */}
    <section className="about-mission">
      <h2>Our Mission</h2>
      <p>
        Empower individuals and organizations to make climate-friendly choices by delivering accurate air quality data, impactful news, and cutting-edge technology solutions.
      </p>
    </section>

    {/* Core Values Section */}
    <section className="about-values">
      <h2>Core Values</h2>
      <div className="about-values-list">
        <div className="value-card">
          <FaLeaf size={36} />
          <span>Sustainability</span>
        </div>
        <div className="value-card">
          <FaBolt size={36} />
          <span>Innovation</span>
        </div>
        <div className="value-card">
          <FaUsers size={36} />
          <span>Community</span>
        </div>
        <div className="value-card">
          <FaRocket size={36} />
          <span>Performance</span>
        </div>
        <div className="value-card">
          <FaComments size={36} />
          <span>Transparency</span>
        </div>
      </div>
    </section>

    {/* Story Section */}
    <section className="about-story">
      <h2>Our Story</h2>
      <p>
        Founded in 2025 by a team of enthusiastic developers, scientists, and activists, Feedtag started as a small project to visualize air quality for neighborhoods.<br />
        Today, we connect thousands of users globally, power data-driven decisions for cities, and support a vibrant community striving for cleaner air and a greener future.
      </p>
    </section>

    {/* Features Section */}
    <section className="about-features">
      <h2>What We Offer</h2>
      <div className="features-grid">
        <div className="feature-item"><FaRegLightbulb size={26} /> Live Air Quality Index maps for every region</div>
        <div className="feature-item"><FaRocket size={26} /> Green technology news and innovations</div>
        <div className="feature-item"><FaUsers size={26} /> Interactive community discussions</div>
        <div className="feature-item"><FaLeaf size={26} /> Personalized sustainability goals tracking</div>
        <div className="feature-item"><FaBolt size={26} /> Business and educational resources for climate action</div>
        <div className="feature-item"><FaComments size={26} /> Open data portal for research and development</div>
      </div>
    </section>

    {/* Team Section */}
    <section className="about-team">
      <h2>Meet Our Team</h2>
      <div className="about-team-list">
        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" />
          <h3>Ayush Sharma</h3>
          <p>Founder & Full Stack Engineer</p>
        </div>
        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Community Lead" />
          <h3>Shreyansh Gupta</h3>
          <p>Community & Partnerships</p>
        </div>
        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="Science Advisor" />
          <h3>Dr. Ravi Kumar</h3>
          <p>Science Advisor</p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
