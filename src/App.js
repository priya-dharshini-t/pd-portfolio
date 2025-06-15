import React, { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import StarryBackground from './components/StarryBackground';
import AnimatedBackground from './components/AnimatedBackground';
import './AppStyles.css';
import ScrollToTop from 'react-scroll-to-top';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import ProjectsList from './components/ProjectsList';
import Internships from './components/Internship';
import Certificates from './pages/Certifications';
import meeImage from './assets/mee.jpg';
import avatarImage from './assets/avatar2.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function App() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="app-wrapper">
      <StarryBackground />
      <AnimatedBackground />
      <ScrollToTop smooth />

      {/* Navbar */}
<nav className="navbar">
  <div className="navbar-content">
    {/* LEFT: Navigation Links */}
    <div className="nav-links">
      {['home', 'about', 'projects', 'certifications', 'contact'].map((section) => (
        <Link
          key={section}
          to={section}
          smooth
          duration={500}
          spy
          activeClass="active-link"
          className="link-item"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Link>
      ))}
    </div>

    {/* RIGHT: Resume + Dark Mode */}
    <div className="navbar-right">
      <a
        href="/resume.pdf"
        download="Priya_Dharshini_Resume.pdf"
        className="resume-download-btn"
      >
        📄 Resume
      </a>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="dark-toggle"
        aria-label="Toggle Dark Mode"
      >
         {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  </div>
</nav>

      <div className="content">

        {/* Home Section */}
        <Element name="home" className="section home-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="section-left"
          >
            <h1 className="home-header">Hello and Welcome to My Digital Space! 👋</h1>
            <p>
              This portfolio is a window into my evolving tech journey — where every
              certification earned, every internship tackled, and every project built tells
              a story of innovation, learning, and passion.
              <br />
              Let’s explore the future — one click at a time. 💻🚀
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="scroll-hint"
            >
              ⬇ Scroll down
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="section-right"
          >
            <img src={avatarImage} alt="Cartoon avatar of Priya" className="profile-img" />
          </motion.div>
        </Element>

        {/* About Section */}
        <Element name="about" className="section about-section">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="section-right"
          >
            <img src={meeImage} alt="Real photo of Priya" className="profile-img" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="section-left"
          >
            <h2 className="section-header">About Me</h2>
            <p>
              Hi, I’m Priya Dharshini .T — a passionate and curious software engineer with a love for
              technology that solves real-world problems. I recently completed my Bachelor’s in
              Engineering and have since been on a journey through full-stack development and Python.
              Whether I’m debugging code, designing interfaces, or exploring frameworks, I’m always
              driven by a desire to learn and innovate.
              <br />
              Beyond code, I believe in clarity, collaboration, and creating software that matters.
              I’m excited to bring fresh energy, strong fundamentals, and a builder’s mindset into every opportunity I take on.
            </p>
          </motion.div>
        </Element>

        {/* Projects Section */}
        <Element name="projects" className="section projects-section">
          <ProjectsList />
        </Element>

        {/* Certifications Section */}
        <Element name="certifications" className="section certifications-section">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
    className="section-center"
  >
    <Internships />
    <Certificates />
  </motion.div>
</Element>


        {/* Contact Section */}
        <Element name="contact" className="section contact-section">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-center"
          >
            <h2 className="contact-heading">Let’s Connect ✨</h2>
            <p className="contact-sub">
              Drop a little “Hi 👋” — I’d love to hear from you!
            </p>

            <div className="cute-bubble">
              💌 Thank you for visiting my portfolio! You can reach me through these platforms:
            </div>

            <div className="creative-icons">
              <a
                href="https://www.linkedin.com/in/priya-dharshini-t-20pd"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon-wrapper" data-tooltip="LinkedIn">
                  <FaLinkedin />
                </div>
              </a>
              <a
                href="https://github.com/priya-dharshini-t"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon-wrapper" data-tooltip="GitHub">
                  <FaGithub />
                </div>
              </a>
              <a
                href="https://twitter.com/priyad_code"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon-wrapper" data-tooltip="Twitter">
                  <FaTwitter />
                </div>
              </a>
            </div>

            <p className="contact-email">
              📧 <a href="mailto:priyadharshinipriya1975@gmail.com">priyadharshinipriya1975@gmail.com</a>
            </p>
          </motion.div>
        </Element>
      </div>
    </div>
  );
}
