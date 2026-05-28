const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="project-container">
        <div className="project-card">
          <h3>Smart Waste Management Tracker</h3>

          <p>
            Developed a responsive waste tracking web application using HTML,
            CSS, JavaScript and Chart.js with real-time chart updates and local
            storage support.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Chart.js</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Event Management Web Application</h3>

          <p>
            Created a modern event booking platform with vendor management,
            service selection and search functionalities using frontend and
            database integration.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>MySQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
