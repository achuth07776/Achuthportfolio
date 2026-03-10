import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Model Developer Intern</h4>
                <h5>ZigmaPeople Private Limited</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
            <p>
              Developing and integrating AI/ML models for a national-scale multi-tenant SaaS platform
              for incubation management. Contributing to AI-driven insights for startup evaluation,
              recommendation systems, and decision-support analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android App Development Intern</h4>
                <h5>APSSDC</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a fully functional E-commerce Android application using Java. Implemented
              product browsing, cart management, and user authentication while optimizing UI/UX
              and improving overall application performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
