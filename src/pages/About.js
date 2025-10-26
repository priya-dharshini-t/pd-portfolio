import React from "react";
import resume from "../assets/resume.pdf";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaPhp,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

export default function About() {
  const openResume = () => {
    window.open(resume, "_blank");
  };

  return (
    <section id="about" className="section about-section">
      {/* ===== Top Row: Resume + About Text ===== */}
      <div className="about-top" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", width: "100%" }}>
        {/* Resume */}
        <div className="section-left" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="resume-container" onClick={openResume}>
            <iframe
              src={`${resume}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Priya Resume"
              className="resume-preview"
            ></iframe>
            <div className="resume-overlay">Tap to View</div>
          </div>
          <a
            href={resume}
            download="Priya_Dharshini_Resume.pdf"
            className="download-btn"
          >
            Download Resume
          </a>
        </div>

        {/* About Text */}
        <div className="section-right" style={{ flex: 1 }}>
          <h2>About Me</h2>
          <p>
            I’m Priya Dharshini, a full-stack developer with a love for clean
            design and smooth user experiences. I enjoy turning complex problems
            into simple, elegant solutions. With a strong foundation in frontend and backend development, I aim to create web
            applications that are both functional and beautiful.
          </p>
          <p>
            Beyond coding, I enjoy learning new technologies, collaborating on
            exciting projects, and exploring creative ways to bring ideas to life.
          </p>
        </div>
      </div>

      {/* ===== Skills Section: Centered Below ===== */}
      <div className="skills-section" style={{ textAlign: "center", marginTop: "4rem", width: "100%" }}>
        <h3>My Skills</h3>
        <div className="skills-grid" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "4rem", marginTop: "3rem" }}>
          <div className="skill">
            <FaHtml5 className="skill-icon html" />
            <span>HTML</span>
          </div>
          <div className="skill">
            <FaCss3Alt className="skill-icon css" />
            <span>CSS</span>
          </div>
          <div className="skill">
            <FaJs className="skill-icon js" />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <FaPython className="skill-icon python" />
            <span>Python</span>
          </div>
          <div className="skill">
            <FaJava className="skill-icon java" />
            <span>Java</span>
          </div>
          <div className="skill">
            <FaReact className="skill-icon react" />
            <span>React</span>
          </div>
          <div className="skill">
            <FaPhp className="skill-icon php" />
            <span>PHP</span>
          </div>
          <div className="skill">
            <FaDatabase className="skill-icon mysql" />
            <span>MySQL</span>
          </div>
          <div className="skill">
            <FaGithub className="skill-icon github" />
            <span>Github</span>
          </div>
        </div>
      </div>
    </section>
  );
}
