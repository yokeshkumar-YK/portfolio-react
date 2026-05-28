const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <i className="fa-solid fa-envelope"></i>

          <h3>Email</h3>

          <p>yokeshkumar1910@gmail.com</p>
        </div>

        <div className="contact-card">
          <i className="fa-solid fa-phone"></i>

          <h3>Phone</h3>

          <p>+91 6385574820</p>
        </div>

        <div className="contact-card">
          <i className="fa-brands fa-linkedin"></i>

          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/yokeshkumar2812"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
