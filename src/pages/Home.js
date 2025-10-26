import React from "react";
import avatar from "../assets/mee.jpg";

export default function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="section-left">
        <h1>Hello, I’m Priya </h1>
        <p>
          Welcome to my portfolio.<br></br> I’m a passionate
          developer who loves building intuitive, responsive, and modern web
          applications. Explore my projects, internships, and certifications
          below to see what I’ve been working on!
        </p>
      </div>
      <div className="section-right">
        <img src={avatar} alt="Priya Avatar" className="profile-img" />
      </div>
    </section>
  );
}

