import React, { useEffect } from "react";
import "./App.css";

const projects = [
  {
    title: "Job Management System",
    tech: "C",
    description:
      "Designed a platform for job seekers to explore job opportunities and for recruiters to find qualified candidates efficiently.",
    year:"2023"
  },
  {
    title: "Banking Management System",
    tech: "Java",
    description:
      "Built a system to manage banking operations, streamlining account management and transaction processes.",
    year:"2024"
  },
];

const AcademicProjects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            el.classList.remove("out-of-view");
          } else {
            el.classList.remove("in-view");
            el.classList.add("out-of-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="academic-projects" className="academic-projects-section">
      <h2 className="section-title">Academic Projects</h2>
      <div className="academic-projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-description">{proj.description}</p>
            <ul className="project-details">
              <li><strong>Tech:</strong> {proj.tech}</li>
              <li><strong>Year:</strong> {proj.year}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicProjects;
