import React, { useState, useEffect } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Highlight current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 100;

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(sec);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['home', 'about', 'projects', 'certifications', 'contact'];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Priya Dharshini</h2>
      </div>

      <div className="navbar-right">
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`nav-link ${active === link ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

          {/* Dark Mode Symbol */}
          <span
            onClick={() => setDarkMode(!darkMode)}
            style={{
              cursor: 'pointer',
              marginLeft: '0.5rem',
              fontSize: '1.2rem',
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </span>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

