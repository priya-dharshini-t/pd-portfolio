// components/Internships.js
import React from 'react';

const internships = [
  {
    company: "NullClass",
    role: "Web Development Intern",
    duration: "31st May – 31st July 2024",
    description:
      "I successfully completed a Web Development internship where I built a real-time website like Internshala using HTML, CSS, JavaScript, React, and MongoDB. During this internship, I developed features like user authentication, internship listings, dashboards, OTP verification, profile section, and responsive design.",
    certificatePDF: "/pdfs/NullClass.pdf",
  },
  {
    company: "CodeBind Technologies",
    role: "Web Development Intern",
    duration: "15th June – 29th June 2023",
    description:
      "Completed a short-term internship in web development where I built a shopping website using HTML, CSS, PHP, and MySQL. Gained exposure through corporate training, workshops, and practical project.",
    certificatePDF: "/pdfs/codebind.pdf",
  },
];

const Internships = () => {
  return (
    <div className="internship-section">
      {internships.map((intern, index) => (
        <div className="intern-card" key={index}>
          <h3><b>{intern.company}</b></h3>
          <p><strong>Role:</strong> {intern.role}</p>
          <p><strong>Duration:</strong> {intern.duration}</p>
          <p>{intern.description}</p>
          {intern.certificatePDF && (
            <p>
              <a
                href={intern.certificatePDF}
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 View Certificates (PDF)
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Internships;
