import { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaFigma,
  FaFileExcel,
  FaFileWord,
  FaFilePowerpoint,
  FaCode,
} from "react-icons/fa";

import {
  SiPython,
  SiMysql,
  SiExpress,
  SiCanva,
  SiPostman,
  SiC,
  SiNetlify,
} from "react-icons/si";

import {
  MdGroups,
  MdOutlineRecordVoiceOver,
  MdPsychology,
  MdLightbulb,
} from "react-icons/md";

import "./Skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Programming");

  const skillsData = {
    Programming: [
      { name: "C", icon: <SiC /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SQL", icon: <SiMysql /> },
    ],

    "Web Development": [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],

    Tools: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Excel", icon: <FaFileExcel /> },
      { name: "Word", icon: <FaFileWord /> },
      { name: "PowerPoint", icon: <FaFilePowerpoint /> },
    ],

    "Soft Skills": [
      { name: "Teamwork", icon: <MdGroups /> },
      { name: "Communication", icon: <MdOutlineRecordVoiceOver /> },
      { name: "Problem Solving", icon: <MdPsychology /> },
      { name: "Leadership", icon: <MdLightbulb /> },
      { name: "Critical Thinking", icon: <MdPsychology /> },
    ],
  };

  return (
    <section className="skills section" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-tabs">
        {Object.keys(skillsData).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skills-content">
        <div className="skills-grid">
          {skillsData[activeTab].map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
