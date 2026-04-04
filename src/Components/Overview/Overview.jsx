import React from "react";
import "./Overview.css";

import grassImg from "../../assets/images/grass.webp";
const Overview = () => {
  return (
    <div>
      <div className="overview-section ">
        <div className="img-section">
          <img src={grassImg} alt="" />
        </div>
        <div className="overview-main side-space section-space"></div>
      </div>
    </div>
  );
};

export default Overview;
