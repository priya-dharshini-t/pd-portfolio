import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Internships from '../components/Internship';
import './Certificates.css';

/* certificates import */
import nptel1 from '../assets/Introduction To Internet Of Things(Nptel)_page-0001.jpg';
import nptel2 from '../assets/Programming In Java(nptel)_page-0001.jpg';
import nptel3 from '../assets/Principles of Management.jpeg';
import cisco1 from '../assets/Python_Essentials_1_PCEP_page-0001.jpg';
import cisco2 from '../assets/Python_Essentials_2_PCAP_page-0001.jpg';
import linkedin1 from '../assets/CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn_page-0001.jpg';
import gl1 from '../assets/gl full stack dev.jpg';
import gl2 from '../assets/gl java.jpg';
import gl3 from '../assets/gl python fundamentals.jpg';
import others1 from '../assets/Accenture_certificate.png';
import others2 from '../assets/ec council.png';
import others3 from '../assets/GuviCertification - 09w69CskLt885J1e56.png';
import others4 from '../assets/scaler.png';
import tam from '../assets/10thtamil.jpg';
const certificateData = [
  {
    title: 'Introduction to Internet Of Things',
    issuer: 'Nptel',
    date: 'Jan-Apr 2024',
    img: nptel1,
    category: 'NPTEL',
  },
  {
    title: 'Programming in Java',
    issuer: 'Nptel',
    date: 'Jul-Oct 2023',
    img: nptel2,
    category: 'NPTEL',
  },
  {
    title: 'Principles of Management',
    issuer: 'Nptel',
    date: 'Jan-Apr 2023',
    img: nptel3,
    category: 'NPTEL',
  },
  {
    title: 'Python Essentials 1 ',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2024',
    img: cisco1,
    category: 'CISCO',
  },
  {
    title: 'Python Essentials 2 ',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2024',
    img: cisco2,
    category: 'CISCO',
  },
  {
    title: 'Career Essentials in Software Development',
    issuer: 'Linkedin Learning',
    date: 'Mar 2024',
    img: linkedin1,
    category: 'LINKEDIN LEARNING',
  },
  {
    title: 'Full Stack Development',
    issuer: 'Great Learning',
    date: 'Sep 2023',
    img: gl1,
    category: 'GREAT LEARNING',
  },
  {
    title: 'Java Programming',
    issuer: 'Great Learning',
    date: 'Jan 2023',
    img: gl2,
    category: 'GREAT LEARNING',
  },
  {
    title: 'Python Fundamentals',
    issuer: 'Great Learning',
    date: 'Jan 2023',
    img: gl3,
    category: 'GREAT LEARNING',
  },
  {
    title: 'A Practical Introduction to Cloud Computing',
    issuer: 'EC-Council',
    date: 'Mar 2024',
    img: others1,
    category: 'OTHERS',
  },
  {
    title: 'Python for Absolute Beginners',
    issuer: 'EC-Council',
    date: 'Mar 2024',
    img: others2,
    category: 'OTHERS',
  },
  {
    title: 'Python',
    issuer: 'Guvi',
    date: 'Jul 2023',
    img: others3,
    category: 'OTHERS',
  },
  {
    title: 'Python Course for Beginners',
    issuer: 'Scalar Topics',
    date: 'Apr 2024',
    img: others4,
    category: 'OTHERS',
  },
  {
  title: 'Parichaya to Praveen Exams (Hindi)',
  issuer: 'Dakshina Bharat Hindi Prachar Sabha',
  date: '2013 – 2024',
  img: '/pdfs/Hindi_certificates .pdf', 
  category: 'LANGUAGES',
},
{
  title: 'English Proficiency & Essay Competition',
  issuer: 'The Hindu Group & College Cultural Fest',
  date: '2022, 2023',
  img: '/pdfs/step.pdf',
  category: 'LANGUAGES',
},
{
  title: '1st Rank in Tamil (10th Board Exam)',
  issuer: 'Social Welfare Development Organization',
  date: '2018-2019',
  img: tam, // optional
  category: 'LANGUAGES',
},

];

const categories = ['All', 'NPTEL', 'CISCO', 'LINKEDIN LEARNING', 'GREAT LEARNING', 'LANGUAGES','OTHERS'];

export default function Certificates() {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredData =
    filter === 'All' ? certificateData : certificateData.filter(c => c.category === filter);

  const visibleCertificates = showAll ? filteredData : filteredData.slice(0, 3);

  return (
    <div className="certificates-page container">

      <h2 className="section-header">Internships</h2>
      <p className="section-subtext">Check out the hands-on learning experiences I gained during internships.</p>
      <Internships />
      <hr className="section-divider" />

      <h2 className="certificates-title">My Certifications </h2>
      <p className="cert-intro">I like to learn and explore new things. Here are some courses and certifications I completed.</p>

      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => {
              setFilter(cat);
              setShowAll(false); // Reset on filter change
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="certificate-grid">
        {visibleCertificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            {cert.img.endsWith('.pdf') ? (
  <a
    href={cert.img}
    target="_blank"
    rel="noopener noreferrer"
    className="thumbnail-button"
  >
    📄 View {cert.title}
  </a>
) : (
  <button className="thumbnail-button" onClick={() => setSelectedImg(cert.img)}>
    📄 View {cert.title}
  </button>
)}

            <div className="cert-info">
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
              <p className="date">📅 {cert.date}</p>
            </div>
          </div>
        ))}
      </div>

     {filteredData.length > 3 && (
  <p
    className="see-more-link"
    onClick={() => setShowAll(prev => !prev)}
  >
    {showAll ? 'See Less ▲' : 'See More ▼'}
  </p>
)}


      {selectedImg && (
        <Lightbox
          open={Boolean(selectedImg)}
          close={() => setSelectedImg(null)}
          slides={[{ src: selectedImg }]}
          carousel={{ finite: true }}
        />
      )}
    </div>
  );
}
