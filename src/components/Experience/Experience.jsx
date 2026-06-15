import "./Experience.css";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Codem Inc.",
    duration: "December 2025 - June 2026 (6 months) Internship",
    location: "Palayamkottai, Tamil Nadu, India",
    learnings: [
      "Developed scalable web applications using React.",
      "Worked with APIs and database integration.",
      "Improved application performance and responsiveness.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Icanio",
    duration: "July 2025 - July 2025 (1 month) Internship",
    location: "Tirunelveli, Tamil Nadu, India",
    learnings: [
      "Built responsive user interfaces.",
      "Improved UI consistency across devices.",
      "Worked with reusable React components.",
      "Enhanced user experience and accessibility.",
    ],
  },
  {
    role: "User Interface Designer",
    company: "InternPe",
    duration: "January 2025 - February 2025 (2 months) Internship",
    location: "Jaipur, Rajasthan, India",
    learnings: [
      "Designed wireframes and prototypes in Figma.",
      "Learned UI/UX design principles.",
      "Created user-centered design solutions.",
      "Improved visual hierarchy and layouts.",
    ],
  },
  {
    role: "Network Engineer",
    company: "Kudankulam Nuclear Power Plant",
    duration: "November 2024 - November 2024 (1 month) Internship",
    location: "Kudankulam, Tamil Nadu, India",
    learnings: [
      "Understood enterprise networking concepts.",
      "Worked with network infrastructure basics.",
      "Learned system monitoring techniques.",
      "Observed real-world network operations.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "CodeAlpha",
    duration: "September 2024 - October 2024 (2 months) Internship",
    location: "Chennai, Tamil Nadu, India",
    learnings: [
      "Created interactive web applications.",
      "Practiced modern JavaScript concepts.",
      "Built responsive project interfaces.",
      "Improved debugging and problem-solving skills.",
    ],
  },
  {
    role: "Web Developer",
    company: "Elewayte",
    duration: "February 2024 - March 2024 (2 months) Internship",
    location: "Chennai, Tamil Nadu, India",
    learnings: [
      "Developed responsive websites.",
      "Worked with HTML, CSS, and JavaScript.",
      "Improved frontend development workflow.",
      "Learned deployment and optimization basics.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="section-title">
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* FRONT */}
                <div className="flip-card-front timeline-content">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>

                  <span className="flip-hint">View Learnings</span>
                </div>

                {/* BACK */}
                <div className="flip-card-back timeline-content">
                  <h3>Key Learnings</h3>
                  <ul>
                    {exp.learnings.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
