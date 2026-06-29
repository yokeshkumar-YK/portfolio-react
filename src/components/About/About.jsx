import { useState } from "react";
import "./About.css";

const cards = [
  {
    title: "Who Am I?",
    content: (
      <>
        <p>
          • Passionate <strong>Computer Science Engineer</strong> with a strong
          interest in <strong>Frontend Development</strong>,
          <strong> Full Stack Development</strong>, and
          <strong> UI/UX Design</strong>.
        </p>

        <p>
          • Skilled in building <strong>responsive</strong>,
          <strong> user-friendly</strong>, and
          <strong> interactive web applications</strong>.
        </p>

        <p>
          • A <strong>continuous learner</strong> who enjoys solving real-world
          problems and exploring modern technologies.
        </p>

        <p>
          • Committed to writing <strong>clean</strong>,
          <strong> efficient</strong>, and
          <strong> maintainable code</strong>.
        </p>
      </>
    ),
  },

  {
    title: "Where I Completed My Graduation?",
    content: (
      <>
        <p>
          🎓 <strong>B.E. Computer Science and Engineering</strong>
        </p>

        <p>
          <strong>Government College of Engineering, Tirunelveli</strong>
        </p>

        <p>
          <strong>Timeline : </strong> 2022 – 2026
        </p>

        <p>
          <strong>CGPA :</strong> 8.40
        </p>

        <p>
          • Built a strong foundation in programming, web development,
          databases, and software engineering.
        </p>
      </>
    ),
  },
  {
    title: "Where I Completed My Schooling?",
    content: (
      <>
        <p>
          <strong>Hindu Higher Secondary School, Watrap</strong>
        </p>
        <p>
          🎓 <strong>Higher Secondary Education (HSC)</strong>
        </p>

        <p>
          Timeline : <strong> 2021 – 2022</strong> | Score:{" "}
          <strong> 90.67%</strong>
        </p>

        <p>
          🎓 <strong>Secondary School Education (SSLC)</strong>
        </p>

        <p>
          Timeline : <strong>2019 – 2020</strong> | Score:{" "}
          <strong> 94.40%</strong>
        </p>

        <p>
          • Built a strong academic foundation through consistent performance,
          developing analytical thinking, discipline, and problem-solving
          skills.
        </p>
      </>
    ),
  },

  {
    title: "Beyond The Screen",
    content: (
      <>
        <p>
          <strong>Movies & Film Analysis</strong>
          <br />
          Enjoy exploring storytelling, cinematography, and character
          development.
        </p>

        <p>
          <strong>Travelling</strong>
          <br />
          Love discovering new places, cultures, and experiences.
        </p>

        <p>
          <strong>History</strong>
          <br />
          Curious about historical events, civilizations, and their impact on
          the present.
        </p>

        <p>
          <strong>Painting</strong>
          <br />
          Express creativity through sketching and painting in my free time.
        </p>
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
    <section className="section reveal">
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

              <span className="lamp-text">Pull Lamp To Reveal Answers</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
