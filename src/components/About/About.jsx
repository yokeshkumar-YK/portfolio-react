import { useState } from "react";
import "./About.css";

const cards = [
  {
    title: "Who Am I?",
    content: (
      <>
        <p>
          Motivated and dedicated Computer Science Engineering student with
          strong interest in Frontend Development, Full Stack Development and UI
          Design.
        </p>

        <p>
          I enjoy building clean and interactive web applications while
          continuously learning new technologies and solving real-world
          problems.
        </p>
      </>
    ),
  },

  {
    title: "Engineering",
    content: (
      <>
        <p>
          <strong>B.E Computer Science Engineering</strong>
        </p>
        <p>Government College of Engineering, Tirunelveli</p>
        <p>CGPA : 8.40</p>
        <p>2022 - 2026</p>
      </>
    ),
  },

  {
    title: "Higher Secondary Schooling",
    content: (
      <>
        <p>
          <strong>Higher Secondary Education</strong>
        </p>
        <p>Hindu Higher Secondary School, Watrap</p>
        <p>Percentage : 90.67%</p>
        <p>2021 - 2022</p>
      </>
    ),
  },

  {
    title: "Secondary Schooling",
    content: (
      <>
        <p>
          <strong>Secondary School Education</strong>
        </p>
        <p>Hindu Higher Secondary School, Watrap</p>
        <p>Percentage : 94.40%</p>
        <p>2019 - 2020</p>
      </>
    ),
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [swing, setSwing] = useState(false);

  const nextCard = () => {
    setSwing(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 250);

    setTimeout(() => {
      setSwing(false);
    }, 800);
  };

  return (
    <section className="about section" id="about">
      <div className="about-slider">
        <div className="about-container">
          <div className="about-card" key={index}>
            <h3>{cards[index].title}</h3>
            {cards[index].content}
          </div>
        </div>

        <div className="lamp-wrapper">
          <div className="lamp-side-title">
            <h2>About Me</h2>
          </div>

          <div
            className={`lamp-container ${swing ? "swing" : ""}`}
            onClick={nextCard}
          >
            <div className="lamp-rope"></div>

            <div className="lamp-bulb">
              <i className="fa-solid fa-lightbulb"></i>
            </div>

            <span className="lamp-text">Pull Lamp To Reveal Story</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
