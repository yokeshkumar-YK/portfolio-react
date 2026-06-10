import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        <div className="skill-card">
          <i className="fa-solid fa-code"></i>

          <h3>Programming</h3>

          <div className="skill-tags">
            <span>C</span>
            <span>Python</span>
            <span>Java</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="skill-card">
          <i className="fa-solid fa-laptop-code"></i>

          <h3>Frontend</h3>

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Express</span>
            <span>Node.js</span>
          </div>
        </div>

        <div className="skill-card">
          <i className="fa-solid fa-database"></i>

          <h3>Tools</h3>

          <div className="skill-tags">
            <span>GitHub</span>
            <span>Canva</span>
            <span>Figma</span>
            <span>Postman</span>
            <span>Excel</span>
            <span>Word</span>
            <span>PowerPoint</span>
          </div>
        </div>

        <div className="skill-card">
          <i className="fa-solid fa-users"></i>

          <h3>Soft Skills</h3>

          <div className="skill-tags">
            <span>Teamwork</span>
            <span>Communication</span>
            <span>Problem Solving</span>
            <span>Leadership</span>
            <span>Critical Thinking</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
