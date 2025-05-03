import { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import AcademicProjects from './AcademicProjects';

function App() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (overlayRef.current) {
        overlayRef.current.style.background = `
          radial-gradient(
            circle 300px at ${x}px ${y}px,
            rgba(255, 255, 255, 0.25),
            transparent 50%
          )
        `;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <div ref={overlayRef} className="light-overlay"></div>

      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <AcademicProjects />
      <footer className="portfolio-footer">
  <div className="footer-content">
    <p>© {new Date().getFullYear()} Pravin. All rights reserved.</p>
    <div className="footer-icons">
      <a href="https://github.com/Pravin-byte" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/pravinbyte/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pravin2210019@ssn.edu.in">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;