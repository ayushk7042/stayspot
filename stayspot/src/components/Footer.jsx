

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
// //     <footer className="footer">
// //       <div className="footer-top">
// //         {/* About & Social */}
// //         <div className="footer-about">
// //           <h4>About Feedtag</h4>
// //           <p className="about-desc">
// //             Daily insights on tech, travel, fashion, food, sports, beauty, lifestyle, and more.
// //           </p>
// //           <div className="social-icons">
// //             {socialLinks.map(({ id, url, icon, label }) => (
// //               <a
// //                 key={id}
// //                 href={url}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label={label}
// //                 className="social-link"
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
// //                 <Link to={path} className="footer-link">
// //                   {label}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Newsletter & Contact */}
// //         <div className="footer-newsletter-contact">
// //           <h4>Subscribe to Newsletter</h4>
// //           {!subscribed ? (
// //             <form onSubmit={handleSubscribe} className="newsletter-form" noValidate>
// //               <input
// //                 type="email"
// //                 placeholder="Your email address"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //               />
// //               <button type="submit">
// //                 Subscribe <FaPaperPlane />
// //               </button>
// //               {emailError && <p className="error-msg">{emailError}</p>}
// //             </form>
// //           ) : (
// //             <p className="success-msg">Thank you for subscribing!</p>
// //           )}

// //           <h4>Contact Us</h4>
// //           <form onSubmit={handleContactSubmit} className="contact-form" noValidate>
// //             <textarea
// //               placeholder="Your message"
// //               value={contactMsg}
// //               onChange={(e) => contactMsg.length <= MAX_MSG_LENGTH && setContactMsg(e.target.value)}
// //               maxLength={MAX_MSG_LENGTH}
// //               required
// //             />
// //             <div className="char-count">{contactMsg.length}/{MAX_MSG_LENGTH}</div>
// //             <button type="submit">Send</button>
// //           </form>
// //           {contactStatus && (
// //             <p className={contactStatus.error ? "error-msg" : "success-msg"}>
// //               {contactStatus.error || contactStatus.success}
// //             </p>
// //           )}
// //         </div>
// //       </div>

// //       {/* Back to Top */}
// //       <button className="back-to-top" onClick={scrollToTop}><FaArrowUp /></button>

// //       {/* Footer Bottom */}
// //       <div className="footer-bottom">
// //         © {new Date().getFullYear()} Feedtag. All rights reserved.
// //       </div>

// //       <style>{`
// //         .footer {
// //           background: linear-gradient(135deg, #f3f4f6 0%, #e0f2f1 100%);
// //           color: #1f2937;
// //           padding: 4rem 2rem 2rem;
// //           font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
// //           border-top: 2px solid #2563eb;
// //           position: relative;
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
// //           color: #1f2937;
// //           text-transform: uppercase;
// //         }
// //         p, label {
// //           font-size: 1rem;
// //           line-height: 1.6;
// //         }
// //         .footer-about p.about-desc {
// //           margin-bottom: 20px;
// //           color: #374151;
// //         }
// //         .social-icons {
// //           display: flex;
// //           gap: 1rem;
// //         }
// //         .social-link {
// //           font-size: 1.8rem;
// //           color: #374151;
// //           transition: transform 0.3s ease, color 0.3s ease;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           width: 40px;
// //           height: 40px;
// //           border-radius: 50%;
// //           background: #e0f2f1;
// //           cursor: pointer;
// //         }
// //         .social-link:hover {
// //           color: #2563eb;
// //           transform: scale(1.15);
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
// //           text-decoration: none;
// //         }
// //         .category-btn:hover,
// //         .footer-link:hover {
// //           color: #1e40af;
// //           text-decoration: underline;
// //         }
// //         .footer-newsletter-contact {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 1rem;
// //         }
// //         form.newsletter-form,
// //         form.contact-form {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 0.5rem;
// //         }
// //         form.newsletter-form input,
// //         form.contact-form textarea {
// //           padding: 0.6rem 1rem;
// //           border-radius: 8px;
// //           border: 1px solid #cbd5e1;
// //           font-size: 1rem;
// //           outline-offset: 2px;
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
// //           transition: background-color 0.3s ease;
// //         }
// //         form.newsletter-form button:hover,
// //         form.contact-form button:hover {
// //           background-color: #1e40af;
// //         }
// //         .error-msg {
// //           color: #dc2626;
// //           font-weight: 600;
// //           font-size: 0.9rem;
// //         }
// //         .success-msg {
// //           color: #16a34a;
// //           font-weight: 700;
// //           font-size: 1rem;
// //         }
// //         .char-count {
// //           font-size: 0.8rem;
// //           color: #6b7280;
// //           text-align: right;
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
// //         }
// //         .back-to-top:hover {
// //           background-color: #1e40af;
// //         }
// //         .footer-bottom {
// //           text-align: center;
// //           margin-top: 3rem;
// //           font-size: 0.9rem;
// //           color: #6b7280;
// //         }
// //         @media (max-width: 800px) {
// //           .footer-top {
// //             grid-template-columns: 1fr;
// //           }
// //         }
// //       `}</style>
// //     </footer>
// //   );
// // };

// // export default Footer;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane, FaArrowUp } from "react-icons/fa";
// import axios from "axios";

// const socialLinks = [
//   { id: "twitter", url: "https://twitter.com/feedtag", icon: <FaTwitter />, label: "Twitter" },
//   { id: "facebook", url: "https://facebook.com/feedtag", icon: <FaFacebookF />, label: "Facebook" },
//   { id: "instagram", url: "https://instagram.com/feedtag", icon: <FaInstagram />, label: "Instagram" },
//   { id: "linkedin", url: "https://linkedin.com/company/feedtag", icon: <FaLinkedinIn />, label: "LinkedIn" },
// ];

// const categories = ["insights", "food", "travel", "sports", "fashion", "beauty", "tech", "lifestyle"];

// const usefulLinks = [
//   { label: "Home", path: "/" },
//   { label: "About Us", path: "/about" },
//   { label: "Blog", path: "/blog" },
//   { label: "Contact", path: "/contact" },
// ];

// const Footer = () => {
//   const navigate = useNavigate();
//   const MAX_MSG_LENGTH = 300;

//   // Newsletter
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState(null);
//   const [subscribed, setSubscribed] = useState(false);

//   // Contact form
//   const [contactName, setContactName] = useState("");
//   const [contactEmail, setContactEmail] = useState("");
//   const [contactMsg, setContactMsg] = useState("");
//   const [contactStatus, setContactStatus] = useState(null);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       setEmailError("Please enter a valid email address");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:4000/api/email/subscribe", { email });
//       setSubscribed(true);
//       setEmail("");
//       setEmailError(null);
//     } catch (err) {
//       console.error("Subscribe Error:", err);
//       setEmailError(err.response?.data?.message || "Error subscribing");
//     }
//   };

//   const handleContactSubmit = async (e) => {
//     e.preventDefault();
//     if (!contactName || !contactEmail || !contactMsg.trim()) {
//       setContactStatus({ error: "All fields are required" });
//       return;
//     }

//     try {
//       await axios.post("http://localhost:4000/api/email/contact", {
//         name: contactName,
//         email: contactEmail,
//         message: contactMsg,
//       });
//       setContactStatus({ success: "Message sent! Thanks for contacting." });
//       setContactName("");
//       setContactEmail("");
//       setContactMsg("");
//     } catch (err) {
//       console.error("Contact Error:", err);
//       setContactStatus({ error: err.response?.data?.message || "Error sending message" });
//     }
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         {/* About & Social */}
//         <div className="footer-about">
//           <h4>About Feedtag</h4>
//           <p className="about-desc">
//             Daily insights on tech, travel, fashion, food, sports, beauty, lifestyle, and more.
//           </p>
//           <div className="social-icons">
//             {socialLinks.map(({ id, url, icon, label }) => (
//               <a
//                 key={id}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="social-link"
//                 title={`Visit ${label}`}
//               >
//                 {icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="footer-categories">
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
//         <div className="footer-links">
//           <h4>Useful Links</h4>
//           <ul>
//             {usefulLinks.map(({ label, path }) => (
//               <li key={label}>
//                 <Link to={path} className="footer-link">
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Newsletter & Contact */}
//         <div className="footer-newsletter-contact">
//           <h4>Subscribe to Newsletter</h4>
//           {!subscribed ? (
//             <form onSubmit={handleSubscribe} className="newsletter-form" noValidate>
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <button type="submit">
//                 Subscribe <FaPaperPlane />
//               </button>
//               {emailError && <p className="error-msg">{emailError}</p>}
//             </form>
//           ) : (
//             <p className="success-msg">Thank you for subscribing!</p>
//           )}

//           <h4>Contact Us</h4>
//           <form onSubmit={handleContactSubmit} className="contact-form" noValidate>
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={contactName}
//               onChange={(e) => setContactName(e.target.value)}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={contactEmail}
//               onChange={(e) => setContactEmail(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Your Message"
//               value={contactMsg}
//               onChange={(e) => contactMsg.length <= MAX_MSG_LENGTH && setContactMsg(e.target.value)}
//               maxLength={MAX_MSG_LENGTH}
//               required
//             />
//             <div className="char-count">{contactMsg.length}/{MAX_MSG_LENGTH}</div>
//             <button type="submit">Send</button>
//           </form>
//           {contactStatus && (
//             <p className={contactStatus.error ? "error-msg" : "success-msg"}>
//               {contactStatus.error || contactStatus.success}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Back to Top */}
//       <button className="back-to-top" onClick={scrollToTop}><FaArrowUp /></button>

//       {/* Footer Bottom */}
//       <div className="footer-bottom">© {new Date().getFullYear()} Feedtag. All rights reserved.</div>

//       <style>{`
//         .footer {
//           background: linear-gradient(135deg, #f3f4f6 0%, #e0f2f1 100%);
//           color: #1f2937;
//           padding: 4rem 2rem 2rem;
//           font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//           border-top: 2px solid #2563eb;
//           position: relative;
//         }
//         .footer-top {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 2.5rem;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         h4 { font-weight: 700; font-size: 1.3rem; margin-bottom: 1rem; color: #1f2937; text-transform: uppercase; }
//         p, label { font-size: 1rem; line-height: 1.6; }
//         .footer-about p.about-desc { margin-bottom: 20px; color: #374151; }
//         .social-icons { display: flex; gap: 1rem; }
//         .social-link {
//           font-size: 1.8rem;
//           color: #374151;
//           transition: transform 0.3s ease, color 0.3s ease;
//           display: flex; align-items: center; justify-content: center;
//           width: 40px; height: 40px; border-radius: 50%;
//           background: #e0f2f1; cursor: pointer;
//         }
//         .social-link:hover { color: #2563eb; transform: scale(1.15); }
//         .footer-categories ul, .footer-links ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem; }
//         .category-btn, .footer-link { background: none; border: none; color: #2563eb; font-size: 1rem; cursor: pointer; font-weight: 500; padding: 0; text-align: left; text-decoration: none; }
//         .category-btn:hover, .footer-link:hover { color: #1e40af; text-decoration: underline; }
//         .footer-newsletter-contact { display: flex; flex-direction: column; gap: 1rem; }
//         form.newsletter-form, form.contact-form { display: flex; flex-direction: column; gap: 0.5rem; }
//         form.newsletter-form input, form.contact-form input, form.contact-form textarea { padding: 0.6rem 1rem; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 1rem; outline-offset: 2px; }
//         form.newsletter-form button, form.contact-form button {
//           background-color: #2563eb; border: none; color: white; padding: 0.6rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 1rem; transition: background-color 0.3s ease;
//         }
//         form.newsletter-form button:hover, form.contact-form button:hover { background-color: #1e40af; }
//         .error-msg { color: #dc2626; font-weight: 600; font-size: 0.9rem; }
//         .success-msg { color: #16a34a; font-weight: 700; font-size: 1rem; }
//         .char-count { font-size: 0.8rem; color: #6b7280; text-align: right; }
//         .back-to-top { position: fixed; bottom: 24px; right: 24px; background-color: #2563eb; color: white; padding: 12px; border-radius: 50%; border: none; font-size: 1.4rem; cursor: pointer; box-shadow: 0 6px 12px rgba(0,0,0,0.3); }
//         .back-to-top:hover { background-color: #1e40af; }
//         .footer-bottom { text-align: center; margin-top: 3rem; font-size: 0.9rem; color: #6b7280; }
//         @media (max-width: 800px) { .footer-top { grid-template-columns: 1fr; } }
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
import emailjs from "emailjs-com";

const socialLinks = [
  { id: "twitter", url: "https://twitter.com/feedtag", icon: <FaTwitter />, label: "Twitter" },
  { id: "facebook", url: "https://facebook.com/feedtag", icon: <FaFacebookF />, label: "Facebook" },
  { id: "instagram", url: "https://instagram.com/feedtag", icon: <FaInstagram />, label: "Instagram" },
  { id: "linkedin", url: "https://linkedin.com/company/feedtag", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

const categories = ["insights", "food", "travel", "sports", "fashion", "beauty", "tech", "lifestyle"];

const usefulLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  const navigate = useNavigate();
  const MAX_MSG_LENGTH = 300;

  // Newsletter
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  // Contact form
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [contactStatus, setContactStatus] = useState(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ===== Handle Newsletter Subscribe =====
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    emailjs
      .send(
        "service_bbhlv08", // ✅ Your Service ID
        "template_1f5xkv8", // ✅ Your Template ID
        { user_email: email },
        "jvUtqXoLYzuDtF9qc" // ✅ Your Public Key
      )
      .then(
        () => {
          setSubscribed(true);
          setEmail("");
          setEmailError(null);
        },
        (error) => {
          console.error("EmailJS Subscribe Error:", error);
          setEmailError("Failed to send subscription email");
        }
      );
  };

  // ===== Handle Contact Form Submit =====
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMsg.trim()) {
      setContactStatus({ error: "All fields are required" });
      return;
    }

    emailjs
      .send(
        "service_bbhlv08", // ✅ Your Service ID
        "template_1f5xkv8", // ✅ Your Template ID (same or separate if preferred)
        {
          from_name: contactName,
          from_email: contactEmail,
          message: contactMsg,
        },
        "jvUtqXoLYzuDtF9qc" // ✅ Your Public Key
      )
      .then(
        () => {
          setContactStatus({ success: "Message sent successfully!" });
          setContactName("");
          setContactEmail("");
          setContactMsg("");
        },
        (error) => {
          console.error("EmailJS Contact Error:", error);
          setContactStatus({ error: "Failed to send message" });
        }
      );
  };

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
                  <button type="button" className="category-btn" onClick={() => navigate(`/category/${cat}`)}>
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
            <input
              type="text"
              placeholder="Your Name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
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
      <div className="footer-bottom">© {new Date().getFullYear()} Feedtag. All rights reserved.</div>

      {/* === Inline Styling (same as before) === */}
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
        h4 { font-weight: 700; font-size: 1.3rem; margin-bottom: 1rem; color: #1f2937; text-transform: uppercase; }
        p, label { font-size: 1rem; line-height: 1.6; }
        .footer-about p.about-desc { margin-bottom: 20px; color: #374151; }
        .social-icons { display: flex; gap: 1rem; }
        .social-link {
          font-size: 1.8rem;
          color: #374151;
          transition: transform 0.3s ease, color 0.3s ease;
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 50%;
          background: #e0f2f1; cursor: pointer;
        }
        .social-link:hover { color: #2563eb; transform: scale(1.15); }
        .footer-categories ul, .footer-links ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem; }
        .category-btn, .footer-link { background: none; border: none; color: #2563eb; font-size: 1rem; cursor: pointer; font-weight: 500; padding: 0; text-align: left; text-decoration: none; }
        .category-btn:hover, .footer-link:hover { color: #1e40af; text-decoration: underline; }
        .footer-newsletter-contact { display: flex; flex-direction: column; gap: 1rem; }
        form.newsletter-form, form.contact-form { display: flex; flex-direction: column; gap: 0.5rem; }
        form.newsletter-form input, form.contact-form input, form.contact-form textarea { padding: 0.6rem 1rem; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 1rem; outline-offset: 2px; }
        form.newsletter-form button, form.contact-form button {
          background-color: #2563eb; border: none; color: white; padding: 0.6rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 1rem; transition: background-color 0.3s ease;
        }
        form.newsletter-form button:hover, form.contact-form button:hover { background-color: #1e40af; }
        .error-msg { color: #dc2626; font-weight: 600; font-size: 0.9rem; }
        .success-msg { color: #16a34a; font-weight: 700; font-size: 1rem; }
        .char-count { font-size: 0.8rem; color: #6b7280; text-align: right; }
        .back-to-top { position: fixed; bottom: 24px; right: 24px; background-color: #2563eb; color: white; padding: 12px; border-radius: 50%; border: none; font-size: 1.4rem; cursor: pointer; box-shadow: 0 6px 12px rgba(0,0,0,0.3); }
        .back-to-top:hover { background-color: #1e40af; }
        .footer-bottom { text-align: center; margin-top: 3rem; font-size: 0.9rem; color: #6b7280; }
        @media (max-width: 800px) { .footer-top { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
};

export default Footer;
