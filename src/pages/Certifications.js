import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../App.css";

// Certificate images
import tcsion from "../assets/tcsion.jpg";
import npteljava from "../assets/npteljava.jpg";
import npteliot from "../assets/npteliot.jpg";
import nptelpom from "../assets/nptelpom.jpeg";
import cisco1 from "../assets/cisco1.jpg";
import cisco2 from "../assets/cisco2.jpg";
import ciscohw from "../assets/ciscohw.jpg";
import gl1 from "../assets/gl1.jpg";
import gl2 from "../assets/gl2.jpg";
import gl3 from "../assets/gl3.jpg";
import gl4 from "../assets/gl4.jpg";
import gl5 from "../assets/gl5.jpg";
import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";
import ec1 from "../assets/ec1.png";
import ec2 from "../assets/ec2.png";
import accenture1 from "../assets/Accenture1.jpg";
import english_essay from "../assets/english_essay.jpg";
import step from "../assets/step.jpg";
import infosys from "../assets/infosys.jpg";
import tenthtamil from "../assets/10thtamil.jpg";
import linkedin1 from "../assets/linkedin1.jpg";

const certificateData = {
  TCS: [tcsion],
  NPTEL: [npteljava, npteliot, nptelpom],
  Cisco: [cisco1, cisco2, ciscohw, badge1, badge2, badge3],
  GreatLearning: [gl1, gl2, gl3, gl4, gl5],
  Language: [tenthtamil, step, english_essay],
  Others: [linkedin1, accenture1, infosys, ec1, ec2],
};

export default function Certifications({ darkMode }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const categories = [
    "TCS",
    "NPTEL",
    "Cisco",
    "GreatLearning",
    "Language",
    "Others",
  ];

  return (
    <section
      id="certifications"
      className={`section certificates-section ${darkMode ? "dark" : "light"}`}
    >
      <h2 className="main-title">
        {selectedCategory
          ? selectedCategory === "Cisco"
            ? "Cisco Certificates & Badges"
            : `${selectedCategory} Certificates`
          : "Certificates & Achievements"}
      </h2>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`category-tab ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Certificates Display */}
      {selectedCategory ? (
        <div className="certificates-grid">
          {certificateData[selectedCategory].map((cert, i) => (
            <div
              key={i}
              className="certificate-card"
              onClick={() => setSelectedImg(cert)}
            >
              <img src={cert} alt={`${selectedCategory} Certificate`} />
              <div className="certificate-overlay">Click to View</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-selection-text">Select a category to view certificates</p>
      )}

      {selectedImg && (
        <Lightbox
          open={Boolean(selectedImg)}
          close={() => setSelectedImg(null)}
          slides={[{ src: selectedImg }]}
        />
      )}
    </section>
  );
}
