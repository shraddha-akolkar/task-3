import React from "react";
import "./Realty.css";
import Logo from "../../assets/svg/Logo";

const steps = [
  { step: "21000 +", desc: "HAPPY CUSTOMERS & ADDING MORE EVERY MONTH" },
  { step: "40 +", desc: "YEARS OF VTP GROUP LEGACY" },
  { step: "31 +", desc: "PROJECTS DELIVERED" },
  { step: "1.25 Cr+", desc: "SQ.FT. DELIVERED" },
  { step: "3 Cr+", desc: "SQ.FT. OF SIMULTANEOUS CONSTRUCTION" },
];

const Realty = () => {
  return (
    <div className="realty-section section-space side-space" id="about">
      <div className="realty-card">
        <div className="realty-left">
          <div className="heading-box">
            <h4 className="heading">
              About <br />
              <span>VTP Realty</span>
            </h4>
          </div>

          <p className="realty-desc">
            VTP Realty is Pune’s leading real estate development brand. The
            undisputed leaders that have not only set new benchmarks in business
            numbers with stellar delivery, but also shattered records of all
            established real estate players in a much shorter time. VTP Realty
            is a well-known skyrocketing success story despite being a single
            city developer. A brand that stands firmly on strong ethics and
            exhibits a trailblazing thought-leadership for the industry. The
            numerous awards winning brand prides itself in pioneering the MLA
            (Maximum Livable Area) Homes.
          </p>
        </div>

        <div className="realty-right">
          <Logo />
        </div>
      </div>

      <div className="bottom-bar">
        {steps.map((item, index) => (
          <div className="realty-step-item" key={index}>
            <h3 className="realty-step-title">{item.step}</h3>
            <p className="realty-step-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realty;
