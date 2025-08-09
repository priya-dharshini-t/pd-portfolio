// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // keep your styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="active"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="certificates"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="active"
          >
            Certificates
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
