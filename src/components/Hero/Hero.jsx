import { useEffect, useState } from "react";
import "./Hero.css";
const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "UI Designer",
  "Problem Solver",
  "Quality Analyst",
];

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.substring(0, text.length + 1));

          if (text === currentRole) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setText(currentRole.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT */}

        <div className="hero-content">
          <p className="intro-text">Hello, I'm</p>

          <h1>YokeshKumar S</h1>

          <h2 id="typing-text">{text}</h2>

          <p className="hero-description">
            Passionate Frontend & Full Stack Developer focused on building
            modern, responsive and user-friendly web applications with clean UI
            and scalable solutions.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">
              Contact Me
            </a>

            <a
              href="/assets/Yokeshkumar_S_17-06-2026.pdf"
              download
              className="btn secondary-btn"
            >
              Download Resume
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/yokeshkumar2812"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/yokeshkumar-YK"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-image">
          <img
            src="/assets/profile_photo.png"
            alt="Yokesh Kumar"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
