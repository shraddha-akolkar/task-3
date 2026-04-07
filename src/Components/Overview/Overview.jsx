import React from "react";
import "./Overview.css";
import grassImg from "../../assets/images/grass.webp";
import star from "../../assets/images/star.png";
const Overview = () => {
  return (
    <div id="overview">
      <div className="overview-section">
        <div className="img-section">
          <img src={grassImg} alt="" />
        </div>

        <div className="overview-main">
          <div className="oval-bg"></div>

          <div className="overview-content">
            <div className="tag-pill">
              <span className="tag-bold">#THEPOWER</span>
              <span className="tag-light">OF</span>
              <span className="tag-bold">ONE</span>
            </div>

            <p className="subtitle-italic">By Pune's No.1 Real Estate Brand</p>

            <ul className="benefits-list">
              <li>
                <strong>ONE RUPEE</strong> OWN CONTRIBUTION
              </li>
              <li>
                <strong>ONE EMI</strong> OF YOUR CHOICE
              </li>
              <li>
                <strong>ONE YEAR</strong> EMI HOLIDAY
              </li>
              <li>
                <strong>ONE %</strong> DOWN PAYMENT
              </li>
              <li>
                <strong>ONE-STOP</strong> FINANCIAL SOLUTION
              </li>
            </ul>

            <div className="star-line">
              <img src={star} alt="" />
            </div>

            <p className="vtp-line">GET THE VTP ADVANTAGE</p>
            <p className="vtp-line">GET THE VTP POWER OF ONE</p>

            <div className="star-line">
              <img src={star} alt="" />
            </div>

            <p className="privilege-text">
              A PRIVILEGE RESERVED ONLY FOR VTP CUSTOMERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
