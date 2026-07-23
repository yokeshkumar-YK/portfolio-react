import { useState } from "react";
import "./Activities.css";
const activityCertificates = {
  nss: [
    {
      image: "/certificates/nss.jpg",
      title: "NSS Co-Ordinator",
      description:
        "Served as an NSS Co-Ordinator and actively participated in social welfare activities.",
    },
    {
      image: "/certificates/python.jpg",
      title: "Awareness Programme",
      description:
        "Participated in community awareness and volunteer initiatives.",
    },
  ],

  placement: [
    {
      image: "/certificates/pmp.jpg",
      title: "Placement Representative",
      description:
        "Coordinated placement drives and communicated with students.",
    },
  ],

  sports: [
    {
      image: "/certificates/frontend.jpg",
      title: "Sports Participation",
      description: "Participated in inter-college sports competitions.",
    },
  ],

  extracurricular: [
    {
      image: "/certificates/uiux.jpg",
      title: "Extracurricular Activities",
      description: "Participated in technical and non-technical competitions.",
    },
  ],
};
const Activities = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [certificates, setCertificates] = useState([]);
  const openCertificates = (title, certificateList) => {
    setModalTitle(title);
    setCertificates(certificateList);
    setShowModal(true);
  };
  return (
    <section className="activities section" id="activities">
      <div className="section-title">
        <h2>Leadership & Activities</h2>
      </div>

      <div className="activities-container">
        <div className="activity-card">
          <div className="activity-icon">
            <i className="fa-solid fa-user-group"></i>
          </div>

          <h3>NSS Co-Ordinator</h3>

          <p>
            Served as an NSS Co-Ordinator and actively participated in social
            welfare programs, community service activities, awareness campaigns
            and volunteer initiatives.
          </p>
          <button
            className="certificate-btn"
            onClick={() =>
              openCertificates("NSS Co-Ordinator", activityCertificates.nss)
            }
          >
            <i className="fa-solid fa-award"></i>
            View Certificates
          </button>
        </div>

        <div className="activity-card">
          <div className="activity-icon">
            <i className="fa-solid fa-briefcase"></i>
          </div>

          <h3>Placement Representative</h3>

          <p>
            Worked as a Placement Representative by coordinating placement
            activities, communicating with students and supporting recruitment
            processes within the college.
          </p>
          <button
            className="certificate-btn"
            onClick={() =>
              openCertificates(
                "Placement Representative",
                activityCertificates.placement,
              )
            }
          >
            <i className="fa-solid fa-award"></i>
            View Certificates
          </button>
        </div>

        <div className="activity-card">
          <div className="activity-icon">
            <i className="fa-solid fa-trophy"></i>
          </div>

          <h3>Sports Participation</h3>

          <p>
            Participated in various sports activities and competitions,
            improving teamwork, discipline, leadership and competitive spirit.
          </p>
          <button
            className="certificate-btn"
            onClick={() =>
              openCertificates(
                "Sports Participation",
                activityCertificates.sports,
              )
            }
          >
            <i className="fa-solid fa-award"></i>
            View Certificates
          </button>
        </div>

        <div className="activity-card">
          <div className="activity-icon">
            <i className="fa-solid fa-medal"></i>
          </div>

          <h3>Extracurricular Activities</h3>

          <p>
            Involved in technical and non-technical events including paper
            presentations, hackathons, connection events and student engagement
            activities.
          </p>
          <button
            className="certificate-btn"
            onClick={() =>
              openCertificates(
                "Extracurricular Activities",
                activityCertificates.extracurricular,
              )
            }
          >
            <i className="fa-solid fa-award"></i>
            View Certificates
          </button>
        </div>
      </div>
      {showModal && (
        <div className="certificate-modal" onClick={() => setShowModal(false)}>
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>{modalTitle}</h2>

              <button
                className="close-modal"
                onClick={() => setShowModal(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="certificate-grid">
              {certificates.map((certificate, index) => (
                <div className="certificate-card" key={index}>
                  <img src={certificate.image} alt={certificate.title} />

                  <div className="certificate-info">
                    <h4>{certificate.title}</h4>

                    <p>{certificate.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Activities;
