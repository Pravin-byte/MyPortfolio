import { useEffect, useRef, useState } from 'react';
import './App.css';

function Hero() {
  const titleRef = useRef(null);
  const textRefs = useRef([]);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    // Copy the ref values to local variables
    const titleNode = titleRef.current;
    const textNodes = textRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is in the viewport
    );

    // Observe the title and text elements
    if (titleNode) observer.observe(titleNode);
    textNodes.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      if (titleNode) observer.unobserve(titleNode);
      textNodes.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="home">
      <div
        id="title"
        ref={titleRef}
        className={inViewport ? 'fade-in-slide-up' : ''}
      >
        <span>I am Pravin,</span><br />
        <span>A Self Proclaimed Developer</span>
        <p
          className={`intro-text ${inViewport ? 'fade-in' : ''}`}
          ref={(el) => (textRefs.current[0] = el)}
        >
          I'm a student learning web development. I enjoy creating simple and meaningful projects that help me understand coding better.
        </p>
        <p
          className={`intro-text secondary ${inViewport ? 'fade-in' : ''}`}
          ref={(el) => (textRefs.current[1] = el)}
        >
          This portfolio shows my learning progress.
        </p>
        {/* Resume Download Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1jWxLF_aOn3hgiSWAbOoc7TfCSuk6EONP"
          download="Pravin_Resume.pdf"
        >
          <button className="download-btn">Download My Resume</button>
        </a>

      </div>
    </div>
  );
}

export default Hero;
