import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact({ darkMode }) {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xdkpkneg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setFormStatus("Thank you for connecting!");
      form.reset();
      setTimeout(() => setFormStatus(""), 3000);
    } else {
      setFormStatus("Oops! Something went wrong. Please try again.");
      setTimeout(() => setFormStatus(""), 3000);
    }
  };

  return (
    <section
      id="contact"
      className={`contact-section ${darkMode ? "dark" : "light"}`}
    >
      <h2 className="main-title">Let's Connect</h2>
      <p className="contact-subtitle">
        Feel free to reach out or message me directly below ✨
      </p>

      <div className="social-icons">
        <a
          href="mailto:priyadharshinipriya1975@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact-icon email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/priyadharshinit20/"
          target="_blank"
          rel="noreferrer"
          className="contact-icon linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/priya-dharshini-t"
          target="_blank"
          rel="noreferrer"
          className="contact-icon github"
        >
          <FaGithub />
        </a>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>

      {formStatus && <div className="thank-popup">{formStatus}</div>}
    </section>
  );
}
