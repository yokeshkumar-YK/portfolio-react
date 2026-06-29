import "./Certifications.css";
import { useRef } from "react";

const Certifications = () => {
  const certificateRef = useRef(null);

  const certificates = [
    {
      title: "Front-End Development",
      issuer: "Great Learning",
      image: "/assets/certificates/frontend.jpg",
      alt: "Frontend Certificate",
    },
    {
      title: "Python for Beginners",
      issuer: "Infosys Springboard",
      image: "/assets/certificates/python.jpg",
      alt: "Python Certificate",
    },
    {
      title: "UI UX Design",
      issuer: "Great Learning",
      image: "/assets/certificates/uiux.jpg",
      alt: "UI UX Design Certificate",
    },
    {
      title: "Business Communication",
      issuer: "Infosys Springboard",
      image: "/assets/certificates/bbc.jpg",
      alt: "Business Communication Certificate",
    },
    {
      title: "Project Management",
      issuer: "Simplilearn",
      image: "/assets/certificates/pmp.jpg",
      alt: "Project Management Certificate",
    },
    {
      title: "Software Testing",
      issuer: "Testgrid university",
      image: "/assets/certificates/manual_testing.png",
      alt: "Software Testing Certificate",
    },
  ];

  const scrollLeft = () => {
    certificateRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    certificateRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="section reveal-right">
      <section className="certifications section" id="certifications">
        <div className="section-title">
          <h2>Certifications</h2>
        </div>

        <div className="certificate-slider">
          <button
            className="slide-btn"
            onClick={scrollLeft}
            aria-label="Scroll Left"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>

          <div className="certificate-container" ref={certificateRef}>
            {certificates.map((cert, index) => (
              <div className="certificate-card" key={index}>
                <img src={cert.image} alt={cert.alt} />

                <div className="certificate-content">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="slide-btn"
            onClick={scrollRight}
            aria-label="Scroll Right"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Certifications;
