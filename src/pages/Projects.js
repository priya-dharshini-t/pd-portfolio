import React, { useState } from "react";
import "../App.css"; // global CSS

// Project Data
const projectData = {
  Internships: [
    {
      name: "TrendyOne",
      description: "An e-commerce fashion website built with React featuring product listing, cart, wishlist, authentication and so on.",
      viewLink: "https://trendyone.fwh.is/",
      githubLink: "https://github.com/priya-dharshini-t/trendyone",
      img: require("../assets/trendyone.jpg"),
    },
    {
      name: "Internshala Clone",
      description: "A clone of Internshala career portal with login, profile, jobs, internships and courses listing.",
      viewLink: "https://intern-area-frontend-ebon.vercel.app/",
      githubLink: "https://github.com/priya-dharshini-t/intern-area-frontend",
      img: require("../assets/internshala.jpg"),
    },
  ],
  Projects: [
    {
      name: "Absentees Tracker",
      description: "A web app to track student attendance, generate and send absent message to respective ",
      viewLink: "https://student-attendance-chi.vercel.app/",
      githubLink: "https://github.com/priya-dharshini-t/student-attendance",
      img: require("../assets/absent.jpg"),
    },
    {
      name: "Drive Alert System",
      description: "A system that monitors Driver's condition (sleepy/drowsy) and alerts in real time.",
      viewLink: "https://drive-alert-728b.vercel.app/",
      githubLink: "https://github.com/priya-dharshini-t/drive-alert",
      img: require("../assets/drivealert.jpg"),
    },
    {
      name: "Booking App",
      description: "A booking platform to schedule appointments, book tickets and manage slots efficiently.",
      viewLink: "https://anyticketz.vercel.app/",
      githubLink: "https://github.com/priya-dharshini-t/AnyTicketZ",
      img: require("../assets/anytickets.jpg"),
    },
  ],
};

export default function Projects({ darkMode }) {
  const [selectedCategory, setSelectedCategory] = useState("Internships");

  const categories = ["Internships", "Projects"];

  return (
    <section
      id="projects"
      className={`section projects-section ${darkMode ? "dark" : "light"}`}
    >
      <h1>My Works</h1>
      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`category-tab ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Project Cards */}
      <div className="projects-grid">
        {projectData[selectedCategory].map((proj, i) => (
          <div key={i} className="project-card">
            <img src={proj.img} alt={proj.name} className="project-img" />
            <h3 className="project-name">{proj.name}</h3>
            <p className="project-description">{proj.description}</p>
            <div className="project-links">
              <a href={proj.viewLink} target="_blank" rel="noreferrer">
                View Project
              </a>
              <a href={proj.githubLink} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}