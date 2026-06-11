import "./Projects.css";
const Projects = () => {
  const projects = [
    {
      title: "Smart Waste Management Tracker",
      image: "/images/waste-management.png",
      description:
        "A responsive waste tracking web application with real-time analytics, interactive charts, and local storage support.",
      tech: ["HTML", "CSS", "JavaScript", "Chart.js"],
      demo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/project",
    },
    {
      title: "Event Management Web Application",
      image: "/images/event-management.png",
      description:
        "A complete event booking platform with vendor management, service selection, search functionality, and database integration.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      demo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/project",
    },
  ];

  const miniProjects = [
    {
      title: "Weather App",
      image: "/images/weather-app.png",
      description:
        "Real-time weather forecasting application using API integration.",
      demo: "https://your-demo-link.com",
    },
    {
      title: "To-Do App",
      image: "/images/todo-app.png",
      description:
        "Task management application with local storage functionality.",
      demo: "https://todo-master-yk.netlify.app/",
    },
  ];

  const designs = [
    {
      title: "UI Designs",
      image: "/images/figma-design1.png",
      tool: "Figma",
      description:
        "Modern, clean and responsive UI designs created in Figma for web and mobile applications.",
      link: "https://www.figma.com/file/your-design",
    },
    {
      title: "Posters, Logos, Banners & Invitation Cards",
      image: "/images/canva-design1.png",
      tool: "Canva",
      description:
        "Creative posters, logos, banners and invitation cards designed in Canva for various occasions and brands.",
      link: "https://www.canva.com/design/your-design",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      {/* Featured Projects */}
      <div className="category-title">
        <h3>Featured Projects</h3>
      </div>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Projects */}
      <div className="category-title">
        <h3>Mini Projects</h3>
      </div>

      <div className="project-container">
        {miniProjects.map((project, index) => (
          <div className="project-card mini-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Designs */}
      <div className="category-title">
        <h3>Designs</h3>
      </div>

      <div className="design-container">
        {designs.map((design, index) => (
          <div className="design-card" key={index}>
            <img src={design.image} alt={design.title} />

            <div className="design-content">
              <div className="design-header">
                <h3>{design.title}</h3>

                <span className="tool-badge">{design.tool}</span>
              </div>

              <p>{design.description}</p>

              <a
                href={design.link}
                target="_blank"
                rel="noopener noreferrer"
                className="design-btn"
              >
                View Designs
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;