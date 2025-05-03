import React, { useEffect, useState } from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGoogle,
  SiVite,
  SiTailwindcss
} from "react-icons/si";
import "./App.css";

const iconMap = {
  JavaScript: <SiJavascript title="JavaScript" />,
  HTML: <SiHtml5 title="HTML" />,
  CSS: <SiCss3 title="CSS" />,
  React: <SiReact title="React" />,
  Node: <SiNodedotjs title="Node.js" />,
  Nodejs: <SiNodedotjs title="Node.js" />,
  Express: <SiExpress title="Express" />,
  MongoDB: <SiMongodb title="MongoDB" />,
  "Google Sheets API": <SiGoogle title="Google Sheets API" />,
  "Google Drive API": <SiGoogle title="Google Drive API" />,
  Vite: <SiVite title="Vite" />,
  "Tailwind CSS": <SiTailwindcss title="Tailwind CSS" />
};

const projects = [
  {
    title: "Diet Recommendation App",
    description: "Suggests meals based on calorie needs.",
    github: "https://github.com/Pravin-byte/diet-recommendation-system",
    languages: ["JavaScript", "HTML", "CSS"],
    tools: ["React", "Nodejs", "Express"]
  },
  {
    title: "InternTrack System",
    description: "Tracks student internships using Sheets & Drive.",
    github: "https://github.com/Pravin-byte/InternTrack",
    languages: ["JavaScript", "HTML", "CSS"],
    tools: ["Google Drive API", "Express", "Nodejs"]
  },
  {
    title: "TodoList (MERN)",
    description: "Full-featured to-do app using MERN stack.",
    github: "https://github.com/Pravin-byte/TodoApplication",
    languages: ["JavaScript", "HTML", "CSS"],
    tools: ["MongoDB", "Express", "React", "Nodejs"]
  },
  {
    title: "Portfolio",
    description: "Responsive portfolio built with React.",
    github: "https://github.com/Pravin-byte/MyPortfolio",
    languages: ["JavaScript", "HTML", "CSS"],
    tools: ["React"]
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    const relativeIndex = (index - activeIndex + projects.length) % projects.length;
    if (relativeIndex === 0) return "center";
    if (relativeIndex === 1) return "right";
    if (relativeIndex === projects.length - 1) return "left";
    return "hidden";
  };

  return (
    <>
      <h2 className="Project-title">What i have done</h2>
      <div className="carousel-wrapper" id="#projects">
        <div className="carousel-track">
          {projects.map((project, index) => {
            const position = getPosition(index);
            return (
              <div key={index} className={`card ${position}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="icon-row">
                  {project.languages.map((lang, i) => (
                    <span key={i} className="icon">{iconMap[lang]}</span>
                  ))}
                </div>
                <div className="icon-row">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="icon">{iconMap[tool]}</span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
