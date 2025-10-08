import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaUserAlt,
  FaRegSmile,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const initialForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.email.trim())
      errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email address.";
    if (!form.subject.trim()) errs.subject = "Subject is required.";
    if (!form.message.trim()) errs.message = "Please enter your message.";
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSubmitted(true);
      // Here you would POST to your backend/contact endpoint.
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-hero">
        <h1>
          <FaEnvelope size={38} /> Contact Feedtag
        </h1>
        <p>
          We're always happy to help! Reach out for support, partnership, press, or any questions—we'll respond promptly.
        </p>
      </header>

      <section className="contact-details">
        <div>
          <FaMapMarkerAlt size={20} /> Office: Aff allainces, Gurgaon Sec 62, India
        </div>
        <div>
          <FaPhone size={20} /> +91-7042070261
        </div>
        <div>
          <FaEnvelope size={20} /> ayush@affallainces.com
        </div>
        <div>
          <FaWhatsapp size={20} /> Whatsapp: +91-7042070261
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        {submitted ? (
          <div className="contact-feedback">
            <FaRegSmile size={32} color="#3b82f6" />
            <p>
              Thank you for getting in touch! <br /> Our team will respond within one business day.
            </p>
          </div>
        ) : (
          <form className="contact-form formal-contact-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
            <div className={`form-field${errors.name ? " error" : ""}`}>
              <label htmlFor="name">
                <FaUserAlt /> Full Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                required
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>
            <div className={`form-field${errors.email ? " error" : ""}`}>
              <label htmlFor="email">
                <FaEnvelope /> Email Address
              </label>
              <input
                id="email"
                name="email"
                placeholder="ayush@affallainces.com"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                required
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>
            <div className={`form-field${errors.subject ? " error" : ""}`}>
              <label htmlFor="subject">
                <FaPaperPlane /> Subject
              </label>
              <input
                id="subject"
                name="subject"
                placeholder="e.g. Feedback, Partnership, Support…"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={!!errors.subject}
                required
              />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </div>
            <div className={`form-field${errors.message ? " error" : ""}`}>
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="How can we help you today?"
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                required
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>
            <button type="submit" className="formal-btn">
              <FaPaperPlane style={{ verticalAlign: "-2px", marginRight: "0.5em" }} />
              Send Message
            </button>
            <div className="form-microcopy">
              We respect your privacy—your details are always confidential.
            </div>
          </form>
        )}
      </section>

      <section className="contact-map">
        <h2>Visit Our Office</h2>
        <iframe
          title="Feedtag Location"
          src="https://maps.google.com/maps?q=Green%20City%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          width="100%"
          height="300"
          style={{ borderRadius: "16px" }}
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
