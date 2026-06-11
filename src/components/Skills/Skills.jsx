import { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Programming");

  const skillsData = {
    Programming: ["C", "Python", "Java", "SQL"],

    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Express",
      "Node.js",
    ],

    Tools: [
      "GitHub",
      "Canva",
      "Figma",
      "Postman",
      "Excel",
      "Word",
      "PowerPoint",
    ],

    "Soft Skills": [
      "Teamwork",
      "Communication",
      "Problem Solving",
      "Leadership",
      "Critical Thinking",
    ],
  };

  return (
    <section className="skills section" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      {/* Tabs */}
      <div className="skills-tabs">
        {Object.keys(skillsData).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active Content */}
      <div className="skills-content">
        <div className="skill-tags">
          {skillsData[activeTab].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;