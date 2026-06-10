import { useRef } from "react";
import "./About.css";
const About = () => {
  const aboutRef = useRef(null);

  const scrollLeft = () => {
    aboutRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    aboutRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="about section" id="about">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="about-slider">
        <button className="about-btn" onClick={scrollLeft}>
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <div className="about-container" ref={aboutRef}>
          <div className="about-card">
            <h3>Who Am I?</h3>

            <p>
              Motivated and dedicated Computer Science Engineering student with
              strong interest in Frontend Development, Full Stack Development
              and UI Design.
            </p>

            <p>
              I enjoy building clean and interactive web applications while
              continuously learning new technologies and solving real-world
              problems.
            </p>
          </div>

          <div className="about-card">
            <h3>Engineering</h3>

            <p>
              <strong>B.E Computer Science Engineering</strong>
            </p>

            <p>Government College of Engineering, Tirunelveli</p>

            <p>CGPA : 8.40</p>

            <p>2022 - 2026</p>
          </div>

          <div className="about-card">
            <h3>Higher Secondary Schooling</h3>

            <p>
              <strong>Higher Secondary Education</strong>
            </p>

            <p>Hindu Higher Secondary School, Watrap</p>

            <p>Percentage : 90.67%</p>

            <p>2021 - 2022</p>
          </div>

          <div className="about-card">
            <h3>Secondary Schooling</h3>

            <p>
              <strong>Secondary School Education</strong>
            </p>

            <p>Hindu Higher Secondary School, Watrap</p>

            <p>Percentage : 94.40%</p>

            <p>2019 - 2020</p>
          </div>
        </div>

        <button className="about-btn" onClick={scrollRight}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default About;
