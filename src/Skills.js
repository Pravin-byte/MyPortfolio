import { useRef } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiMysql,
  SiC,
  SiNodedotjs
} from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { DiJava } from 'react-icons/di';
import { motion, useInView } from 'framer-motion';

const iconAnimations = [
  { rotate: -15, y: -20 },  // HTML
  { rotate: 10, y: -30 },   // CSS
  { scale: 1.2, y: -10 },   // JS
  { rotate: 360, scale: 1.3 }, // React
  { y: -15, skewX: 5 },     // Node
  { scale: 1.1, y: -25 },   // Python
  { rotate: -5, y: -15 },   // SQL
  { scale: 1.15, y: -20 },  // Java
  { rotate: 5, y: -10 }     // C
];

function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const skills = [
    { icon: <SiHtml5 />, color: '#E34F26', title: "HTML5" },
    { icon: <SiCss3 />, color: '#1572B6', title: "CSS3" },
    { icon: <SiJavascript />, color: '#F7DF1E', title: "JavaScript" },
    { icon: <RiReactjsLine />, color: '#61DAFB', title: "React" },
    { icon: <SiNodedotjs />, color: '#339933', title: "Node.js" },
    { icon: <SiPython />, color: '#3776AB', title: "Python" },
    { icon: <SiMysql />, color: '#4479A1', title: "SQL" },
    { icon: <DiJava />, color: '#007396', title: "Java" },
    { icon: <SiC />, color: '#A8B9CC', title: "C" }
  ];

  return (
    <div className="skills" ref={containerRef} id="#skills">
      <motion.h2 
        className="skill-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        What i have Learnt
      </motion.h2>
      
      <div className="skill-icons">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-icon-container"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: index * 0.08
              }
            } : {}}
          >
            <motion.div
              className="skill-icon"
              style={{ color: skill.color }}
              data-title={skill.title}
              initial={{ scale: 0.8 }}
              animate={isInView ? { 
                scale: 1,
                ...iconAnimations[index],
                transition: {
                  duration: 0.6,
                  delay: index * 0.08,
                  type: 'spring',
                  damping: 10
                }
              } : {}}
              whileHover={{
                scale: 1.4,
                color: '#facc15',
                transition: { type: 'spring', stiffness: 500 }
              }}
            >
              {skill.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;