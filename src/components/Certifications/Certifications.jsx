import "./Certifications.css";
import { useRef } from "react";

const Certifications = () => {
  const certificateRef = useRef(null);

  const scrollLeft = () => {
    certificateRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    certificateRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="certifications section" id="certifications">
      <div className="section-title">
        <h2>Certifications</h2>
      </div>

      <div className="certificate-slider">
        <button className="slide-btn" onClick={scrollLeft}>
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <div className="certificate-container" ref={certificateRef}>
          <div className="certificate-card">
            <img
              src="/assets/certificates/frontend.jpg"
              alt="Frontend Certificate"
            />

            <div className="certificate-content">
              <h3>Front-End Development</h3>
              <p>Great Learning</p>
            </div>
          </div>

          <div className="certificate-card">
            <img
              src="/assets/certificates/python.jpg"
              alt="Python Certificate"
            />

            <div className="certificate-content">
              <h3>Python for Beginners</h3>
              <p>Infosys Springboard</p>
            </div>
          </div>

          <div className="certificate-card">
            <img src="/assets/certificates/uiux.jpg" alt="UI UX Design" />

            <div className="certificate-content">
              <h3>UI UX Design</h3>
              <p>Great Learning</p>
            </div>
          </div>

          <div className="certificate-card">
            <img
              src="/assets/certificates/bbc.jpg"
              alt="Business Communication"
            />

            <div className="certificate-content">
              <h3>Business Communication</h3>
              <p>Infosys Springboard</p>
            </div>
          </div>

          <div className="certificate-card">
            <img src="/assets/certificates/pmp.jpg" alt="Project Management" />

            <div className="certificate-content">
              <h3>Project Management</h3>
              <p>Simplilearn</p>
            </div>
          </div>
        </div>

        <button className="slide-btn" onClick={scrollRight}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Certifications;
