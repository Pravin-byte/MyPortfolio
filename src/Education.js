import React, { useEffect, useRef } from "react";
import "./App.css";

const Education = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const currentRefs = timelineRefs.current; // Store current refs in a variable
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('left-card')) {
              entry.target.style.animation = 'fadeInRight 1.5s forwards';
            } else if (entry.target.classList.contains('right-card')) {
              entry.target.style.animation = 'fadeInLeft 1.5s forwards';
            }
          } else {
            if (entry.target.classList.contains('left-card')) {
              entry.target.style.animation = 'fadeOutRight 1.5s forwards';
            } else if (entry.target.classList.contains('right-card')) {
              entry.target.style.animation = 'fadeOutLeft 1.5s forwards';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  const addToRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  return (
    <section className="design-section" id="#education">
      <h2 className="Education-title">Education</h2>
      <div className="timeline">
        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div 
          ref={addToRefs}
          className="timeline-component timeline-content left-card"
        >
          <h3>Govt. Hr. Sec. School, Veppalodai</h3>
          <p className="edu-degree">10th Grade – 84%</p>
          <p className="edu-duration">2019 – 2020</p>
        </div>

        <div 
          ref={addToRefs}
          className="timeline-component timeline-content right-card"
        >
          <h3>Govt. Hr. Sec. School, Veppalodai</h3>
          <p className="edu-degree">12th Grade – 90%</p>
          <p className="edu-duration">2021 – 2022</p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div 
          ref={addToRefs}
          className="timeline-component timeline-content left-card"
        >
          <h3>SSN College of Engineering</h3>
          <p className="edu-degree">B.E. in Computer Science and Engineering</p>
          <p className="edu-meta">Current CGPA: <strong>7.075</strong></p>
          <p className="edu-duration">2022 – Present</p>
        </div>
      </div>
    </section>
  );
};

export default Education;