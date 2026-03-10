import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Hybrid Quantum ML Models for Financial Fraud Detection",
    category: "Machine Learning / Quantum Computing",
    tools: "Python, Qiskit, Scikit-learn",
    description: "Developed a hybrid framework utilizing Qiskit for quantum feature spaces and classical classification to optimize fraud detection accuracy over large financial datasets.",
    github: "https://github.com/achuth07776", // Update with specific link
    image: "", // Awaiting upload
  },
  {
    title: "ML-Based Chemotherapy Response Prediction",
    category: "AI Healthcare",
    tools: "Python, Random Forest, Pandas, Scikit-learn",
    description: "Engineered a predictive pipeline to analyze patient clinical data, assisting doctors with personalized treatment recommendations based on historical response rates.",
    github: "https://github.com/achuth07776", // Update with specific link
    image: "", // Awaiting upload
  },
  {
    title: "Jal-Drishti-AI: Groundwater Analysis Chatbot",
    category: "AI Application / NLP",
    tools: "React, Python, OpenAI API",
    description: "Built a full-stack NLP chatbot that leverages LLMs to analyze and answer complex queries regarding groundwater levels, sustainability, and quality metrics.",
    github: "https://github.com/achuth07776", // Update with specific link
    image: "", // Awaiting upload
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-description" style={{ marginTop: '15px', color: '#adacac', fontSize: '15px', lineHeight: '1.5' }}>
                          <p>{project.description}</p>
                        </div>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-links" style={{ marginTop: '20px' }}>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', border: '1px solid #363636', padding: '10px 20px', borderRadius: '30px', fontSize: '14px', transition: '0.3s' }}>
                            <FaGithub size={18} /> View on GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                    {project.image && (
                      <div className="carousel-image-wrapper">
                        <WorkImage image={project.image} alt={project.title} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
