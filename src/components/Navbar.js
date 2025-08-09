import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-80} // adjust for navbar height
        className="nav-item"
      >
        About
      </Link>

      <Link
        to="projects"
        smooth={true}
        duration={500}
        offset={-80}
        className="nav-item"
      >
        Projects
      </Link>

      <Link
        to="certificates"
        smooth={true}
        duration={500}
        offset={-80}
        className="nav-item"
      >
        Certificates
      </Link>
    </nav>
  );
}

export default Navbar;
