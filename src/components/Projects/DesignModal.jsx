import "./DesignModal.css";

const DesignModal = ({ isOpen, onClose, title, designs }) => {
  if (!isOpen) return null;

  return (
    <div className="design-modal-overlay">
      <div className="design-gallery-modal">
        <div className="gallery-header">
          <h2>{title}</h2>

          <button className="gallery-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="gallery-grid">
          {designs.map((design, index) => (
            <div className="gallery-card" key={index}>
              <img src={design.image} alt={design.type} />

              <div className="gallery-content">
                <h3>{design.type}</h3>

                <p>{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignModal;
