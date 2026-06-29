import { useState } from "react";
import "./Projects.css";
import DesignModal from "./DesignModal";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [selectedDesigns, setSelectedDesigns] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const projects = [
    {
      title: "Smart Waste Management Tracker",
      image: "/images/projects/waste-management.png",
      description:
        "responsive waste tracking website with real-time analytics.",
      tech: ["HTML", "CSS", "JavaScript", "Chart.js"],
      demo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/project",
    },
    {
      title: "Event Management Web Application",
      image: "/images/projects/event-management.png",
      description: "Complete event booking platform with vendor management.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      demo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/project",
    },
  ];

  const miniProjects = [
    {
      title: "Tech Fest registration form",
      image: "/images/miniprojects/Fest-register.png",
      description: "Register form for the tech fest",
      demo: "https://tech-fest-registration-yk.netlify.app/",
    },
    {
      title: "To-Do App",
      image: "/images/miniprojects/todo-app.png",
      description: "Task management application with local storage.",
      demo: "https://todo-master-yk.netlify.app/",
    },
    {
      title: "Mini Games Collection",
      image: "/images/miniprojects/play_zone.png",
      description: "Fun and Thinking games with difficulty levels and scoring.",
      demo: "https://play-zone-yk.netlify.app/",
    },
    {
      title: "Calculator",
      image: "/images/miniprojects/calculator.png",
      description: "Simple calculator with arithmetic operations.",
      demo: "https://simple-calculator-yk.netlify.app/",
    },
  ];

  const designs = [
    {
      title: "UI Designs",
      image: "/images/designs/figma-design1.png",
      tool: "Figma",
      description: "Modern, clean and responsive UI designs.",
      link: "https://www.figma.com/file/your-design",
    },
    {
      title: "Posters, Logos & Banners",
      image: "/images/designs/canva-design1.png",
      tool: "Canva",
      description: "Creative posters, logos, banners and invitation cards.",
      link: "https://www.canva.com/design/your-design",
    },
  ];
  const canvaDesigns = [
    {
      type: "Invitation Card",
      image: "/images/designs/invitation.png",
      description: "Farewell invitation design",
    },

    {
      type: "Poster Design",
      image: "/images/designs/posters.png",
      description: "Event promotion poster",
    },

    {
      type: "Banner Design",
      image: "/images/designs/banner.png",
      description: "Social media banner",
    },

    {
      type: "Logo Design",
      image: "/images/designs/logo.png",
      description: "Brand identity logo",
    },
    {
      type: "ID Card Design",
      image: "/images/designs/id_card.png",
      description: "Professional ID card design",
    },
    {
      type: "Certificate Design",
      image: "/images/designs/certificate.png",
      description: "Certificate design for achievements",
    },
  ];

  const figmaDesigns = [
    {
      type: "Landing Page UI",
      image: "/images/designs/webpage.png",
      description: "Modern responsive landing page designed in Figma.",
    },
    {
      type: "Mobile App UI",
      image: "/images/designs/mobile.png",
      description: "Mobile application interface designed in Figma.",
    },
  ];

  return (
    <section className="section reveal-left">
      <section className="projects section" id="projects">
        <div className="section-title">
          <h2>My Works</h2>
        </div>

        {/* Tabs */}

        <div className="tabs-container">
          <button
            className={activeTab === "projects" ? "tab active" : "tab"}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>

          <button
            className={activeTab === "mini" ? "tab active" : "tab"}
            onClick={() => setActiveTab("mini")}
          >
            Mini Projects
          </button>

          <button
            className={activeTab === "designs" ? "tab active" : "tab"}
            onClick={() => setActiveTab("designs")}
          >
            Designs
          </button>
        </div>

        {/* PROJECTS */}

        {activeTab === "projects" && (
          <div className="project-container fade">
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
        )}

        {/* MINI PROJECTS */}

        {activeTab === "mini" && (
          <div className="project-container fade">
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
        )}

        {/* DESIGNS */}

        {activeTab === "designs" && (
          <div className="design-container fade">
            {designs.map((design, index) => (
              <div className="design-card" key={index}>
                <img src={design.image} alt={design.title} />

                <div className="design-content">
                  <div className="design-header">
                    <h3>{design.title}</h3>
                    <span className="tool-badge">{design.tool}</span>
                  </div>

                  <p>{design.description}</p>

                  {design.tool === "Canva" ? (
                    <button
                      className="design-btn"
                      onClick={() => {
                        setModalTitle("Canva Designs");
                        setSelectedDesigns(canvaDesigns);
                        setShowDesignModal(true);
                      }}
                    >
                      View Designs
                    </button>
                  ) : (
                    <button
                      className="design-btn"
                      onClick={() => {
                        setModalTitle("Figma Designs");
                        setSelectedDesigns(figmaDesigns);
                        setShowDesignModal(true);
                      }}
                    >
                      View Designs
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <DesignModal
          isOpen={showDesignModal}
          onClose={() => setShowDesignModal(false)}
          designs={selectedDesigns}
          title={modalTitle}
        />
      </section>
    </section>
  );
};

export default Projects;
