import "./SharePortfolio.css";
const SharePortfolio = () => {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Portfolio link copied!");
  };

  return (
    <div className="share-portfolio">
      <h3>Share My Portfolio</h3>

      <p>
        Know someone looking for Frontend, Full Stack Development or UI Design
        skills? Share my portfolio.
      </p>

      <div className="share-buttons">
        <button onClick={copyLink}>
          <i className="fa-solid fa-copy"></i>
          Copy Link
        </button>

        <a
          href={`https://wa.me/?text=Check out Yokesh Kumar's Portfolio ${window.location.href}`}
          target="_blank"
          rel="noreferrer"
          className="share-btn"
        >
          <i className="fa-brands fa-whatsapp"></i>
          WhatsApp
        </a>

        <a
          href={`mailto:?subject=Portfolio Recommendation&body=Check out Yokesh Kumar's Portfolio ${window.location.href}`}
          className="share-btn"
        >
          <i className="fa-solid fa-envelope"></i>
          Email
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
          target="_blank"
          rel="noreferrer"
          className="share-btn"
        >
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default SharePortfolio;
