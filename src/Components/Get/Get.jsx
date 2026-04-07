import React from "react";
import "./Get.css";

import Person from "../../assets/svg/Person";

const steps = [
  { step: "STEP 1 – DAY 1", desc: "BOOKING WITH ₹1 + SDR*" },
  { step: "STEP 2 – DAY 2", desc: "LOAN SANCTION BY BANK*" },
  { step: "STEP 3 – DAY 3", desc: "REGISTRATION OF THE UNIT*" },
  { step: "STEP 4 – DAY 4", desc: "LOAN DISBURSEMENT*" },
];

const Get = () => {
  return (
    <div className="get-section side-space section-space" id="steps">
      <div className="get-content">
        <div className="get-title">
          <h2 className="heading">
            Get The <br />
            <span>VTP Power Of One</span>
          </h2>
        </div>

        <div className="get-actions">
          <button className="get-btn">Know More</button>
          <button className="get-icon-btn">
            <Person />
          </button>
        </div>
      </div>

      <div className="get-steps-bar">
        {steps.map((item, index) => (
          <div className="get-step-item" key={index}>
            <h3 className="get-step-title">{item.step}</h3>
            <p className="get-step-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Get;
