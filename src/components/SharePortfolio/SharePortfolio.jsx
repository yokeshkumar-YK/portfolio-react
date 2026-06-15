import "./SharePortfolio.css";

const SharePortfolio = () => {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Portfolio link copied!");
  };

  return (
    <section className="share-portfolio">
      <h3>Share My Portfolio</h3>

      <p>
        Know someone looking for Frontend Development, Full Stack Development,
        or UI/UX Design skills? Feel free to share my portfolio or contact me
        directly.
      </p>

      <div className="share-buttons">
        <button onClick={copyLink} className="copy-btn">
          <i className="fa-solid fa-copy"></i>
          <span>Copy Portfolio Link</span>
        </button>

        <a href="tel:+916385574820" className="contact-action">
          <i className="fa-solid fa-phone"></i>
          <span>+91 6385574820</span>
        </a>

        <a href="mailto:yokeshkumar1910@gmail.com" className="contact-action">
          <i className="fa-solid fa-envelope"></i>
          <span>yokeshkumar1910@gmail.com</span>
        </a>
      </div>
    </section>
  );
};

export default SharePortfolio;
