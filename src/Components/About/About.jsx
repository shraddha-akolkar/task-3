import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section side-space" id="About">
      <div className="about-box">
        <p className="about-text">
          We at VTP Realty believe that a home is more than just four walls —
          it's where your dreams take shape, where memories are created, and
          where your future unfolds. That's why we've crafted something truly
          special for you: The Power of One.
        </p>
      </div>

      <div className="about-bottom">
        <div className="about-card">
          <p>
            As Pune's No. 1 real estate brand, thoughtfulness is at our core.
            From best-in-class designs to superior construction quality, from
            smart homes to secure gated communities – we've always prioritized
            excellence.
          </p>
        </div>

        <div className="about-card">
          <p>
            The Power of One gives you unparalleled freedom to make financial
            decisions that align perfectly with your investment plans. This is
            our way of putting you in complete control of your homeownership
            journey – a privilege exclusively reserved for VTP customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
