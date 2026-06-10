import "./Activities.css";

const Activities = () => {
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
        </div>
      </div>
    </section>
  );
};

export default Activities;
