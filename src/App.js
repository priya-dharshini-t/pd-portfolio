import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <div className={darkMode ? 'app-wrapper dark' : 'app-wrapper'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
  <section id="home" className={`home-section ${darkMode ? 'dark' : 'light'}`}>
    <Home />
  </section>

  <section id="about" className={`about-section ${darkMode ? 'dark' : 'light'}`}>
    <About />
  </section>

  <section id="projects" className={`projects-section ${darkMode ? 'dark' : 'light'}`}>
    <Projects darkMode={darkMode}/>
  </section>

  <section id="certifications" className={`certificates-section ${darkMode ? 'dark' : 'light'}`}>
    <Certifications darkMode={darkMode} />
  </section>

  <section id="contact" className={`contact-section ${darkMode ? 'dark' : 'light'}`}>
    <Contact darkMode={darkMode}/>
  </section>
</main>

      <Footer />
    </div>
  );
}

