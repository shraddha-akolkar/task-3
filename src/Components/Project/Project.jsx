import React from "react";
import "./Project.css";

// Assuming your images are in the public/assets folder
import projectOne from "../../assets/images/project_one.webp";
import buildingBg from "../../assets/images/project_building.webp";
import badgeImg from "../../assets/images/badge.png";

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Background Layer 1: Large "1" */}
      <img src={projectOne} alt="" className="bg-number-one" />

      {/* Background Layer 2: Building Outlines */}
      <div className="building-wrapper">
        <img src={buildingBg} alt="" className="bg-buildings" />
      </div>

      {/* Floating Badge (Top Right) */}
      <div className="explore-badge">
        <img src={badgeImg} alt="" className="badge-shape" />
        <div className="badge-text">
          <span>EXPLORE</span>
          <strong>PROJECTS</strong>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="content-wrapper">
        {/* Left Info Card */}
        <div className="info-card">
          <p className="subtitle">1 Choice, Infinite Possibilities</p>
          <h1>
            With VTP <br /> Just 1 Is Enough.
          </h1>
        </div>

        {/* Central UI Elements */}
        <div className="center-content">
          <div className="search-bar">
            <span>SELECT A PROJECT</span>
            <div className="dropdown-icon">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                />
              </svg>
            </div>
          </div>

          <div className="hero-headlines">
            <h2>Homeownership Made Easy</h2>
            <h3>Lowest Down Payment Ever!</h3>
            <div className="divider">
              <span className="star-icon">✧</span>
            </div>
            <p className="hashtag">#THEPOWEROFONE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
