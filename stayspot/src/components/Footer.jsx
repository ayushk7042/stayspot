


// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import {
// //   FaTwitter,
// //   FaFacebookF,
// //   FaInstagram,
// //   FaLinkedinIn,
// //   FaPaperPlane,
// //   FaArrowUp,
// // } from "react-icons/fa";

// // const socialLinks = [
// //   { id: "twitter", url: "https://twitter.com/feedtag", icon: <FaTwitter />, label: "Twitter" },
// //   { id: "facebook", url: "https://facebook.com/feedtag", icon: <FaFacebookF />, label: "Facebook" },
// //   { id: "instagram", url: "https://instagram.com/feedtag", icon: <FaInstagram />, label: "Instagram" },
// //   { id: "linkedin", url: "https://linkedin.com/company/feedtag", icon: <FaLinkedinIn />, label: "LinkedIn" },
// // ];

// // const categories = [
// //   "insights",
// //   "food",
// //   "travel",
// //   "sports",
// //   "fashion",
// //   "beauty",
// //   "tech",
// //   "lifestyle",
// // ];

// // const usefulLinks = [
// //   { label: "Home", path: "/" },
// //   { label: "About Us", path: "/about" },
// //   { label: "Blog", path: "/blog" },
// //   { label: "Contact", path: "/contact" },
// // ];

// // const Footer = () => {
// //   const navigate = useNavigate();
// //   const [email, setEmail] = useState("");
// //   const [emailError, setEmailError] = useState(null);
// //   const [subscribed, setSubscribed] = useState(false);
// //   const [contactMsg, setContactMsg] = useState("");
// //   const [contactStatus, setContactStatus] = useState(null);

// //   const MAX_MSG_LENGTH = 300;

// //   const handleSubscribe = (e) => {
// //     e.preventDefault();
// //     if (!email || !/\S+@\S+\.\S+/.test(email)) {
// //       setEmailError("Please enter a valid email address");
// //       setSubscribed(false);
// //       return;
// //     }
// //     setEmailError(null);
// //     setSubscribed(true);
// //     setEmail("");
// //   };

// //   const handleContactSubmit = (e) => {
// //     e.preventDefault();
// //     if (!contactMsg.trim()) {
// //       setContactStatus({ error: "Please enter a message" });
// //       return;
// //     }
// //     setContactStatus({ success: "Message sent! Thanks for contacting." });
// //     setContactMsg("");
// //   };

// //   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// //   return (
// //     <footer className="footer" role="contentinfo">
// //       <div className="footer-top">
// //         {/* About & Social */}
// //         <div className="footer-about">
// //           <h4>About Feedtag</h4>
// //           <p className="about-desc">
// //             Daily insights on tech, travel, fashion, food, sports, beauty, lifestyle, and more.
// //           </p>
// //           <div className="social-icons" role="list" aria-label="Social media links">
// //             {socialLinks.map(({ id, url, icon, label }) => (
// //               <a
// //                 key={id}
// //                 href={url}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label={label}
// //                 className="social-link"
// //                 role="listitem"
// //                 tabIndex={0}
// //                 title={`Visit ${label}`}
// //               >
// //                 {icon}
// //               </a>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Categories */}
// //         <div className="footer-categories">
// //           <h4>Categories</h4>
// //           <ul>
// //             {categories.map((cat) => {
// //               const label = cat.charAt(0).toUpperCase() + cat.slice(1);
// //               return (
// //                 <li key={cat}>
// //                   <button
// //                     type="button"
// //                     className="category-btn"
// //                     onClick={() => navigate(`/category/${cat}`)}
// //                     aria-label={`Navigate to ${label} category`}
// //                   >
// //                     {label}
// //                   </button>
// //                 </li>
// //               );
// //             })}
// //           </ul>
// //         </div>

// //         {/* Useful Links */}
// //         <div className="footer-links">
// //           <h4>Useful Links</h4>
// //           <ul>
// //             {usefulLinks.map(({ label, path }) => (
// //               <li key={label}>
// //                 <Link to={path} className="footer-link" tabIndex={0}>
// //                   {label}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Newsletter & Contact */}
// //         <div className="footer-newsletter-contact">
// //           <h4>Newsletter</h4>
// //           {!subscribed ? (
// //             <form onSubmit={handleSubscribe} className="newsletter-form" noValidate aria-live="polite">
// //               <input
// //                 type="email"
// //                 placeholder="Your email address"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 aria-label="Email address"
// //                 aria-invalid={!!emailError}
// //                 aria-describedby="email-error"
// //                 required
// //               />
// //               <button type="submit" aria-label="Subscribe to newsletter">
// //                 Subscribe <FaPaperPlane aria-hidden="true" />
// //               </button>
// //               {emailError && (
// //                 <p id="email-error" className="error-msg" role="alert">
// //                   {emailError}
// //                 </p>
// //               )}
// //             </form>
// //           ) : (
// //             <p className="success-msg" role="status">
// //               Thank you for subscribing to our newsletter!
// //             </p>
// //           )}

// //           <h4>Contact Us</h4>
// //           <form onSubmit={handleContactSubmit} className="contact-form" noValidate aria-live="polite">
// //             <textarea
// //               placeholder="Your message"
// //               value={contactMsg}
// //               onChange={(e) => {
// //                 if (e.target.value.length <= MAX_MSG_LENGTH) setContactMsg(e.target.value);
// //               }}
// //               aria-label="Contact message"
// //               maxLength={MAX_MSG_LENGTH}
// //               required
// //             />
// //             <div className="char-count">
// //               {contactMsg.length}/{MAX_MSG_LENGTH}
// //             </div>
// //             <button type="submit" aria-label="Send contact message">
// //               Send
// //             </button>
// //           </form>
// //           {contactStatus && (
// //             <p className={contactStatus.error ? "error-msg" : "success-msg"} role="alert">
// //               {contactStatus.error || contactStatus.success}
// //             </p>
// //           )}
// //         </div>
// //       </div>

// //       {/* Back to Top */}
// //       <button
// //         aria-label="Back to top"
// //         className="back-to-top"
// //         onClick={scrollToTop}
// //       >
// //         <FaArrowUp />
// //       </button>

// //       {/* Footer Bottom */}
// //       <div className="footer-bottom" aria-label="Footer copyright">
// //         © {new Date().getFullYear()} Feedtag. All rights reserved.
// //       </div>

// //       <style>{`
// //         .footer {
// //           background: #f9fafb;
// //           color: #374151;
// //           padding: 3rem 2rem 2rem;
// //           font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
// //           border-top: 1px solid #e5e7eb;
// //           position: relative;
// //           overflow: hidden;
// //         }
// //         .footer-top {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
// //           gap: 2.5rem;
// //           max-width: 1200px;
// //           margin: 0 auto;
// //         }
// //         h4 {
// //           font-weight: 700;
// //           font-size: 1.3rem;
// //           margin-bottom: 1rem;
// //           color: #111827;
// //           text-transform: uppercase;
// //           letter-spacing: 0.06em;
// //         }
// //         p, label {
// //           font-size: 1rem;
// //           line-height: 1.5;
// //         }
// //         .footer-about p.about-desc {
// //           margin-bottom: 20px;
// //           color: #4b5563;
// //         }
// //         .social-icons {
// //           display: flex;
// //           gap: 1rem;
// //         }
// //         .social-link {
// //           font-size: 1.8rem;
// //           color: #6b7280;
// //           transition: transform 0.3s ease, color 0.3s ease;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           width: 36px;
// //           height: 36px;
// //           border-radius: 50%;
// //           background: #e5e7eb;
// //           cursor: pointer;
// //           user-select: none;
// //         }
// //         .social-link:hover,
// //         .social-link:focus-visible {
// //           color: #2563eb;
// //           background: #dbeafe;
// //           transform: scale(1.1);
// //           outline: none;
// //         }
// //         .footer-categories ul,
// //         .footer-links ul {
// //           list-style: none;
// //           padding: 0;
// //           margin: 0;
// //           display: flex;
// //           flex-direction: column;
// //           gap: 0.8rem;
// //         }
// //         .category-btn,
// //         .footer-link {
// //           background: none;
// //           border: none;
// //           color: #2563eb;
// //           font-size: 1rem;
// //           cursor: pointer;
// //           font-weight: 500;
// //           padding: 0;
// //           text-align: left;
// //           transition: color 0.3s ease;
// //           text-decoration: none;
// //           display: inline-block;
// //           border-radius: 4px;
// //         }
// //         .category-btn:hover,
// //         .category-btn:focus-visible,
// //         .footer-link:hover,
// //         .footer-link:focus-visible {
// //           color: #1e40af;
// //           outline: none;
// //           text-decoration: underline;
// //         }
// //         .footer-newsletter-contact {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 1rem;
// //           color: #374151;
// //         }
// //         form.newsletter-form,
// //         form.contact-form {
// //           display: flex;
// //           gap: 0.8rem;
// //           flex-wrap: wrap;
// //         }
// //         form.newsletter-form input,
// //         form.contact-form textarea {
// //           flex-grow: 1;
// //           padding: 0.6rem 1rem;
// //           border-radius: 8px;
// //           border: 1px solid #d1d5db;
// //           font-size: 1rem;
// //           outline-offset: 2px;
// //           resize: vertical;
// //           background-color: white;
// //           color: #111827;
// //           box-shadow: none;
// //           transition: box-shadow 0.3s ease, border-color 0.3s ease;
// //         }
// //         form.newsletter-form input:focus,
// //         form.contact-form textarea:focus {
// //           box-shadow: 0 0 0 3px #bfdbfe;
// //           border-color: #2563eb;
// //           outline: none;
// //           background-color: white;
// //         }
// //         form.newsletter-form button,
// //         form.contact-form button {
// //           background-color: #2563eb;
// //           border: none;
// //           color: white;
// //           padding: 0.6rem 1.5rem;
// //           border-radius: 8px;
// //           cursor: pointer;
// //           font-weight: 700;
// //           font-size: 1rem;
// //           display: flex;
// //           align-items: center;
// //           gap: 0.4rem;
// //           transition: background-color 0.3s ease;
// //           user-select: none;
// //         }
// //         form.newsletter-form button:hover,
// //         form.newsletter-form button:focus-visible,
// //         form.contact-form button:hover,
// //         form.contact-form button:focus-visible {
// //           background-color: #1e40af;
// //           outline: none;
// //         }
// //         .error-msg {
// //           color: #dc2626;
// //           font-weight: 600;
// //           font-size: 0.9rem;
// //           margin-top: -0.6rem;
// //           padding-left: 4px;
// //         }
// //         .success-msg {
// //           color: #16a34a;
// //           font-weight: 700;
// //           font-size: 1rem;
// //           margin-top: 0.3rem;
// //         }
// //         .char-count {
// //           font-size: 0.8rem;
// //           color: #9ca3af;
// //           text-align: right;
// //           margin-top: -0.6rem;
// //           margin-bottom: 0.4rem;
// //           user-select: none;
// //         }
// //         .back-to-top {
// //           position: fixed;
// //           bottom: 24px;
// //           right: 24px;
// //           background-color: #2563eb;
// //           color: white;
// //           padding: 12px;
// //           border-radius: 50%;
// //           border: none;
// //           font-size: 1.4rem;
// //           cursor: pointer;
// //           box-shadow: 0 6px 12px rgba(0,0,0,0.3);
// //           transition: background-color 0.3s ease;
// //           z-index: 200;
// //         }
// //         .back-to-top:hover,
// //         .back-to-top:focus-visible {
// //           background-color: #1e40af;
// //           outline: none;
// //         }
// //         .footer-bottom {
// //           text-align: center;
// //           margin-top: 2.5rem;
// //           font-size: 0.9rem;
// //           color: #6b7280;
// //           user-select: none;
// //         }
// //         @media (max-width: 800px) {
// //           .footer-top {
// //             grid-template-columns: 1fr;
// //           }
// //           form.newsletter-form,
// //           form.contact-form {
// //             flex-direction: column;
// //           }
// //         }
// //       `}</style>
// //     </footer>
// //   );
// // };

// // export default Footer;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaTwitter,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaPaperPlane,
//   FaArrowUp,
// } from "react-icons/fa";

// const socialLinks = [
//   { id: "twitter", url: "https://twitter.com/feedtag", icon: <FaTwitter />, label: "Twitter" },
//   { id: "facebook", url: "https://facebook.com/feedtag", icon: <FaFacebookF />, label: "Facebook" },
//   { id: "instagram", url: "https://instagram.com/feedtag", icon: <FaInstagram />, label: "Instagram" },
//   { id: "linkedin", url: "https://linkedin.com/company/feedtag", icon: <FaLinkedinIn />, label: "LinkedIn" },
// ];

// const categories = [
//   "insights",
//   "food",
//   "travel",
//   "sports",
//   "fashion",
//   "beauty",
//   "tech",
//   "lifestyle",
// ];

// const usefulLinks = [
//   { label: "Home", path: "/" },
//   { label: "About Us", path: "/about" },
//   { label: "Blog", path: "/blog" },
//   { label: "Contact", path: "/contact" },
// ];

// const Footer = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState(null);
//   const [subscribed, setSubscribed] = useState(false);
//   const [contactMsg, setContactMsg] = useState("");
//   const [contactStatus, setContactStatus] = useState(null);

//   const MAX_MSG_LENGTH = 300;

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       setEmailError("Please enter a valid email address");
//       setSubscribed(false);
//       return;
//     }
//     setEmailError(null);
//     setSubscribed(true);
//     setEmail("");
//   };

//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     if (!contactMsg.trim()) {
//       setContactStatus({ error: "Please enter a message" });
//       return;
//     }
//     setContactStatus({ success: "Message sent! Thanks for contacting." });
//     setContactMsg("");
//   };

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         {/* About & Social */}
//         <div className="footer-card footer-about">
//           <h4>About Feedtag</h4>
//           <p className="about-desc">
//             Daily insights on tech, travel, fashion, food, sports, beauty, lifestyle, and more.
//           </p>
//           <div className="social-icons">
//             {socialLinks.map(({ id, url, icon, label }) => (
//               <a key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="social-link">
//                 {icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="footer-card footer-categories">
//           <h4>Categories</h4>
//           <ul>
//             {categories.map((cat) => {
//               const label = cat.charAt(0).toUpperCase() + cat.slice(1);
//               return (
//                 <li key={cat}>
//                   <button type="button" className="category-btn" onClick={() => navigate(`/category/${cat}`)}>
//                     {label}
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Useful Links */}
//         <div className="footer-card footer-links">
//           <h4>Useful Links</h4>
//           <ul>
//             {usefulLinks.map(({ label, path }) => (
//               <li key={label}>
//                 <Link to={path} className="footer-link">{label}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Newsletter & Contact */}
//         <div className="footer-card footer-newsletter-contact">
//           <h4>Subscribe to Newsletter</h4>
//           {!subscribed ? (
//             <form onSubmit={handleSubscribe} className="newsletter-form">
//               <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
//               <button type="submit">Subscribe <FaPaperPlane /></button>
//               {emailError && <p className="error-msg">{emailError}</p>}
//             </form>
//           ) : (
//             <p className="success-msg">Thank you for subscribing!</p>
//           )}

//           <h4>Contact Us</h4>
//           <form onSubmit={handleContactSubmit} className="contact-form">
//             <textarea
//               placeholder="Your message"
//               value={contactMsg}
//               onChange={(e) => contactMsg.length <= MAX_MSG_LENGTH && setContactMsg(e.target.value)}
//               maxLength={MAX_MSG_LENGTH}
//               required
//             />
//             <div className="char-count">{contactMsg.length}/{MAX_MSG_LENGTH}</div>
//             <button type="submit">Send</button>
//           </form>
//           {contactStatus && <p className={contactStatus.error ? "error-msg" : "success-msg"}>{contactStatus.error || contactStatus.success}</p>}
//         </div>
//       </div>

//       <button className="back-to-top" onClick={scrollToTop}><FaArrowUp /></button>
//       <div className="footer-bottom">© {new Date().getFullYear()} Feedtag. All rights reserved.</div>

//       <style>{`
//         .footer {
//           background: linear-gradient(135deg, #f3f4f6 0%, #d1fae5 100%);
//           color: #1f2937;
//           padding: 4rem 2rem 2rem;
//           font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//           border-top: 2px solid #2563eb;
//         }
//         .footer-top {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 2.5rem;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .footer-card {
//           background: rgba(255,255,255,0.8);
//           padding: 1.8rem;
//           border-radius: 15px;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
//         .footer-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 12px 25px rgba(0,0,0,0.15);
//         }
//         h4 {
//           font-weight: 700;
//           font-size: 1.3rem;
//           margin-bottom: 1rem;
//           text-transform: uppercase;
//           color: #111827;
//         }
//         p, label {
//           font-size: 1rem;
//           line-height: 1.6;
//         }
//         .about-desc {
//           margin-bottom: 20px;
//           color: #374151;
//         }
//         .social-icons {
//           display: flex;
//           gap: 1rem;
//         }
//         .social-link {
//           font-size: 1.8rem;
//           color: #374151;
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           background: #e0f2f1;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//         }
//         .social-link:hover {
//           transform: scale(1.2) rotate(5deg);
//           color: #2563eb;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.2);
//         }
//         .footer-categories ul,
//         .footer-links ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           flex-direction: column;
//           gap: 0.8rem;
//         }
//         .category-btn,
//         .footer-link {
//           background: none;
//           border: none;
//           color: #2563eb;
//           font-size: 1rem;
//           cursor: pointer;
//           font-weight: 500;
//           padding: 0;
//           text-align: left;
//           text-decoration: none;
//           transition: all 0.3s ease;
//         }
//         .category-btn:hover,
//         .footer-link:hover {
//           transform: translateX(4px);
//           color: #1e40af;
//           text-decoration: underline;
//         }
//         .newsletter-form input,
//         .contact-form textarea {
//           padding: 0.6rem 1rem;
//           border-radius: 12px;
//           border: 1px solid #cbd5e1;
//           font-size: 1rem;
//           outline-offset: 2px;
//           transition: all 0.3s ease;
//         }
//         .newsletter-form input:focus,
//         .contact-form textarea:focus {
//           border-color: #2563eb;
//           box-shadow: 0 0 10px rgba(37, 99, 235, 0.3);
//         }
//         .newsletter-form button,
//         .contact-form button {
//           background-color: #2563eb;
//           border: none;
//           color: white;
//           padding: 0.6rem 1.5rem;
//           border-radius: 12px;
//           cursor: pointer;
//           font-weight: 700;
//           font-size: 1rem;
//           transition: all 0.3s ease;
//         }
//         .newsletter-form button:hover,
//         .contact-form button:hover {
//           background-color: #1e40af;
//           transform: scale(1.05);
//         }
//         .error-msg { color: #dc2626; font-weight: 600; font-size: 0.9rem; }
//         .success-msg { color: #16a34a; font-weight: 700; font-size: 1rem; }
//         .char-count { font-size: 0.8rem; color: #6b7280; text-align: right; }
//         .back-to-top {
//           position: fixed; bottom: 24px; right: 24px;
//           background-color: #2563eb; color: white;
//           padding: 12px; border-radius: 50%; border: none;
//           font-size: 1.4rem; cursor: pointer;
//           box-shadow: 0 6px 12px rgba(0,0,0,0.3);
//           transition: all 0.3s ease;
//         }
//         .back-to-top:hover { background-color: #1e40af; transform: scale(1.1); }
//         .footer-bottom { text-align: center; margin-top: 3rem; font-size: 0.9rem; color: #6b7280; }
//         @media (max-width: 800px) {
//           .footer-top { grid-template-columns: 1fr; }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaArrowUp,
} from "react-icons/fa";

const socialLinks = [
  { id: "twitter", url: "https://twitter.com/feedtag", icon: <FaTwitter />, label: "Twitter" },
  { id: "facebook", url: "https://facebook.com/feedtag", icon: <FaFacebookF />, label: "Facebook" },
  { id: "instagram", url: "https://instagram.com/feedtag", icon: <FaInstagram />, label: "Instagram" },
  { id: "linkedin", url: "https://linkedin.com/company/feedtag", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

const categories = [
  "insights",
  "food",
  "travel",
  "sports",
  "fashion",
  "beauty",
  "tech",
  "lifestyle",
];

const usefulLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [contactMsg, setContactMsg] = useState("");
  const [contactStatus, setContactStatus] = useState(null);

  const MAX_MSG_LENGTH = 300;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      setSubscribed(false);
      return;
    }
    setEmailError(null);
    setSubscribed(true);
    setEmail("");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactMsg.trim()) {
      setContactStatus({ error: "Please enter a message" });
      return;
    }
    setContactStatus({ success: "Message sent! Thanks for contacting." });
    setContactMsg("");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* About & Social */}
        <div className="footer-about">
          <h4>About Feedtag</h4>
          <p className="about-desc">
            Daily insights on tech, travel, fashion, food, sports, beauty, lifestyle, and more.
          </p>
          <div className="social-icons">
            {socialLinks.map(({ id, url, icon, label }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-link"
                title={`Visit ${label}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="footer-categories">
          <h4>Categories</h4>
          <ul>
            {categories.map((cat) => {
              const label = cat.charAt(0).toUpperCase() + cat.slice(1);
              return (
                <li key={cat}>
                  <button
                    type="button"
                    className="category-btn"
                    onClick={() => navigate(`/category/${cat}`)}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            {usefulLinks.map(({ label, path }) => (
              <li key={label}>
                <Link to={path} className="footer-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Contact */}
        <div className="footer-newsletter-contact">
          <h4>Subscribe to Newsletter</h4>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="newsletter-form" noValidate>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                Subscribe <FaPaperPlane />
              </button>
              {emailError && <p className="error-msg">{emailError}</p>}
            </form>
          ) : (
            <p className="success-msg">Thank you for subscribing!</p>
          )}

          <h4>Contact Us</h4>
          <form onSubmit={handleContactSubmit} className="contact-form" noValidate>
            <textarea
              placeholder="Your message"
              value={contactMsg}
              onChange={(e) => contactMsg.length <= MAX_MSG_LENGTH && setContactMsg(e.target.value)}
              maxLength={MAX_MSG_LENGTH}
              required
            />
            <div className="char-count">{contactMsg.length}/{MAX_MSG_LENGTH}</div>
            <button type="submit">Send</button>
          </form>
          {contactStatus && (
            <p className={contactStatus.error ? "error-msg" : "success-msg"}>
              {contactStatus.error || contactStatus.success}
            </p>
          )}
        </div>
      </div>

      {/* Back to Top */}
      <button className="back-to-top" onClick={scrollToTop}><FaArrowUp /></button>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Feedtag. All rights reserved.
      </div>

      <style>{`
        .footer {
          background: linear-gradient(135deg, #f3f4f6 0%, #e0f2f1 100%);
          color: #1f2937;
          padding: 4rem 2rem 2rem;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          border-top: 2px solid #2563eb;
          position: relative;
        }
        .footer-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        h4 {
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #1f2937;
          text-transform: uppercase;
        }
        p, label {
          font-size: 1rem;
          line-height: 1.6;
        }
        .footer-about p.about-desc {
          margin-bottom: 20px;
          color: #374151;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        .social-link {
          font-size: 1.8rem;
          color: #374151;
          transition: transform 0.3s ease, color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e0f2f1;
          cursor: pointer;
        }
        .social-link:hover {
          color: #2563eb;
          transform: scale(1.15);
        }
        .footer-categories ul,
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .category-btn,
        .footer-link {
          background: none;
          border: none;
          color: #2563eb;
          font-size: 1rem;
          cursor: pointer;
          font-weight: 500;
          padding: 0;
          text-align: left;
          text-decoration: none;
        }
        .category-btn:hover,
        .footer-link:hover {
          color: #1e40af;
          text-decoration: underline;
        }
        .footer-newsletter-contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        form.newsletter-form,
        form.contact-form {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        form.newsletter-form input,
        form.contact-form textarea {
          padding: 0.6rem 1rem;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          font-size: 1rem;
          outline-offset: 2px;
        }
        form.newsletter-form button,
        form.contact-form button {
          background-color: #2563eb;
          border: none;
          color: white;
          padding: 0.6rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }
        form.newsletter-form button:hover,
        form.contact-form button:hover {
          background-color: #1e40af;
        }
        .error-msg {
          color: #dc2626;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .success-msg {
          color: #16a34a;
          font-weight: 700;
          font-size: 1rem;
        }
        .char-count {
          font-size: 0.8rem;
          color: #6b7280;
          text-align: right;
        }
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background-color: #2563eb;
          color: white;
          padding: 12px;
          border-radius: 50%;
          border: none;
          font-size: 1.4rem;
          cursor: pointer;
          box-shadow: 0 6px 12px rgba(0,0,0,0.3);
        }
        .back-to-top:hover {
          background-color: #1e40af;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 3rem;
          font-size: 0.9rem;
          color: #6b7280;
        }
        @media (max-width: 800px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
